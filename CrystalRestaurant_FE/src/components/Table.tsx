export default function Table(props: {
  orderState: any
  toIDR: (price: number) => string
}) {
  const RowHead = () => {
    return (
      <tr>
        <th scope='col' className='px-6 py-3'>
          Title
        </th>
        <th scope='col' className='hidden px-6 py-3 md:inline'>
          Price
        </th>
        <th scope='col' className='hidden px-6 py-3 md:inline'>
          Quantity
        </th>
        <th scope='col' className='px-6 py-3'>
          Total Price
        </th>
        <th scope='col' className='px-6 py-3'>
          Action
        </th>
      </tr>
    )
  }

  const Row = (props: {
    title: string
    price: number
    quantity: number
    toIDR: (price: number) => string
  }) => {
    return (
      <tr className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'>
        <th
          scope='row'
          className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
        >
          {props.title}
        </th>
        <td className='hidden px-6 py-4 md:inline'>
          {props.toIDR(props.price)}
        </td>
        <td className='hidden px-6 py-4 md:inline'>{props.quantity}</td>
        <td className='px-6 py-4'>
          {props.toIDR(props.quantity * props.price)}
        </td>
        <td className='px-6 py-4'>
          <a
            href='#'
            className='font-medium text-blue-600 hover:underline dark:text-blue-500'
          >
            Edit
          </a>
        </td>
      </tr>
    )
  }

  return (
    <div className='relative mt-24 overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400'>
        <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
          <RowHead />
        </thead>
        <tbody>
          {props.orderState.map((order: any, index: number) => (
            <Row
              key={order.id + index}
              title={order.title}
              price={order.price}
              quantity={order.quantity}
              toIDR={props.toIDR}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
