import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; 


const $axios = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

$axios.interceptors.request.use((config) => {
    config.headers.Authorization= `Bearer ${localStorage.getItem('token')}`
    return config
})

$axios.interceptors.request.use(
    (config) => config,
    async (error) => {
        const originalResponse = error.config
        if(error.response.state === 401 &&
            error.config && 
            !error.config._isRetry
        ) {
            originalResponse._isRetry = true;
            try{
                const response = await axios.get(`${API_URL}/refresh`, {
                    withCredentials:true
                })
                localStorage.setItem('token', response.data.accessToken)
                return $axios.request(originalResponse)
            } catch (error) {
                console.log('umauthorized')
                return Promise.reject(error);
            }
        }
    }
)


export default $axios;