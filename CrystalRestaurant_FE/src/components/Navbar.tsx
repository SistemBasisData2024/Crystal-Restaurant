import { useState } from "react"
import Logo from "../assets/logo.svg"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className=' border-gray-200 bg-bgsecon-100 '>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img src={Logo} className='h-8' alt='Flowbite Logo' />
          <span className='self-center whitespace-nowrap text-2xl font-semibold text-white'>
            Crystal Restaurant
          </span>
        </a>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-newwhite hover:bg-bgdull-100 focus:ring-2 focus:ring-gray-600 md:hidden'
          aria-controls='navbar-default'
          aria-expanded='false'
          onClick={() => setIsOpen(!isOpen)}
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
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
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
              <a
                href='#'
                className='block rounded bg-prim-300 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-prim-100'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded px-3 py-2 text-white hover:bg-bgdull-100 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-prim-100'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded px-3 py-2 text-white hover:bg-bgdull-100 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-prim-100'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded px-3 py-2 text-white hover:bg-bgdull-100 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-prim-100'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block rounded px-3 py-2 text-white hover:bg-bgdull-100 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-prim-100'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
