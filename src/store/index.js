import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import moduleUsers from './modules/users'

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
        login:(state)=>{        
            state.authenticated = true
        },
        logout:(state) => {
            state.authenticated = false
        }
    },
    actions:{},
    modules:{
        moduleUsers
    },
    plugins:[
        new VuexPersistence({
            storage: window.localStorage
        }).plugin
    ]
})