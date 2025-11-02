package com.auction.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 * DTO: Bid Request
 * Dữ liệu gửi lên khi đặt giá
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BidRequest {
    
    @NotNull(message = "Auction ID không được null")
    private Long auctionId;
    
    @NotNull(message = "Số tiền đặt giá không được để trống")
    @Positive(message = "Số tiền đặt giá phải > 0")
    private BigDecimal bidAmount;
}

