// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home from '../pages/Home'
// import About from '../pages/About'

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <div className="min-h-screen">Orders Page</div>,
      },
      {
        path: "/cart",
        element: <div className="min-h-screen">Shopping Cart</div>,
      },
      {
        path: "/about",
        element: <About />,
      }
    ]
  },
])
export default router;