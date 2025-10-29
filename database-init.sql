-- Database Initialization Script for Auction System
-- Tạo database và các bảng cần thiết

-- Tạo database
CREATE DATABASE IF NOT EXISTS auction_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE auction_db;

-- Bảng Users (sẽ được tạo tự động bởi Sequelize)
-- Nhưng script này để reference

-- Tạo một user admin mẫu
-- Lưu ý: Password cần được hash bằng bcrypt trước
-- Password mẫu: "admin123" -> hash: $2a$10$...
-- Tốt nhất là đăng ký qua web rồi update role

-- Tạo một số auction mẫu để test
INSERT INTO auctions (
  title, 
  description, 
  starting_price, 
  current_price, 
  bid_increment,
  start_time, 
  end_time, 
  status,
  created_at
) VALUES 
(
  'iPhone 15 Pro Max 256GB - Titanium Blue',
  'iPhone 15 Pro Max mới 100%, nguyên seal chưa active. Màu Titanium Blue, bộ nhớ 256GB. Bảo hành chính hãng Apple 12 tháng.',
  20000000,
  20000000,
  500000,
  NOW(),
  DATE_ADD(NOW(), INTERVAL 3 HOUR),
  'ACTIVE',
  NOW()
),
(
  'MacBook Pro 16" M3 Pro - 18GB RAM',
  'MacBook Pro 16 inch với chip M3 Pro, RAM 18GB, SSD 512GB. Màn hình Liquid Retina XDR. Như mới, sử dụng 2 tháng.',
  35000000,
  35000000,
  1000000,
  NOW(),
  DATE_ADD(NOW(), INTERVAL 5 HOUR),
  'ACTIVE',
  NOW()
),
(
  'Sony PlayStation 5 Slim + 2 Controllers',
  'PS5 Slim bản mới nhất, tặng kèm 2 tay cầm DualSense và 3 game AAA. Bảo hành 12 tháng.',
  10000000,
  10000000,
  200000,
  NOW(),
  DATE_ADD(NOW(), INTERVAL 2 HOUR),
  'ACTIVE',
  NOW()
),
(
  'iPad Pro 12.9" M2 - 256GB WiFi + Cellular',
  'iPad Pro 12.9 inch với chip M2, hỗ trợ 5G. Màn hình mini-LED tuyệt đẹp. Tặng kèm Apple Pencil gen 2.',
  25000000,
  25000000,
  500000,
  NOW(),
  DATE_ADD(NOW(), INTERVAL 4 HOUR),
  'ACTIVE',
  NOW()
),
(
  'Samsung Galaxy S24 Ultra 512GB',
  'Samsung Galaxy S24 Ultra màu Titanium Gray, bộ nhớ 512GB. Camera 200MP, S Pen tích hợp. Mới 99%.',
  22000000,
  22000000,
  500000,
  NOW(),
  DATE_ADD(NOW(), INTERVAL 6 HOUR),
  'ACTIVE',
  NOW()
);

-- Sau khi chạy script này, cần:
-- 1. Đăng ký tài khoản qua web (/register)
-- 2. Update role thành ADMIN:
--    UPDATE users SET role = 'ADMIN' WHERE username = 'your_username';
-- 3. Update created_by cho các auctions:
--    UPDATE auctions SET created_by = 1 WHERE created_by IS NULL;

-- Xem dữ liệu mẫu
SELECT * FROM auctions;

-- Tips:
-- - Để xem tất cả tables: SHOW TABLES;
-- - Để xem structure của table: DESCRIBE users;
-- - Để xem số lượng records: SELECT COUNT(*) FROM auctions;

