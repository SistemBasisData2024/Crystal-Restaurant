import { priceToIDR } from "../actions/Algorithm"
import Table from "../components/Table"

export default function DetailsPage(props: {
  orderState: any
  setOrderState: any
}) {
  return (
    <div className=' absolute left-0 top-0 -z-10 h-screen w-screen bg-gradient-to-t from-bgdull-100 to-bgdull-200'>
      <Table orderState={props.orderState} toIDR={priceToIDR}/>
    </div>
  )
}
