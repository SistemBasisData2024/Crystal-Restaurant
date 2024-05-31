import { fullScreen, bgGradient } from "../../tailwinds/templates"
import FoodCardsGroup from "./components/FoodCardsGroup"

function Menu(props: {orderState: any, setOrderState:any}) {
  return (
    <div
      className={
        fullScreen() + bgGradient("t", "bgdull") + "flex flex-col items-center"
      }
    >
      <section className='flex h-fit w-screen flex-col overflow-y-visible py-8 md:w-[800px] lg:w-[1200px]'>
        <FoodCardsGroup
          orderState={props.orderState}
          setOrderState={props.setOrderState}
        />
      </section>
    </div>
  )
}

export default Menu
