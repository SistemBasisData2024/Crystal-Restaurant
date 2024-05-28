import { useContext, useState } from "react"
import { addMenu } from "../actions/Menu.action"
import menuContext from "../context/menuContext"
import Description from "./CardDetails"

export default function FoodCards(props: {
  id: number
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

  const [orderState, setOrderState] = useContext(menuContext)

  return (
    <>
      <section
        className={`w-[20em] overflow-auto rounded-[0.5em] border-2 border-bgprim-100 bg-bgsecon-200 text-[0.5rem] shadow transition-shadow duration-300 hover:shadow-xl hover:shadow-prim-500 hover:border-prim-100  md:text-[1rem]
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
            <h5 className='mb-[0.5em] line-clamp-2 min-h-[3.125em] text-[2em] font-bold tracking-tight text-newwhite md:text-[1.25em]'>
              {props.title}
            </h5>
            <p className='mb-[0.75em] text-[1.25em] font-normal text-newwhite md:text-[0.75em]'>
              {priceToIDR(props.price)}
            </p>
          </div>
        </div>
        <div
          className='mx-[1.25em] -mt-[1em] mb-[1em] inline-flex cursor-pointer items-center rounded-[0.5em] border-[0.125em] 
              border-prim-100 bg-newwhite p-[0.5em] px-[0.5em] pb-[0.5em] text-center text-[1.25em]
              font-medium text-prim-100 transition-colors duration-200 ease-out hover:bg-prim-100
              hover:text-newwhite focus:outline-none focus:ring-2 focus:ring-prim-400 md:text-[1em]'
          onClick={() => {
            addMenu(
              props.id,
              props.title,
              1,
              props.price,
              orderState,
              setOrderState
            )

            console.log(props.title)
          }}
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
            priceToIDR={priceToIDR}
          />
        )}
      </section>
    </>
  )
}
