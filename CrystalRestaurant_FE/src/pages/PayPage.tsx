import { useEffect, useState } from "react"
import { getBatch } from "../actions/Batch.actions"
import { priceToIDR } from "../actions/Algorithm"


interface Order {
  foodName: string
  foodPrice: number
  quantity: number
}

interface BackendResponse {
  total: number
  orders: Order[]
}

export default function PayPage() {
  const [orderData, setOrderData] = useState<Order[]>([])
  const [totals, setTotals] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  // const [error, setError] = useState<boolean>(false)

  const [parentLocation, setParentLocation] = useState(
    location.pathname.split("/")[1]
  )

  useEffect(() => {
    if (parentLocation !== location.pathname) {
      setParentLocation(location.pathname.split("/")[1])
    }
  }, [location.pathname])

  const fetchBatchData = async () => {
    try {
      const response = await getBatch(parentLocation)
      if (response.success) {
        const backendResponse: BackendResponse = response.data
        setOrderData(backendResponse.orders)
        setTotals(backendResponse.total)
      } else {
        throw new Error("Failed to fetch batch data")
      }
    } catch (err) {
      console.error("Error fetching batch data:", err)
      alert("Failed to fetch batch data")
      // setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBatchData()
  }, [parentLocation])

  return (
    <section className='absolute left-0 top-0 -z-10 flex h-screen w-screen flex-col items-center justify-start bg-bgdull-200 pt-32 text-newwhite'>
      <div className='container mx-auto p-4'>
        <h1 className='mb-4 text-2xl font-bold'>Batch Details</h1>
        <div className='mb-4 rounded-lg bg-bgprim-200 p-4 shadow-md'>
          <h2 className='mb-2 text-xl font-semibold'>Orders</h2>
          <table className='min-w-full bg-bgprim-200'>
            <thead>
              <tr>
                <th className='py-2'>Food Name</th>
                <th className='py-2'>Food Price</th>
                <th className='py-2'>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {loading && ( // if loading
                <tr>
                  <td colSpan={3} className='text-center font-bold text-2xl py-8'>
                    Loading...
                  </td>
                </tr>
              )}
              {orderData.map((order, index) => (
                <tr key={index}>
                  <td className='border px-4 py-2'>{order.foodName}</td>
                  <td className='border px-4 py-2'>{priceToIDR(order.foodPrice)}</td>
                  <td className='border px-4 py-2'>{order.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='rounded-lg bg-bgprim-200 p-4 shadow-md'>
          <h2 className='mb-2 text-xl font-semibold'>Totals</h2>
          <p className='text-lg'>{priceToIDR(totals)}</p>
        </div>
      </div>
    </section>
  )
}
