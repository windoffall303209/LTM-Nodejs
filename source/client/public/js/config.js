/**
 * File: config.js
 * Cấu hình chung cho application
 *
 * Chứa:
 * - URL của API backend
 * - WebSocket URL
 * - Các API endpoints
 * - Helper functions
 */

// URL backend API (thay đổi khi deploy production)
const API_BASE_URL = 'http://127.0.0.1:8000';
const WS_URL = 'http://127.0.0.1:8000/ws';

// Export để sử dụng ở các file khác
window.API_CONFIG = {
    BASE_URL: API_BASE_URL,
    WS_URL: WS_URL
};

/**
 * Helper function: Build full API URL
 * Ví dụ: getApiUrl('/auth/login') => 'http://localhost:8000/api/auth/login'
 */
function getApiUrl(endpoint) {
    return API_BASE_URL + '/api' + endpoint;
}

/**
 * Helper function: Get auth headers cho fetch requests
 * Tự động thêm token từ localStorage vào header
 */
function getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
    };
}

// Team members thêm các constants khác nếu cần
// Ví dụ:
// const ITEMS_PER_PAGE = 10;
// const BID_INCREMENT = 100000; // 100k VND
