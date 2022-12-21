import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

export const store = createStore({
    state:{
        authenticated:false
    },
    getters:{
        authenticated(state){
            return state.authenticated
        }
    },
    mutations:{
        login:(state, payload)=>{         
            if (payload.user === "admin" && payload.pass === "admin"){
                state.authenticated = true
            }
            
        },
        logout:(state) => {
            state.authenticated = false
        }
    },
    actions:{
        loginAction:(context, payload) => {
            context.commit('login', payload)
        },
        logoutAction:(context) => {
            context.commit('logout')
        }
    },
    modules:{},
    plugins:[
        new VuexPersistence({
            storage: window.localStorage
        }).plugin
    ]

    
})