import { fullScreen, bgGradient } from "../../tailwinds/templates"
import FoodCardsGroup from "./components/FoodCardsGroup"

function Menu() {
  return (
    <div
      className={
        fullScreen() + bgGradient("t", "bgdull") + "flex flex-col items-center"
      }
    >
      <section className='flex h-fit w-screen flex-col overflow-y-visible py-8 md:w-[800px] lg:w-[1200px]'>
        <FoodCardsGroup />
      </section>
    </div>
  )
}

export default Menu
