
/**
 *
 * @param orderState // array of objects containing the order details
 * @param toIDR // function to convert price to IDR
 * @returns // returns the table component
 */
export default function TableEditable(props: {
  orderState: any
  setOrderState: (order: any) => void
  toIDR: (price: number) => string
}) {
  const handleRemove = (index: number) => {
    const newOrder = [...props.orderState]
    newOrder.splice(index, 1)
    props.setOrderState(newOrder)
  }

  const handleQuantity = (index: number, quantity: number) => {
    quantity = quantity < 0 ? 0 : quantity
    const newOrder = [...props.orderState]
    newOrder[index].quantity = quantity
    props.setOrderState(newOrder)
  }

  /**
   *
   * @returns // returns the table header
   */
  const RowHead = () => {
    return (
      <tr>
        {/* <th scope='col' className='px-16 py-3'>
          <span className='sr-only'>Image</span>
        </th> */}
        <th scope='col' className='px-2 py-3 text-center'>
          Product
        </th>
        <th scope='col' className='px-2 py-3 text-center'>
          Qty
        </th>
        <th scope='col' className='px-2 py-3 text-center'>
          Price
        </th>
        <th scope='col' className='px-2 py-3 text-center'>
          Action
        </th>
      </tr>
    )
  }

  /**
   *
   * @param title // title of the order
   * @param price // price of the order
   * @param quantity // quantity of the order
   * @param toIDR // function to convert price to IDR
   * @returns // returns the table row
   */
  const Row = (props: {
    index: number
    title: string
    price: number
    quantity: number
    image: string
    toIDR: (price: number) => string
  }) => {
    return (
      <tr className='border-b border-gray-700 bg-gray-800 hover:bg-gray-600'>
        {/* <td className='p-4'>
          <img
            src={props.image}
            className='h-16 w-16 rounded-xl bg-white bg-opacity-10 object-fill md:h-32 md:w-32'
            alt={props.title}
          />
        </td> */}
        <td className='max-w-full px-2 py-4 text-center font-semibold'>
          {props.title && props.title.length > 20
            ? props.title.substring(0, 20) + "..."
            : props.title}
        </td>
        <td className='flex justify-center px-2 py-4'>
          <div className='flex items-center'>
            <button
              className='me-3 hidden h-6 w-6 items-center justify-center rounded-full border border-gray-600 bg-gray-800 p-1 text-sm font-medium text-gray-400 hover:border-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-700 md:inline-flex '
              type='button'
              onMouseDown={() =>
                handleQuantity(props.index, props.quantity - 1)
              }
            >
              <span className='sr-only'>Quantity button</span>
              <svg
                className='h-3 w-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 2'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h16'
                />
              </svg>
            </button>
            <div>
              <input
                type='number'
                id='first_product'
                className='block w-12 rounded-lg border border-gray-600 bg-gray-700 px-2.5 py-1 text-sm text-white placeholder-gray-400 [appearance:textfield] focus:border-blue-500 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                value={props.quantity}
                onChange={(e) =>
                  handleQuantity(props.index, parseInt(e.target.value))
                }
                required
              />
            </div>
            <button
              className='ms-3 hidden h-6 w-6 items-center justify-center rounded-full border border-gray-600 bg-gray-800 p-1 text-sm font-medium text-gray-400 hover:border-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-700 md:inline-flex'
              type='button'
              onMouseDown={() =>
                handleQuantity(props.index, props.quantity + 1)
              }
            >
              <span className='sr-only'>Quantity button</span>
              <svg
                className='h-3 w-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
            </button>
          </div>
        </td>
        <td className='px-2 py-4 text-center font-semibold text-white'>
          {props.toIDR(props.price * props.quantity)}
        </td>
        <td className='px-2 py-4 text-center'>
          <button
            className='font-medium text-red-500 hover:underline'
            onMouseDown={() => handleRemove(props.index)}
          >
            Remove
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className='relative mt-24 overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-left text-sm text-gray-500 rtl:text-right'>
        <thead className='bg-gray-700 text-xs uppercase text-gray-400'>
          <RowHead />
        </thead>

        <tbody>
          {props.orderState.map((order: any, index: number) => (
            <Row
              key={order.id + index}
              index={index}
              title={order.title}
              price={order.price}
              quantity={order.quantity}
              toIDR={props.toIDR}
              image={order.image}
            />
          ))}
          {props.orderState.length === 0 && ( // if there is no order yet
            <tr className='border-b border-gray-700 bg-gray-800 hover:bg-gray-600'>
              <td className='px-2 py-4 text-center font-semibold' colSpan={4}>
                No order yet
              </td>
            </tr>
          )}
          <tr className='border-b border-gray-700 bg-gray-800 hover:bg-gray-600'>
            <td className='px-2 py-4 text-center font-semibold'>Total</td>
            <td className='px-2 py-4 text-center font-semibold'>
              {props.orderState.reduce(
                (acc: number, curr: any) => acc + curr.quantity,
                0
              )}
            </td>
            <td className='px-2 py-4 text-center font-semibold text-white'>
              {props.toIDR(
                props.orderState.reduce(
                  (acc: number, curr: any) => acc + curr.price * curr.quantity,
                  0
                )
              )}
            </td>
            <td className='px-2 py-4 text-center'></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
