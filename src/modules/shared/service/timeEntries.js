import config from '../config/index'
import axios from "axios";
import Cookies from "js-cookie";

const getUserTimeEntries = async (params) => {
    const token = Cookies.get('token')
    try {
        const response = await axios.get(`${config.API_URL_BASE}/api/calendar/user/${params.id}`, {
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

export default { getUserTimeEntries }