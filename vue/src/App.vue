<template>
    <button @click="test()">Click</button>
    <router-view></router-view>
</template>

<script>

import {useUserStore} from "@/stores/userStore.js";
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
    setup(){

    },
    mounted() {
        console.log(this.token);
        Pusher.logToConsole = true;
        window.Echo.private(`game`)
            .listen('.event-name', (event) => {
                console.log(event);
            });

        window.axios.get('/sanctum/csrf-cookie').then(response2 => {
            window.axios.post('/api/user', {
                user: this.user,
                token: this.token,
            }).then(response => {
                console.log(response);
                useUserStore().setUser(response.data.user);
                useUserStore().setToken(response.data.token);
                window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
                router.push({name: 'Dashboard'})
            }).catch(error => {
                console.log(error);
            });
        }).catch(errorCSRF =>{
            console.log(errorCSRF)
        });


    },
    methods: {
        test() {
            window.axios.post('/api/test').then(resp => {
                console.log(resp);
            });
        }
    }
}
</script>
