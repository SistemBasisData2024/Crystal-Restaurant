import TableAdmin from "../components/TableAdmin"
import { useState, useEffect } from "react"

import { getAllFood } from "../actions/Food.actions"
import { addMenu } from "../actions/Menu.action"
import { deleteSession, dineIn, getSession } from "../actions/Dine.actions"
import { Link } from "react-router-dom"
import QRCode from "react-qr-code"

const URL = "http://localhost:5173"
import { makeFood } from "../actions/Food.actions"

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
    name: "",
    price: 0,
    description : "",
    imageurl : ""
  })
  const [isLoaded, setIsLoaded] = useState(false)
  const [popupAddMenu, setPopupAddMenu] = useState(false)
  const [popupSessionName, setPopupSessionName] = useState("")
  const [sessions, setSessions] = useState<string[]>([])
  const [isCombo, setIsCombo] = useState(false)


  const submitHandler = async (e: any) => {
    e.preventDefault();
  
    try {
      setIsLoaded(true);
      
      const formData = {
        name: formdata.name,
        description: formdata.description,
        price: formdata.price,
        imageurl: formdata.imageurl
      };
  
      const response = await makeFood(formData);
  
      if (response.success) {
        // Handle success
        console.log("Food successfully created:", response.data);
      } else {
        // Handle failure
        console.error("Failed to create food:", response.success);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoaded(false);
    }
  };
  
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

    fetchSessions()
  }, [])

  const fetchSessions = () => {
    getSession()
      .then((data) => {
        if (data.success) {
          setSessions(data.data)
        } else {
          throw new Error("Failed to fetch sessions")
        }
      })
      .catch((err) => {
        console.error(err)
        alert("Failed to fetch sessions")
      })
  }

  const handleCreateSession = () => {
    dineIn()
      .then((data) => {
        if (data.success) {
          alert("New session created")
          fetchSessions()
        } else {
          throw new Error("Failed to create new session")
        }
      })
      .catch((err) => {
        console.error(err)
        alert("Failed to create new session")
      })
  }

  const handleDeleteSession = (sessionName: string) => () => {
    deleteSession(sessionName)
      .then((data) => {
        if (data.success) {
          alert("Session deleted")
          fetchSessions()
          setPopupSessionName("")
        } else {
          throw new Error("Failed to delete session")
        }
      })
      .catch((err) => {
        console.error(err)
        alert("Failed to delete session")
      })
  }

  return (
    <section className='absolute left-0 top-0 -z-10 flex h-screen w-screen flex-col items-center justify-start bg-bgdull-200 pt-32 text-newwhite'>
      <h1 className=' text-center text-4xl font-bold leading-tight tracking-tight text-newwhite md:text-4xl'>
        Admin Page
      </h1>
      <div className='flex w-screen justify-center'>
        <button
          onMouseDown={handleCreateSession}
          className='hover:bg-prim-600 mt-4 rounded-lg bg-secon-500 px-4 py-2.5 text-sm font-medium text-white duration-300 hover:shadow-xl hover:shadow-secon-500 sm:px-6 sm:py-3'
        >
          Create New Session
        </button>
      </div>
      <div className='mt-4'>
        <h2 className='text-lg font-semibold text-newwhite'>
          Active Sessions:
        </h2>
        <ul className='mt-2'>
          {sessions.length > 0 ? (
            sessions.map((session) => (
              <li
                key={session}
                className='cursor-pointer text-newwhite underline'
                onMouseDown={() => setPopupSessionName(session)}
              >
                {session}
              </li>
            ))
          ) : (
            <p className='text-newwhite'>No active sessions.</p>
          )}
        </ul>
      </div>
      <div className='w-screen px-2'>
        <TableAdmin menuState={foodState} setMenuState={setFoodState} />
      </div>

      <div className='flex w-screen justify-center'>
        <button
          onMouseDown={() => setPopupAddMenu(!popupAddMenu)}
          className='hover:bg-prim-600 mt-4 rounded-lg bg-prim-500 px-4 py-2.5 font-medium text-white duration-300 hover:shadow-xl hover:shadow-prim-500 sm:px-6 sm:py-3'
        >
          Add Menu
        </button>
      </div>

      {popupAddMenu && (
        <section className='absolute left-0 top-0 flex h-screen w-screen items-center justify-center  backdrop-blur-lg '>
          <div className='relative w-full rounded-2xl border-2 border-secon-500 bg-bgsecon-100 duration-300 hover:border-prim-100 hover:shadow-xl hover:shadow-prim-500 sm:max-w-md md:mt-0 xl:p-0'>
            <button
              onMouseDown={() => setPopupAddMenu(!popupAddMenu)}
              className='absolute right-4 top-2 text-3xl text-newwhite'
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
                    value={formdata.name}
                    onChange={(e) => {
                      setFormData({ ...formdata, name: e.target.value })
                    }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='menuTitle'
                    className='mb-2 block text-sm font-medium text-newwhite'
                  >
                    description
                  </label>
                  <input
                    type='text'
                    name='description'
                    id='description'
                    className=' block w-full rounded-lg border-2 border-secon-500 bg-bgsecon-100 p-2.5 text-newwhite placeholder-gray-500 shadow focus:border-prim-300 focus:ring-prim-300 sm:text-sm'
                    placeholder='description'
                    value={formdata.description}
                    onChange={(e) => {
                      setFormData({ ...formdata, description: e.target.value })
                    }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='menuTitle'
                    className='mb-2 block text-sm font-medium text-newwhite'
                  >
                    Image Url
                  </label>
                  <input
                    type='text'
                    name='imgurl'
                    id='imgurl'
                    className=' block w-full rounded-lg border-2 border-secon-500 bg-bgsecon-100 p-2.5 text-newwhite placeholder-gray-500 shadow focus:border-prim-300 focus:ring-prim-300 sm:text-sm'
                    placeholder='imageurl'
                    value={formdata.imageurl}
                    onChange={(e) => {
                      setFormData({ ...formdata, imageurl: e.target.value })
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
                  <div className='mt-2 flex items-center'>
                    <input
                      type='checkbox'
                      id='isCombo'
                      name='isCombo'
                      onChange={(e) => setIsCombo(e.target.checked)}
                    />
                    <label
                      htmlFor='isCombo'
                      className='ml-2 text-sm font-medium text-newwhite'
                    >
                      Combo
                    </label>
                  </div>
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

      {popupSessionName && (
        <section className='absolute left-0 top-0 flex h-screen w-screen items-center justify-center  backdrop-blur-lg '>
          <div className='relative w-full rounded-2xl border-2 border-secon-500 bg-bgsecon-100 duration-300 hover:border-prim-100 hover:shadow-xl hover:shadow-prim-500 sm:max-w-md md:mt-0 xl:p-0'>
            <button
              onMouseDown={() => setPopupSessionName("")}
              className='absolute right-4 top-2 text-3xl text-newwhite'
            >
              &times;
            </button>
            <div className='space-y-8 p-6 sm:p-8'>
              <h1 className='text-center text-xl font-bold leading-tight tracking-tight text-newwhite md:text-2xl'>
                Session link:
              </h1>
              <p className='text-center text-lg font-normal text-newwhite underline'>
                <Link to={`/${popupSessionName}`}>
                  {URL}/session/{popupSessionName}
                </Link>
              </p>
              <div className='flex justify-between '>
                <button
                  className='hover:bg-prim-600 mt-4 rounded-lg bg-prim-500 px-4 py-2.5 font-medium text-white duration-300 hover:shadow-xl hover:shadow-prim-500 sm:px-6 sm:py-3'
                  onMouseDown={() =>
                    navigator.clipboard.writeText(
                      `${URL}/session/${popupSessionName}`
                    )
                  }
                >
                  Copy Link
                </button>
                <button
                  className='hover:bg-prim-600 mt-4 rounded-lg bg-prim-500 px-4 py-2.5 font-medium text-white duration-300 hover:shadow-xl hover:shadow-prim-500 sm:px-6 sm:py-3'
                  onMouseDown={handleDeleteSession(popupSessionName)}
                >
                  Delete
                </button>
              </div>
              <div className='flex flex-col items-center'>
                <h1 className='text-center text-xl font-bold leading-tight tracking-tight text-newwhite md:text-2xl'>
                  QR Code:
                </h1>
                <QRCode value={`${URL}/session/${popupSessionName}`} />
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  )
}
