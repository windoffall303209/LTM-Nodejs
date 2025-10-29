# 🏆 Online Auction System

Hệ thống đấu giá trực tuyến sử dụng Node.js + Express + MySQL + Socket.IO

## 📋 Yêu cầu

- Node.js 18+
- MySQL 8.0+
- npm hoặc yarn

## 🚀 Cài đặt

1. Clone repository
2. Cài đặt dependencies:

```bash
npm install
```

3. Tạo database MySQL:

```sql
CREATE DATABASE auction_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

4. Cấu hình file `.env` (copy từ `.env.example`)

5. Chạy server:

```bash
npm run dev
```

6. Mở trình duyệt: http://localhost:3000

## 📁 Cấu trúc project

```
auction-system/
├── config/          # Cấu hình database, passport, socket
├── models/          # Sequelize models
├── routes/          # Express routes
├── controllers/     # Business logic
├── services/        # Service layer
├── middleware/      # Custom middleware
├── socket/          # Socket.IO handlers
├── views/           # EJS templates
├── public/          # Static files (CSS, JS, images)
└── server.js        # Entry point
```

## 🎯 Tính năng chính

- ✅ Đăng ký/Đăng nhập
- ✅ Xem danh sách đấu giá
- ✅ Đặt giá real-time
- ✅ Countdown timer
- ✅ Auto-bidding
- ✅ Watchlist
- ✅ Admin panel

## 📦 Công nghệ sử dụng

- **Backend:** Node.js, Express.js
- **Database:** MySQL, Sequelize ORM
- **Real-time:** Socket.IO
- **Template:** EJS
- **Frontend:** Bootstrap 5, JavaScript
- **Authentication:** Passport.js
