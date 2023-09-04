import config from '../config/index'
import axios from "axios";
import Cookies from "js-cookie";

const getUserDetails = async () => {
    const token = Cookies.get('token')
    try {
        const response = await axios.get(`${config.API_URL_BASE}/api/user`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default { getUserDetails }