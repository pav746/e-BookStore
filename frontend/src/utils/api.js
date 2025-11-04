// Base API URL - change this to your backend URL in production
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

/**
 * Generic fetch wrapper with error handling and automatic JSON parsing
 * @param {string} endpoint - API endpoint (will be appended to API_BASE_URL)
 * @param {Object} options - Fetch options (method, headers, body)
 * @returns {Promise<any>} Parsed response data
 */
async function fetchApi(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'API request failed')
    }

    return data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Common API request helpers
export const api = {
  get: (endpoint) => fetchApi(endpoint),
  
  post: (endpoint, body) => 
    fetchApi(endpoint, { 
      method: 'POST',
      body: JSON.stringify(body),
    }),
  
  put: (endpoint, body) =>
    fetchApi(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
    }),
  
  delete: (endpoint) =>
    fetchApi(endpoint, {
      method: 'DELETE',
    }),
}