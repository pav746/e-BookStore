/**
 * Format price with currency symbol
 * @param {number} price - Price in cents/smallest currency unit
 * @param {string} currency - Currency code (default: USD)
 * @returns {string} Formatted price (e.g., "$29.99")
 */
export function formatPrice(price, currency = 'USD') {
  const amount = (price / 100).toFixed(2)
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

/**
 * Format date to local string
 * @param {string|Date} date - Date to format
 * @returns {string} Formatted date string
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Max length before truncation
 * @returns {string} Truncated text
 */
export function truncateText(text, length = 100) {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Whether email is valid
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Generate slug from text (for URLs)
 * @param {string} text - Text to slugify
 * @returns {string} URL-friendly slug
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}