//menu context
import { createContext } from 'react';

interface Order {
  id: number
  title: string
  price: number
  quantity: number
}

const menuContext = createContext<[Order[], React.Dispatch<React.SetStateAction<Order[]>>]>([[], () => {}])

export default menuContext;