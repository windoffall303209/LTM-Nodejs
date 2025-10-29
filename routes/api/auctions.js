const express = require("express");
const router = express.Router();
const { isAuthenticatedAPI, isAdminAPI } = require("../../middleware/auth");
const { Auction, User, Bid } = require("../../models");
const { Op } = require("sequelize");

// Get all auctions
router.get("/", async (req, res) => {
  try {
    const { status, search, sort } = req.query;

    let where = {};
    if (status) where.status = status;
    if (search) {
      where.title = { [Op.like]: `%${search}%` };
    }

    const auctions = await Auction.findAll({
      where,
      include: [{ model: User, as: "highestBidder", attributes: ["username"] }],
      order: sort ? [[sort, "DESC"]] : [["created_at", "DESC"]],
    });

    res.json({ success: true, data: auctions });
  } catch (error) {
    console.error("Get auctions error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

// Get single auction
router.get("/:id", async (req, res) => {
  try {
    const auction = await Auction.findByPk(req.params.id, {
      include: [
        { model: User, as: "creator", attributes: ["username"] },
        { model: User, as: "highestBidder", attributes: ["username"] },
      ],
    });

    if (!auction) {
      return res
        .status(404)
        .json({ success: false, message: "Không tìm thấy" });
    }

    res.json({ success: true, data: auction });
  } catch (error) {
    console.error("Get auction error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

// Create auction (Admin only)
router.post("/", isAuthenticatedAPI, isAdminAPI, async (req, res) => {
  try {
    const { title, description, starting_price, duration, bid_increment } =
      req.body;

    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + duration * 60000); // duration in minutes

    const auction = await Auction.create({
      title,
      description,
      starting_price,
      current_price: starting_price,
      bid_increment: bid_increment || 500000,
      start_time: startTime,
      end_time: endTime,
      created_by: req.user.user_id,
      status: "ACTIVE",
    });

    // Start timer for this auction
    const io = req.app.get("io");
    const {
      startAuctionTimer,
    } = require("../../socket/handlers/auctionHandler");
    startAuctionTimer(io, auction);

    res.status(201).json({
      success: true,
      message: "Tạo phiên đấu giá thành công",
      data: auction,
    });
  } catch (error) {
    console.error("Create auction error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

// Update auction (Admin only)
router.put("/:id", isAuthenticatedAPI, isAdminAPI, async (req, res) => {
  try {
    const auction = await Auction.findByPk(req.params.id);

    if (!auction) {
      return res
        .status(404)
        .json({ success: false, message: "Không tìm thấy" });
    }

    // Only allow update if no bids yet
    if (auction.total_bids > 0) {
      return res.status(400).json({
        success: false,
        message: "Không thể sửa đấu giá đã có người đặt giá",
      });
    }

    const { title, description, starting_price } = req.body;

    await auction.update({
      title: title || auction.title,
      description: description || auction.description,
      starting_price: starting_price || auction.starting_price,
      current_price: starting_price || auction.current_price,
    });

    res.json({
      success: true,
      message: "Cập nhật thành công",
      data: auction,
    });
  } catch (error) {
    console.error("Update auction error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

// Delete auction (Admin only)
router.delete("/:id", isAuthenticatedAPI, isAdminAPI, async (req, res) => {
  try {
    const auction = await Auction.findByPk(req.params.id);

    if (!auction) {
      return res
        .status(404)
        .json({ success: false, message: "Không tìm thấy" });
    }

    // Only allow delete if no bids
    if (auction.total_bids > 0) {
      return res.status(400).json({
        success: false,
        message: "Không thể xóa đấu giá đã có người đặt giá",
      });
    }

    await auction.destroy();

    res.json({
      success: true,
      message: "Xóa thành công",
    });
  } catch (error) {
    console.error("Delete auction error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

module.exports = router;
