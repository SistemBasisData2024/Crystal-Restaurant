function Navbar() {
  return (
    <nav className=' bg-bgprim-100'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <a href='/' className='flex items-center space-x-3'>
          {/* <img src="https://picsum.photos/100" className="h-8 rounded" alt="Flowbite Logo" /> */}
          <span className='self-center whitespace-nowrap text-2xl font-semibold text-newwhite'>
            Edgrant Movie
          </span>
        </a>
        <div className='w-auto' id='navbar-default'>
          <ul className='flex flex-row space-x-8 border-gray-700 font-medium'>
            <li>
              <a
                href='/'
                className='my-1 block rounded px-3 text-prim-100'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/movie/823464'
                className='my-1 block rounded px-3 text-newwhite hover:bg-prim-400'
              >
                Movie 1
              </a>
            </li>
            <li>
              <a
                href='/movie/653346'
                className='my-1 block rounded px-3 text-newwhite hover:bg-prim-400'
              >
                Movie 2
              </a>
            </li>
            <li>
              <a
                href='/movie/940721'
                className='my-1 block rounded px-3 text-newwhite hover:bg-prim-400'
              >
                Movie 2
              </a>
            </li>
            <li>
              <a href='/account' className='flex items-center space-x-3'>
                <img
                  src={"https://picsum.photos/100"}
                  className='h-8 rounded-full'
                  alt='Account'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
