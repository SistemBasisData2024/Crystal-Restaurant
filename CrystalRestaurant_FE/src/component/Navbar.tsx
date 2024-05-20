export default function Navbar() {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-900">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:text-blue-500 md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:text-blue-500 md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:text-blue-500 md:dark:hover:bg-transparent">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:text-blue-500 md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}