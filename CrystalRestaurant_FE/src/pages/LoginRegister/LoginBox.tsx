import { userLogin } from "../../actions/User.actions"
import { useState } from "react"
import { useAtom } from "jotai"
import { usernameAtom } from "../../main"
import { useNavigate } from "react-router-dom"

export default function LoginBox(props: { handleLogin: any; changeToRegister: any }) {
  const [formdata, setFormData] = useState({
    username: "",
    password: "",
  })
  const [isLoaded, setIsLoaded] = useState(false)
  const [_, setUsername] = useAtom(usernameAtom)
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoaded(true)

    userLogin(formdata)
      .then((res) => {
        if (res.success) {
          console.log("Login successful")
          setUsername(formdata.username)
          props.handleLogin()
          if(res.data.isadmin){
            navigate("/admin");
          }
        } else {
          throw new Error("Login failed")
        }
      })
      .catch(() => {
        alert("Login failed")
      })
      .finally(() => {
        setIsLoaded(false)
      })
  }

  return (
    <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 md:min-w-[800px] lg:py-0'>
      {/* <a
          href='#'
          className='mb-6 hidden items-center text-2xl font-semibold text-newwhite md:flex'
        >
          <img className='mr-2 h-8 w-8' src={logo} alt='logo' />
          Crystal Restaurant
        </a> */}
      <div className='w-full rounded-2xl border-2 border-secon-500 bg-bgsecon-100 duration-300 hover:border-prim-100 hover:shadow-xl hover:shadow-prim-500 sm:max-w-md md:mt-0 xl:p-0'>
        <div className='space-y-8 p-6 sm:p-8'>
          <h1 className='text-center text-xl font-bold leading-tight tracking-tight text-newwhite md:text-2xl'>
            Sign in to your account
          </h1>
          <form className='space-y-4' onSubmit={submitHandler}>
            <div>
              <label
                htmlFor='username'
                className='mb-2 block text-sm font-medium text-newwhite'
              >
                Your username
              </label>
              <input
                type='text'
                name='username'
                id='usernameLogin'
                className=' block w-full rounded-lg border-2 border-secon-500 bg-bgsecon-100 p-2.5 text-newwhite placeholder-gray-500 shadow focus:border-prim-300 focus:ring-prim-300 sm:text-sm'
                placeholder='username'
                value={formdata.username}
                onChange={(e) => {
                  setFormData({ ...formdata, username: e.target.value })
                }}
                required
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='mb-2 block text-sm font-medium text-newwhite'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                id='passwordLogin'
                placeholder='••••••••'
                className=' block w-full rounded-lg border-2 border-secon-500 bg-bgsecon-100 p-2.5 text-newwhite placeholder-gray-500 shadow focus:border-prim-300 focus:ring-prim-300 sm:text-sm'
                required
                value={formdata.password}
                onChange={(e) => {
                  setFormData({ ...formdata, password: e.target.value })
                }}
              />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-start' />
              <a
                href='#'
                className='text-sm font-medium text-prim-200 hover:underline'
              >
                Forgot password?
              </a>
            </div>
            <button
              type='submit'
              className='hover:bg-primary-700 hover:bg-primary-700 w-full rounded-lg bg-prim-300 px-5 py-2.5 text-center text-sm font-medium text-newwhite focus:outline-none focus:ring-4'
            >
              {isLoaded ? "Loading..." : "Sign in"}
            </button>
            <p className='text-sm font-light text-newwhite'>
              Don’t have an account yet?{" "}
              <button
                onMouseDown={props.changeToRegister}
                className='font-medium text-prim-200 hover:underline'
              >
                Sign up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
