import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

import Navbar from "./components/Navbar.tsx"

import MenuPage from "./pages/MenuPage.tsx"
import ColorPalette from "./pages/ColorPalette.tsx"
import ErrorPage from "./pages/ErrorPage.tsx"
import LoginPage from "./pages/LoginPage.tsx"

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <MenuPage />,
      },
      {
        path: "/color-palette",
        element: <ColorPalette />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
)
