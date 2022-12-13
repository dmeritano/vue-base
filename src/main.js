import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './router'
import { store } from './store'
import makeEnvConfig from './services/service-config'


const router = createRouter({
    history: createWebHistory(),
    routes,
})

makeEnvConfig().then(
    function(response){
        const EnvConfig = response
        const app = createApp(App)
        app.config.globalProperties.$EnvConfig = EnvConfig
        app.use(router)
        app.use(store)
        app.mount('#app')            
    }
)
.catch( (error) => console.error("ERROR: configuration file not loaded", error))
