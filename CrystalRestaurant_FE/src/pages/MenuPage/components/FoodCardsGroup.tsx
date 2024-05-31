import FoodCards from "./FoodCards"
import Topaz from "../../../assets/maxresdefault.jpg"

export default function FoodCardsGroup(props: { orderState: any; setOrderState: any }) {
  const data = [
    {
      id: 1,
      title: "tes 1",
      price: 100000,
      image: Topaz,
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 1,
      title: "Tes 2",
      price: 10000,
      image: "https://picsum.photos/seed/picsum/200/300",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 1,
      title: "Tes 3",
      price: 10000,
      image: "https://picsum.photos/seed/picsum/200/300",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ]

  return (
    <div className='flex flex-wrap justify-center gap-2 md:gap-4'>
      {data.map((item, index) => (
        <FoodCards
          id={item.id}
          mykey={index}
          key={index}
          title={item.title}
          price={item.price}
          image={item.image}
          description={item.description}
          orderState={props.orderState}
          setOrderState={props.setOrderState}
        />
      ))}
    </div>
  )
}