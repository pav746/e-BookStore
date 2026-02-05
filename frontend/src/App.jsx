//import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './styles.css'
import Navbar from './components/Navbar'
import { FaEnvelope, FaPhone, FaMapPin, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.body.classList.add('hero-bg')
    return () => document.body.classList.remove('hero-bg')
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-transparent">
        
        {/* Footer Content */}
        <div className="container-wide py-16 grid md:grid-cols-4 gap-10 mb-8">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4 text-gray-900">BookHub</h3>
            <p className="text-muted leading-relaxed text-sm">
              Your gateway to endless stories. Discover your next favorite book with curated picks and smart recommendations.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="social-btn" aria-label="facebook"><FaFacebook /></a>
              <a href="#" className="social-btn" aria-label="twitter"><FaTwitter /></a>
              <a href="#" className="social-btn" aria-label="instagram"><FaInstagram /></a>
              <a href="#" className="social-btn" aria-label="linkedin"><FaLinkedin /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><a href="#" className="footer-link">Books</a></li>
              <li><a href="#" className="footer-link">Categories</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">FAQs</a></li>
              <li><a href="#" className="footer-link">Shipping Info</a></li>
              <li><a href="#" className="footer-link">Returns</a></li>
              <li><a href="#" className="footer-link">Track Order</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Contact Info</h3>
            <ul className="space-y-3 text-muted">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-lg flex-shrink-0" style={{ color: 'var(--brand)' }} />
                <span>support@bookhub.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-lg flex-shrink-0" style={{ color: 'var(--brand)' }} />
                <span>1-800-BOOKS-01</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapPin className="text-lg flex-shrink-0" style={{ color: 'var(--brand)' }} />
                <span>123 Book Street, Library City, BC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-100/10 px-4 py-8">
          <div className="container-wide flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted text-sm">
              &copy; 2026 BookHub. All rights reserved. | Designed with ❤️ for book lovers
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
   
  )
}

export default App
