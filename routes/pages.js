const express = require("express");
const router = express.Router();
const {
  isAuthenticated,
  isNotAuthenticated,
  isAdmin,
} = require("../middleware/auth");
const { Auction, Bid, User } = require("../models");
const { Op } = require("sequelize");

// Home page
router.get("/", async (req, res) => {
  try {
    const activeAuctions = await Auction.findAll({
      where: {
        status: "ACTIVE",
        end_time: { [Op.gt]: new Date() },
      },
      include: [{ model: User, as: "highestBidder", attributes: ["username"] }],
      limit: 6,
      order: [["created_at", "DESC"]],
    });

    res.render("index", { auctions: activeAuctions });
  } catch (error) {
    console.error("Home page error:", error);
    res.render("index", { auctions: [] });
  }
});

// Login page
router.get("/login", isNotAuthenticated, (req, res) => {
  res.render("login");
});

// Register page
router.get("/register", isNotAuthenticated, (req, res) => {
  res.render("register");
});

// Dashboard
router.get("/dashboard", isAuthenticated, async (req, res) => {
  try {
    const activeAuctions = await Auction.findAll({
      where: {
        status: "ACTIVE",
        end_time: { [Op.gt]: new Date() },
      },
      include: [{ model: User, as: "highestBidder", attributes: ["username"] }],
      order: [["end_time", "ASC"]],
    });

    res.render("dashboard", { auctions: activeAuctions });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.render("dashboard", { auctions: [] });
  }
});

// Auction detail page
router.get("/auction/:id", isAuthenticated, async (req, res) => {
  try {
    const auction = await Auction.findByPk(req.params.id, {
      include: [
        { model: User, as: "creator", attributes: ["username"] },
        { model: User, as: "highestBidder", attributes: ["username"] },
        {
          model: Bid,
          include: [{ model: User, as: "bidder", attributes: ["username"] }],
          order: [["bid_time", "DESC"]],
          limit: 10,
        },
      ],
    });

    if (!auction) {
      req.flash("error", "Không tìm thấy phiên đấu giá");
      return res.redirect("/dashboard");
    }

    res.render("auction-detail", { auction });
  } catch (error) {
    console.error("Auction detail error:", error);
    req.flash("error", "Đã xảy ra lỗi");
    res.redirect("/dashboard");
  }
});

// My bids page
router.get("/my-bids", isAuthenticated, async (req, res) => {
  try {
    const userBids = await Bid.findAll({
      where: { user_id: req.user.user_id },
      include: [
        {
          model: Auction,
          include: [
            { model: User, as: "highestBidder", attributes: ["username"] },
          ],
        },
      ],
      order: [["bid_time", "DESC"]],
      limit: 50,
    });

    res.render("my-bids", { bids: userBids });
  } catch (error) {
    console.error("My bids error:", error);
    res.render("my-bids", { bids: [] });
  }
});

// Profile page
router.get("/profile", isAuthenticated, async (req, res) => {
  try {
    const stats = {
      totalBids: await Bid.count({ where: { user_id: req.user.user_id } }),
      wonAuctions: await Auction.count({
        where: {
          highest_bidder_id: req.user.user_id,
          status: "ENDED",
        },
      }),
    };

    res.render("profile", { stats });
  } catch (error) {
    console.error("Profile error:", error);
    res.render("profile", { stats: { totalBids: 0, wonAuctions: 0 } });
  }
});

// Admin dashboard
router.get("/admin", isAuthenticated, isAdmin, async (req, res) => {
  try {
    const stats = {
      totalUsers: await User.count(),
      totalAuctions: await Auction.count(),
      activeAuctions: await Auction.count({ where: { status: "ACTIVE" } }),
      totalBids: await Bid.count(),
    };

    res.render("admin/dashboard", { stats });
  } catch (error) {
    console.error("Admin dashboard error:", error);
    res.render("admin/dashboard", { stats: {} });
  }
});

// Admin manage auctions
router.get("/admin/auctions", isAuthenticated, isAdmin, async (req, res) => {
  try {
    const auctions = await Auction.findAll({
      include: [
        { model: User, as: "creator", attributes: ["username"] },
        { model: User, as: "highestBidder", attributes: ["username"] },
      ],
      order: [["created_at", "DESC"]],
    });

    res.render("admin/manage-auctions", { auctions });
  } catch (error) {
    console.error("Admin auctions error:", error);
    res.render("admin/manage-auctions", { auctions: [] });
  }
});

module.exports = router;
