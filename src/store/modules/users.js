import apiDms from "@/services/service-apidms"

const moduleUsers = {
  namespaced: true,
  state: () => ({
    dmsInfo : {},
    users:[]
  }),
  getters : {
    dmsInfo(state){
      return state.dmsInfo
    },
    users(state){
      return state.users
    }
  },
  mutations: {
    dmsInfo(state, payload){
      state.dmsInfo = payload.meta.platform + " (" + payload.meta.name + ")"
    },
    users(state, payload){      
      state.users = payload
    }
  },
  actions: {
    async login(context, payload) {
      await apiDms
        .login(payload)
        .then(() => {
          context.commit("login", null, { root: true })
        })
        .catch((error) => console.log(error))
    },
    async logout(context) {
      await apiDms
        .logout()
        .then(() => {})
        .catch( (error) => {
          console.log(error)
        })
        context.commit("logout", null, { root: true })
    },
    async dmsInfo(context) {
      await apiDms
        .getDmsInfo()
        .then((res) => {
          context.commit("dmsInfo", res.data)
        })
        .catch((error) => console.log(error))
    },
    async getUsers(context) {
      await apiDms
        .getUsers()
        .then((res) => {
          context.commit("users", res.data.users)
        })
        .catch((error) => console.log(error))
    }        
  },
}

export default moduleUsers
