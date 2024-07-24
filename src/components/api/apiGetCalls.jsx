import instance from "./settings";

export const getAllDatas = async (text) => {
    try {
        const res = await instance.get(`${text}`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res.data;
    } catch (error) {
        console.error("API Request Error:", error);
        throw error;
    }
};
