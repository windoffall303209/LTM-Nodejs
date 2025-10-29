const { body, validationResult } = require("express-validator");

// Validation rules
exports.registerValidation = [
  body("username")
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage("Tên đăng nhập phải từ 3-50 ký tự")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage("Tên đăng nhập chỉ được chứa chữ, số và gạch dưới"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Email không hợp lệ")
    .normalizeEmail(),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Mật khẩu phải có ít nhất 6 ký tự"),

  body("confirm_password")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Mật khẩu xác nhận không khớp"),

  body("full_name")
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage("Họ tên tối đa 100 ký tự"),
];

exports.loginValidation = [
  body("username").trim().notEmpty().withMessage("Vui lòng nhập tên đăng nhập"),

  body("password").notEmpty().withMessage("Vui lòng nhập mật khẩu"),
];

exports.bidValidation = [
  body("auction_id").isInt().withMessage("ID đấu giá không hợp lệ"),

  body("amount").isFloat({ min: 0 }).withMessage("Giá đặt phải là số dương"),
];

exports.auctionValidation = [
  body("title")
    .trim()
    .isLength({ min: 3, max: 200 })
    .withMessage("Tiêu đề phải từ 3-200 ký tự"),

  body("description").optional().trim(),

  body("starting_price")
    .isFloat({ min: 0 })
    .withMessage("Giá khởi điểm phải là số dương"),

  body("duration")
    .isInt({ min: 1 })
    .withMessage("Thời gian đấu giá phải là số nguyên dương (phút)"),
];

// Check validation result
exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // For API requests
    if (req.path.startsWith("/api/")) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    // For web forms
    const errorMessages = errors.array().map((err) => err.msg);
    req.flash("error", errorMessages.join(", "));
    return res.redirect("back");
  }
  next();
};
