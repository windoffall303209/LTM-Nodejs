const User = require("./User");
const Auction = require("./Auction");
const Bid = require("./Bid");
const AutoBid = require("./AutoBid");
const Watchlist = require("./Watchlist");
const AdminLog = require("./AdminLog");

// User - Auction relationships
User.hasMany(Auction, { foreignKey: "created_by", as: "createdAuctions" });
Auction.belongsTo(User, { foreignKey: "created_by", as: "creator" });

User.hasMany(Auction, {
  foreignKey: "highest_bidder_id",
  as: "winningAuctions",
});
Auction.belongsTo(User, {
  foreignKey: "highest_bidder_id",
  as: "highestBidder",
});

// User - Bid relationships
User.hasMany(Bid, { foreignKey: "user_id" });
Bid.belongsTo(User, { foreignKey: "user_id", as: "bidder" });

// Auction - Bid relationships
Auction.hasMany(Bid, { foreignKey: "auction_id" });
Bid.belongsTo(Auction, { foreignKey: "auction_id" });

// User - AutoBid relationships
User.hasMany(AutoBid, { foreignKey: "user_id" });
AutoBid.belongsTo(User, { foreignKey: "user_id" });

// Auction - AutoBid relationships
Auction.hasMany(AutoBid, { foreignKey: "auction_id" });
AutoBid.belongsTo(Auction, { foreignKey: "auction_id" });

// User - Watchlist relationships
User.hasMany(Watchlist, { foreignKey: "user_id" });
Watchlist.belongsTo(User, { foreignKey: "user_id" });

// Auction - Watchlist relationships
Auction.hasMany(Watchlist, { foreignKey: "auction_id" });
Watchlist.belongsTo(Auction, { foreignKey: "auction_id" });

// User - AdminLog relationships
User.hasMany(AdminLog, { foreignKey: "admin_id" });
AdminLog.belongsTo(User, { foreignKey: "admin_id", as: "admin" });

module.exports = {
  User,
  Auction,
  Bid,
  AutoBid,
  Watchlist,
  AdminLog,
};
