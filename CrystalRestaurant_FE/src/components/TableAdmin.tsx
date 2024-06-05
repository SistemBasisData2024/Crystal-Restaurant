import { useState } from "react"

interface MenuItem {
  menuId: number
  menuTitle: string
  quantity: number
  price: number
}

export default function TableAdmin() {
  const [menuState, setMenuState] = useState<MenuItem[]>([])

  const handleChangeTitle = (index: number, title: string) => {
    const newOrder = [...menuState]
    newOrder[index].menuTitle = title
    setMenuState(newOrder)
  }

  const handleRemove = (index: number) => {
    const newOrder = [...menuState]
    newOrder.splice(index, 1)
    setMenuState(newOrder)
  }

  const handleChangePrice = (index: number, price: number) => {
    price = price < 0 ? 0 : price
    const newOrder = [...menuState]
    newOrder[index].price = price
    setMenuState(newOrder)
  }

  const handleQuantity = (index: number, quantity: number) => {
    quantity = quantity < 0 ? 0 : quantity
    const newOrder = [...menuState]
    newOrder[index].quantity = quantity
    setMenuState(newOrder)
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
  }) => {
    return (
      <tr className='border-b border-gray-700 bg-gray-800 hover:bg-gray-600'>
        <td className='max-w-full px-2 py-4 text-center font-semibold'>
          <input
            type='text'
            id='first_product'
            className='block w-full rounded-lg border border-gray-600 bg-gray-700 px-2.5 py-1 text-sm text-white placeholder-gray-400 [appearance:textfield] focus:border-blue-500 focus:ring-blue-500'
            value={props.title}
            onChange={(e) => handleChangeTitle(props.index, e.target.value)}
            required
          />
        </td>
        <td className='flex justify-center px-2 py-4'>
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
        </td>
        <td className='px-2 py-4 text-center font-semibold text-white'>
          <input
            type='number'
            id='first_product'
            className='block w-20 rounded-lg border border-gray-600 bg-gray-700 px-2.5 py-1 text-sm text-white placeholder-gray-400 [appearance:textfield] focus:border-blue-500 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
            value={props.price}
            onChange={(e) =>
              handleChangePrice(props.index, parseInt(e.target.value))
            }
            required
          />
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
          {menuState.map((menuItem: any, index: number) => (
            <Row
              key={menuItem.id + index}
              index={index}
              title={menuItem.title}
              price={menuItem.price}
              quantity={menuItem.quantity}
            />
          ))}
          {menuState.length === 0 && ( // if there is no menu
            <tr className='border-b border-gray-700 bg-gray-800 hover:bg-gray-600'>
              <td className='px-2 py-4 text-center font-semibold' colSpan={4}>
                No Menu
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
