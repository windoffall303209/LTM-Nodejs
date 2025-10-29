const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Bid = sequelize.define(
  "Bid",
  {
    bid_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    auction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "auctions",
        key: "auction_id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    bid_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    is_auto_bid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "bids",
    timestamps: true,
    createdAt: "bid_time",
    updatedAt: false,
  }
);

module.exports = Bid;
