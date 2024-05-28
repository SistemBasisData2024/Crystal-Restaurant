import { useContext, useEffect } from "react"
import menuContext from "../context/menuContext"

export default function DetailsPage() {
  interface Order {
    id: number
    title: string
    price: number
    quantity: number
  }

  const [orderContext] = useContext(menuContext)

  const printContext = (context: Order[]) => {
    console.log("context:" + context)
  }
  
  useEffect(() => { printContext(orderContext) }, [])

  return (
    <>
      <h1>hellow</h1>
      {/* <h1>{orderContext[0].title}</h1> */}
    </>
  )
}