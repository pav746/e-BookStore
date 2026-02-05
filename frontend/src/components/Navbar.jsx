import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { HiSearch, HiChevronDown } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(2)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 animate-fade">
      <nav className="container-wide py-4 flex justify-between items-center min-h-20">
        
        {/* Left Section: Logo */}
        <Link
          to="/"
          className="flex items-center font-black text-2xl md:text-3xl transition-all duration-300 group relative"
          style={{ color: 'var(--brand)' }}
        >
          <div className="relative">
            <HiMiniBars3CenterLeft className="text-3xl md:text-4xl group-hover:animate-swing" style={{ color: 'var(--brand)' }} />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--brand)' }}></span>
          </div>
          <span className="hidden sm:inline ml-3 font-black">BookHub</span>
        </Link>

        {/* Center: Search Bar (Hidden on mobile) */}
          <div className="relative hidden md:flex flex-1 max-w-lg mx-12 group">
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg pointer-events-none transition-colors" style={{ color: 'var(--brand)' }} />
          <input
            type="text"
            placeholder="Search books, authors..."
            className="bg-gray-100 group-hover:bg-white w-full py-3 pl-12 pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 placeholder-gray-500 transition-all duration-300 shadow-sm group-hover:shadow-md"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-focus-within:opacity-5 transition-opacity pointer-events-none"></div>
        </div>

        {/* Right Section: Nav items */}
        <div className="flex items-center text-gray-700 gap-3 sm:gap-5">
          
          {/* Desktop Navigation */}
          <Link to="/about" className="hidden lg:block px-4 py-2 rounded-lg hover:bg-transparent hover:text-gray-800 transition-all text-sm font-semibold">About</Link>

          {/* Account Dropdown */}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="p-2.5 rounded-xl transition-all hover-lift relative group" title="Account">
              <HiOutlineUser className="text-2xl transition-colors" style={{ color: 'var(--brand)' }} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg animate-scale z-50">
                <Link to="/login" className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition-all text-sm font-medium rounded-t-lg">Login</Link>
                <Link to="/register" className="block px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition-all text-sm font-medium border-t border-gray-100 rounded-b-lg">Register</Link>
              </div>
            )}
          </div>
          
          <button className="hidden sm:flex p-2.5 rounded-xl transition-all hover-lift relative group" title="Wishlist">
            <HiOutlineHeart className="text-2xl transition-colors" style={{ color: 'var(--brand)' }} />
          </button>
          
          <Link to="/cart" className="relative group p-2.5 sm:px-5 py-2.5 bg-[var(--brand)] hover:bg-[#6f482f] text-white rounded-lg transition-all font-bold flex items-center gap-3">
            <HiOutlineShoppingCart className="text-lg" />
            {cartCount > 0 && <span className="text-sm font-black">{cartCount}</span>}
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2.5 hover:bg-blue-50 rounded-xl transition-all hover-lift relative"
          >
            {menuOpen ? (
              <HiXMark className="text-2xl animate-swing" style={{ color: 'var(--brand)' }} />
            ) : (
              <HiMiniBars3CenterLeft className="text-2xl hover:text-opacity-90 transition-colors" style={{ color: 'var(--brand)' }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Search */}
      <div className="md:hidden px-6 pb-4 border-t border-gray-200 animate-slide-down">
        <div className="relative flex group">
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 text-lg group-focus-within:text-blue-800 transition-colors" />
          <input
            type="text"
            placeholder="Search books..."
            className="bg-gray-100 group-focus-within:bg-white w-full py-3 pl-11 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 animate-slide-down bg-gray-50">
          <Link to="/about" className="block px-6 py-3 hover:text-blue-700 transition-colors font-medium">About</Link>
          <Link to="/login" className="block px-6 py-3 hover:text-blue-700 transition-colors font-medium">Login</Link>
          <Link to="/register" className="block px-6 py-3 hover:text-blue-700 transition-colors font-medium border-t border-gray-200">Register</Link>
        </div>
      )}
    </header>
  )
}

export default Navbar;
