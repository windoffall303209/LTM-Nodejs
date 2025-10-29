const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AdminLog = sequelize.define(
  "AdminLog",
  {
    log_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    action: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    target_type: {
      type: DataTypes.STRING(50),
    },
    target_id: {
      type: DataTypes.INTEGER,
    },
    details: {
      type: DataTypes.TEXT,
    },
    ip_address: {
      type: DataTypes.STRING(45),
    },
  },
  {
    tableName: "admin_logs",
    timestamps: true,
    createdAt: "timestamp",
    updatedAt: false,
  }
);

module.exports = AdminLog;
