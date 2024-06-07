import { useAtom } from "jotai"
import { usernameAtom } from "../../main"

export default function ProfilePage() {
  const [username, setUsername] = useAtom(usernameAtom)

  return (
    <div className='mx-auto flex flex-col w-fit items-center justify-center px-6 py-8 md:min-w-[800px] lg:py-0'>
      <div className='w-full rounded-2xl border-2 border-secon-500 bg-bgsecon-100 duration-300 hover:border-prim-100 hover:shadow-xl hover:shadow-prim-500 sm:max-w-md md:mt-0 xl:p-0 my-4 flex flex-col items-center'>
        <h1 className='my-8 text-center text-4xl font-bold leading-tight tracking-tight text-newwhite md:text-4xl'>
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
          className='my-4 text-center text-lg font-semibold text-newwhite md:text-lg'
        >
          Points: 0
        </p>
        <button
          className='mb-12 mt-auto rounded bg-prim-100 px-4 py-2 text-center  text-lg font-semibold text-newwhite shadow md:text-lg'
          onMouseDown={() => setUsername("")}
        >
          Logout
        </button>
      </div>
    </div>
  )
}
