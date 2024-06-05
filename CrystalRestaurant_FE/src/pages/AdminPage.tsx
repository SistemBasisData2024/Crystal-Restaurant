import TableAdmin from "../components/TableAdmin"

export default function AdminPage() {
  return (
    <section className='absolute left-0 top-0 -z-10 flex h-screen w-screen flex-col items-center justify-start bg-bgdull-200 pt-32 text-newwhite'>
      <h1 className='mb-8 text-center text-4xl font-bold leading-tight tracking-tight text-newwhite md:text-4xl'>
        Admin Page
      </h1>
      <div className='w-screen px-2'>
        <TableAdmin />
      </div>
    </section>
  )
}
