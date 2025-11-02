package com.auction.controller;

import com.auction.dto.ApiResponse;
import com.auction.dto.UserDTO;
import com.auction.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller: User
 * Xử lý các API liên quan đến User
 */
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"}, allowCredentials = "true")
public class UserController {

    private final UserService userService;

    /**
     * Lấy thông tin user theo ID
     * GET /api/users/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserDTO>> getUserById(@PathVariable Long id) {
        try {
            UserDTO user = userService.getUserDTO(id);
            return ResponseEntity.ok(ApiResponse.success("Lấy thông tin user thành công", user));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error("Không tìm thấy user: " + e.getMessage()));
        }
    }

    /**
     * Lấy thông tin user theo username
     * GET /api/users/username/{username}
     */
    @GetMapping("/username/{username}")
    public ResponseEntity<ApiResponse<UserDTO>> getUserByUsername(@PathVariable String username) {
        try {
            UserDTO user = UserDTO.fromEntity(userService.findByUsername(username));
            return ResponseEntity.ok(ApiResponse.success("Lấy thông tin user thành công", user));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(ApiResponse.error("Không tìm thấy user: " + e.getMessage()));
        }
    }
}
