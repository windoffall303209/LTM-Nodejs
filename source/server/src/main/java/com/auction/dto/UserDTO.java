package com.auction.dto;

import com.auction.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * DTO: User Data Transfer Object
 * Không trả về password
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    
    private Long userId;
    private String username;
    private String email;
    private String fullName;
    private BigDecimal balance;
    private String role;
    private Boolean isActive;
    private LocalDateTime createdAt;
    
    /**
     * Convert từ Entity sang DTO (không gửi password)
     */
    public static UserDTO fromEntity(User user) {
        UserDTO dto = new UserDTO();
        dto.setUserId(user.getUserId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setFullName(user.getFullName());
        dto.setBalance(user.getBalance());
        dto.setRole(user.getRole().toString());
        dto.setIsActive(user.getIsActive());
        dto.setCreatedAt(user.getCreatedAt());
        return dto;
    }
}

