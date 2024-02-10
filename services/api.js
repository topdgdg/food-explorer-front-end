import axios from "axios";

export const pi = axios.create({
    baseURL: "https://foodexplorer-backend.onrender.com"
});