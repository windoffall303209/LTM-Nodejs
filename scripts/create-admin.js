// Script to create admin user
require("dotenv").config();
const bcrypt = require("bcryptjs");
const { User } = require("../models");
const sequelize = require("../config/database");

async function createAdmin() {
  try {
    // Connect to database
    await sequelize.authenticate();
    console.log("✅ Connected to database");

    // Check if admin already exists
    const existingAdmin = await User.findOne({
      where: { username: "admin" },
    });

    if (existingAdmin) {
      console.log("⚠️  Admin user already exists!");
      console.log("Username:", existingAdmin.username);
      console.log("Email:", existingAdmin.email);
      process.exit(0);
    }

    // Create admin user
    // Note: password_hash will be hashed by User model's beforeCreate hook
    const admin = await User.create({
      username: "admin",
      email: "admin@auction.com",
      password_hash: "admin123", // Will be hashed by model hook
      full_name: "Administrator",
      role: "ADMIN",
      is_active: true,
    });

    console.log("✅ Admin user created successfully!");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("👤 Username: admin");
    console.log("📧 Email: admin@auction.com");
    console.log("🔑 Password: admin123");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("⚠️  IMPORTANT: Change password after first login!");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
    process.exit(1);
  }
}

createAdmin();
