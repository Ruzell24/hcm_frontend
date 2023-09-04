import Cookies from "js-cookie";
import config from "../config";
import axios from "axios";

const createTimeEntry = async (params) => {
    const token = Cookies.get('token')
    try {
        const response = await axios.post(`${config.API_URL_BASE}/api/calendar/time-in`, params, {
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

const getOngoingEntries = async (params) => {
    const token = Cookies.get('token')
    try {
        const response = await axios.get(`${config.API_URL_BASE}/api/calendar/ongoing/${params.id}`, {
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



const endTimeEntry = async (params) => {
    const token = Cookies.get('token')
    try {
        const response = await axios.patch(
            `${config.API_URL_BASE}/api/calendar/time-out/${params.id}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                },
            }
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export default { createTimeEntry, getOngoingEntries, endTimeEntry }