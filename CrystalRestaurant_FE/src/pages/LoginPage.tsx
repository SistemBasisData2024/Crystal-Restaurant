import logo from '../assets/logo.svg'

export default function LoginPage() {
  return (
    <section className='bg-bgdull-200 absolute top-0 left-0 -z-10 w-screen h-screen'>
      <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 h-screen lg:py-0'>
        <a
          href='#'
          className='mb-6 hidden md:flex items-center text-2xl font-semibold text-newwhite'
        >
          <img
            className='mr-2 h-8 w-8'
            src={logo}
            alt='logo'
          />
          Crystal Restaurant
        </a>
        <div className='w-full rounded-2xl border-2 border-secon-500 bg-bgsecon-100 shadow sm:max-w-md md:mt-0 xl:p-0'>
          <div className='space-y-8 p-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-center text-newwhite md:text-2xl'>
              Sign in to your account
            </h1>
            <form className='space-y-4' action='#'>
              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium text-newwhite'
                >
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className=' block w-full rounded-lg border-2 border-secon-500 bg-bgsecon-100 p-2.5 text-newwhite placeholder-gray-500 shadow focus:border-prim-300 focus:ring-prim-300 sm:text-sm'
                  placeholder='name@company.com'
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
                  id='password'
                  placeholder='••••••••'
                  className=' block w-full rounded-lg border-2 border-secon-500 bg-bgsecon-100 p-2.5 text-newwhite placeholder-gray-500 shadow focus:border-prim-300 focus:ring-prim-300 sm:text-sm'
                  required
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex h-5 items-center'>
                    <input
                      id='remember'
                      aria-describedby='remember'
                      type='checkbox'
                      className='focus:ring-3 h-4 w-4 rounded border-2 border-secon-500 bg-bgsecon-100 ring-offset-bgsecon-200'
                      required
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label htmlFor='remember' className='text-newwhite'>
                      Remember me
                    </label>
                  </div>
                </div>
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
                Sign in
              </button>
              <p className='text-sm font-light text-newwhite'>
                Don’t have an account yet?{" "}
                <a
                  href='#'
                  className='font-medium text-prim-200 hover:underline'
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
