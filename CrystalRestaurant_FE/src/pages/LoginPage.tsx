import { useState } from "react"

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="z-10 absolute top-0 left-0 w-screen h-screen bg-white
      flex justify-center items-center
    ">
      <div className="
        md:w-[20rem] md:h-[30rem] w-[90dvw] min-h-[50dvh] bg-gradient-to-t from-red-100 to-orange-100
        rounded-xl px-12 py-6 flex flex-col justify-between
         border-orange-500 border-2 drop-shadow-lg
      ">
        <h1 className="text-2xl font-bold w-full text-center bg-orange-400 px-4 py-1 rounded-full text-white">Please Login</h1>
        <div className="flex flex-col mb-auto mt-16">
          <label className="pb-2 px-2">Username</label>
          <input onChange={() => setUsername(EventTarget.value)} type="username" className="w-full px-2 py-1 rounded-full border-red-500 border-2" />
          <label className="pb-2 pt-4 px-2">Password</label>
          <input type="password" className="w-full px-2 py-1 rounded-full border-red-500 border-2" />
        </div>

        <button className="bg-red-400 rounded-full drop-shadow text-white py-1 font-bold text-xl" onClick={() => alert('Login!')}>Login</button>
      </div>
    </div>
  )
}