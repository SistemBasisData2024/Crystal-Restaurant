import { useState } from "react"
import Logo from "../assets/logo.svg"
import { Link } from "react-router-dom"

/**
 * 
 * @returns Navbar component
 * @var isOpen //state to check if the navbar is open or not
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [username, setUsername] = useState(localStorage.getItem("username"))

  return (
    <nav className=' sticky top-0 border-gray-200 bg-bgsecon-100 bg-opacity-90 backdrop-blur-md backdrop-filter z-20'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <Link to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img src={Logo} className='h-8' alt='Flowbite Logo' />
          <span className='self-center whitespace-nowrap text-2xl font-semibold text-white'>
            Crystal Restaurant
          </span>
        </Link>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-newwhite hover:bg-bgdull-100 focus:ring-2 focus:ring-gray-600 md:hidden'
          aria-controls='navbar-default'
          aria-expanded='false'
          onMouseDown={() => setIsOpen(!isOpen)}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='h-5 w-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div
          className={
            isOpen
              ? " block w-full md:block md:w-auto"
              : " hidden w-full md:block md:w-auto"
          }
          id='navbar-default'
        >
          <ul className='mt-4 flex flex-col rounded-lg border border-bgdull-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse'>
            <li>
              <Link
                to='/'
                className='block rounded bg-prim-300 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-prim-100'
                aria-current='page'
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to='/order'
                className='block rounded px-3 py-2 text-white hover:bg-bgdull-100 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-prim-100'
              >
                Order
              </Link>
            </li>
            <li>
              <Link
                to='/payment'
                className='block rounded px-3 py-2 text-white hover:bg-bgdull-100 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-prim-100'
              >
                Pay
              </Link>
            </li>
            <li>
              <Link
                to={username ? "/profile" : "/login"}
                className='block rounded px-3 py-2 text-white hover:bg-bgdull-100 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-prim-100'
              >
                {username ? "Profile" : "Login"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
