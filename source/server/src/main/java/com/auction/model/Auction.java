package com.auction.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Entity: Auction
 * Đại diện cho một phiên đấu giá
 */
@Entity
@Table(name = "auctions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Auction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "auction_id")
    private Long auctionId;

    @NotBlank(message = "Tiêu đề không được để trống")
    @Column(nullable = false, length = 200)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @NotNull(message = "Giá khởi điểm không được để trống")
    @Positive(message = "Giá khởi điểm phải > 0")
    @Column(name = "starting_price", nullable = false, precision = 15, scale = 2)
    private BigDecimal startingPrice;

    @Column(name = "current_price", nullable = false, precision = 15, scale = 2)
    private BigDecimal currentPrice;

    @Column(name = "reserve_price", precision = 15, scale = 2)
    private BigDecimal reservePrice;

    @Column(name = "bid_increment", precision = 15, scale = 2)
    private BigDecimal bidIncrement = new BigDecimal("100000"); // 100k VND

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "highest_bidder_id")
    private User highestBidder;

    @NotNull(message = "Thời gian bắt đầu không được để trống")
    @Column(name = "start_time", nullable = false)
    private LocalDateTime startTime;

    @NotNull(message = "Thời gian kết thúc không được để trống")
    @Column(name = "end_time", nullable = false)
    private LocalDateTime endTime;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private AuctionStatus status = AuctionStatus.PENDING;

    @Column(name = "total_bids")
    private Integer totalBids = 0;

    @Column(name = "extend_count")
    private Integer extendCount = 0;

    @Column(name = "duration_minutes")
    private Integer durationMinutes;

    @Column(name = "last_bid_time")
    private LocalDateTime lastBidTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "created_by")
    private User createdBy;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "image_url", length = 255)
    private String imageUrl;

    // Relationships
    @OneToMany(mappedBy = "auction", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("bidTime DESC")
    private List<Bid> bids = new ArrayList<>();

    @OneToMany(mappedBy = "auction", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Watchlist> watchlists = new HashSet<>();

    // Business logic methods
    public void placeBid(Bid bid) {
        this.bids.add(bid);
        this.currentPrice = bid.getBidAmount();
        this.highestBidder = bid.getUser();
        this.totalBids++;
        this.lastBidTime = LocalDateTime.now(); // Track last bid time
    }

    public boolean isActive() {
        return status == AuctionStatus.ACTIVE;
    }

    public boolean isEnded() {
        return status == AuctionStatus.ENDED;
    }

    public boolean hasEnded() {
        return LocalDateTime.now().isAfter(endTime);
    }

    public boolean hasStarted() {
        return LocalDateTime.now().isAfter(startTime);
    }

    public long getSecondsRemaining() {
        if (hasEnded()) {
            return 0;
        }
        return java.time.Duration.between(LocalDateTime.now(), endTime).getSeconds();
    }

    public BigDecimal getMinimumBid() {
        return currentPrice.add(bidIncrement);
    }

    public boolean isValidBid(BigDecimal amount) {
        return amount.compareTo(getMinimumBid()) >= 0;
    }

    public void extendAuction(int seconds) {
        this.endTime = this.endTime.plusSeconds(seconds);
        this.extendCount++;
    }

    /**
     * Auction Status enum
     */
    public enum AuctionStatus {
        PENDING,    // Chưa bắt đầu
        ACTIVE,     // Đang diễn ra
        ENDED,      // Đã kết thúc
        CANCELLED   // Đã hủy
    }
}

