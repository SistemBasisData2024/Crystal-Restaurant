import FoodCards from "./FoodCards"

export default function FoodCardsGroup() {
  const data = [
    {
      title:
        "Topaz Custom Cake yCake yang dibuat pake red velvet dan toppingCake yang dibuat pake red velvet dan toppingang dibuat pake red velvet dan topping buah segar",
      price: 100000,
      image: "https://picsum.photos/seed/picsum/200/300",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      title: "Tes 2",
      price: 10000,
      image: "https://picsum.photos/seed/picsum/200/300",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      title: "Tes 3",
      price: 10000,
      image: "https://picsum.photos/seed/picsum/200/300",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      title: "Tes 4",
      price: 10000,
      image: "https://picsum.photos/seed/picsum/200/300",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      title: "Tes 5",
      price: 10000,
      image: "https://picsum.photos/seed/picsum/200/300",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      title: "Tes 6",
      price: 10000,
      image: "https://picsum.photos/seed/picsum/200/300",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ]

  return (
    <div className='flex gap-2 md:gap-4 justify-center flex-wrap'>
      {data.map((item, index) => (
        <FoodCards
          mykey={index}
          key={index}
          title={item.title}
          price={item.price}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  ) 
}