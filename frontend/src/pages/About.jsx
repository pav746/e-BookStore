import React from 'react'
import { HiCheckBadge, HiTruck, HiSparkles } from 'react-icons/hi2'
import { HiHeart, HiShieldCheck } from 'react-icons/hi'

export default function About() {
  const features = [
    {
      icon: HiShieldCheck,
      title: 'Secure Checkout',
      description: 'Industry-leading security for all your transactions'
    },
    {
      icon: HiTruck,
      title: 'Fast Delivery',
      description: 'Free shipping on orders over $50. Usually arrives in 3-5 days'
    },
    {
      icon: HiHeart,
      title: 'Quality Books',
      description: 'Curated selection of authentic, high-quality books'
    },
    {
      icon: HiSparkles,
      title: 'Great Prices',
      description: 'Competitive pricing and exclusive member discounts'
    }
  ]

  return (
    <div className="animate-fade">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-purple-900 text-white py-16 mb-16">
        <div className="max-w-screen-2xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About BookHub</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Your gateway to the world of books. We believe every reader deserves access to quality literature at affordable prices.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto px-4 mb-16">
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Mission */}
          <div className="animate-slide-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-favorite rounded-full flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-3xl font-bold text-secondary">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're committed to making reading accessible and enjoyable for everyone. Our mission is to connect book lovers with the stories they crave, whether it's contemporary bestsellers, timeless classics, or niche genres.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <HiCheckBadge className="text-primary text-xl flex-shrink-0" />
                Wide selection across all genres
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <HiCheckBadge className="text-primary text-xl flex-shrink-0" />
                Competitive prices and regular discounts
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <HiCheckBadge className="text-primary text-xl flex-shrink-0" />
                Expert recommendations and reviews
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="animate-slide-right">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-favorite to-primary rounded-full flex items-center justify-center">
                <span className="text-3xl">🌟</span>
              </div>
              <h2 className="text-3xl font-bold text-secondary">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become the go-to online bookstore where readers of all ages and interests can discover, explore, and enjoy their favorite books. We envision a world where great literature is just a click away.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <HiCheckBadge className="text-favorite text-xl flex-shrink-0" />
                Growing our collection daily
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <HiCheckBadge className="text-favorite text-xl flex-shrink-0" />
                Building a vibrant reading community
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <HiCheckBadge className="text-favorite text-xl flex-shrink-0" />
                Supporting authors and publishers
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <section className="mb-16 animate-fade">
          <h2 className="text-4xl font-bold text-secondary mb-12 text-center">Why Choose BookHub?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover-lift border border-gray-100">
                  <div className="w-14 h-14 bg-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Icon className="text-2xl text-secondary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-light rounded-xl p-12 mb-16 animate-slide-left">
          <h2 className="text-3xl font-bold text-secondary mb-10 text-center">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">10K+</div>
              <p className="text-gray-700 font-semibold">Books Available</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50K+</div>
              <p className="text-gray-700 font-semibold">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100+</div>
              <p className="text-gray-700 font-semibold">Authors Featured</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">4.9★</div>
              <p className="text-gray-700 font-semibold">Average Rating</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center animate-slide-right">
          <h2 className="text-3xl font-bold text-secondary mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Have questions or suggestions? We'd love to hear from you. Our customer support team is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-favorite transition-all hover-lift">
              Contact Us
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-secondary transition-all">
              Send Feedback
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
