package com.auction.service;

import com.auction.dto.AuctionDTO;
import com.auction.model.Auction;
import com.auction.model.User;
import com.auction.repository.AuctionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service: Auction
 * Xử lý business logic liên quan đến Auction
 */
@Service
@RequiredArgsConstructor
public class AuctionService {

    private final AuctionRepository auctionRepository;

    /**
     * Tạo auction mới (Admin) - với User
     */
    @Transactional
    public AuctionDTO createAuction(Auction auction, User createdBy) {
        auction.setCreatedBy(createdBy);
        auction.setCurrentPrice(auction.getStartingPrice());
        auction.setStatus(Auction.AuctionStatus.PENDING);
        auction.setTotalBids(0);
        auction.setExtendCount(0);

        Auction saved = auctionRepository.save(auction);
        return AuctionDTO.fromEntity(saved);
    }

    /**
     * Tạo auction mới (Admin) - không cần User
     */
    @Transactional
    public Auction createAuction(Auction auction) {
        auction.setCurrentPrice(auction.getStartingPrice());
        auction.setStatus(Auction.AuctionStatus.PENDING);
        auction.setTotalBids(0);
        auction.setExtendCount(0);
        return auctionRepository.save(auction);
    }

    /**
     * Cập nhật auction
     */
    @Transactional
    public Auction updateAuction(Auction auction) {
        return auctionRepository.save(auction);
    }

    /**
     * Xóa auction
     */
    @Transactional
    public void deleteAuction(Long auctionId) {
        Auction auction = findById(auctionId);
        if (auction.getStatus() == Auction.AuctionStatus.ACTIVE) {
            throw new RuntimeException("Không thể xóa auction đang hoạt động");
        }
        auctionRepository.delete(auction);
    }

    /**
     * Lấy auction theo ID
     */
    public Auction findById(Long auctionId) {
        return auctionRepository.findById(auctionId)
                .orElseThrow(() -> new RuntimeException("Auction không tồn tại"));
    }

    /**
     * Lấy auction theo ID (alias)
     */
    public Auction getAuctionById(Long auctionId) {
        return findById(auctionId);
    }

    /**
     * Lấy auction DTO theo ID
     */
    public AuctionDTO getAuctionDTO(Long auctionId) {
        Auction auction = findById(auctionId);
        return AuctionDTO.fromEntity(auction);
    }

    /**
     * Lấy tất cả auctions đang active
     */
    public List<AuctionDTO> getActiveAuctions() {
        List<Auction> auctions = auctionRepository.findActiveAuctions(LocalDateTime.now());
        return auctions.stream()
                .map(AuctionDTO::fromEntity)
                .collect(Collectors.toList());
    }

    /**
     * Lấy auctions ACTIVE và PENDING (cho user xem và theo dõi)
     */
    public List<AuctionDTO> getActiveAndPendingAuctions() {
        List<Auction> activeAuctions = auctionRepository.findByStatus(Auction.AuctionStatus.ACTIVE);
        List<Auction> pendingAuctions = auctionRepository.findByStatus(Auction.AuctionStatus.PENDING);
        
        // Merge two lists
        activeAuctions.addAll(pendingAuctions);
        
        return activeAuctions.stream()
                .map(AuctionDTO::fromEntity)
                .sorted((a, b) -> {
                    // ACTIVE trước, PENDING sau
                    if (a.getStatus().equals("ACTIVE") && !b.getStatus().equals("ACTIVE")) {
                        return -1;
                    }
                    if (!a.getStatus().equals("ACTIVE") && b.getStatus().equals("ACTIVE")) {
                        return 1;
                    }
                    // Cùng status thì sắp xếp theo startTime
                    return a.getStartTime().compareTo(b.getStartTime());
                })
                .collect(Collectors.toList());
    }

    /**
     * Lấy tất cả auctions
     */
    public List<AuctionDTO> getAllAuctions() {
        return auctionRepository.findAll().stream()
                .map(AuctionDTO::fromEntity)
                .collect(Collectors.toList());
    }

    /**
     * Tìm kiếm auction theo title
     */
    public List<AuctionDTO> searchAuctions(String keyword) {
        return auctionRepository.searchByTitle(keyword).stream()
                .map(AuctionDTO::fromEntity)
                .collect(Collectors.toList());
    }

    /**
     * Start auction
     */
    @Transactional
    public void startAuction(Long auctionId) {
        Auction auction = findById(auctionId);
        if (auction.getStatus() != Auction.AuctionStatus.PENDING) {
            throw new RuntimeException("Auction không thể start");
        }
        auction.setStatus(Auction.AuctionStatus.ACTIVE);
        auctionRepository.save(auction);
    }

    /**
     * End auction
     */
    @Transactional
    public void endAuction(Long auctionId) {
        Auction auction = findById(auctionId);
        if (auction.getStatus() != Auction.AuctionStatus.ACTIVE) {
            throw new RuntimeException("Auction không thể end");
        }
        auction.setStatus(Auction.AuctionStatus.ENDED);
        auctionRepository.save(auction);
    }

    /**
     * Extend auction time
     */
    @Transactional
    public void extendAuction(Long auctionId, int seconds) {
        Auction auction = findById(auctionId);
        auction.extendAuction(seconds);
        auctionRepository.save(auction);
    }

    /**
     * Cancel auction (Admin)
     */
    @Transactional
    public void cancelAuction(Long auctionId) {
        Auction auction = findById(auctionId);
        auction.setStatus(Auction.AuctionStatus.CANCELLED);
        auctionRepository.save(auction);
    }

    /**
     * Kiểm tra và kết thúc các auctions đã hết hạn
     */
    @Transactional
    public void checkAndEndExpiredAuctions() {
        List<Auction> expired = auctionRepository.findExpiredAuctions(LocalDateTime.now());
        for (Auction auction : expired) {
            auction.setStatus(Auction.AuctionStatus.ENDED);
            auctionRepository.save(auction);
        }
    }

    /**
     * Lấy auctions mà user đang dẫn đầu
     */
    public List<AuctionDTO> getAuctionsLeadingByUser(Long userId) {
        return auctionRepository.findByHighestBidder_UserId(userId).stream()
                .map(AuctionDTO::fromEntity)
                .collect(Collectors.toList());
    }
}

