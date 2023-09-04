import config from "../shared/config";
import axios from "axios";
const createUser = async (params) => {
    try {
        const response = await axios.post(`${config.API_URL_BASE}/api/user/sign-up`, params);
        return response.data;
    } catch (error) {
        throw error;
    }
};
const loginUser = async (params) => {
    try {
        const response = await axios.post(`${config.API_URL_BASE}/api/user/login`, params);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export default {
    createUser,
    loginUser
}