package com.auction.dto;

import com.auction.model.Bid;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * DTO: Bid Data Transfer Object
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BidDTO {
    
    private Long bidId;
    private Long auctionId;
    private String auctionTitle;
    private String username;
    private String fullName;
    private BigDecimal bidAmount;
    private LocalDateTime bidTime;
    
    /**
     * Convert từ Entity sang DTO
     */
    public static BidDTO fromEntity(Bid bid) {
        BidDTO dto = new BidDTO();
        dto.setBidId(bid.getBidId());
        dto.setAuctionId(bid.getAuction().getAuctionId());
        dto.setAuctionTitle(bid.getAuction().getTitle());
        dto.setUsername(bid.getUser().getUsername());
        dto.setFullName(bid.getUser().getFullName());
        dto.setBidAmount(bid.getBidAmount());
        dto.setBidTime(bid.getBidTime());
        return dto;
    }
}

