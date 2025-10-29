const express = require("express");
const router = express.Router();
const { isAuthenticatedAPI } = require("../../middleware/auth");
const { Auction, Bid, User } = require("../../models");
const sequelize = require("../../config/database");

// Place a bid
router.post("/", isAuthenticatedAPI, async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { auction_id, amount } = req.body;
    const userId = req.user.user_id;

    // Get auction with lock
    const auction = await Auction.findByPk(auction_id, {
      lock: transaction.LOCK.UPDATE,
      transaction,
    });

    if (!auction) {
      await transaction.rollback();
      return res
        .status(404)
        .json({ success: false, message: "Không tìm thấy phiên đấu giá" });
    }

    // Validate auction is active
    if (
      auction.status !== "ACTIVE" ||
      new Date() > new Date(auction.end_time)
    ) {
      await transaction.rollback();
      return res
        .status(400)
        .json({ success: false, message: "Phiên đấu giá đã kết thúc" });
    }

    // Validate bid amount
    const minBid =
      parseFloat(auction.current_price) + parseFloat(auction.bid_increment);
    if (parseFloat(amount) < minBid) {
      await transaction.rollback();
      return res.status(400).json({
        success: false,
        message: `Giá đặt phải ít nhất ${minBid.toLocaleString("vi-VN")} VNĐ`,
      });
    }

    // Check if user is already highest bidder
    if (auction.highest_bidder_id === userId) {
      await transaction.rollback();
      return res.status(400).json({
        success: false,
        message: "Bạn đang là người đặt giá cao nhất",
      });
    }

    // Create bid
    const bid = await Bid.create(
      {
        auction_id,
        user_id: userId,
        bid_amount: amount,
        is_auto_bid: false,
      },
      { transaction }
    );

    // Update auction
    await auction.update(
      {
        current_price: amount,
        highest_bidder_id: userId,
        total_bids: auction.total_bids + 1,
      },
      { transaction }
    );

    await transaction.commit();

    // Broadcast to Socket.IO
    const io = req.app.get("io");
    io.to(`auction_${auction_id}`).emit("bid_update", {
      auctionId: auction_id,
      username: req.user.username,
      amount,
      timeLeft: auction.getTimeLeft(),
      totalBids: auction.total_bids + 1,
    });

    res.json({
      success: true,
      message: "Đặt giá thành công",
      data: { bid, auction },
    });
  } catch (error) {
    await transaction.rollback();
    console.error("Place bid error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

// Get bid history for an auction
router.get("/auction/:id", async (req, res) => {
  try {
    const bids = await Bid.findAll({
      where: { auction_id: req.params.id },
      include: [{ model: User, as: "bidder", attributes: ["username"] }],
      order: [["bid_time", "DESC"]],
      limit: 20,
    });

    res.json({ success: true, data: bids });
  } catch (error) {
    console.error("Get bids error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

// Get user's bids
router.get("/my-bids", isAuthenticatedAPI, async (req, res) => {
  try {
    const bids = await Bid.findAll({
      where: { user_id: req.user.user_id },
      include: [{ model: Auction }],
      order: [["bid_time", "DESC"]],
      limit: 50,
    });

    res.json({ success: true, data: bids });
  } catch (error) {
    console.error("Get my bids error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

module.exports = router;
