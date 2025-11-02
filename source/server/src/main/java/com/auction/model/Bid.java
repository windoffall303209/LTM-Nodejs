package com.auction.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Entity: Bid
 * Đại diện cho một lần đặt giá trong đấu giá
 */
@Entity
@Table(name = "bids", indexes = {
    @Index(name = "idx_auction_bid_time", columnList = "auction_id, bid_time DESC"),
    @Index(name = "idx_user_bid_time", columnList = "user_id, bid_time DESC")
})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bid_id")
    private Long bidId;

    @NotNull(message = "Auction không được null")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "auction_id", nullable = false)
    private Auction auction;

    @NotNull(message = "User không được null")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @NotNull(message = "Số tiền đặt giá không được để trống")
    @Positive(message = "Số tiền đặt giá phải > 0")
    @Column(name = "bid_amount", nullable = false, precision = 15, scale = 2)
    private BigDecimal bidAmount;

    @CreationTimestamp
    @Column(name = "bid_time", nullable = false, updatable = false)
    private LocalDateTime bidTime;

    // Constructor helper
    public Bid(Auction auction, User user, BigDecimal bidAmount) {
        this.auction = auction;
        this.user = user;
        this.bidAmount = bidAmount;
    }
}

