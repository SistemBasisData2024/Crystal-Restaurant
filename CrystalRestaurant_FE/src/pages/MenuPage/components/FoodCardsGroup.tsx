import FoodCards from "./FoodCards";
import { getAllFood } from "../../../actions/Food.actions";
import { useEffect, useState } from "react";
import { getAllCombo
  
 } from "../../../actions/Food.actions";
interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageurl: string;
}

interface ComboItem {
  combo_id: number;
  combo_name: string;
  combo_description: string;
  combo_price: number;
  combo_image_url: string;
  food_names: string[];
}

export default function FoodCardsGroup() {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [combos, setCombos] = useState<ComboItem[]>([]);

  const getFoodAndCombo = async () => {
    const foodResponse = await getAllFood();
    const comboResponse = await getAllCombo();

    if (foodResponse.success && comboResponse.success) {
      setFoods(foodResponse.data);
      setCombos(comboResponse.data);
    } else {
      alert("Failed to fetch food items or combos");
    }
  };

  useEffect(() => {
    getFoodAndCombo();
  }, []);

  const foodData = foods.map((food, index) => ({
    key: `food-${index}`,
    id: food.id,
    title: food.name,
    price: food.price,
    image: food.imageurl,
    description: food.description,
    isCombo: false, // explicitly set isCombo to false for food items
    foodNames: [],
  }));

  const comboData = combos.map((combo, index) => ({
    key: `combo-${index}`,
    id: combo.combo_id,
    title: combo.combo_name,
    price: combo.combo_price,
    image: combo.combo_image_url,
    description: combo.combo_description,
    isCombo: true,
    foodNames: combo.food_names,
  }));

  const combinedData = [...foodData, ...comboData];

  return (
    <div className='flex flex-wrap justify-center gap-2 md:gap-4'>
      {combinedData.map((item, index) => (
        <FoodCards
          key={item.key}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          description={item.description}
          isCombo={item.isCombo}
          foodNames={item.foodNames}
          mykey={index}
        />
      ))}
    </div>
  );
}
