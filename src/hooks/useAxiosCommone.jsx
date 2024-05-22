import axios from "axios";

export const axiosCommone = axios.create({
    baseURL: 'http://localhost:8000'
})

const useAxiosCommone = () => {
    return axiosCommone;
};

export default useAxiosCommone;