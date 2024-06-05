import { useAtom } from "jotai"
import { Link } from "react-router-dom"
import { usernameAtom } from "../main"

export default function ProfilePage() {
  const [username, setUsername] = useAtom(usernameAtom)

  return (
    <section className='absolute flex flex-col justify-start pt-32 items-center left-0 top-0 -z-10 h-screen w-screen bg-bgdull-200 text-newwhite'>
      <h1 className='text-center text-4xl mb-8 font-bold leading-tight tracking-tight text-newwhite md:text-4xl'>
        Profile Page
      </h1>
      <p
        id='profile-username'
        className='text-center text-lg font-semibold text-newwhite md:text-lg'
      >
        Username: {username}
      </p>
      <p 
        id='points'
        className='text-center my-4 text-lg font-semibold text-newwhite md:text-lg'
      >
        Points: 0
      </p>
      <Link
        to='/login'
        className='mb-12 mt-auto rounded bg-prim-100 px-4 py-2 text-center  text-lg font-semibold text-newwhite shadow md:text-lg'
        onMouseDown={() => setUsername("")}
      >
        Logout
      </Link>
    </section>
  )
}
