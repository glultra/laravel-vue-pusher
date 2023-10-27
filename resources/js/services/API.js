import axios from "axios";

// // The base URL for API requests
const API_URL = "http://127.0.0.1:8000/api";

axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

// Create an instance of axios with the base URL of the API
const apiClient = axios.create({
    baseURL: API_URL
});


// Export axios instance
export default apiClient;
