# 🚀 HƯỚNG DẪN CÀI ĐẶT & CHẠY PROJECT

## 📋 Yêu cầu hệ thống

- **Node.js** 18+ hoặc 20 LTS
- **MySQL** 8.0+
- **npm** hoặc **yarn**

## 🔧 Các bước cài đặt

### Bước 1: Cài đặt dependencies

```bash
npm install
```

### Bước 2: Cấu hình MySQL

1. Mở MySQL:

```bash
mysql -u root -p
```

2. Tạo database:

```sql
CREATE DATABASE auction_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. Tạo user (optional):

```sql
CREATE USER 'auction_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON auction_db.* TO 'auction_user'@'localhost';
FLUSH PRIVILEGES;
```

### Bước 3: Cấu hình file .env

Mở file `.env` và cập nhật thông tin database:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=auction_db
DB_USER=root
DB_PASSWORD=your_mysql_password

SESSION_SECRET=change-this-to-random-string
```

**⚠️ LƯU Ý:** Thay `your_mysql_password` bằng mật khẩu MySQL thực tế của bạn

### Bước 4: Khởi động server

**Development mode (với nodemon):**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

Server sẽ chạy tại: http://localhost:3000

## 📊 Tạo dữ liệu mẫu

### Tạo tài khoản Admin đầu tiên:

```sql
USE auction_db;

INSERT INTO users (username, email, password_hash, full_name, role, is_active)
VALUES (
  'admin',
  'admin@auction.com',
  '$2a$10$YourHashedPasswordHere',  -- Đăng ký qua web rồi update role
  'Administrator',
  'ADMIN',
  1
);
```

**Hoặc:**

1. Đăng ký tài khoản bình thường qua web: `/register`
2. Vào MySQL và update role:

```sql
UPDATE users SET role = 'ADMIN' WHERE username = 'your_username';
```

### Tạo auction mẫu:

```sql
INSERT INTO auctions (title, description, starting_price, current_price, start_time, end_time, created_by, status)
VALUES
(
  'iPhone 15 Pro Max 256GB',
  'iPhone mới 100%, nguyên seal, chưa active',
  20000000,
  20000000,
  NOW(),
  DATE_ADD(NOW(), INTERVAL 3 HOUR),
  1,  -- ID của user admin
  'ACTIVE'
),
(
  'MacBook Pro M3 16GB',
  'MacBook Pro chip M3, RAM 16GB, SSD 512GB',
  30000000,
  30000000,
  NOW(),
  DATE_ADD(NOW(), INTERVAL 5 HOUR),
  1,
  'ACTIVE'
);
```

## 🧪 Test các chức năng

### 1. Đăng ký & Đăng nhập

- Truy cập http://localhost:3000/register
- Tạo tài khoản mới
- Đăng nhập tại http://localhost:3000/login

### 2. Xem auctions

- Dashboard: http://localhost:3000/dashboard

### 3. Đấu giá

- Click vào một auction
- Nhập giá và đặt giá

### 4. Admin Panel

- Đăng nhập bằng tài khoản admin
- Truy cập http://localhost:3000/admin

## 🔍 Kiểm tra logs

Server logs sẽ hiển thị:

- Kết nối database
- Kết nối Socket.IO
- Các requests HTTP
- Các bids real-time

## ❗ Troubleshooting

### Lỗi kết nối database:

```
❌ Unable to connect to database
```

**Giải pháp:**

- Kiểm tra MySQL đã chạy chưa: `mysql -u root -p`
- Kiểm tra thông tin trong `.env`
- Kiểm tra user có quyền truy cập database chưa

### Lỗi port đã được sử dụng:

```
Error: listen EADDRINUSE: address already in use :::3000
```

**Giải pháp:**

- Đổi PORT trong `.env`: `PORT=3001`
- Hoặc kill process đang dùng port 3000

### Lỗi Socket.IO không kết nối:

**Giải pháp:**

- Clear browser cache
- Kiểm tra firewall
- Restart server

## 📱 Test với nhiều users

Để test real-time bidding:

1. Mở nhiều browser windows (hoặc dùng incognito mode)
2. Đăng ký nhiều tài khoản khác nhau
3. Cùng vào một auction và đấu giá
4. Quan sát real-time updates

## 🎯 Tính năng đã implement

✅ Đăng ký / Đăng nhập
✅ Xem danh sách auctions
✅ Đấu giá real-time (Socket.IO)
✅ Countdown timer
✅ Lịch sử đấu giá
✅ Profile & Statistics
✅ Admin panel
✅ Tạo/Xóa auctions (Admin)
✅ Responsive design

## 🔒 Bảo mật

- ✅ Password hashing với BCrypt
- ✅ Session-based authentication
- ✅ Input validation
- ✅ SQL injection prevention (Sequelize)
- ✅ XSS protection

## 📞 Support

Nếu gặp vấn đề, kiểm tra:

1. Console logs (browser)
2. Server logs (terminal)
3. MySQL logs
4. Network tab (DevTools)

## 🎓 Cho mục đích học tập

Project này được tạo cho môn **Lập trình mạng**.
Các điểm network programming nổi bật:

- Socket.IO (WebSocket)
- TCP/IP
- HTTP REST API
- Real-time communication
- Client-Server architecture
