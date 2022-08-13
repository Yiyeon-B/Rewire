import axios from "axios";
export const BASE_URL = "http://localhost:8080";

export const saveThought = async (values) => {
    try {
        const thought = {firstThought: values.firstThought, secondThought: values.secondThought, thirdThought: values.thirdThought, fourthThought: values.fourthThought};
        return await axios.post(`${BASE_URL}/api/cbt`, thought);
    } catch (e) {
        return [];
    }
}

export const getAllThoughts = async () => {
    try { 
        const { data } = await axios.get(`${BASE_URL}/api/cbt`);
        return data;
    } catch (e) {
        return [];
    }
}