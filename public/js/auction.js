// Auction detail page functionality

let auctionSocket;
let countdownInterval;

function initAuctionPage(auctionId, username) {
  // Initialize socket
  auctionSocket = socket;

  // Join auction room
  auctionSocket.emit("join_auction", { auctionId, username });

  // Listen for bid updates
  auctionSocket.on("bid_update", (data) => {
    if (data.auctionId == auctionId) {
      updateAuctionInfo(data);
      addBidToHistory(data);
      showNotification(
        `${data.username} đã đặt giá: ${formatCurrency(data.amount)}`,
        "info"
      );
    }
  });

  // Listen for time updates
  auctionSocket.on("time_update", (data) => {
    if (data.auctionId == auctionId) {
      updateCountdown(data.timeLeft);
    }
  });

  // Listen for ending soon
  auctionSocket.on("ending_soon", (data) => {
    if (data.auctionId == auctionId) {
      showNotification(data.message, "warning");
    }
  });

  // Listen for auction end
  auctionSocket.on("auction_ended", (data) => {
    if (data.auctionId == auctionId) {
      handleAuctionEnd(data);
    }
  });

  // Handle bid form submission
  const bidForm = document.getElementById("bidForm");
  if (bidForm) {
    bidForm.addEventListener("submit", handleBidSubmit);
  }

  // Handle quick bid buttons
  const quickBidButtons = document.querySelectorAll(".quick-bid");
  quickBidButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const amount = parseInt(this.dataset.amount);
      const currentInput = document.getElementById("bidAmount");
      const currentValue =
        parseFloat(currentInput.value) || parseFloat(currentInput.min);
      currentInput.value = currentValue + amount;
    });
  });

  // Start local countdown
  startLocalCountdown();
}

function handleBidSubmit(e) {
  e.preventDefault();

  const bidAmount = document.getElementById("bidAmount").value;

  if (!bidAmount || parseFloat(bidAmount) <= 0) {
    showNotification("Vui lòng nhập giá hợp lệ", "error");
    return;
  }

  // Submit bid via API
  fetch("/api/bids", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      auction_id: auctionId,
      amount: parseFloat(bidAmount),
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        showNotification("Đặt giá thành công!", "success");
        document.getElementById("bidForm").reset();
      } else {
        showNotification(data.message, "error");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      showNotification("Đã xảy ra lỗi khi đặt giá", "error");
    });
}

function updateAuctionInfo(data) {
  // Update current price
  const priceElement = document.getElementById("currentPrice");
  if (priceElement) {
    priceElement.textContent = formatCurrency(data.amount);
  }

  // Update highest bidder
  const bidderElement = document.getElementById("highestBidder");
  if (bidderElement) {
    bidderElement.textContent = data.username;
  }

  // Update total bids
  const totalBidsElement = document.getElementById("totalBids");
  if (totalBidsElement && data.totalBids) {
    totalBidsElement.textContent = data.totalBids;
  }

  // Update minimum bid in form
  const bidInput = document.getElementById("bidAmount");
  if (bidInput) {
    bidInput.min = parseFloat(data.amount) + bidIncrement;
    bidInput.placeholder = formatCurrency(
      parseFloat(data.amount) + bidIncrement
    );
  }
}

function addBidToHistory(data) {
  const historyContainer = document.getElementById("bidHistory");
  if (!historyContainer) return;

  const bidElement = document.createElement("div");
  bidElement.className = "list-group-item";
  bidElement.innerHTML = `
    <div class="d-flex w-100 justify-content-between">
      <h6 class="mb-1">${data.username}</h6>
      <small>${new Date().toLocaleString("vi-VN")}</small>
    </div>
    <p class="mb-1 text-success">
      <strong>${formatCurrency(data.amount)}</strong>
    </p>
  `;

  historyContainer.insertBefore(bidElement, historyContainer.firstChild);
}

function updateCountdown(seconds) {
  const countdownElement = document.getElementById("countdown");
  if (!countdownElement) return;

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  countdownElement.textContent = `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;

  if (seconds < 60) {
    countdownElement.parentElement.classList.add("text-danger");
  }
}

function startLocalCountdown() {
  // This is a backup countdown in case socket updates fail
  // You can implement this based on end_time from server
}

function handleAuctionEnd(data) {
  showNotification(data.message, "success");

  // Disable bid form
  const bidForm = document.getElementById("bidForm");
  if (bidForm) {
    bidForm.innerHTML = `
      <div class="alert alert-warning">
        <i class="fas fa-info-circle"></i> Phiên đấu giá đã kết thúc
      </div>
    `;
  }

  // Stop countdown
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
}

function formatCurrency(amount) {
  return parseFloat(amount).toLocaleString("vi-VN") + " VNĐ";
}

function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `alert alert-${
    type === "error"
      ? "danger"
      : type === "success"
      ? "success"
      : type === "warning"
      ? "warning"
      : "info"
  } alert-dismissible fade show position-fixed`;
  notification.style.top = "80px";
  notification.style.right = "20px";
  notification.style.zIndex = "9999";
  notification.style.minWidth = "300px";
  notification.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;

  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Clean up when leaving page
window.addEventListener("beforeunload", () => {
  if (auctionSocket && auctionId) {
    auctionSocket.emit("leave_auction", { auctionId, username });
  }
});
