import React, { useState, useEffect } from 'react'
import { api } from '../utils/api'
import Hero from '../components/Hero'
import BookCard from '../components/BookCard'
import { HiAdjustmentsHorizontal } from 'react-icons/hi2'

export default function Home() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  const categories = ['all', 'fiction', 'non-fiction', 'science', 'history', 'biography']

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      setLoading(true)
      const data = await api.get('/books')
      setBooks(data)
      setError(null)
    } catch (err) {
      console.error('Error fetching books:', err)
      setError('Failed to load books. Make sure the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  const filteredBooks = selectedCategory === 'all' 
    ? books 
    : books.filter(book => book.category.toLowerCase() === selectedCategory)

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch(sortBy) {
      case 'price-low':
        return a.newPrice - b.newPrice
      case 'price-high':
        return b.newPrice - a.newPrice
      case 'popular':
        return b.trending ? 1 : -1
      default:
        return new Date(b.createdAt) - new Date(a.createdAt)
    }
  })

  return (
    <div className="relative bg-muted">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10">
        <Hero />

        {/* Filters Section */}
        <section className="container-wide mb-16 animate-fade">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10">
            
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                <HiAdjustmentsHorizontal className="text-lg text-blue-600" />
                Filter by Category
              </h3>
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-lg font-bold transition-all capitalize btn-ripple ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-5 py-2.5 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none font-bold text-gray-900 bg-white hover:border-blue-400 transition-colors"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </section>

        {/* Main Content */}
        <section className="container-wide mb-20">
          
          {/* Error State */}
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-900 px-6 py-5 rounded-lg mb-8 animate-slide-left font-semibold">
              <p>⚠️ {error}</p>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl h-96 animate-pulse"></div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && sortedBooks.length === 0 && (
            <div className="text-center py-20 animate-fade">
              <div className="text-8xl mb-5">📚</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">No books found</h3>
              <p className="text-gray-600 text-lg">Try adjusting your filters or browse all books.</p>
            </div>
          )}

          {/* Books Grid */}
          {!loading && sortedBooks.length > 0 && (
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-10">Featured Books</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade">
                {sortedBooks.map((book, index) => (
                  <div key={book._id} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade">
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 text-white py-20 mb-12 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-screen filter blur-3xl"></div>
          </div>

          <div className="relative max-w-screen-2xl mx-auto px-6 text-center animate-slide-left">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-2xl mx-auto">Get exclusive deals and new book recommendations delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-gray-900 font-medium placeholder-gray-500"
              />
              <button className="btn-primary px-8 py-3.5 rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
