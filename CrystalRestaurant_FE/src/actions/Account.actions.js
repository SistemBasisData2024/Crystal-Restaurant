// import axios from "axios";
// import qs from "qs";

// export const login = async (username, password) => {
//   try {
//     const response = await axios.post(
//       `${import.meta.env.VITE_BACKEND_URL}/user/login`,
//       qs.stringify({
//         username,
//         password
//       })
//     );
//     return response.data;
//   } catch (error) {
//     // console.log(error.response.data);
//     return error.response.data;
//   }
// }

// export const register = async (username, password) => {
//   try {
//     const response = await axios.post(
//       `${import.meta.env.VITE_BACKEND_URL}/user/register`,
//       qs.stringify({
//         username,
//         password
//       })
//     );
//     return response.data;
//   } catch (error) {
//     // console.log(error);
//     return error.response.data;
//   }
// }