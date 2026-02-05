import React from 'react'
import { HiArrowRight, HiSparkles } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32 mb-12"
      style={{
        backgroundImage: "linear-gradient(rgba(27,19,16,0.45), rgba(27,19,16,0.45)), url('/assets/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-white/6 px-4 py-2 rounded-full border border-gray-100 text-sm">
              <HiSparkles className="text-amber-200 text-lg animate-bounce" style={{color: 'var(--brand)'}} />
              <span className="text-amber-100">Curated Collections</span>
            </div>

            <h1 className="hero-title">Beautiful books. Thoughtful discovery.</h1>

            <p className="hero-sub">A modern bookstore experience — clean layouts, big imagery, and delightful micro-interactions to help you find the next book you'll love.</p>

            <div className="flex gap-4 items-center">
              <button className="btn-gradient">Shop Featured</button>
              <Link to="/about" className="btn-secondary">Learn More</Link>
            </div>
          </div>

          <div className="relative">
            <div className="card-base p-6 ml-auto max-w-md">
              <img src="https://via.placeholder.com/520x700?text=Book+Cover" alt="cover" className="rounded-lg object-cover w-full h-96 mb-4" />
              <div>
                <div className="text-sm text-muted">Bestseller</div>
                <h3 className="text-xl font-bold mt-2">The Modern Reader</h3>
                <p className="text-muted mt-1">A carefully selected collection of must-reads.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { number: '10K+', label: 'Books Available', icon: '📖' },
            { number: '50K+', label: 'Happy Customers', icon: '😊' },
            { number: '24/7', label: 'Customer Support', icon: '💬' }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="text-center group cursor-pointer p-6 rounded-xl hover:bg-white/6 transition-all duration-300 backdrop-blur-sm border border-gray-100"
              style={{animation: `fadeInUp 0.6s ease-out ${idx * 0.08}s both`}}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-2xl font-black text-amber-100 mb-2">{stat.number}</div>
              <p className="text-amber-200 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
