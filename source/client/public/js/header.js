// header.js - Shared header component for all pages
// Provides consistent navigation across the application

/**
 * Render navbar with user information
 * @param {string} activePage - The current active page (dashboard, my-bids, watchlist, etc.)
 */
async function renderHeader(activePage = 'dashboard') {
  const navbarContainer = document.getElementById('mainNav');
  if (!navbarContainer) return;

  // Get user info from localStorage
  const username = localStorage.getItem('username');
  const userId = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRole') || 'USER';

  let currentUser = {
    username: username,
    fullName: username,
    email: '',
    balance: 0,
    role: userRole
  };

  // Try to load full user info from API
  try {
    const response = await fetch(`${window.API_CONFIG.BASE_URL}/api/users/${userId}`, {
      credentials: 'include'
    });
    const result = await response.json();
    if (result.success) {
      currentUser = result.data;
    }
  } catch (error) {
    console.error('Error loading user info for header:', error);
  }

  const isAdmin = currentUser.role === 'ADMIN';
  const displayName = currentUser.fullName || currentUser.username;

  // Helper function to get active class
  const activeClass = (page) => page === activePage ? 'active' : '';

  // Render the navbar HTML
  navbarContainer.innerHTML = `
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="dashboard.html">🔨 Auction System</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link ${activeClass('dashboard')} text-white fw-semibold" href="dashboard.html">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${activeClass('my-bids')} text-white fw-semibold" href="my-bids.html">Lịch Sử Đấu Giá</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ${activeClass('watchlist')} text-white fw-semibold" href="watchlist.html">Theo Dõi</a>
          </li>
          ${isAdmin ? `
          <li class="nav-item">
            <a class="nav-link ${activeClass('admin')} text-warning fw-bold" href="admin/dashboard.html">
              👑 Quản Trị
            </a>
          </li>
          ` : ''}
        </ul>
        <ul class="navbar-nav">
          <!-- User Balance -->
          <li class="nav-item d-none d-lg-block">
            <span class="nav-link text-white">
              <strong>💰 <span id="userBalance">${formatCurrency(currentUser.balance)}</span></strong>
            </span>
          </li>
          <!-- Username with Dropdown -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <strong>👤 <span id="userName">${displayName}</span></strong>
              <span id="userRole" class="badge ${isAdmin ? 'bg-warning text-dark' : 'bg-info'} ms-1">${currentUser.role}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li class="dropdown-header">
                <strong>Thông tin tài khoản</strong>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <span class="dropdown-item-text">
                  <small class="text-muted">Tên đầy đủ:</small><br/>
                  <strong id="dropdownFullName">${currentUser.fullName || 'N/A'}</strong>
                </span>
              </li>
              <li>
                <span class="dropdown-item-text">
                  <small class="text-muted">Email:</small><br/>
                  <strong id="dropdownEmail">${currentUser.email || 'N/A'}</strong>
                </span>
              </li>
              <li>
                <span class="dropdown-item-text">
                  <small class="text-muted">Số dư:</small><br/>
                  <strong class="text-success" id="dropdownBalance">${formatCurrency(currentUser.balance)}</strong>
                </span>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <div class="px-2">
                  <button onclick="handleHeaderLogout(event)" class="btn btn-danger btn-sm w-100">
                    <i class="bi bi-box-arrow-right"></i> Đăng xuất
                  </button>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  `;
}

/**
 * Handle logout from header
 */
async function handleHeaderLogout(e) {
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
 * Format currency helper
 */
function formatCurrency(amount) {
  if (!amount) return '0 VND';
  return new Intl.NumberFormat('vi-VN').format(amount) + ' VND';
}

/**
 * Update header balance (can be called from other scripts)
 */
function updateHeaderBalance(newBalance) {
  const balanceEl = document.getElementById('userBalance');
  const dropdownBalanceEl = document.getElementById('dropdownBalance');

  if (balanceEl) {
    balanceEl.textContent = formatCurrency(newBalance);
  }
  if (dropdownBalanceEl) {
    dropdownBalanceEl.textContent = formatCurrency(newBalance);
  }
}
