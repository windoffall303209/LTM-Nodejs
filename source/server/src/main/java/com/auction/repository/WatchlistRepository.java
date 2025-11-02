package com.auction.repository;

import com.auction.model.Watchlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Repository: Watchlist
 * Xử lý truy vấn database cho Watchlist entity
 */
@Repository
public interface WatchlistRepository extends JpaRepository<Watchlist, Long> {
    
    /**
     * Lấy tất cả watchlist của user
     */
    @Query("SELECT w FROM Watchlist w JOIN FETCH w.auction WHERE w.user.userId = :userId")
    List<Watchlist> findByUser_UserId(@Param("userId") Long userId);
    
    /**
     * Lấy watchlist entry cụ thể
     */
    Optional<Watchlist> findByUser_UserIdAndAuction_AuctionId(Long userId, Long auctionId);
    
    /**
     * Kiểm tra user đã theo dõi auction này chưa
     */
    boolean existsByUser_UserIdAndAuction_AuctionId(Long userId, Long auctionId);
    
    /**
     * Xóa watchlist entry
     */
    void deleteByUser_UserIdAndAuction_AuctionId(Long userId, Long auctionId);
    
    /**
     * Đếm số người theo dõi auction
     */
    long countByAuction_AuctionId(Long auctionId);

    // Additional methods for WatchlistService
    Optional<Watchlist> findByUserAndAuction(com.auction.model.User user, com.auction.model.Auction auction);
    
    @Query("SELECT w FROM Watchlist w JOIN FETCH w.auction WHERE w.user = :user ORDER BY w.addedAt DESC")
    List<Watchlist> findByUserOrderByAddedAtDesc(@Param("user") com.auction.model.User user);
}

