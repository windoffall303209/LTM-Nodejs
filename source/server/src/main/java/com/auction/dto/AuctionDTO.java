package com.auction.dto;

import com.auction.model.Auction;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * DTO: Auction Data Transfer Object
 * Chuyển đổi Entity Auction sang format gửi cho client
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuctionDTO {

    private Long auctionId;
    private String title;
    private String description;
    private BigDecimal startingPrice;
    private BigDecimal currentPrice;
    private BigDecimal minimumBid;
    private BigDecimal bidIncrement;
    private String highestBidder;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String status;
    private Integer totalBids;
    private Long secondsRemaining;
    private String imageUrl;
    private Integer extendCount;
    private String sellerName; // Người bán
    private Integer durationMinutes; // Thời lượng

    /**
     * Alias for auctionId - for frontend compatibility
     */
    public Long getId() {
        return this.auctionId;
    }

    public void setId(Long id) {
        this.auctionId = id;
    }

    /**
     * Alias for startingPrice - for frontend compatibility
     */
    public BigDecimal getStartPrice() {
        return this.startingPrice;
    }

    public void setStartPrice(BigDecimal startPrice) {
        this.startingPrice = startPrice;
    }

    /**
     * Convert từ Entity sang DTO
     */
    public static AuctionDTO fromEntity(Auction auction) {
        AuctionDTO dto = new AuctionDTO();
        dto.setAuctionId(auction.getAuctionId());
        dto.setTitle(auction.getTitle());
        dto.setDescription(auction.getDescription());
        dto.setStartingPrice(auction.getStartingPrice());
        dto.setCurrentPrice(auction.getCurrentPrice());
        dto.setMinimumBid(auction.getMinimumBid());
        dto.setBidIncrement(auction.getBidIncrement());
        dto.setHighestBidder(auction.getHighestBidder() != null ? 
            auction.getHighestBidder().getUsername() : "Chưa có");
        dto.setStartTime(auction.getStartTime());
        dto.setEndTime(auction.getEndTime());
        dto.setStatus(auction.getStatus().toString());
        dto.setTotalBids(auction.getTotalBids());
        dto.setSecondsRemaining(auction.getSecondsRemaining());
        dto.setImageUrl(auction.getImageUrl());
        dto.setExtendCount(auction.getExtendCount());
        dto.setDurationMinutes(auction.getDurationMinutes());

        // Set seller name
        if (auction.getCreatedBy() != null) {
            dto.setSellerName(auction.getCreatedBy().getUsername());
        }

        return dto;
    }
}

