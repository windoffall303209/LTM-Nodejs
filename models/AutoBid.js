const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AutoBid = sequelize.define(
  "AutoBid",
  {
    auto_bid_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    auction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "auctions",
        key: "auction_id",
      },
    },
    max_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "auto_bids",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

module.exports = AutoBid;
