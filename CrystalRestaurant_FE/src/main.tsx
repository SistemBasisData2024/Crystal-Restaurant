import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"

import Navbar from "./components/Navbar.tsx"

import MenuPage from "./pages/MenuPage/MenuPage.tsx"
import ColorPalette from "./pages/ColorPalette.tsx"
import ErrorPage from "./pages/ErrorPage.tsx"
import LoginPage from "./pages/LoginPage.tsx"
import DetailsPage from "./pages/DetailsPage.tsx"

// import { atom, createStore, Provider } from "jotai"

// export const orderAtom = atom<Order[]>([])

// const store = createStore()

function App() {
  interface Order {
    id: number
    title: string
    price: number
    quantity: number
  }

  const [orderState, setOrderState] = useState<Order[]>([])

  // const router = createBrowserRouter([
  //   {
  //     children: [
  //       {
  //         path: "/",
  //         element: (
  //           <MenuPage orderState={orderState} setOrderState={setOrderState} />
  //         ),
  //       },
  //       {
  //         path: "/color-palette",
  //         element: <ColorPalette />,
  //       },
  //       {
  //         path: "/login",
  //         element: <LoginPage />,
  //       },
  //       {
  //         path: "/details",
  //         element: (
  //           <DetailsPage
  //             orderState={orderState}
  //             setOrderState={setOrderState}
  //           />
  //         ),
  //       },
  //       {
  //         path: "*",
  //         element: <ErrorPage />,
  //       },
  //     ],
  //   },
  // ])

  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <MenuPage orderState={orderState} setOrderState={setOrderState} />
            }
          />
          <Route
            path='/details'
            element={
              <DetailsPage orderState={orderState} setOrderState={setOrderState} />
            }
          />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/color-palette' element={<ColorPalette />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <Provider store={store}>
  <App />
  // </Provider>
)
