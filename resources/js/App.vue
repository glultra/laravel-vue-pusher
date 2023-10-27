<template>
    <button @click="test()">Click</button>
    <router-view></router-view>
</template>

<script>

import {useUserStore} from "@/store/userStore.js";
import apiClient from "@/services/API.js";
import router from "@/router/index.js";

export default {
    data() {
        return [];
    },
    computed: {
        user() {
            return useUserStore().user;
        },
        token() {
            return useUserStore().token;
        }
    },
    mounted() {
        console.log(this.token);
        Pusher.logToConsole = true;
        Echo.private(`game`)
            .listen('.event-name', (event) => {
                console.log(event);
            });
        axios.get('/sanctum/csrf-cookie').then(response2 => {
            axios.post('/api/user', {
                user: this.user,
                token: this.token,
            }).then(response => {
                useUserStore().setUser(response.data.user);
                useUserStore().setToken(response.data.token);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                router.push({name: 'Dashboard'})
            }).catch(error => {
                console.log(error);
            });
        });




    },
    methods: {
        test() {
            axios.post('/api/test').then(resp => {
                console.log(resp);
            });
        }
    }
}
</script>
