import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

import menuContext from "./context/menuContext.ts"

import Navbar from "./components/Navbar.tsx"

import MenuPage from "./pages/MenuPage.tsx"
import ColorPalette from "./pages/ColorPalette.tsx"
import ErrorPage from "./pages/ErrorPage.tsx"
import LoginPage from "./pages/LoginPage.tsx"
import DetailsPage from "./pages/DetailsPage.tsx" 

interface Order {
  id: number
  title: string
  price: number
  quantity: number
}

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
        path: "/details",
        element: <DetailsPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
])


function App() {
  const [order, setOrder] = useState<Order[]>([])

  return (
    <React.StrictMode>
      <menuContext.Provider value={[order, setOrder]}>
        <Navbar />
        <RouterProvider router={router} />
      </menuContext.Provider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />)