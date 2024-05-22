export default function ColorPalette() {
  return (
    <div className="flex w-screen h-screen">
      <div className=" bg-gradient-to-t from-bgdull-100 to-bgdull-200 w-1/3 h-full " />
      <div className=" bg-gradient-to-t from-bgprim-100 to-bgprim-200 w-1/3 h-full " />
      <div className=" bg-gradient-to-t from-bgsecon-100 to-bgsecon-200 w-1/3 h-full " />
      <div className="flex justify-center align-middle h-screen w-screen absolute">
        <div className="flex flex-col w-1/6 text-center h-screen justify-center align-middle gap-2 ">
          <h1 className=" text-newwhite bg-prim-100">bg-prim-100</h1>
          <h1 className="text-newwhite bg-prim-200">bg-prim-200</h1>
          <h1 className="text-newwhite bg-prim-300">bg-prim-300</h1>
          <h1 className="text-newwhite bg-prim-400">bg-prim-400</h1>
          <h1 className="text-newwhite bg-prim-500">bg-prim-500</h1>
          
          <h1 className=" text-newwhite bg-secon-100">bg-secon-100</h1>
          <h1 className="text-newwhite bg-secon-200">bg-secon-200</h1>
          <h1 className="text-newwhite bg-secon-300">bg-secon-300</h1>
          <h1 className="text-newwhite bg-secon-400">bg-secon-400</h1>
          <h1 className="text-newwhite bg-secon-500">bg-secon-500</h1>

          <h1 className=" text-newwhite bg-bgprim-100 py-auto h-24">bg-bgprim-100</h1>
          <h1 className=" text-newwhite bg-bgprim-200 py-auto h-24">bg-bgprim-200</h1>
          <h1 className=" text-newwhite bg-bgsecon-100 py-auto h-24">bg-bgsecon-100</h1>
          <h1 className=" text-newwhite bg-bgsecon-200 py-auto h-24">bg-bgsecon-200</h1>
          <h1 className=" text-newwhite bg-newblack py-auto h-24">bg-newblack</h1>
        </div>

      </div>
    </div>
  )
}