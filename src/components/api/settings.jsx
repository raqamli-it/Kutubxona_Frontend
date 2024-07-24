import axios from "axios";

const api = process.env.REACT_APP_API; // Muhit o'zgaruvchisini olish

const instance = axios.create({
    baseURL: api,
});

export default instance;
