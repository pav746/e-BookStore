//import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import AppRoutes from './routes/router'

function App() {
 
  return (
    <>
      <nav>Navbar</nav>
    <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
      <Outlet />
    </main>
    <footer>Footer</footer>
    </>
   
  )
}

export default App
