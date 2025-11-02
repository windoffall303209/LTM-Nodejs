package com.auction.controller;

import com.auction.dto.ApiResponse;
import com.auction.dto.BidDTO;
import com.auction.dto.BidRequest;
import com.auction.model.User;
import com.auction.service.BidService;
import com.auction.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller: Bid
 * REST API cho đặt giá và quản lý bids
 */
@RestController
@RequestMapping("/api/bids")
@RequiredArgsConstructor
public class BidController {

    private final BidService bidService;
    private final UserService userService;

    /**
     * Đặt giá
     * POST /api/bids
     */
    @PostMapping
    public ResponseEntity<ApiResponse<BidDTO>> placeBid(
            @Valid @RequestBody BidRequest request,
            @RequestParam Long userId) {
        try {
            User user = userService.findById(userId);
            BidDTO bid = bidService.placeBid(user, request.getAuctionId(), request.getBidAmount());
            return ResponseEntity.ok(ApiResponse.success("Đặt giá thành công!", bid));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    /**
     * Lấy lịch sử bids của auction
     * GET /api/bids/auction/{auctionId}
     */
    @GetMapping("/auction/{auctionId}")
    public ResponseEntity<ApiResponse<List<BidDTO>>> getAuctionBids(
            @PathVariable Long auctionId) {
        try {
            List<BidDTO> bids = bidService.getBidHistory(auctionId);
            return ResponseEntity.ok(ApiResponse.success("Lấy lịch sử thành công", bids));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    /**
     * Lấy bids của user
     * GET /api/bids/user
     */
    @GetMapping("/user")
    public ResponseEntity<ApiResponse<List<BidDTO>>> getUserBids(
            @RequestParam Long userId) {
        try {
            List<BidDTO> bids = bidService.getUserBids(userId);
            return ResponseEntity.ok(ApiResponse.success("Lấy danh sách thành công", bids));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    /**
     * Lấy bid cao nhất của auction
     * GET /api/bids/highest/{auctionId}
     */
    @GetMapping("/highest/{auctionId}")
    public ResponseEntity<ApiResponse<BidDTO>> getHighestBid(
            @PathVariable Long auctionId) {
        try {
            BidDTO bid = bidService.getHighestBid(auctionId);
            return ResponseEntity.ok(ApiResponse.success("Lấy thông tin thành công", bid));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }
}

