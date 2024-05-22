function Navbar() {
  return (
    <nav className="bg-indigo-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          {/* <img src="https://picsum.photos/100" className="h-8 rounded" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Edgrant Movie</span>
        </a>
        <div className="w-auto" id="navbar-default">
          <ul className="font-medium flex flex-row space-x-8 border-gray-700">
            <li>
              <a href="/" className="block px-3 text-blue-300 rounded" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/movie/823464" className="block px-3 rounded text-white hover:bg-gray-700">Movie 1</a>
            </li>
            <li>
              <a href="/movie/653346" className="block px-3 rounded text-white hover:bg-gray-700">Movie 2</a>
            </li>
            <li>
              <a href="/movie/940721" className="block px-3 rounded text-white hover:bg-gray-700">Movie 2</a>
            </li>
            <li>
              <a href="/account" className="flex items-center space-x-3">
                <img src={ "https://picsum.photos/100" } className="h-8 rounded-full" alt="Account" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar