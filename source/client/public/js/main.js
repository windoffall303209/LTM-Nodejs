// =====================================================
// MAIN APPLICATION LOGIC
// =====================================================

/**
 * Fetch active auctions from the API
 */
async function fetchActiveAuctions() {
  try {
    console.log('Fetching active auctions from:', `${window.API_CONFIG.BASE_URL}/api/auctions/active`);
    const response = await fetch(`${window.API_CONFIG.BASE_URL}/api/auctions/active`, {
      credentials: "include"
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      console.error('API returned error status:', response.status);
      return [];
    }

    const result = await response.json();
    console.log('API result:', result);

    if (result.success) {
      console.log('Active auctions loaded:', result.data?.length || 0);
      return result.data || [];
    } else {
      console.error('API returned success=false:', result.message);
      return [];
    }
  } catch (error) {
    console.error("Error fetching auctions:", error);
    return [];
  }
}

/**
 * Render auctions on the index page
 */
async function renderIndexAuctions() {
  const container = document.querySelector('.row.g-4');
  if (!container) return;

  container.innerHTML = '<div class="col-12 text-center"><div class="spinner-border" role="status"></div></div>';

  const auctions = await fetchActiveAuctions();

  if (auctions.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <h4 class="text-muted">Hiện không có đấu giá nào đang diễn ra</h4>
        <p>Vui lòng quay lại sau!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = '';

  auctions.forEach(auction => {
    const imageUrl = auction.imageUrl || 'https://via.placeholder.com/400x300';
    const description = auction.description.length > 80
      ? auction.description.substring(0, 80) + '...'
      : auction.description;

    const auctionCard = `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="${imageUrl}" class="card-img-top" alt="${auction.title}" style="height: 200px; object-fit: cover" />
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
              <span class="badge bg-danger">${auction.secondsRemaining || 0} giây</span>
            </div>
            <div class="mb-2">
              <small class="text-muted">
                <i class="bi bi-person-fill"></i>
                ${auction.totalBids || 0} lượt đặt giá
              </small>
            </div>
          </div>
          <div class="card-footer bg-transparent">
            <a href="login.html" class="btn btn-primary w-100">Đăng nhập để đấu giá</a>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += auctionCard;
  });
}

/**
 * Handle login form submission
 */
async function handleLogin(event) {
  event.preventDefault();

  const form = event.target;
  const username = form.username.value;
  const password = form.password.value;

  try {
    const response = await fetch(`${window.API_CONFIG.BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password })
    });

    const result = await response.json();

    if (result.success) {
      // Store user info
      localStorage.setItem('username', result.data.username);
      localStorage.setItem('userId', result.data.userId);
      localStorage.setItem('userRole', result.data.role);

      // Redirect to dashboard
      window.location.href = 'dashboard.html';
    } else {
      showAlert('danger', result.message || 'Đăng nhập thất bại');
    }
  } catch (error) {
    console.error('Login error:', error);
    showAlert('danger', 'Có lỗi xảy ra khi đăng nhập');
  }
}

/**
 * Handle register form submission
 */
async function handleRegister(event) {
  event.preventDefault();

  const form = event.target;
  const username = form.username.value;
  const password = form.password.value;
  const fullName = form.fullName.value;
  const email = form.email.value;

  try {
    const response = await fetch(`${window.API_CONFIG.BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password, fullName, email })
    });

    const result = await response.json();

    if (result.success) {
      showAlert('success', 'Đăng ký thành công! Vui lòng đăng nhập.');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 2000);
    } else {
      showAlert('danger', result.message || 'Đăng ký thất bại');
    }
  } catch (error) {
    console.error('Register error:', error);
    showAlert('danger', 'Có lỗi xảy ra khi đăng ký');
  }
}

/**
 * Handle logout
 */
async function handleLogout() {
  try {
    await fetch(`${window.API_CONFIG.BASE_URL}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    });
  } catch (error) {
    console.error('Logout error:', error);
  } finally {
    localStorage.clear();
    window.location.href = 'index.html';
  }
}

/**
 * Show alert message
 */
function showAlert(type, message) {
  const alertContainer = document.getElementById('alertContainer');
  if (!alertContainer) {
    const container = document.createElement('div');
    container.id = 'alertContainer';
    container.style.position = 'fixed';
    container.style.top = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
  }

  const alert = document.createElement('div');
  alert.className = `alert alert-${type} alert-dismissible fade show`;
  alert.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;

  document.getElementById('alertContainer').appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 5000);
}

/**
 * Format currency helper
 */
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN').format(amount) + ' VND';
}

/**
 * Initialize authentication - show username if logged in
 */
function initAuth() {
  const username = localStorage.getItem('username');
  const userId = localStorage.getItem('userId');

  if (username && userId) {
    const usernameElements = document.querySelectorAll('#username, .username-display');
    usernameElements.forEach((el) => {
      el.textContent = username;
    });
  }
}

/**
 * Initialize page based on filename
 */
function initPage() {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1);

  // Initialize common auth
  initAuth();

  // Page-specific initialization
  if (page === 'index.html' || page === '') {
    renderIndexAuctions();
  }

  // Attach form handlers
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', handleRegister);
  }

  // Attach logout buttons
  document.querySelectorAll('.logout-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      handleLogout();
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
