// 404 handler
exports.notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Error handler
exports.errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  console.error("Error:", err.message);
  console.error("Stack:", err.stack);

  // For API requests
  if (req.path.startsWith("/api/")) {
    return res.status(statusCode).json({
      success: false,
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  }

  // For web pages
  res.status(statusCode).render("error", {
    message: err.message,
    error: process.env.NODE_ENV === "development" ? err : {},
  });
};
