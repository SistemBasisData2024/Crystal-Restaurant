import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import Navbar from './component/Navbar.tsx'
import App from './App.tsx'
import LoginPage from './pages/LoginPage.tsx'

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/home",
        element: <App />,
      },
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <h1>404</h1>,
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)