package com.auction.service;

import com.auction.model.Auction;
import com.auction.repository.AuctionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Service: Auction Scheduler
 * Tự động quản lý vòng đời của auctions:
 * 1. Tự động start auctions khi đến giờ
 * 2. Tự động end auctions khi hết giờ
 * 3. Tự động end sớm nếu không có bid trong 20 phút
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class AuctionSchedulerService {

    private final AuctionRepository auctionRepository;
    private final SimpMessagingTemplate messagingTemplate;

    private static final int AUTO_END_MINUTES = 20; // Tự động kết thúc sau 20 phút không có bid

    /**
     * Chạy mỗi 30 giây để check auctions
     */
    @Scheduled(fixedRate = 30000) // 30 seconds
    @Transactional
    public void checkAuctions() {
        LocalDateTime now = LocalDateTime.now();

        // 1. Tự động start auctions đã đến giờ
        List<Auction> pendingAuctions = auctionRepository.findByStatus(Auction.AuctionStatus.PENDING);
        for (Auction auction : pendingAuctions) {
            if (auction.getStartTime() != null && now.isAfter(auction.getStartTime())) {
                startAuction(auction);
            }
        }

        // 2. Tự động end auctions đã hết giờ
        List<Auction> activeAuctions = auctionRepository.findByStatus(Auction.AuctionStatus.ACTIVE);
        for (Auction auction : activeAuctions) {
            boolean shouldEnd = false;
            String endReason = "";

            // Check nếu đã hết thời gian
            if (now.isAfter(auction.getEndTime())) {
                shouldEnd = true;
                endReason = "Đã hết thời gian đấu giá";
            }
            // Check nếu không có bid trong 20 phút (chỉ khi có ít nhất 1 bid)
            else if (auction.getLastBidTime() != null) {
                LocalDateTime autoEndTime = auction.getLastBidTime().plusMinutes(AUTO_END_MINUTES);
                if (now.isAfter(autoEndTime)) {
                    shouldEnd = true;
                    endReason = "Không có người tăng giá trong " + AUTO_END_MINUTES + " phút";
                }
            }

            if (shouldEnd) {
                endAuction(auction, endReason);
            }
        }
    }

    /**
     * Bắt đầu auction
     */
    private void startAuction(Auction auction) {
        log.info("🚀 Auto-starting auction #{}: {}", auction.getAuctionId(), auction.getTitle());
        
        auction.setStatus(Auction.AuctionStatus.ACTIVE);
        auctionRepository.save(auction);

        // Broadcast thông báo
        broadcastAuctionStarted(auction);
    }

    /**
     * Kết thúc auction
     */
    private void endAuction(Auction auction, String reason) {
        log.info("🏁 Auto-ending auction #{}: {} - Reason: {}", 
                auction.getAuctionId(), auction.getTitle(), reason);
        
        auction.setStatus(Auction.AuctionStatus.ENDED);
        auctionRepository.save(auction);

        // Broadcast thông báo
        broadcastAuctionEnded(auction, reason);
    }

    /**
     * Broadcast auction started
     */
    private void broadcastAuctionStarted(Auction auction) {
        Map<String, Object> message = new HashMap<>();
        message.put("type", "AUCTION_STARTED");
        message.put("auctionId", auction.getAuctionId());
        message.put("title", auction.getTitle());

        messagingTemplate.convertAndSend("/topic/auction/" + auction.getAuctionId(), message);
        messagingTemplate.convertAndSend("/topic/auctions", message);
    }

    /**
     * Broadcast auction ended
     */
    private void broadcastAuctionEnded(Auction auction, String reason) {
        Map<String, Object> message = new HashMap<>();
        message.put("type", "AUCTION_ENDED");
        message.put("auctionId", auction.getAuctionId());
        message.put("title", auction.getTitle());
        message.put("reason", reason);
        message.put("winner", auction.getHighestBidder() != null ? 
                auction.getHighestBidder().getUsername() : null);
        message.put("finalPrice", auction.getCurrentPrice());

        messagingTemplate.convertAndSend("/topic/auction/" + auction.getAuctionId(), message);
        messagingTemplate.convertAndSend("/topic/auctions", message);
    }
}

