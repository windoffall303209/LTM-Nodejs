// =====================================================
// AUCTION SYSTEM - JAVASCRIPT
// =====================================================

/**
 * WebSocket Connection Manager
 */
class AuctionWebSocket {
  constructor(auctionId) {
    this.auctionId = auctionId;
    this.stompClient = null;
    this.connected = false;
  }

  connect(onMessageCallback) {
    const socket = new SockJS(window.API_CONFIG.WS_URL);
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect(
      {},
      (frame) => {
        console.log("WebSocket Connected:", frame);
        this.connected = true;

        // Subscribe to auction updates
        this.stompClient.subscribe(
          `/topic/auction/${this.auctionId}`,
          (message) => {
            const data = JSON.parse(message.body);
            onMessageCallback(data);
          }
        );

        // Send join message
        this.send("/app/join/" + this.auctionId, {
          username: this.getUsername(),
        });
      },
      (error) => {
        console.error("WebSocket Error:", error);
        this.connected = false;
        setTimeout(() => this.connect(onMessageCallback), 5000);
      }
    );
  }

  send(destination, data) {
    if (this.stompClient && this.connected) {
      this.stompClient.send(destination, {}, JSON.stringify(data));
    }
  }

  disconnect() {
    if (this.stompClient) {
      this.send("/app/leave/" + this.auctionId, {
        username: this.getUsername(),
      });
      this.stompClient.disconnect();
    }
  }

  getUsername() {
    return localStorage.getItem("username") || "Guest";
  }
}

/**
 * Auction Manager
 */
class AuctionManager {
  constructor(auctionId) {
    this.auctionId = auctionId;
    this.ws = new AuctionWebSocket(auctionId);
    this.timerInterval = null;
  }

  init() {
    this.ws.connect((update) => this.handleUpdate(update));
    this.startTimer();
    this.loadBidHistory();
  }

  handleUpdate(update) {
    console.log("Received update:", update);

    switch (update.type) {
      case "BID_UPDATE":
        this.updateBidInfo(update);
        this.showNotification(
          `${update.bidderName} vừa đặt giá mới!`,
          "warning"
        );
        this.loadBidHistory();
        break;

      case "AUCTION_EXTENDED":
        this.showNotification(
          `Đấu giá được gia hạn thêm ${update.extendedSeconds} giây!`,
          "info"
        );
        break;

      case "AUCTION_ENDED":
        this.showNotification("Đấu giá đã kết thúc!", "danger");
        this.stopTimer();
        break;

      case "USER_JOINED":
        console.log(`${update.username} joined the auction`);
        break;
    }
  }

  updateBidInfo(update) {
    document.getElementById("currentPrice").textContent = this.formatCurrency(
      update.newPrice
    );
    document.getElementById("highestBidder").textContent = update.bidderName;
    document.getElementById("totalBids").textContent = update.totalBids;

    // Update minimum bid
    const minBid = update.newPrice + 100000;
    document.getElementById("minimumBid").textContent =
      this.formatCurrency(minBid);
    document.getElementById("bidAmount").value = minBid;
  }

  async placeBid(amount) {
    const userId = this.getUserId();

    try {
      const response = await fetch(`${window.API_CONFIG.BASE_URL}/api/bids?userId=${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          auctionId: this.auctionId,
          bidAmount: amount,
        }),
      });

      const result = await response.json();

      if (result.success) {
        this.showNotification("✅ Đặt giá thành công!", "success");
        return true;
      } else {
        this.showNotification("❌ " + result.message, "danger");
        return false;
      }
    } catch (error) {
      this.showNotification("❌ Có lỗi xảy ra: " + error.message, "danger");
      return false;
    }
  }

  async loadBidHistory() {
    try {
      const response = await fetch(`${window.API_CONFIG.BASE_URL}/api/bids/auction/${this.auctionId}`, {
        credentials: "include"
      });
      const result = await response.json();

      if (result.success) {
        this.displayBidHistory(result.data);
      }
    } catch (error) {
      console.error("Error loading bid history:", error);
    }
  }

  displayBidHistory(bids) {
    const container = document.getElementById("bidHistoryList");
    if (!container) return;

    container.innerHTML = "";

    if (bids.length === 0) {
      container.innerHTML =
        '<p class="text-muted">Chưa có lượt đặt giá nào</p>';
      return;
    }

    bids.slice(0, 10).forEach((bid, index) => {
      const isFirst = index === 0;
      const bidElement = `
                <div class="bid-history-item ${isFirst ? "bg-light" : ""}">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>${bid.username}</strong>
                            ${
                              isFirst
                                ? '<span class="badge bg-success ms-2">Dẫn đầu</span>'
                                : ""
                            }
                            ${
                              bid.isAutoBid
                                ? '<span class="badge bg-info ms-2">Auto</span>'
                                : ""
                            }
                        </div>
                        <div class="text-end">
                            <div class="fw-bold text-success">${this.formatCurrency(
                              bid.bidAmount
                            )}</div>
                            <small class="text-muted">${this.formatDate(
                              bid.bidTime
                            )}</small>
                        </div>
                    </div>
                </div>
            `;
      container.innerHTML += bidElement;
    });
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  updateCountdown() {
    const timerElement = document.getElementById("timeRemaining");
    if (!timerElement) return;

    // This will be updated from server via WebSocket
    // For now, just keep the existing display
  }

  showNotification(message, type) {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `alert alert-${type} alert-dismissible fade show status-message`;
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

  formatCurrency(amount) {
    return new Intl.NumberFormat("vi-VN").format(amount) + " VND";
  }

  formatDate(dateString) {
    return new Date(dateString).toLocaleString("vi-VN");
  }

  getUserId() {
    return parseInt(localStorage.getItem("userId") || "1");
  }

  destroy() {
    this.stopTimer();
    this.ws.disconnect();
  }
}

/**
 * Utility Functions
 */
function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN").format(amount) + " VND";
}

function formatTime(seconds) {
  if (seconds <= 0) return "Đã kết thúc";

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${hours}h ${minutes}m ${secs}s`;
}

function showLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        `;
  }
}

function hideLoading(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = "";
  }
}

/**
 * Initialize authentication
 */
function initAuth() {
  // Check if user is logged in
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem("userId");

  if (username && userId) {
    const usernameElements = document.querySelectorAll("#username");
    usernameElements.forEach((el) => {
      el.textContent = username;
    });
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", initAuth);
