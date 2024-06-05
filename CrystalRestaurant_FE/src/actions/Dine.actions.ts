import axios from "axios";

// formData => req.body (used for param in endpoint call)

const baseApiResponse = (
    data: any, isSuccess: boolean) => {
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
    } catch (error: any) {
        console.error(error);
        return baseApiResponse(null, false);
    }
};

export const getSession = async () => {
    return ["c843498a969d5b8456b34bdd1548d977", "b843498a969d5b8456b34b2d1548d977"]
}