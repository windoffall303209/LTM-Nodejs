package com.auction.controller;

import com.auction.dto.ApiResponse;
import com.auction.dto.AuctionDTO;
import com.auction.service.AuctionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller: Auction
 * REST API cho quản lý auctions
 */
@RestController
@RequestMapping("/api/auctions")
@RequiredArgsConstructor
public class AuctionController {

    private final AuctionService auctionService;

    /**
     * Lấy tất cả auctions (bao gồm active, pending và ended)
     * GET /api/auctions
     */
    @GetMapping
    public ResponseEntity<ApiResponse<List<AuctionDTO>>> getAllAuctions() {
        try {
            List<AuctionDTO> auctions = auctionService.getAllAuctions();
            return ResponseEntity.ok(ApiResponse.success("Lấy danh sách thành công", auctions));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    /**
     * Lấy chỉ các auctions đang ACTIVE (cho trang chủ)
     * GET /api/auctions/active
     */
    @GetMapping("/active")
    public ResponseEntity<ApiResponse<List<AuctionDTO>>> getActiveAuctions() {
        try {
            List<AuctionDTO> auctions = auctionService.getActiveAuctions();
            return ResponseEntity.ok(ApiResponse.success("Lấy danh sách thành công", auctions));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    /**
     * Lấy chi tiết auction
     * GET /api/auctions/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<AuctionDTO>> getAuctionById(@PathVariable Long id) {
        try {
            AuctionDTO auction = auctionService.getAuctionDTO(id);
            return ResponseEntity.ok(ApiResponse.success("Lấy thông tin thành công", auction));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    /**
     * Tìm kiếm auctions
     * GET /api/auctions/search?keyword=...
     */
    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<AuctionDTO>>> searchAuctions(
            @RequestParam String keyword) {
        try {
            List<AuctionDTO> auctions = auctionService.searchAuctions(keyword);
            return ResponseEntity.ok(ApiResponse.success("Tìm kiếm thành công", auctions));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    /**
     * Start auction (Admin)
     * POST /api/auctions/{id}/start
     */
    @PostMapping("/{id}/start")
    public ResponseEntity<ApiResponse<Void>> startAuction(@PathVariable Long id) {
        try {
            auctionService.startAuction(id);
            return ResponseEntity.ok(ApiResponse.success("Đã bắt đầu auction"));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }

    /**
     * End auction (Admin)
     * POST /api/auctions/{id}/end
     */
    @PostMapping("/{id}/end")
    public ResponseEntity<ApiResponse<Void>> endAuction(@PathVariable Long id) {
        try {
            auctionService.endAuction(id);
            return ResponseEntity.ok(ApiResponse.success("Đã kết thúc auction"));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error(e.getMessage()));
        }
    }
}

