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
    console.log("context:" + context)
  }

  useEffect(() => { printContext(props.orderState) }, [])

  return (
    <>
      <h1>hellow</h1>
      {/* <h1>{orderContext[0].title}</h1> */}
    </>
  )
}