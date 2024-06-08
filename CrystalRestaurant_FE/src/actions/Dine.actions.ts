import axios from "axios"

// formData => req.body (used for param in endpoint call)

const baseApiResponse = (data: any, isSuccess: boolean) => {
  return {
    success: isSuccess,
    data: data || null,
  }
}

export const dineIn = async () => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/dine/create`
    )
    console.log("RESPONSE FROM BACKEND")
    console.log(response.data)
    return baseApiResponse(response.data, true)
  } catch (error: any) {
    console.error(error)
    return baseApiResponse(null, false)
  }
}

export const getSession = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/dine/getall`
    )
    console.log("RESPONSE FROM BACKEND")
    console.log(response.data)
    //return baseApiResponse(["qwjbhkefhbjqwfebiqwuyaef", "ad7a28e74acc141b498d1c53768f5b6c"], true);
    const sessions = Array.isArray(response.data)
      ? response.data.map((item) => item.session)
      : response.data
    return baseApiResponse(sessions, true)
  } catch (error: any) {
    console.error(error)
    return baseApiResponse(null, false)
  }
}
