package com.auction.repository;

import com.auction.model.Auction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Repository: Auction
 * Xử lý truy vấn database cho Auction entity
 */
@Repository
public interface AuctionRepository extends JpaRepository<Auction, Long> {
    
    /**
     * Lấy tất cả auctions đang active
     */
    List<Auction> findByStatus(Auction.AuctionStatus status);
    
    /**
     * Lấy auctions đang active và chưa hết hạn
     */
    @Query("SELECT a FROM Auction a WHERE a.status = 'ACTIVE' AND a.endTime > :now ORDER BY a.endTime ASC")
    List<Auction> findActiveAuctions(@Param("now") LocalDateTime now);
    
    /**
     * Lấy auctions sắp kết thúc (trong vòng X phút)
     */
    @Query("SELECT a FROM Auction a WHERE a.status = 'ACTIVE' AND a.endTime BETWEEN :now AND :endSoon")
    List<Auction> findAuctionsEndingSoon(@Param("now") LocalDateTime now, @Param("endSoon") LocalDateTime endSoon);
    
    /**
     * Lấy auctions đã hết hạn nhưng chưa đổi status
     */
    @Query("SELECT a FROM Auction a WHERE a.status = 'ACTIVE' AND a.endTime < :now")
    List<Auction> findExpiredAuctions(@Param("now") LocalDateTime now);
    
    /**
     * Tìm kiếm auction theo title
     */
    @Query("SELECT a FROM Auction a WHERE LOWER(a.title) LIKE LOWER(CONCAT('%', :keyword, '%')) AND a.status = 'ACTIVE'")
    List<Auction> searchByTitle(@Param("keyword") String keyword);
    
    /**
     * Lấy auctions được tạo bởi user
     */
    List<Auction> findByCreatedBy_UserId(Long userId);
    
    /**
     * Lấy auctions mà user đang dẫn đầu
     */
    List<Auction> findByHighestBidder_UserId(Long userId);
}

