import React from 'react'
import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { HiSearch } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-4">
      <nav className="flex justify-between items-center h-16">
        {/* Left Section: Icon + Search */}
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center">
            <HiMiniBars3CenterLeft className="text-gray-700 text-2xl" />
          </Link>
          <div className="relative sm:w-72 w-44">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-2 pl-10 pr-3 rounded-md focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Right Section: Nav items */}
        <div className="flex items-center text-gray-700 font-medium relative md:space-x-8 gap-4">
          <HiOutlineUser className="text-2xl" />
          <button className="hidden sm:block">
            <HiOutlineHeart className="text-2xl" />
          </button>
          <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm relative">
            <HiOutlineShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-1 rounded-full">
              0
            </span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
