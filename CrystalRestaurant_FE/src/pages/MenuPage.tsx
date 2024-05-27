import { fullScreen, bgGradient } from "../tailwinds/templates"
import FoodCardsGroup from "../components/FoodCardsGroup"
import { useState } from "react"

function Menu() {
  interface Order {
    title: string
    price: number
    quantity: number
  }

  const [orderState, setOrderState] = useState<Order[]>([])

  return (
    <div className={fullScreen() + bgGradient('t', 'bgdull') + "flex flex-col items-center"}>
      <section className="flex flex-col overflow-y-visible w-screen md:w-[800px] lg:w-[1200px] h-fit py-8">
        <FoodCardsGroup orderState={orderState} setOrderState={setOrderState} />
      </section>
    </div>
  )
}

export default Menu
