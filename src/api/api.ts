import axios from "axios";

const API_URL = 'http://185.22.67.50:8080/api/'

export const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})