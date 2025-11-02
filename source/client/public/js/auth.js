/**
 * Authentication Utility
 * Provides consistent authentication checks across all pages
 */

const Auth = {
  /**
   * Check if user is logged in
   */
  isLoggedIn() {
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
    return !!(userId && username);
  },

  /**
   * Check if user is admin
   */
  isAdmin() {
    const userRole = localStorage.getItem('userRole');
    return userRole === 'ADMIN';
  },

  /**
   * Get current user ID
   */
  getUserId() {
    return parseInt(localStorage.getItem('userId')) || null;
  },

  /**
   * Get current username
   */
  getUsername() {
    return localStorage.getItem('username') || null;
  },

  /**
   * Get current user role
   */
  getUserRole() {
    return localStorage.getItem('userRole') || 'USER';
  },

  /**
   * Require authentication - redirect to login if not logged in
   */
  requireAuth() {
    if (!this.isLoggedIn()) {
      console.warn('Not authenticated, redirecting to login...');
      window.location.href = '/login.html';
      return false;
    }
    return true;
  },

  /**
   * Require admin - redirect to dashboard if not admin
   */
  requireAdmin() {
    if (!this.isLoggedIn()) {
      console.warn('Not authenticated, redirecting to login...');
      window.location.href = '../login.html';
      return false;
    }
    if (!this.isAdmin()) {
      console.warn('Not admin, redirecting to dashboard...');
      window.location.href = '../dashboard.html';
      return false;
    }
    return true;
  },

  /**
   * Logout user
   */
  async logout() {
    try {
      await fetch(`${window.API_CONFIG.BASE_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.clear();
      window.location.href = '/login.html';
    }
  },

  /**
   * Debug: Show current auth state
   */
  debugAuthState() {
    console.log('=== Auth State ===');
    console.log('userId:', localStorage.getItem('userId'));
    console.log('username:', localStorage.getItem('username'));
    console.log('userRole:', localStorage.getItem('userRole'));
    console.log('isLoggedIn:', this.isLoggedIn());
    console.log('isAdmin:', this.isAdmin());
    console.log('==================');
  }
};

// Make Auth available globally
window.Auth = Auth;
