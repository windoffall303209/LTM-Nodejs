const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Auction = sequelize.define(
  "Auction",
  {
    auction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    starting_price: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    current_price: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    reserve_price: {
      type: DataTypes.DECIMAL(15, 2),
    },
    bid_increment: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 500000,
    },
    highest_bidder_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "ENDED", "CANCELLED"),
      defaultValue: "ACTIVE",
    },
    total_bids: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    extend_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    created_by: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "user_id",
      },
    },
  },
  {
    tableName: "auctions",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

// Helper method to check if auction is active
Auction.prototype.isActive = function () {
  return this.status === "ACTIVE" && new Date() < new Date(this.end_time);
};

// Helper method to get time left
Auction.prototype.getTimeLeft = function () {
  const now = new Date();
  const end = new Date(this.end_time);
  const diff = end - now;
  return Math.max(0, Math.floor(diff / 1000)); // seconds
};

module.exports = Auction;
