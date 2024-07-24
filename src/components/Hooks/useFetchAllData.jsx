import { useEffect, useState } from "react";
import { getAllDatas } from "../api/apiGetCalls";

const useFetchGetAllDatas = (url, page = 1, search = "") => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await getAllDatas(`${url}/?title=${search}&page=${page.toString()}`);
            console.log("API Response:", response); // Javobni konsolga chiqarish
            setData(response.results);
            setCount(response.count);
        } catch (error) {
            console.error("Fetch data error:", error);
            return error;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url, page, search]);

    return { data, loading, count, fetchData };
};

export default useFetchGetAllDatas;
