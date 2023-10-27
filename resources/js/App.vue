<template>
    {{user}}
    {{token}}
    <router-view></router-view>
</template>

<script>

import {useUserStore} from "@/store/userStore.js";

export default {
    data(){
        return [

        ];
    },
    computed: {
        user(){
            return useUserStore().user;
        },
        token(){
            return useUserStore().token;
        }
    },
    mounted() {
        console.log(this.token);
        axios.post('/api/user', {
            user: this.user,
            token: this.token,
        }).then(response => {
            useUserStore().setUser(response.data.user);
            useUserStore().setToken(response.data.token);
        }).catch(error => {
            console.log(error);
        });
    }
}
</script>
