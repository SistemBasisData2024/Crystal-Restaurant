import { priceToIDR } from "../actions/Algorithm"
import TableEditable from "../components/TableEditable"

import { useAtom } from "jotai"
import { orderAtom } from "../main"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createBatch } from "../actions/Batch.actions"

export default function OrderPage() {
  const [orderState, setOrderState] = useAtom(orderAtom)
  const [orderSuccess, setOrderSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleOrder = () => {
    console.log(orderState)

    setIsLoading(true)

    createBatch(orderState, location.pathname.split("/")[1])
      .then((data) => {
        if (data.success) {
          // console.log(data)
          setOrderState([])
          setOrderSuccess(true)
        } else {
          throw new Error("Failed to create batch")
        }
      })
      .catch((err) => {
        console.error(err)
        alert("Failed to order")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const [parentLocation, setParentLocation] = useState(
    location.pathname.split("/")[1]
  )

  useEffect(() => {
    if (parentLocation !== location.pathname) {
      setParentLocation(location.pathname.split("/")[1])
    }
  }, [location.pathname])

  return (
    <>
      <section
        id='order-table'
        className=' absolute left-0 top-0 -z-10 h-screen w-screen flex-col bg-gradient-to-t from-bgdull-100 to-bgdull-200'
      >
        <TableEditable
          orderState={orderState}
          setOrderState={setOrderState}
          toIDR={priceToIDR}
        />

        <div className='flex justify-center'>
          <button
            className='m-4 my-12 rounded-lg bg-prim-100 px-4 py-2 font-bold text-newwhite shadow-lg'
            onMouseDown={handleOrder}
          >
            {isLoading ? "Ordering..." : "Order"}
          </button>
        </div>
      </section>

      {orderSuccess && (
        <section
          id='order-done-popup'
          className='absolute left-0 top-0 z-20 h-screen w-screen bg-black bg-opacity-25 backdrop-blur-md'
        >
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-bgsecon-100 px-8 py-4'>
            <h1 className='text-center text-2xl font-bold text-newwhite'>
              Order Done!
            </h1>
            <p className='mb-4 mt-2 text-center text-newwhite'>
              Thank you for ordering!
            </p>
            <div className='flex justify-center'>
              <button
                className='m-4 mx-auto rounded-lg bg-prim-100 px-4 py-2 font-bold text-newwhite shadow-lg'
                onMouseDown={() => {
                  navigate(`/${parentLocation}/menu`)
                }}
              >
                OK
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
