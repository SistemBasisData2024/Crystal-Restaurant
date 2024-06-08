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

/**
 *
 * @param formData // object containing the username and password
 * @returns baseApiResponse // returns the response from the backend
 */
export const userLogin = async (formData: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user/login`,
      formData
    )
    // console.log("RESPONSE FROM BACKEND");
    console.log(response.data)
    return baseApiResponse(response.data, true)
  } catch (error: any) {
    const errorResponse = error.response.data
    // console.error(error);
    return baseApiResponse(errorResponse, false)
  }
}

/**
 *
 * @param formData // object containing the username, password, email, and name
 * @returns // returns the response from the backend
 */
export const userSignUp = async (formData: any) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user/signup`,
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
