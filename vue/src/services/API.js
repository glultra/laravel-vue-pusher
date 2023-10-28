import axios from "axios";
window.axios = axios;

// // The base URL for API requests
const API_URL = "http://127.0.0.1:8000";


// axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Create an instance of axios with the base URL of the API
const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: true,

});


// Export axios instance
export default apiClient;
