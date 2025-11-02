package com.auction.config;

import com.auction.model.Auction;
import com.auction.model.User;
import com.auction.repository.AuctionRepository;
import com.auction.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Component: Data Initializer
 * Khởi tạo dữ liệu mẫu khi ứng dụng start
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final AuctionRepository auctionRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        log.info("===== STARTING DATA INITIALIZATION =====");
        
        // Tạo admin account nếu chưa tồn tại
        if (!userRepository.existsByUsername("admin")) {
            User admin = new User();
            admin.setUsername("admin");
            admin.setEmail("admin@auction.com");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setFullName("Administrator");
            admin.setBalance(new BigDecimal("2000000000")); // 2 tỷ VND
            admin.setRole(User.Role.ADMIN);
            admin.setIsActive(true);
            
            userRepository.save(admin);
            log.info("✅ Created admin account: username=admin, password=admin123");
        } else {
            log.info("ℹ️ Admin account already exists");
        }

        // Tạo một vài user demo nếu cần
        if (!userRepository.existsByUsername("user1")) {
            User user1 = new User();
            user1.setUsername("user1");
            user1.setEmail("user1@auction.com");
            user1.setPassword(passwordEncoder.encode("123456"));
            user1.setFullName("Nguyễn Văn A");
            user1.setBalance(new BigDecimal("2000000000")); // 2 tỷ VND
            user1.setRole(User.Role.USER);
            user1.setIsActive(true);
            
            userRepository.save(user1);
            log.info("✅ Created demo user: username=user1, password=123456");
        }

        if (!userRepository.existsByUsername("user2")) {
            User user2 = new User();
            user2.setUsername("user2");
            user2.setEmail("user2@auction.com");
            user2.setPassword(passwordEncoder.encode("123456"));
            user2.setFullName("Trần Thị B");
            user2.setBalance(new BigDecimal("2000000000")); // 2 tỷ VND
            user2.setRole(User.Role.USER);
            user2.setIsActive(true);
            
            userRepository.save(user2);
            log.info("✅ Created demo user: username=user2, password=123456");
        }

        // Tạo sample auctions nếu chưa có
        if (auctionRepository.count() == 0) {
            log.info("Creating sample auctions...");

            User admin = userRepository.findByUsername("admin").orElse(null);

            if (admin != null) {
                // Auction 1: iPhone 15 Pro Max (ACTIVE)
                Auction auction1 = new Auction();
                auction1.setTitle("iPhone 15 Pro Max 256GB");
                auction1.setDescription("Điện thoại iPhone 15 Pro Max 256GB, màu Titan Tự Nhiên, fullbox nguyên seal, bảo hành Apple 12 tháng chính hãng");
                auction1.setStartingPrice(new BigDecimal("25000000"));
                auction1.setCurrentPrice(new BigDecimal("25000000"));
                auction1.setImageUrl("https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg");
                auction1.setStartTime(LocalDateTime.now().minusMinutes(10));
                auction1.setEndTime(LocalDateTime.now().plusMinutes(110));
                auction1.setDurationMinutes(120);
                auction1.setStatus(Auction.AuctionStatus.ACTIVE);
                auction1.setCreatedBy(admin);
                auctionRepository.save(auction1);
                log.info("✅ Created sample auction: iPhone 15 Pro Max");

                // Auction 2: MacBook Pro M3 (ACTIVE)
                Auction auction2 = new Auction();
                auction2.setTitle("MacBook Pro 14\" M3 Pro");
                auction2.setDescription("MacBook Pro 14 inch M3 Pro chip, 18GB RAM, 512GB SSD, màu Space Gray, bảo hành Apple 12 tháng chính hãng");
                auction2.setStartingPrice(new BigDecimal("35000000"));
                auction2.setCurrentPrice(new BigDecimal("35000000"));
                auction2.setImageUrl("https://cdn.tgdd.vn/Products/Images/44/309017/macbook-pro-14-inch-m3-pro-2023-xam-1.jpg");
                auction2.setStartTime(LocalDateTime.now().minusMinutes(30));
                auction2.setEndTime(LocalDateTime.now().plusMinutes(150));
                auction2.setDurationMinutes(180);
                auction2.setStatus(Auction.AuctionStatus.ACTIVE);
                auction2.setCreatedBy(admin);
                auctionRepository.save(auction2);
                log.info("✅ Created sample auction: MacBook Pro M3");

                // Auction 3: PlayStation 5 (ACTIVE)
                Auction auction3 = new Auction();
                auction3.setTitle("Sony PlayStation 5 Slim");
                auction3.setDescription("Máy chơi game Sony PS5 Slim Digital Edition, kèm 2 tay cầm DualSense, fullbox nguyên seal");
                auction3.setStartingPrice(new BigDecimal("10000000"));
                auction3.setCurrentPrice(new BigDecimal("10000000"));
                auction3.setImageUrl("https://cdn.tgdd.vn/Products/Images/7600/318685/ps5-slim-1.jpg");
                auction3.setStartTime(LocalDateTime.now().minusMinutes(5));
                auction3.setEndTime(LocalDateTime.now().plusMinutes(55));
                auction3.setDurationMinutes(60);
                auction3.setStatus(Auction.AuctionStatus.ACTIVE);
                auction3.setCreatedBy(admin);
                auctionRepository.save(auction3);
                log.info("✅ Created sample auction: PlayStation 5");

                // Auction 4: Apple Watch (PENDING)
                Auction auction4 = new Auction();
                auction4.setTitle("Apple Watch Series 9 GPS 45mm");
                auction4.setDescription("Apple Watch Series 9 GPS 45mm, dây cao su màu đen, fullbox nguyên seal");
                auction4.setStartingPrice(new BigDecimal("8000000"));
                auction4.setCurrentPrice(new BigDecimal("8000000"));
                auction4.setImageUrl("https://cdn.tgdd.vn/Products/Images/7077/309104/apple-watch-s9-gps-45mm-midnight-1.jpg");
                auction4.setStartTime(LocalDateTime.now().plusMinutes(30));
                auction4.setEndTime(LocalDateTime.now().plusMinutes(150));
                auction4.setDurationMinutes(120);
                auction4.setStatus(Auction.AuctionStatus.PENDING);
                auction4.setCreatedBy(admin);
                auctionRepository.save(auction4);
                log.info("✅ Created sample auction: Apple Watch Series 9");

                // Auction 5: iPad Pro (PENDING)
                Auction auction5 = new Auction();
                auction5.setTitle("iPad Pro M2 11 inch WiFi 128GB");
                auction5.setDescription("iPad Pro M2 11 inch WiFi 128GB, màu Space Gray, kèm Apple Pencil Gen 2");
                auction5.setStartingPrice(new BigDecimal("18000000"));
                auction5.setCurrentPrice(new BigDecimal("18000000"));
                auction5.setImageUrl("https://cdn.tgdd.vn/Products/Images/522/325514/ipad-pro-11-inch-m2-wifi-1.jpg");
                auction5.setStartTime(LocalDateTime.now().plusHours(1));
                auction5.setEndTime(LocalDateTime.now().plusHours(3));
                auction5.setDurationMinutes(120);
                auction5.setStatus(Auction.AuctionStatus.PENDING);
                auction5.setCreatedBy(admin);
                auctionRepository.save(auction5);
                log.info("✅ Created sample auction: iPad Pro M2");
            }
        } else {
            log.info("ℹ️ Sample auctions already exist");
        }

        log.info("===== DATA INITIALIZATION COMPLETED =====");
        log.info("");
        log.info("📝 Demo Accounts:");
        log.info("   Admin  -> username: admin  | password: admin123");
        log.info("   User 1 -> username: user1  | password: 123456");
        log.info("   User 2 -> username: user2  | password: 123456");
        log.info("");
        log.info("🔨 Sample Auctions: 5 auctions created (3 ACTIVE, 2 PENDING)");
        log.info("");
    }
}


