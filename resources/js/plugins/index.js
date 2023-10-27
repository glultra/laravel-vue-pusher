import router from "@/router/index.js";
import store from "@/store/index.js";


export function registerPlugins(app) {
    app.use(router)
    app.use(store)
}
