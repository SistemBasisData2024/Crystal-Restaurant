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
        const response = await axios.get(
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
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/dine/getall`
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        const sessions = Array.isArray(response.data) ? response.data.map(item => item.session) : response.data;
        return baseApiResponse(sessions, true);

    } catch (error: any) {
        console.error(error);
        return baseApiResponse(null, false);
    }
}

export const deleteSession = async (session : string) => {
    try {
        const response = await axios.delete(
            `${import.meta.env.VITE_API_URL}/dine/delete/${session}`
        );
        console.log("RESPONSE FROM BACKEND");
        console.log(response.data);
        return baseApiResponse(response.data, true);

    } catch (error: any) {
        console.error(error);
        return baseApiResponse(null, false);
    }
}