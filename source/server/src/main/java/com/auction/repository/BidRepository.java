package com.auction.repository;

import com.auction.model.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Repository: Bid
 * Xử lý truy vấn database cho Bid entity
 */
@Repository
public interface BidRepository extends JpaRepository<Bid, Long> {
    
    /**
     * Lấy tất cả bids của một auction, sắp xếp theo thời gian giảm dần
     */
    List<Bid> findByAuction_AuctionIdOrderByBidTimeDesc(Long auctionId);
    
    /**
     * Lấy tất cả bids của một user
     */
    List<Bid> findByUser_UserIdOrderByBidTimeDesc(Long userId);
    
    /**
     * Lấy bid cao nhất của một auction
     */
    @Query("SELECT b FROM Bid b WHERE b.auction.auctionId = :auctionId ORDER BY b.bidAmount DESC, b.bidTime ASC")
    Optional<Bid> findHighestBidForAuction(@Param("auctionId") Long auctionId);
    
    /**
     * Đếm số lượng bids của một auction
     */
    long countByAuction_AuctionId(Long auctionId);
    
    /**
     * Đếm số lượng bids của một user
     */
    long countByUser_UserId(Long userId);
    
    /**
     * Lấy 10 bids gần nhất của một auction
     */
    @Query("SELECT b FROM Bid b WHERE b.auction.auctionId = :auctionId ORDER BY b.bidTime DESC")
    List<Bid> findTop10ByAuctionId(@Param("auctionId") Long auctionId);
    
    /**
     * Kiểm tra user đã bid vào auction này chưa
     */
    boolean existsByAuction_AuctionIdAndUser_UserId(Long auctionId, Long userId);
}

