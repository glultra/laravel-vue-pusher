import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null, // User data
        token: JSON.parse(localStorage.getItem('token')) || null,
    }),
    actions: {
        // Action to set the user data
        setUser(user) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        setToken(token) {
            this.token = token;
            localStorage.setItem('token', JSON.stringify(token));
        },
        // Action to clear the user data (e.g., log out)
        clearUser() {
            this.user = null;
            localStorage.removeItem('user');
        },
        clearToken() {
            this.token = null;
            localStorage.removeItem('token');
        },
    },
    getters: {
        // Getter to retrieve the user data
        getUser() {
            return this.user;
        },
        getToken() {
            return this.user;
        },
    },
});
