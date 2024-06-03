import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"

import Navbar from "./components/Navbar.tsx"

import MenuPage from "./pages/MenuPage/MenuPage.tsx"
import ColorPalette from "./pages/ColorPalette.tsx"
import ErrorPage from "./pages/ErrorPage.tsx"
import LoginPage from "./pages/LoginPage.tsx"
import OrderPage from "./pages/OrderPage.tsx"
import RegisterPage from "./pages/RegisterPage.tsx"

import { atom, /*createStore,*/ Provider } from "jotai"

interface Order {
  id: number
  title: string
  price: number
  quantity: number
}

export const orderAtom = atom<Order[]>([])

// const store = createStore()

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MenuPage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/color-palette' element={<ColorPalette />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <Provider store={store}>
  <Provider>
    <App />
  </Provider>
)
