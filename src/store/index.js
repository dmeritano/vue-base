import { createStore } from 'vuex'

export const store = createStore({
    state:{
        authenticated:false
    },
    getters:{
        authenticated(state){
            return state.authenticated
        }
    },
    mutations:{},
    actions:{},
    modules:{}
})