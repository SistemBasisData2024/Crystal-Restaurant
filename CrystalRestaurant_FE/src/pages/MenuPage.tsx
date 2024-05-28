import { fullScreen, bgGradient } from "../tailwinds/templates"
import FoodCardsGroup from "../components/FoodCardsGroup"

function Menu() {
  return (
    <div className={fullScreen() + bgGradient('t', 'bgdull') + "flex flex-col items-center"}>
      <section className="flex flex-col overflow-y-visible w-screen md:w-[800px] lg:w-[1200px] h-fit py-8">
        <FoodCardsGroup />
      </section>
    </div>
  )
}

export default Menu
