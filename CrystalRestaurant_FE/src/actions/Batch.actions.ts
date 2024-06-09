import axios from "axios"

//formData = req.body

/**
 *
 * @param data  //data from the backend
 * @param isSuccess  //boolean value to check if the request was successful or not
 * @returns  //returns the data and the success status
 */
const baseApiResponse = (data: any, isSuccess: any) => {
  return {
    success: isSuccess,
    data: data || null,
  }
}

export const createBatch = async (orderState: any, session: string) => {
  // convert to json
  const data = {
    batch: orderState.map((order: any) => {
      console.log(order);
      let foodType
      if(order.isCombo){
        foodType = "combo"
      }else{
        foodType = "food";
      }
      return {
        session: session,
        orderid: order.id,
        type: foodType,
        qty: order.quantity,
      }
    }),
  }
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/batch/addBatch`,
      data
    )
    console.log("RESPONSE FROM BACKEND")
    console.log(response.data)
    return baseApiResponse(response.data, true)
  } catch (error: any) {
    console.error(error)
    return baseApiResponse(null, false)
  }
}

export const getBatch = async (session: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/batch/getPrice/${session}`
    )
    console.log("RESPONSE FROM BACKEND")
    console.log(response.data)
    return baseApiResponse(response.data, true)
  } catch (error: any) {
    console.error(error)
    return baseApiResponse(null, false)
  }
}
