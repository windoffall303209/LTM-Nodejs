const { Auction } = require("../../models");

// Store active timers
const activeTimers = new Map();

// Start countdown timers for all active auctions
exports.startTimers = async (io) => {
  try {
    // Find all active auctions
    const activeAuctions = await Auction.findAll({
      where: { status: "ACTIVE" },
    });

    activeAuctions.forEach((auction) => {
      startAuctionTimer(io, auction);
    });

    console.log(
      `✅ Started timers for ${activeAuctions.length} active auctions`
    );
  } catch (error) {
    console.error("Error starting timers:", error);
  }
};

// Start timer for a specific auction
function startAuctionTimer(io, auction) {
  const auctionId = auction.auction_id;

  // Clear existing timer if any
  if (activeTimers.has(auctionId)) {
    clearInterval(activeTimers.get(auctionId));
  }

  // Create new timer
  const timer = setInterval(async () => {
    try {
      const timeLeft = auction.getTimeLeft();

      // Broadcast time update
      io.to(`auction_${auctionId}`).emit("time_update", {
        auctionId,
        timeLeft,
      });

      // Check if auction should end
      if (timeLeft <= 0) {
        await endAuction(io, auction);
        clearInterval(timer);
        activeTimers.delete(auctionId);
      }

      // Warning at 60 seconds
      if (timeLeft === 60) {
        io.to(`auction_${auctionId}`).emit("ending_soon", {
          auctionId,
          message: "Phiên đấu giá sắp kết thúc trong 1 phút!",
        });
      }
    } catch (error) {
      console.error("Error in auction timer:", error);
    }
  }, 1000); // Update every second

  activeTimers.set(auctionId, timer);
}

// End auction
async function endAuction(io, auction) {
  try {
    // Update auction status
    auction.status = "ENDED";
    await auction.save();

    // Get winner info
    const winner = auction.highest_bidder_id
      ? await auction.getHighestBidder()
      : null;

    // Broadcast auction end
    io.to(`auction_${auction.auction_id}`).emit("auction_ended", {
      auctionId: auction.auction_id,
      winner: winner ? winner.username : null,
      finalPrice: auction.current_price,
      message: winner
        ? `Phiên đấu giá kết thúc! Người thắng: ${winner.username}`
        : "Phiên đấu giá kết thúc! Không có người đặt giá",
    });

    console.log(`✅ Auction ${auction.auction_id} ended`);
  } catch (error) {
    console.error("Error ending auction:", error);
  }
}

// Export function to start timer for new auction
exports.startAuctionTimer = startAuctionTimer;
