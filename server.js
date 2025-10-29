require("dotenv").config();
const express = require("express");
const http = require("http");
const path = require("path");
const session = require("express-session");
const passport = require("./config/passport");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sequelize = require("./config/database");
const { notFound, errorHandler } = require("./middleware/errorHandler");

// Initialize Express app
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO
const io = require("socket.io")(server);
require("./socket")(io);

// Make io accessible in controllers
app.set("io", io);

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable for development (Socket.IO needs it)
  })
);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || "auction-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    },
  })
);

// Flash messages middleware (simple implementation)
app.use((req, res, next) => {
  req.flash = function (type, message) {
    if (!req.session.flash) req.session.flash = {};
    if (!message) {
      const msg = req.session.flash[type];
      delete req.session.flash[type];
      return msg;
    }
    req.session.flash[type] = message;
  };
  next();
});

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Make user and flash available in all views
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  res.locals.success_msg = req.flash("success");
  res.locals.error_msg = req.flash("error");
  res.locals.error = req.flash("error");
  next();
});

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/api/auctions", require("./routes/api/auctions"));
app.use("/api/bids", require("./routes/api/bids"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/admin", require("./routes/api/admin"));
app.use("/", require("./routes/pages"));

// Error handlers
app.use(notFound);
app.use(errorHandler);

// Sync database and start server
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // Sync database (create tables if not exist)
    await sequelize.sync({ alter: false }); // Set to true for development
    console.log("✅ Database synced successfully");

    // Start server
    server.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
      console.log(`📊 Environment: ${process.env.NODE_ENV || "development"}`);
    });
  } catch (error) {
    console.error("❌ Error starting server:", error);
    process.exit(1);
  }
};

startServer();

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:", err);
  server.close(() => process.exit(1));
});
