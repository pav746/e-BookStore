import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold">e-BookStore</div>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>
      </div>
    </header>
  )
}
