package com.auction.dto;

import com.auction.model.Watchlist;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * DTO: Watchlist Data Transfer Object
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WatchlistDTO {

    private Long watchlistId;
    private Long userId;
    private Long auctionId; // For easier access
    private AuctionDTO auction;
    private LocalDateTime addedAt;

    /**
     * Convert từ Entity sang DTO
     */
    public static WatchlistDTO fromEntity(Watchlist watchlist) {
        WatchlistDTO dto = new WatchlistDTO();
        dto.setWatchlistId(watchlist.getWatchlistId());
        dto.setUserId(watchlist.getUser().getUserId());
        dto.setAuctionId(watchlist.getAuction().getAuctionId());
        dto.setAuction(AuctionDTO.fromEntity(watchlist.getAuction()));
        dto.setAddedAt(watchlist.getAddedAt());
        return dto;
    }
}

