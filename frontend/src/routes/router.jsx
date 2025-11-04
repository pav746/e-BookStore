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
      }
    ]
  },
])
export default router;