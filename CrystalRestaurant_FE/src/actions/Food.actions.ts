import axios from "axios"
import { IntegerType } from "mongodb"

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

export const getAllFood = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/food/getAll`
    )
    console.log("RESPONSE FROM BACKEND")
    console.log(response.data)
    return baseApiResponse(response.data, true)
  } catch (error) {
    console.error(error)
    return baseApiResponse(null, false)
  }
}

export const getAllCombo = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/food/getAllCombo`
    )
    console.log("RESPONSE FROM BACKEND")
    console.log(response.data)
    return baseApiResponse(response.data, true)
  } catch (error) {
    console.error(error)
    return baseApiResponse(null, false)
  }
}

export const makeFood = async (formData: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/food/makeFood`,
      formData
    )
    console.log("RESPONSE FROM BACKEND")
    console.log(response.data)
    return baseApiResponse(response.data, true)
  } catch (error: any) {
    console.error(error)
    return baseApiResponse(null, false)
  }
}

export const deleteFood = async (id : IntegerType) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}/food/deleteFood/${id}`,
    )
    console.log("RESPONSE FROM BACKEND")
    console.log(response.data)
    return baseApiResponse(response.data, true)
  } catch (error: any) {
    console.error(error)
    return baseApiResponse(null, false)
  }
}