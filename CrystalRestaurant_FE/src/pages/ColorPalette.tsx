export default function ColorPalette() {
  return (
    <div className='flex h-screen w-screen'>
      <div className=' h-full w-1/3 bg-gradient-to-t from-bgdull-100 to-bgdull-200 ' />
      <div className=' h-full w-1/3 bg-gradient-to-t from-bgprim-100 to-bgprim-200 ' />
      <div className=' h-full w-1/3 bg-gradient-to-t from-bgsecon-100 to-bgsecon-200 ' />
      <div className='absolute flex h-screen w-screen justify-center align-middle'>
        <div className='flex h-screen w-1/6 flex-col justify-center gap-2 text-center align-middle  '>
          <h1 className=' bg-prim-100 text-newwhite'>bg-prim-100</h1>
          <h1 className=' bg-prim-200 text-newwhite'>bg-prim-200</h1>
          <h1 className=' bg-prim-300 text-newwhite'>bg-prim-300</h1>
          <h1 className=' bg-prim-400 text-newwhite'>bg-prim-400</h1>
          <h1 className=' bg-prim-500 text-newwhite'>bg-prim-500</h1>

          <h1 className=' bg-secon-100 text-newwhite'>bg-secon-100</h1>
          <h1 className=' bg-secon-200 text-newwhite'>bg-secon-200</h1>
          <h1 className=' bg-secon-300 text-newwhite'>bg-secon-300</h1>
          <h1 className=' bg-secon-400 text-newwhite'>bg-secon-400</h1>
          <h1 className=' bg-secon-500 text-newwhite'>bg-secon-500</h1>

          <h1 className=' py-auto h-24 bg-bgprim-100 text-newwhite'>
            bg-bgprim-100
          </h1>
          <h1 className=' py-auto h-24 bg-bgprim-200 text-newwhite'>
            bg-bgprim-200
          </h1>
          <h1 className=' py-auto h-24 bg-bgsecon-100 text-newwhite'>
            bg-bgsecon-100
          </h1>
          <h1 className=' py-auto h-24 bg-bgsecon-200 text-newwhite'>
            bg-bgsecon-200
          </h1>
          <h1 className=' py-auto h-24 bg-newblack text-newwhite'>
            bg-newblack
          </h1>
        </div>
      </div>
    </div>
  )
}
