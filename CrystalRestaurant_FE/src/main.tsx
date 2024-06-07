import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import "./index.css"

import Navbar from "./components/Navbar.tsx"

import MenuPage from "./pages/MenuPage/MenuPage.tsx"
// import ColorPalette from "./pages/ColorPalette.tsx"
import ErrorPage from "./pages/ErrorPage.tsx"
import OrderPage from "./pages/OrderPage.tsx"
import ProfilePage from "./pages/LoginRegister/ProfilePage.tsx"
import AdminPage from "./pages/AdminPage.tsx"

import { atom, Provider } from "jotai"
import { dineIn, getSession } from "./actions/Dine.actions.ts"
interface Order {
  id: number
  title: string
  price: number
  quantity: number
}

export const orderAtom = atom<Order[]>([])
export const usernameAtom = atom<string | null>(null)

function App() {
  const [sessions, setSessions] = useState<string[]>([])

  useEffect(() => {
    getSession().then((data) => {
      if (data.data) {
        setSessions(data.data)
      }
    })
  }, [])

  console.log(sessions)

  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          {sessions.map((session) => (
            <Route
              key={session}
              path={`/${session}/menu`}
              element={<MenuPage />}
            />
          ))}
          {sessions.map((session) => (
            <Route
              key={session}
              path={`/${session}/order`}
              element={<OrderPage />}
            />
          ))}
          {/* {sessions.map((session) => (
            <Route
              key={session}
              path={`/${session}/login`}
              element={<LoginPage />}
            />
          ))}
          {sessions.map((session) => (
            <Route
              key={session}
              path={`/${session}/register`}
              element={<RegisterPage />}
            />
          ))} */}
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='*' element={<ErrorPage />} />
          {/* <Route path='/color-palette' element={<ColorPalette />} /> */}
          {sessions.map((session) => (
            <Route key={session} path={`/${session}/profile`} element={<ProfilePage />} />
          ))}
          {/* <Route path='/profile/*' element={<ProfilePage />} /> */}
          <Route path='/admin' element={<AdminPage />} />
          {/* <Route path='/login/*' element={<LoginPage />} />
          <Route path='/register/*' element={<RegisterPage />} /> */}
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
