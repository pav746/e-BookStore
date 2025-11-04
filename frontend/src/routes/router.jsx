// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home from '../pages/Home'
// import About from '../pages/About'

import { createBrowserRouter } from "react-router-dom";
import App from "../App";


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
        element: <div>Orders Page</div>,
      },
      {
        path: "/about",
        element: <div>About Page</div>,
      }
    ]
  },
])
export default router;