// Token storage key
const AUTH_TOKEN_KEY = 'auth_token'

/**
 * Store authentication token in localStorage
 * @param {string} token - JWT token from backend
 */
export function setAuthToken(token) {
  localStorage.setItem(AUTH_TOKEN_KEY, token)
}

/**
 * Get stored authentication token
 * @returns {string|null} Stored token or null if not found
 */
export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY)
}

/**
 * Remove stored authentication token
 */
export function removeAuthToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY)
}

/**
 * Check if user is authenticated (has valid token)
 * @returns {boolean}
 */
export function isAuthenticated() {
  const token = getAuthToken()
  if (!token) return false
  
  // Optional: Add JWT expiration checking here
  // const decodedToken = decodeJwt(token)
  // return decodedToken.exp > Date.now() / 1000
  
  return true
}

/**
 * Get authentication headers for API requests
 * @returns {Object} Headers object with Authorization if token exists
 */
export function getAuthHeaders() {
  const token = getAuthToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}