import { userSignUp } from "../../actions/User.actions"
import { useState, useEffect } from "react"

export default function RegisterBox(props: {
  handleLogin: any
  changeToLogin: any
}) {
  const [formdata, setFormData] = useState({
    username: "",
    password: "",
  })
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [parentLocation, setParentLocation] = useState(
    location.pathname.split("/")[1]
  )

  useEffect(() => {
    if (parentLocation !== location.pathname) {
      setParentLocation(location.pathname.split("/")[1])
    }
  }, [location.pathname])


  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoaded(true)

    if (formdata.password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    const response = userSignUp(formdata)

    response
      .then((res) => {
        console.log(res)
        if (res.success) {
          console.log("Registration successful")
          props.handleLogin()
          return
        } else {
          throw new Error("Registration failed")
        }
      })
      .catch(() => {
        alert("Registration failed")
      })
      .finally(() => {
        setIsLoaded(false)
      })
  }

  return (
    <div className='mx-auto flex w-fit flex-col items-center justify-center px-6 py-8 md:min-w-[800px] lg:py-0'>
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
            Sign up
          </h1>
          <form className='space-y-4' onSubmit={submitHandler}>
            <div>
              <label
                htmlFor='unsername'
                className='mb-2 block text-sm font-medium text-newwhite'
              >
                Your unsername
              </label>
              <input
                type='text'
                name='unsername'
                id='unsernameRegister'
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
                id='passwordRegister'
                placeholder='••••••••'
                className=' block w-full rounded-lg border-2 border-secon-500 bg-bgsecon-100 p-2.5 text-newwhite placeholder-gray-500 shadow focus:border-prim-300 focus:ring-prim-300 sm:text-sm'
                required
                value={formdata.password}
                onChange={(e) => {
                  setFormData({ ...formdata, password: e.target.value })
                }}
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='mb-2 block text-sm font-medium text-newwhite'
              >
                Confirm Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                className=' mb-4 block w-full rounded-lg border-2 border-secon-500 bg-bgsecon-100 p-2.5 text-newwhite placeholder-gray-500 shadow focus:border-prim-300 focus:ring-prim-300 sm:text-sm'
                required
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
              />
            </div>

            <button
              type='submit'
              className='hover:bg-primary-700 hover:bg-primary-700 w-full rounded-lg bg-prim-300 px-5 py-2.5 text-center text-sm font-medium text-newwhite focus:outline-none focus:ring-4'
            >
              Register
            </button>
            <p className='text-sm font-light text-newwhite'>
              Already have an account?{" "}
              <button
                onMouseDown={props.changeToLogin}
                className='font-medium text-prim-200 hover:underline'
              >
                {isLoaded ? "Loading..." : "Sign in"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
