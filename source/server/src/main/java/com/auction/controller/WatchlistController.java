package com.auction.controller;

import com.auction.dto.ApiResponse;
import com.auction.dto.WatchlistDTO;
import com.auction.model.User;
import com.auction.service.UserService;
import com.auction.service.WatchlistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller: Watchlist
 * REST API cho danh sách theo dõi
 */
@RestController
@RequestMapping("/api/watchlist")
@RequiredArgsConstructor
public class WatchlistController {

    private final WatchlistService watchlistService;
    private final UserService userService;

    /**
     * Thêm vào watchlist
     * POST /api/watchlist
     */
    @PostMapping
    public ResponseEntity<ApiResponse<WatchlistDTO>> addToWatchlist(
            @RequestParam Long userId,
            @RequestParam Long auctionId) {
        try {
            User user = userService.findById(userId);
            WatchlistDTO watchlist = watchlistService.addToWatchlist(user, auctionId);
            return ResponseEntity.ok(ApiResponse.success("Đã thêm vào watchlist!", watchlist));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    /**
     * Lấy watchlist của user
     * GET /api/watchlist/user
     */
    @GetMapping("/user")
    public ResponseEntity<ApiResponse<List<WatchlistDTO>>> getUserWatchlist(@RequestParam Long userId) {
        try {
            User user = userService.findById(userId);
            List<WatchlistDTO> watchlist = watchlistService.getUserWatchlist(user);
            return ResponseEntity.ok(ApiResponse.success("Lấy danh sách thành công", watchlist));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    /**
     * Kiểm tra auction có trong watchlist không
     * GET /api/watchlist/check
     */
    @GetMapping("/check")
    public ResponseEntity<ApiResponse<Boolean>> checkInWatchlist(
            @RequestParam Long userId,
            @RequestParam Long auctionId) {
        try {
            User user = userService.findById(userId);
            boolean inWatchlist = watchlistService.isInWatchlist(user, auctionId);
            return ResponseEntity.ok(ApiResponse.success("Kiểm tra thành công", inWatchlist));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    /**
     * Xóa khỏi watchlist
     * DELETE /api/watchlist/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> removeFromWatchlist(
            @PathVariable Long id,
            @RequestParam Long userId) {
        try {
            watchlistService.removeFromWatchlist(id, userId);
            return ResponseEntity.ok(ApiResponse.success("Đã xóa khỏi watchlist"));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    /**
     * Xóa theo auctionId
     * DELETE /api/watchlist/auction/{auctionId}
     */
    @DeleteMapping("/auction/{auctionId}")
    public ResponseEntity<ApiResponse<Void>> removeByAuctionId(
            @PathVariable Long auctionId,
            @RequestParam Long userId) {
        try {
            watchlistService.removeByAuctionId(userId, auctionId);
            return ResponseEntity.ok(ApiResponse.success("Đã xóa khỏi watchlist"));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }
}


