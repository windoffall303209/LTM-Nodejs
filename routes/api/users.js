const express = require("express");
const router = express.Router();
const { isAuthenticatedAPI } = require("../../middleware/auth");
const { User, Auction, Bid } = require("../../models");
const bcrypt = require("bcryptjs");

// Get current user profile
router.get("/profile", isAuthenticatedAPI, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.user_id, {
      attributes: { exclude: ["password_hash"] },
    });

    const stats = {
      totalBids: await Bid.count({ where: { user_id: req.user.user_id } }),
      wonAuctions: await Auction.count({
        where: {
          highest_bidder_id: req.user.user_id,
          status: "ENDED",
        },
      }),
    };

    res.json({ success: true, data: { user, stats } });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

// Update profile
router.put("/profile", isAuthenticatedAPI, async (req, res) => {
  try {
    const { full_name, email } = req.body;

    const user = await User.findByPk(req.user.user_id);

    // Check if email already exists (for another user)
    if (email && email !== user.email) {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "Email đã được sử dụng",
        });
      }
    }

    await user.update({
      full_name: full_name || user.full_name,
      email: email || user.email,
    });

    res.json({
      success: true,
      message: "Cập nhật thành công",
      data: user,
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

// Change password
router.put("/password", isAuthenticatedAPI, async (req, res) => {
  try {
    const { current_password, new_password } = req.body;

    if (!current_password || !new_password) {
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập đầy đủ thông tin",
      });
    }

    if (new_password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Mật khẩu mới phải có ít nhất 6 ký tự",
      });
    }

    const user = await User.findByPk(req.user.user_id);

    // Verify current password
    const isValid = await user.validPassword(current_password);
    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: "Mật khẩu hiện tại không đúng",
      });
    }

    // Update password
    const hashedPassword = await bcrypt.hash(new_password, 10);
    await user.update({ password_hash: hashedPassword });

    res.json({
      success: true,
      message: "Đổi mật khẩu thành công",
    });
  } catch (error) {
    console.error("Change password error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

// Get user stats
router.get("/stats", isAuthenticatedAPI, async (req, res) => {
  try {
    const stats = {
      totalBids: await Bid.count({ where: { user_id: req.user.user_id } }),
      wonAuctions: await Auction.count({
        where: {
          highest_bidder_id: req.user.user_id,
          status: "ENDED",
        },
      }),
      activeAuctions: await Auction.count({
        where: {
          highest_bidder_id: req.user.user_id,
          status: "ACTIVE",
        },
      }),
    };

    res.json({ success: true, data: stats });
  } catch (error) {
    console.error("Get stats error:", error);
    res.status(500).json({ success: false, message: "Lỗi server" });
  }
});

module.exports = router;
