import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },

});

api.interceptors.request.use(config => {
    const authStore = useAuthStore()
    if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`
    }
    return config
})

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const message =
      error.response?.data?.message || error.response?.data?.error?.message || "Unexpected error";
 
    return Promise.reject(new Error(message));
  },
);

export default api;
