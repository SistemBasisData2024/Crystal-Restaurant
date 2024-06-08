import { useState } from "react"
import { removeMenu } from "../actions/Menu.action"

interface MenuItem {
  menuId: number
  name: string
  quantity: number
  price: number
}

export default function TableAdmin(props: { menuState: any; setMenuState: any }) {

  const handleName = (index: number, name: string) => {
    const newOrder = [...props.menuState]
    newOrder[index].name = name
    props.setMenuState(newOrder)
  }

  const handleRemove = (index: number) => {
    removeMenu(props.menuState[index].menuId, props.menuState, props.setMenuState)
  }

  const handleChangePrice = (index: number, price: number) => {
    price = price < 0 ? 0 : price
    const newOrder = [...props.menuState]
    newOrder[index].price = price
    props.setMenuState(newOrder)
  }

  // const handleQuantity = (index: number, quantity: number) => {
  //   quantity = quantity < 0 ? 0 : quantity
  //   const newOrder = [...props.menuState]
  //   newOrder[index].quantity = quantity
  //   props.setMenuState(newOrder)
  // }

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
        {/* <th scope='col' className='px-2 py-3 text-center'>
          Qty
        </th> */}
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
   * @param name // name of the order
   * @param price // price of the order
   * @param quantity // quantity of the order
   * @param toIDR // function to convert price to IDR
   * @returns // returns the table row
   */
  const Row = (props: {
    index: number
    name: string
    price: number
    // quantity: number
  }) => {
    return (
      <tr className='border-b border-gray-700 bg-gray-800 hover:bg-gray-600'>
        <td className='max-w-full px-2 py-4 text-center font-semibold'>
          <input
            type='text'
            id='first_product'
            className='block w-full rounded-lg border border-gray-600 bg-gray-700 px-2.5 py-1 text-sm text-white placeholder-gray-400 [appearance:textfield] focus:border-blue-500 focus:ring-blue-500'
            value={props.name}
            onChange={(e) => handleName(props.index, e.target.value)}
          />
        </td>
        {/* <td className='flex justify-center px-2 py-4'>
          <input
            type='number'
            id='first_product'
            className='block w-12 rounded-lg border border-gray-600 bg-gray-700 px-2.5 py-1 text-sm text-white placeholder-gray-400 [appearance:textfield] focus:border-blue-500 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
            value={props.quantity}
            onChange={(e) =>
              handleQuantity(props.index, parseInt(e.target.value))
            }
          />
        </td> */}
        <td className='px-2 py-4 text-center font-semibold text-white'>
          <input
            type='number'
            id='first_product'
            className='block rounded-lg w-full border border-gray-600 bg-gray-700 px-2.5 py-1 text-sm text-white placeholder-gray-400 [appearance:textfield] focus:border-blue-500 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
            value={props.price}
            onChange={(e) =>
              handleChangePrice(props.index, parseInt(e.target.value))
            }
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
          {props.menuState.map((menuItem: any, index: number) => (
            <Row
              key={menuItem.id + index}
              index={index}
              name={menuItem.name}
              price={menuItem.price}
              // quantity={menuItem.quantity}
            />
          ))}
          {props.menuState.length === 0 && ( // if there is no menu
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
