import React, { useEffect, useState } from 'react';
import { getBatch } from '../actions/Batch.actions';

interface Order {
  foodName: string;
  foodPrice: number;
  quantity: number;
}

interface BackendResponse {
  total: number;
  orders: Order[];
}

export default function PayPage () {
    const [orderData, setOrderData] = useState<Order[]>([]);
    const [totals, setTotals] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    const [parentLocation, setParentLocation] = useState(
        location.pathname.split("/")[1]
      )
    
      useEffect(() => {
        if (parentLocation !== location.pathname) {
          setParentLocation(location.pathname.split("/")[1])
        }
      }, [location.pathname])

    const fetchBatchData = async () => {
      try {
        const response = await getBatch(parentLocation); 
        if (response.success) {
          const backendResponse: BackendResponse = response.data;
          setOrderData(backendResponse.orders);
          setTotals(backendResponse.total);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching batch data:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchBatchData();
    }, [parentLocation]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Batch Details</h1>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Orders</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Food Name</th>
              <th className="py-2">Food Price</th>
              <th className="py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{order.foodName}</td>
                <td className="border px-4 py-2">{order.foodPrice}</td>
                <td className="border px-4 py-2">{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Totals</h2>
        <p className="text-lg">{totals}</p>
      </div>
    </div>
  );
};
