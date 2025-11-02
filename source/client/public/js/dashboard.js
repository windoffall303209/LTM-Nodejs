// Dashboard.js - Handles dashboard functionality
// TODO: This file handles loading and displaying auctions on the dashboard

let currentUser = null;
let allAuctions = [];
let stompClient = null;
let wsConnected = false;

/**
 * Initialize dashboard
 */
async function initDashboard() {
  // Check authentication
  const username = localStorage.getItem('username');
  const userId = localStorage.getItem('userId');

  if (!username || !userId) {
    window.location.href = 'login.html';
    return;
  }

  // Render header first
  await renderHeader('dashboard');

  // Load user info and auctions
  await loadCurrentUser();
  await loadAuctions();
  loadStatistics();

  // Connect WebSocket for real-time updates
  connectWebSocket();
}

/**
 * Load current user information
 */
async function loadCurrentUser() {
  try {
    const userId = localStorage.getItem('userId');
    const response = await fetch(`${window.API_CONFIG.BASE_URL}/api/users/${userId}`, {
      credentials: 'include'
    });

    const result = await response.json();

    if (result.success) {
      currentUser = result.data;
      // Update balance in header
      if (typeof updateHeaderBalance === 'function') {
        updateHeaderBalance(currentUser.balance);
      }
    }
  } catch (error) {
    console.error('Error loading user:', error);
    // Use localStorage as fallback
    currentUser = {
      username: localStorage.getItem('username'),
      role: localStorage.getItem('userRole') || 'USER',
      balance: 10000000
    };
  }
}

/**
 * Connect to WebSocket for real-time auction updates
 */
function connectWebSocket() {
  try {
    const socket = new SockJS(window.API_CONFIG.WS_URL);
    stompClient = Stomp.over(socket);

    stompClient.connect({},
      (frame) => {
        console.log('Dashboard WebSocket Connected:', frame);
        wsConnected = true;

        // Subscribe to auction events
        stompClient.subscribe('/topic/auctions', (message) => {
          const event = JSON.parse(message.body);
          handleAuctionEvent(event);
        });
      },
      (error) => {
        console.error('Dashboard WebSocket Error:', error);
        wsConnected = false;
        // Try to reconnect after 5 seconds
        setTimeout(() => connectWebSocket(), 5000);
      }
    );
  } catch (error) {
    console.error('Error connecting to WebSocket:', error);
  }
}

/**
 * Handle auction events from WebSocket
 */
function handleAuctionEvent(event) {
  console.log('Received auction event:', event);

  switch (event.type) {
    case 'AUCTION_CREATED':
      // Reload auctions to show the new one
      loadAuctions();
      showNotification('🎉 Đấu giá mới vừa được tạo: ' + event.title, 'info');
      break;

    case 'AUCTION_STARTED':
      loadAuctions();
      showNotification('🚀 Đấu giá vừa bắt đầu: ' + event.title, 'success');
      break;

    case 'AUCTION_ENDED':
      loadAuctions();
      showNotification('🏁 Đấu giá đã kết thúc: ' + event.title, 'warning');
      break;
  }
}

/**
 * Show notification toast
 */
