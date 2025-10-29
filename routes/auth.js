const express = require("express");
const router = express.Router();
const passport = require("passport");
const { User } = require("../models");
const { Op } = require("sequelize");
const {
  registerValidation,
  loginValidation,
  validate,
} = require("../middleware/validation");
const { isNotAuthenticated } = require("../middleware/auth");

// Register - POST
router.post(
  "/register",
  isNotAuthenticated,
  registerValidation,
  validate,
  async (req, res) => {
    try {
      const { username, email, password, full_name } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({
        where: {
          [Op.or]: [{ username }, { email }],
        },
      });

      if (existingUser) {
        req.flash("error", "Tên đăng nhập hoặc email đã tồn tại");
        return res.redirect("/register");
      }

      // Create new user
      const newUser = await User.create({
        username,
        email,
        password_hash: password, // Will be hashed by model hook
        full_name: full_name || username,
      });

      req.flash("success", "Đăng ký thành công! Vui lòng đăng nhập");
      res.redirect("/login");
    } catch (error) {
      console.error("Register error:", error);
      req.flash("error", "Đã xảy ra lỗi khi đăng ký");
      res.redirect("/register");
    }
  }
);

// Login - POST
router.post(
  "/login",
  isNotAuthenticated,
  loginValidation,
  validate,
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// Logout - GET
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error("Logout error:", err);
    }
    req.flash("success", "Đăng xuất thành công");
    res.redirect("/");
  });
});

module.exports = router;
