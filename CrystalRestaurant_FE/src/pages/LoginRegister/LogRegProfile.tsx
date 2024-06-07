import { useState } from "react"
import LoginBox from "./LoginBox"
import RegisterBox from "./RegisterBox"
import ProfilePage from "./ProfilePage"

export default function LogRegProfile(props: {
  handleLogin: any
  username: string | null
  setOpenLogRegProfile: any
}) {
  const [loginOrRegister, setLoginOrRegister] = useState("login")

  const changeToRegister = () => {
    setLoginOrRegister("register")
  }

  const changeToLogin = () => {
    setLoginOrRegister("login")
  }

  return (
    <section className='absolute left-0 top-0 z-20 h-screen w-screen backdrop-blur-lg flex items-center'>
      <div className='relative w-screen backdrop-blur-sm flex flex-col items-center '>
        {props.username ? (
          <ProfilePage />
        ) : loginOrRegister === "login" ? (
          <LoginBox
            handleLogin={props.handleLogin}
            changeToRegister={changeToRegister}
          />
        ) : (
          <RegisterBox
            handleLogin={props.handleLogin}
            changeToLogin={changeToLogin}
          />
        )}
        <button
          className='z-20 p-4 text-2xl text-white hover:bg-red-500 hover:text-white drop-shadow-lg'
          onMouseDown={() => props.setOpenLogRegProfile(false)}
        >
          X
        </button>
      </div>
    </section>
  )
}
