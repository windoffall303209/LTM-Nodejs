package com.auction.service;

import com.auction.dto.LoginRequest;
import com.auction.dto.RegisterRequest;
import com.auction.dto.UserDTO;
import com.auction.model.User;
import com.auction.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service: User
 * Xử lý business logic liên quan đến User
 */
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    /**
     * Đăng ký user mới
     */
    @Transactional
    public UserDTO register(RegisterRequest request) {
        // Kiểm tra username đã tồn tại
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username đã tồn tại");
        }

        // Kiểm tra email đã tồn tại
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email đã tồn tại");
        }

        // Kiểm tra password match
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            throw new RuntimeException("Password không khớp");
        }

        // Tạo user mới
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setFullName(request.getFullName());
        user.setBalance(new BigDecimal("2000000000")); // 2 tỷ VND ban đầu
        user.setRole(User.Role.USER);
        user.setIsActive(true);

        User savedUser = userRepository.save(user);
        return UserDTO.fromEntity(savedUser);
    }

    /**
     * Đăng nhập
     */
    public UserDTO login(LoginRequest request) {
        // Tìm user theo username
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new BadCredentialsException("Username hoặc password không đúng"));

        // Kiểm tra password
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("Username hoặc password không đúng");
        }

        // Kiểm tra tài khoản có active không
        if (!user.getIsActive()) {
            throw new BadCredentialsException("Tài khoản đã bị khóa");
        }

        return UserDTO.fromEntity(user);
    }

    /**
     * Tìm user theo username
     */
    public User findByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User không tồn tại"));
    }

    /**
     * Tìm user theo ID
     */
    public User findById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User không tồn tại"));
    }

    /**
     * Lấy thông tin user DTO
     */
    public UserDTO getUserDTO(Long userId) {
        User user = findById(userId);
        return UserDTO.fromEntity(user);
    }

    /**
     * Lấy tất cả users
     */
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(UserDTO::fromEntity)
                .collect(Collectors.toList());
    }

    /**
     * Cập nhật balance
     */
    @Transactional
    public void updateBalance(Long userId, BigDecimal amount) {
        User user = findById(userId);
        user.addBalance(amount);
        userRepository.save(user);
    }

    /**
     * Kiểm tra user có đủ tiền không
     */
    public boolean hasEnoughBalance(Long userId, BigDecimal amount) {
        User user = findById(userId);
        return user.hasEnoughBalance(amount);
    }

    /**
     * Ban/Unban user (Admin)
     */
    @Transactional
    public void toggleUserStatus(Long userId) {
        User user = findById(userId);
        user.setIsActive(!user.getIsActive());
        userRepository.save(user);
    }
}

