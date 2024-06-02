import { priceToIDR } from "../actions/Algorithm"
import Table from "../components/Table"

import { useAtom } from "jotai"
import { orderAtom } from "../main"


export default function DetailsPage() {
  const [orderState, setOrderState] = useAtom(orderAtom)

  return (
    <div className=' absolute left-0 top-0 -z-10 h-screen w-screen bg-gradient-to-t from-bgdull-100 to-bgdull-200'>
      <Table orderState={orderState} toIDR={priceToIDR}/>
    </div>
  )
}
