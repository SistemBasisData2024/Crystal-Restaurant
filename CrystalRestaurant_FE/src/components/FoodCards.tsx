import { useState } from "react"

export default function FoodCards(props: {
  title: string
  description: string
  image: string
  price: number
  mykey: number
}) {
  const [clicked, setClicked] = useState(true)

  function priceToIDR(price: number): string {
    const converted: string = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price)
    return converted
  }

  const Description = (props: {
    title: string
    description: string
    image: string
    price: number
    mykey: number
    clicked: boolean
    setCLicked: (value: boolean) => void
  }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
      <section className='h-screen w-screen z-10 absolute top-0 left-0 text-[1rem]'>
        <div
          className={`fixed h-full w-full flex flex-col items-center justify-end rounded-[0.5em] bg-bgdull-200 bg-opacity-50 p-[0.25em] pb-0 text-newwhite backdrop-blur-lg ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-200 ease-out`}
          onLoad={() => setIsLoaded(true)}
        >
          <div
            className={`h-fit w-full rounded-t-[2em] border-2 border-b-0 border-newwhite bg-bgdull-100 p-[2em] md:w-[600px] md:p-[1em] 
        ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-out`}
          >
            <div className='mb-[1.25em] flex items-center justify-between'>
              <h5 className='text-[1.25em] font-bold tracking-tight text-newwhite'>
                {props.title}
              </h5>
              <h1
                className='size-[1em] cursor-pointer'
                onClick={() => {
                  setIsLoaded(false)
                  setTimeout(() => {
                    props.setCLicked(true)
                  }, 200)
                }}
              >
                X
              </h1>
            </div>
            <p className='mb-[2em] text-[0.875em] font-normal text-newwhite'>
              {priceToIDR(props.price)}
            </p>
            <img
              className='h-[12em] w-full rounded-[0.5em] object-cover object-center'
              src={props.image}
              alt={props.title}
            />
            <p className='line-clamp-3 text-[0.875em] font-normal text-newwhite'>
              {props.description}
            </p>
            <div className='mt-[2em] inline-flex items-center rounded-[0.5em] border-[0.125em] border-prim-100 bg-newwhite px-[0.5em] py-[0.5em] text-center text-[0.875em] font-medium text-prim-100 transition-colors duration-200 ease-out hover:bg-prim-100 hover:text-newwhite focus:outline-none focus:ring-2 focus:ring-prim-400'>
              Add to cart
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section
        className={`w-[20em] overflow-auto rounded-[0.5em] border border-bgdull-100 bg-bgdull-200 text-[0.5rem] shadow md:text-[1rem] 
        `}
        onMouseDown={() => setClicked(false)}
        id={`fc-${props.mykey}`}
      >
        <img
          className='h-[12em] w-full rounded-t-[0.5em] object-cover object-center'
          src={props.image}
          alt={props.title}
        />
        <div className='p-[1.25em]'>
          <h5 className='mb-[0.5em] line-clamp-2 min-h-[3.125em] text-[1.25em] font-bold tracking-tight text-newwhite'>
            {props.title}
          </h5>
          <p className='mb-[0.75em] text-[0.75em] font-normal text-newwhite'>
            {priceToIDR(props.price)}
          </p>
          <div
            className='inline-flex items-center rounded-[0.5em] border-[0.125em] border-prim-100 bg-newwhite 
          px-[0.5em] py-[0.5em] text-center text-[0.875em] font-medium text-prim-100 transition-colors duration-200 
          ease-out hover:bg-prim-100 hover:text-newwhite focus:outline-none focus:ring-2 focus:ring-prim-400'
          >
            Add to cart
          </div>
        </div>

        {!clicked && (
          <Description
            title={props.title}
            price={props.price}
            image={props.image}
            description={props.description}
            mykey={props.mykey}
            clicked={clicked}
            setCLicked={setClicked}
          />
        )}
      </section>
    </>
  )
}
