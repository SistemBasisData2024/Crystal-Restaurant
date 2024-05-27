import { useState } from "react"
import { addMenu } from "../actions/Menu.action"

export default function FoodCards(props: {
  id: string
  title: string
  description: string
  image: string
  price: number
  mykey: number
  orderState: any
  setOrderState: any
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
      <section className='absolute left-0 top-0 z-10 h-screen w-screen text-[1rem]'>
        <div
          className={`fixed flex h-full w-full flex-col items-center justify-end rounded-[0.5em] bg-bgdull-200 bg-opacity-50 p-[0.25em] pb-0 text-newwhite backdrop-blur-lg ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-200 ease-out`}
          onLoad={() => setIsLoaded(true)}
        >
          <div
            className={`h-fit w-full rounded-t-[2em] border-2 border-b-0 border-newwhite bg-bgdull-100 p-[2em] md:w-[600px] md:p-[1em] 
        ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ease-out`}
          >
            <div className='mb-[1.25em] flex items-start justify-between'>
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
            <div className='mt-[2em] inline-flex items-center rounded-[0.5em] border-[0.125em] border-prim-100 bg-newwhite px-[0.5em] py-[0.5em] text-center text-[0.875em] font-medium text-prim-100 transition-colors duration-200 ease-out hover:bg-prim-100 hover:text-newwhite focus:outline-none focus:ring-2 focus:ring-prim-400 cursor-pointer'>
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
        className={`w-[20em] overflow-auto rounded-[0.5em] border-2 border-bgprim-100 bg-bgsecon-200 text-[0.5rem] shadow md:text-[1rem]
        `}
        id={`fc-${props.mykey}`}
      >
        <div className=' cursor-pointer' onMouseDown={() => setClicked(false)}>
          <img
            className='h-[12em] w-full rounded-t-[0.5em] object-cover object-center'
            src={props.image}
            alt={props.title}
          />
          <div className='p-[1.25em]'>
            <h5 className='mb-[0.5em] line-clamp-2 min-h-[3.125em] text-[2em] md:text-[1.25em] font-bold tracking-tight text-newwhite'>
              {props.title}
            </h5>
            <p className='mb-[0.75em] text-[1.25em] md:text-[0.75em] font-normal text-newwhite'>
              {priceToIDR(props.price)}
            </p>
          </div>
        </div>
        <div
          className='text-[1.25em] md:text-[1em] mx-[1.25em] mb-[1em] -mt-[1em] inline-flex items-center rounded-[0.5em] 
              border-[0.125em] border-prim-100 bg-newwhite p-[0.5em] px-[0.5em] pb-[0.5em] text-center
              font-medium text-prim-100 transition-colors duration-200 ease-out hover:bg-prim-100
              hover:text-newwhite focus:outline-none focus:ring-2 focus:ring-prim-400 cursor-pointer'
          onClick={() => {
            addMenu(
              props.title,
              1,
              props.orderState,
              props.setOrderState
            );

            console.log(props.title);
            }
          }
        >
          Add to cart
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