function showNotification(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3`;
  toast.style.zIndex = '9999';
  toast.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 5000);
}

/**
 * Load auctions from API
 */
async function loadAuctions() {
  try {
    console.log('Loading auctions from API...');
    // Load all auctions, not just active
    const response = await fetch(`${window.API_CONFIG.BASE_URL}/api/auctions`, {
      credentials: 'include'
    });

    console.log('Response status:', response.status);
    const result = await response.json();
    console.log('API result:', result);

    if (result.success) {
      allAuctions = result.data || [];
      console.log('Total auctions loaded:', allAuctions.length);
      console.log('Auctions by status:', {
        ACTIVE: allAuctions.filter(a => a.status === 'ACTIVE').length,
        PENDING: allAuctions.filter(a => a.status === 'PENDING').length,
        ENDED: allAuctions.filter(a => a.status === 'ENDED').length
      });
      // Apply current filter
      applyFilters();
      // Update statistics
      loadStatistics();
    } else {
      console.error('API returned error:', result.message);
      showNoAuctions();
    }
  } catch (error) {
    console.error('Error loading auctions:', error);
    showNoAuctions();
  }
}

/**
 * Display auctions on page
 */
function displayAuctions(auctions) {
  const container = document.getElementById('auctionsList');
  const noAuctions = document.getElementById('noAuctions');

  if (!auctions || auctions.length === 0) {
    showNoAuctions();
    return;
  }

  container.style.display = '';
  noAuctions.style.display = 'none';
  container.innerHTML = '';

  // Sort auctions: ACTIVE -> PENDING -> ENDED
  const sortedAuctions = [...auctions].sort((a, b) => {
    const statusOrder = { 'ACTIVE': 1, 'PENDING': 2, 'ENDED': 3 };
    const orderA = statusOrder[a.status] || 999;
    const orderB = statusOrder[b.status] || 999;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    // Same status, sort by time
    if (a.status === 'ENDED') {
      // For ended auctions, sort by end time descending (most recent first)
      return new Date(b.endTime) - new Date(a.endTime);
    } else {
      // For active/pending, sort by end time ascending (ending soonest first)
      return new Date(a.endTime) - new Date(b.endTime);
    }
  });

  console.log('Displaying', sortedAuctions.length, 'auctions after sorting');

  sortedAuctions.forEach(auction => {
    const card = createAuctionCard(auction);
    container.innerHTML += card;
  });
}

/**
 * Create auction card HTML
 */
function createAuctionCard(auction) {
  const isPending = auction.status === 'PENDING';
  const imageUrl = auction.imageUrl || 'https://via.placeholder.com/400x300';
  const description = auction.description.length > 100
    ? auction.description.substring(0, 100) + '...'
    : auction.description;

  // Calculate time remaining
  const timeRemaining = calculateTimeRemaining(auction.endTime);
  const statusBadge = getStatusBadge(auction.status);
  const ribbon = isPending ? `
    <div class="ribbon-wrapper">
      <div class="ribbon bg-warning">Sắp diễn ra</div>
    </div>
  ` : '';

  return `
    <div class="col-md-4">
      <div class="card h-100 shadow-sm ${isPending ? 'border-warning' : ''}">
        ${ribbon}
        <img src="${imageUrl}" class="card-img-top" alt="${auction.title}"
             style="height: 200px; object-fit: cover" />
        <div class="card-body">
          <h5 class="card-title">${auction.title}</h5>
          <p class="card-text text-muted">${description}</p>

          <div class="mb-2">
            <strong>Giá hiện tại:</strong>
            <span class="text-success fs-5">${formatCurrency(auction.currentPrice)}</span>
          </div>

          <div class="mb-2">
            <strong>Người dẫn đầu:</strong>
            <span>${auction.highestBidder || 'Chưa có'}</span>
          </div>

          <div class="mb-3">
            <strong>Thời gian còn lại:</strong>
            ${statusBadge}
            <span class="text-muted small d-block">${timeRemaining}</span>
          </div>

          <div class="mb-2">
            <small class="text-muted">
              <i class="bi bi-person-fill"></i>
              ${auction.totalBids || 0} lượt đặt giá
            </small>
          </div>
        </div>

        <div class="card-footer bg-transparent">
          ${!isPending ? `
            <a href="auction-detail.html?id=${auction.id}" class="btn btn-primary w-100">
              Xem chi tiết & Đấu giá
            </a>
          ` : `
            <button class="btn btn-secondary w-100" disabled>
              Chưa bắt đầu
            </button>
          `}
        </div>
      </div>
    </div>
  `;
}

/**
 * Get status badge HTML
 */
function getStatusBadge(status) {
  const badges = {
    'ACTIVE': '<span class="badge bg-success">Đang diễn ra</span>',
    'PENDING': '<span class="badge bg-warning">Sắp diễn ra</span>',
    'ENDED': '<span class="badge bg-danger">Đã kết thúc</span>'
  };
  return badges[status] || '';
}

/**
 * Calculate time remaining
 */
function calculateTimeRemaining(endTime) {
  if (!endTime) return 'N/A';

  const end = new Date(endTime);
  const now = new Date();
  const diff = end - now;

  if (diff <= 0) return 'Đã kết thúc';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) return `${days} ngày ${hours} giờ`;
  if (hours > 0) return `${hours} giờ ${minutes} phút`;
  return `${minutes} phút`;
}

/**
 * Show no auctions message
 */
function showNoAuctions() {
  document.getElementById('auctionsList').style.display = 'none';
  document.getElementById('noAuctions').style.display = 'block';
}

/**
 * Load statistics
 */
async function loadStatistics() {
  // Calculate statistics from loaded auctions
  const totalCount = allAuctions.length;
  const activeCount = allAuctions.filter(a => a.status === 'ACTIVE').length;
  const pendingCount = allAuctions.filter(a => a.status === 'PENDING').length;
  const endedCount = allAuctions.filter(a => a.status === 'ENDED').length;

  document.getElementById('totalCount').textContent = totalCount;
  document.getElementById('activeCount').textContent = activeCount;
  document.getElementById('pendingCount').textContent = pendingCount;
  document.getElementById('endedCount').textContent = endedCount;

  console.log('Statistics updated:', { totalCount, activeCount, pendingCount, endedCount });
}

/**
 * Apply filters
 */
function applyFilters() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const status = document.getElementById('statusFilter').value;

  console.log('Applying filters:', { searchTerm, status, totalAuctions: allAuctions.length });

  let filtered = allAuctions;

  if (searchTerm) {
    filtered = filtered.filter(a =>
      a.title.toLowerCase().includes(searchTerm) ||
      a.description.toLowerCase().includes(searchTerm)
    );
  }

  if (status) {
    filtered = filtered.filter(a => a.status === status);
  }

  console.log('Filtered auctions:', filtered.length);
  displayAuctions(filtered);
}

/**
 * Handle logout
 */
async function handleLogout(e) {
  e.preventDefault();

  try {
    await fetch(`${window.API_CONFIG.BASE_URL}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    });
  } catch (error) {
    console.error('Logout error:', error);
  } finally {
    localStorage.clear();
    window.location.href = 'login.html?logout=true';
  }
}

/**
 * Format currency
 */
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN').format(amount) + ' VND';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initDashboard();

  // Add event listener for search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }
});

// Cleanup WebSocket on page unload
window.addEventListener('beforeunload', () => {
  if (stompClient && wsConnected) {
    stompClient.disconnect();
  }
});
