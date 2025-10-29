const bidHandler = require("./handlers/bidHandler");
const auctionHandler = require("./handlers/auctionHandler");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`✅ New client connected: ${socket.id}`);

    // Join auction room
    socket.on("join_auction", (data) => {
      const { auctionId, username } = data;
      socket.join(`auction_${auctionId}`);
      console.log(`User ${username} joined auction ${auctionId}`);

      // Notify others in room
      socket.to(`auction_${auctionId}`).emit("user_joined", {
        username,
        message: `${username} đã tham gia phiên đấu giá`,
      });
    });

    // Leave auction room
    socket.on("leave_auction", (data) => {
      const { auctionId, username } = data;
      socket.leave(`auction_${auctionId}`);
      console.log(`User ${username} left auction ${auctionId}`);
    });

    // Handle bidding (simplified - actual logic in bidHandler)
    socket.on("place_bid", (data) => {
      bidHandler.handleBid(io, socket, data);
    });

    // Handle disconnect
    socket.on("disconnect", () => {
      console.log(`❌ Client disconnected: ${socket.id}`);
    });
  });

  // Start auction timers
  auctionHandler.startTimers(io);
};
