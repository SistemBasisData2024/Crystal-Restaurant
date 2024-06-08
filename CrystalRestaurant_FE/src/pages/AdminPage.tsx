import TableAdmin from "../components/TableAdmin"
import { useState, useEffect } from "react"

import { getAllFood } from "../actions/Food.actions"
import { addMenu } from "../actions/Menu.action"

interface FoodItem {
  id: number
  name: string
  description: string
  price: number
  imageurl: string
}

export default function AdminPage() {
  const [foodState, setFoodState] = useState<FoodItem[]>([])
  const [formdata, setFormData] = useState({
    menuId: 8,
    menuTitle: "",
    count: 1,
    price: 0,
  })
  const [isLoaded, setIsLoaded] = useState(false)
  const [popupAddMenu, setPopupAddMenu] = useState(false)

  const submitHandler = (e: any) => {
    e.preventDefault()
    setIsLoaded(true)
    addMenu(
      formdata.menuId,
      formdata.menuTitle,
      formdata.count,
      formdata.price,
      foodState,
      setFoodState
    )
    setIsLoaded(false)
  }

  useEffect(() => {
    getAllFood()
      .then((data) => {
        if (data.success) {
          console.log("Response In MainPage.jsx")
          console.log(data.data)

          setFoodState(data.data)
        } else {
          alert("Failed to fetch food items")
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <section className='absolute left-0 top-0 -z-10 flex h-screen w-screen flex-col items-center justify-start bg-bgdull-200 pt-32 text-newwhite'>
      <h1 className='mb-8 text-center text-4xl font-bold leading-tight tracking-tight text-newwhite md:text-4xl'>
        Admin Page
      </h1>
      <div className='w-screen px-2'>
        <TableAdmin menuState={foodState} setMenuState={setFoodState} />
      </div>

      <div className='flex w-screen justify-center'>
        <button
          onClick={() => setPopupAddMenu(!popupAddMenu)}
          className='hover:bg-prim-600 mt-4 rounded-lg bg-prim-500 px-4 py-2.5 font-medium text-white duration-300 hover:shadow-xl hover:shadow-prim-500 sm:px-6 sm:py-3'
        >
          Add Menu
        </button>
      </div>

      {popupAddMenu && (
        <section className='absolute top-0 left-0 flex h-screen w-screen items-center justify-center  backdrop-blur-lg '>
          <div className='relative w-full rounded-2xl border-2 border-secon-500 bg-bgsecon-100 duration-300 hover:border-prim-100 hover:shadow-xl hover:shadow-prim-500 sm:max-w-md md:mt-0 xl:p-0'>
            <button
              onClick={() => setPopupAddMenu(!popupAddMenu)}
              className='absolute top-2 right-4 text-3xl text-newwhite'
            >
              &times;
            </button>
            <div className='space-y-8 p-6 sm:p-8'>
              <h1 className='text-center text-xl font-bold leading-tight tracking-tight text-newwhite md:text-2xl'>
                Add new item to menu
              </h1>
              <form className='space-y-4' onSubmit={submitHandler}>
                <div>
                  <label
                    htmlFor='menuTitle'
                    className='mb-2 block text-sm font-medium text-newwhite'
                  >
                    Menu Title
                  </label>
                  <input
                    type='text'
                    name='menuTitle'
                    id='menuTitleLogin'
                    className=' block w-full rounded-lg border-2 border-secon-500 bg-bgsecon-100 p-2.5 text-newwhite placeholder-gray-500 shadow focus:border-prim-300 focus:ring-prim-300 sm:text-sm'
                    placeholder='menuTitle'
                    value={formdata.menuTitle}
                    onChange={(e) => {
                      setFormData({ ...formdata, menuTitle: e.target.value })
                    }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='price'
                    className='mb-2 block text-sm font-medium text-newwhite'
                  >
                    Price (IDR)
                  </label>
                  <input
                    type='number'
                    name='price'
                    id='priceLogin'
                    className=' block w-full rounded-lg border-2 border-secon-500 bg-bgsecon-100 p-2.5 text-newwhite placeholder-gray-500 shadow focus:border-prim-300 focus:ring-prim-300 sm:text-sm'
                    placeholder='price'
                    value={formdata.price}
                    onChange={(e) => {
                      setFormData({
                        ...formdata,
                        price: parseInt(e.target.value),
                      })
                    }}
                    required
                  />
                  <div className='flex justify-center'>
                    <button
                      type='submit'
                      className='hover:bg-prim-600 mt-4 rounded-lg bg-prim-500 px-4 py-2.5 font-medium text-white duration-300 hover:shadow-xl hover:shadow-prim-500 sm:px-6 sm:py-3'
                    >
                      {isLoaded ? "Loading..." : "Add Menu"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </section>
  )
}
