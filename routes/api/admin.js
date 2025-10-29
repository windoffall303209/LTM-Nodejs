const express = require("express");
const router = express.Router();
const { isAuthenticatedAPI, isAdminAPI } = require("../../middleware/auth");
const { User, Auction, Bid, AdminLog } = require("../../models");

// All routes require admin authentication
router.use(isAuthenticatedAPI, isAdminAPI);

// Get dashboard stats
router.get("/dashboard", async (req, res) => {
  try {
    const stats = {
      totalUsers: await User.count(),
      totalAuctions: await Auction.count(),
      activeAuctions: await Auction.count({ where: { status: "ACTIVE" } }),
      endedAuctions: await Auction.count({ where: { status: "ENDED" } }),
      totalBids: await Bid.count(),
      todayBids: await Bid.count({
        where: {
          bid_time: {
            $gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
    };

    res.json({ success: true, data: stats });
  } catch (error) {
    console.error("Admin dashboard error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password_hash"] },
      order: [["created_at", "DESC"]],
    });

    res.json({ success: true, data: users });
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

// Ban/Unban user
router.put("/users/:id/status", async (req, res) => {
  try {
    const { is_active } = req.body;

    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Không tìm thấy người dùng" });
    }

    // Can't ban yourself
    if (user.user_id === req.user.user_id) {
      return res.status(400).json({
        success: false,
        message: "Không thể khóa tài khoản của chính mình",
      });
    }

    await user.update({ is_active });

    // Log action
    await AdminLog.create({
      admin_id: req.user.user_id,
      action: is_active ? "UNBAN_USER" : "BAN_USER",
      target_type: "User",
      target_id: user.user_id,
      details: `User ${user.username} ${is_active ? "unbanned" : "banned"}`,
      ip_address: req.ip,
    });

    res.json({
      success: true,
      message: `${is_active ? "Mở khóa" : "Khóa"} tài khoản thành công`,
    });
  } catch (error) {
    console.error("Update user status error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

// Get admin logs
router.get("/logs", async (req, res) => {
  try {
    const logs = await AdminLog.findAll({
      include: [{ model: User, as: "admin", attributes: ["username"] }],
      order: [["timestamp", "DESC"]],
      limit: 100,
    });

    res.json({ success: true, data: logs });
  } catch (error) {
    console.error("Get logs error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

module.exports = router;
