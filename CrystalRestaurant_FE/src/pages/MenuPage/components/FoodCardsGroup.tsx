import FoodCards from "./FoodCards"
import Topaz from "../../../assets/maxresdefault.jpg"
import { getAllFood } from "../../../actions/Food.actions"
import { useEffect, useState } from "react";

interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageurl: string;
}

export default function FoodCardsGroup() {
  const [foods, setFood] = useState<FoodItem[]>([]);;

  const getFood = async () => {
    const apiResponse = await getAllFood();
    if (apiResponse.success) {
      console.log("Response In MainPage.jsx");
      console.log(apiResponse.data);

      setFood(apiResponse.data);
    } else {
      alert("Failed to fetch food items");
    }
  };

  useEffect(() => {
    getFood();
  }, []);

  const data = foods.map((food, index) => ({
    key : index,
    mykey : index,
    id: food.id,
    title: food.name,
    price: food.price,
    image: food.imageurl,
    description: food.description,
  }));

  // [
  //   {
  //     id: 1,
  //     title: "tes 1 asdas das daf sd asgasfgd asdfasdfas dfasd fas df",
  //     price: 100000,
  //     image: Topaz,
  //     description:
  //       "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  //   },
  //   {
  //     id: 1,
  //     title: "Tes 2",
  //     price: 10000,
  //     image:
  //       "https://drive.google.com/file/d/1DWpGAyj-Kt60OsYgHNR5BQipce3PChvc/preview",
  //     description:
  //       "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  //   },
  //   {
  //     id: 1,
  //     title: "Tes 3",
  //     price: 10000,
  //     image:
  //       "https://drive.google.com/file/d/1DWpGAyj-Kt60OsYgHNR5BQipce3PChvc/preview",
  //     description:
  //       "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  //   },
  // ]

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
        />
      ))}
    </div>
  )
}