// Check if user is authenticated
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "Vui lòng đăng nhập để tiếp tục");
  res.redirect("/login");
};

// Check if user is admin
exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "ADMIN") {
    return next();
  }
  res.status(403).render("error", {
    message: "Forbidden: Bạn không có quyền truy cập",
    error: { status: 403 },
  });
};

// For API routes - return JSON
exports.isAuthenticatedAPI = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({
    success: false,
    message: "Chưa đăng nhập",
  });
};

exports.isAdminAPI = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "ADMIN") {
    return next();
  }
  res.status(403).json({
    success: false,
    message: "Cần quyền admin",
  });
};

// Check if not authenticated (for login/register pages)
exports.isNotAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/dashboard");
};
