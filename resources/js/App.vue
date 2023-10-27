<template>
    <router-view></router-view>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
    setup() {
        const route = useRoute() // Use useRoute to access the current route
        const router = useRouter() // Use useRouter to access the router

        const navigateToDashboard = () => {
            router.push({ name: 'Dashboard' })
        }

        return {
            navigateToDashboard
        }
    }
}
</script>
