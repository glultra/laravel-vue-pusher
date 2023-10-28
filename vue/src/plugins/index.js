import router from "@/router/index.js";
import store from "@/stores/index.js";


export function registerPlugins(app) {
    app.use(router)
    app.use(store)
}
