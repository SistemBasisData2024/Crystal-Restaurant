// import axios from 'axios'; // (semestara belum api call)

export const addMenu = (
  menuId: string, 
  count: number,
  orderState: any,
  setOrderState: any
) => {
  const newOrderState = { ...orderState }
  newOrderState[menuId] = count
  setOrderState(newOrderState)
  console.table(newOrderState) // Debugging
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

export const clearMenu = (
  setOrderState: any
) => {
  setOrderState({})
}

export const orderMenu = (
  orderState: any,
  setOrderState: any
) => {
  console.log(orderState)
  clearMenu(setOrderState)
}