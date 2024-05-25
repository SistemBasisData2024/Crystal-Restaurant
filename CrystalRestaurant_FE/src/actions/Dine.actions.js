import axios from "axios";

// formData => req.body (used for param in endpoint call)

const baseApiResponse = (data, isSuccess) => {
    return {
        success: isSuccess,
        data: data || null,
    };
};

export const dineIn = async () => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/dine/create`
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);
    } catch (error) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};