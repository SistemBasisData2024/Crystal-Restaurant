import { Link } from "react-router-dom"

const URL = "http://localhost:5173"

export default function SessionHomePage(props: {
  sessionName: string
}) {
  return (
    <section className='absolute left-0 top-0 -z-10 flex h-screen w-screen flex-col items-center justify-start bg-bgdull-200 pt-32 text-newwhite'>
      <p className='text-center text-lg font-normal text-newwhite underline'>
        <Link to={`/${props.sessionName}`}>
          {URL}/{props.sessionName}
        </Link>
      </p>
      <div className='flex flex-row gap-4'>
        <Link to={`/${props.sessionName}/menu`}>
          <button className='rounded-md bg-green-500 p-2 text-newwhite'>
            Menu
          </button>
        </Link>
        <Link to={`/${props.sessionName}/order`}>
          <button className='rounded-md bg-green-500 p-2 text-newwhite'>
            Order
          </button>
        </Link>
        <Link to={`/${props.sessionName}/payment`}>
          <button className='rounded-md bg-green-500 p-2 text-newwhite'>
            Payment
          </button>
        </Link>
      </div>
    </section>
  )
}