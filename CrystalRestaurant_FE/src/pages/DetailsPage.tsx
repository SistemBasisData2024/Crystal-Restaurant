import { useEffect } from "react"
// import { useAtom } from "jotai"
// import { orderAtom } from "../main"

export default function DetailsPage(props: { orderState: any; setOrderState: any }) {
  interface Order {
    id: number
    title: string
    price: number
    quantity: number
  }

  // const [orderContext, setOrderContext] = useState<Order[]>()

  const printContext = (context: Order[]) => {
    console.table(context)
  }

  useEffect(() => { printContext(props.orderState) }, [])

  return (
    <div className="container mx-auto mt-4 p-4 text-white bg-bgdull-100 rounded-lg shadow-lg  
    ">
      {/* <h1>hellow</h1> */}
      {/* <h1>{orderContext[0].title}</h1> */}
      <div className=" font-bold flex justify-between items-center border-b-2 border-dashed border-prim-100 p-2">
        <h2>Item</h2>
        <p>Price</p>
        <p>Quantity</p>
      </div>
      {props.orderState.map((order: Order, index: number) => (
        <div key={index} className="
          flex justify-between items-center border-b-2 border-dashed border-prim-100 p-2
        ">
          <h2>{order.title}</h2>
          <p>{order.price}</p>
          <p>{order.quantity}</p>
        </div>
      ))}
    </div>
  )
}