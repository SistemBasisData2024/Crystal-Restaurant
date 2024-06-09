// import axios from 'axios'; // (semestara belum api call)

export const addMenu = (
  menuId: number,
  menuTitle: string,
  count: number,
  price: number,
  orderState: any,
  setOrderState: any,
  isCombo: boolean
) => {
  const newOrderState = [...orderState]

  // append new menu to order state
  newOrderState.push({
    id: menuId,
    title: menuTitle,
    quantity: count,
    price: price,
    isCombo: isCombo, // Add isCombo to the order item
  })
  setOrderState(newOrderState)
  console.table(newOrderState) // Debugging
  console.log(newOrderState)
}


export const removeMenu = (
  menuId: string,
  orderState: any,
  setOrderState: any
) => {
  const newOrderState = { ...orderState }
  delete newOrderState[menuId]
  setOrderState(newOrderState)
}

export const clearMenu = (setOrderState: any) => {
  setOrderState({})
}

//TODO: hubungin ke API
export const orderMenu = (orderState: any, setOrderState: any) => {
  console.log(orderState)
  clearMenu(setOrderState)
}
