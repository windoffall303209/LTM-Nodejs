package com.auction.service;

import com.auction.dto.WatchlistDTO;
import com.auction.model.Auction;
import com.auction.model.User;
import com.auction.model.Watchlist;
import com.auction.repository.UserRepository;
import com.auction.repository.WatchlistRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Service: Watchlist
 * Xử lý logic danh sách theo dõi
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class WatchlistService {

    private final WatchlistRepository watchlistRepository;
    private final AuctionService auctionService;
    private final UserRepository userRepository;

    /**
     * Thêm auction vào watchlist
     */
    @Transactional
    public WatchlistDTO addToWatchlist(User user, Long auctionId) {
        Auction auction = auctionService.getAuctionById(auctionId);

        // Kiểm tra đã tồn tại chưa
        if (watchlistRepository.findByUserAndAuction(user, auction).isPresent()) {
            throw new RuntimeException("Đấu giá đã có trong watchlist");
        }

        Watchlist watchlist = new Watchlist();
        watchlist.setUser(user);
        watchlist.setAuction(auction);

        Watchlist saved = watchlistRepository.save(watchlist);
        log.info("Added to watchlist: user={}, auction={}", user.getUsername(), auctionId);

        return WatchlistDTO.fromEntity(saved);
    }

    /**
     * Xóa khỏi watchlist
     */
    @Transactional
    public void removeFromWatchlist(Long watchlistId, Long userId) {
        Watchlist watchlist = watchlistRepository.findById(watchlistId)
                .orElseThrow(() -> new RuntimeException("Watchlist item không tồn tại"));

        if (!watchlist.getUser().getUserId().equals(userId)) {
            throw new RuntimeException("Bạn không có quyền xóa item này");
        }

        watchlistRepository.delete(watchlist);
        log.info("Removed from watchlist: id={}, user={}", watchlistId, watchlist.getUser().getUsername());
    }

    /**
     * Xóa theo auctionId
     */
    @Transactional
    public void removeByAuctionId(Long userId, Long auctionId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User không tồn tại"));
        Auction auction = auctionService.getAuctionById(auctionId);
        
        watchlistRepository.findByUserAndAuction(user, auction)
                .ifPresent(w -> {
                    watchlistRepository.delete(w);
                    log.info("Removed from watchlist by auctionId: user={}, auction={}", 
                            user.getUsername(), auctionId);
                });
    }

    /**
     * Lấy watchlist của user
     */
    public List<WatchlistDTO> getUserWatchlist(User user) {
        return watchlistRepository.findByUserOrderByAddedAtDesc(user)
                .stream()
                .map(WatchlistDTO::fromEntity)
                .collect(Collectors.toList());
    }

    /**
     * Kiểm tra auction có trong watchlist không
     */
    public boolean isInWatchlist(User user, Long auctionId) {
        Auction auction = auctionService.getAuctionById(auctionId);
        return watchlistRepository.findByUserAndAuction(user, auction).isPresent();
    }
}


