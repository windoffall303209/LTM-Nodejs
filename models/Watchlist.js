const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Watchlist = sequelize.define(
  "Watchlist",
  {
    watchlist_id: {
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
  },
  {
    tableName: "watchlist",
    timestamps: true,
    createdAt: "added_at",
    updatedAt: false,
    indexes: [
      {
        unique: true,
        fields: ["user_id", "auction_id"],
      },
    ],
  }
);

module.exports = Watchlist;
