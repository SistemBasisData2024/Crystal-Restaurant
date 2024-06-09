import { useState } from "react";
import { addMenu } from "../../../actions/Menu.action";
import Description from "./CardDetails";
import { priceToIDR } from "../../../actions/Algorithm";
import { useAtom } from "jotai";
import { orderAtom } from "../../../main";

interface FoodCardsProps {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  mykey: number;
  isCombo?: boolean;
  foodNames?: string[];
}

export default function FoodCards({
  id,
  title,
  description,
  image,
  price,
  mykey,
  isCombo = false,
  foodNames = [],
}: FoodCardsProps) {
  const [clicked, setClicked] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const [orderState, setOrderState] = useAtom(orderAtom);

  return (
    <>
      <section
        className={`w-[20em] overflow-auto rounded-[0.5em] border-2 border-bgprim-100 bg-bgsecon-200 text-[0.5rem] shadow transition-shadow duration-300 hover:border-prim-100 hover:shadow-xl hover:shadow-prim-500  md:text-[1rem]`}
        id={`fc-${mykey}`}
      >
        <div className='cursor-pointer' onMouseDown={() => setClicked(false)}>
          <img
            className={`h-[12em] w-full rounded-t-[0.5em] object-cover object-center font-bold text-newwhite ${
              isLoaded ? "" : "p-4"
            }`}
            src={image}
            alt={isLoaded ? title : "loading..."}
            onLoad={() => setIsLoaded(true)}
          />
          <div className='p-[1.25em]'>
            <h5 className='mb-[0.5em] line-clamp-2 min-h-[3.125em] text-[2em] font-bold tracking-tight text-newwhite md:text-[1.25em]'>
              {title}
            </h5>
            <p className='mb-[0.75em] text-[1.25em] font-normal text-newwhite md:text-[0.75em]'>
              {priceToIDR(price)}
            </p>
            {isCombo && (
              <ul className='mb-[0.75em] text-[1.25em] font-normal text-newwhite md:text-[0.75em]'>
                {foodNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <button
          className='mx-[1.25em] -mt-[1em] mb-[1em] inline-flex cursor-pointer items-center rounded-[0.5em] border-[0.125em] 
              border-prim-100 bg-newwhite p-[0.5em] px-[0.5em] pb-[0.5em] text-center text-[1.25em]
              font-medium text-prim-100 transition-colors duration-200 ease-out hover:bg-prim-100
              hover:text-newwhite focus:outline-none focus:ring-2 focus:ring-prim-400 md:text-[1em]'
          onClick={() => {
            addMenu(
              id,
              title,
              1,
              price,
              orderState,
              setOrderState,
              isCombo // Pass isCombo to addMenu
            );
            console.log(title);
          }}
        >
          Add to cart
        </button>

        {!clicked && (
          <Description
            title={title}
            price={price}
            image={image}
            description={description}
            mykey={mykey}
            clicked={clicked}
            setClicked={setClicked} // Corrected prop name
            priceToIDR={priceToIDR}
          />
        )}
      </section>
    </>
  );
}
