import config from "../config";
import axios from "axios";

const loginUser = async (params) => {
    try {
        const response = await axios.post(`${config.API_URL_BASE}/api/user/login`, params);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default { loginUser }