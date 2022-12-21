<template>
    <nav>
      <router-link to="/">Home</router-link>&nbsp;
      <router-link to="/login" v-if="!authenticated">Login</router-link>&nbsp;      
      <a href="#" @click.prevent="logout" v-if="authenticated">Logout</a>
    </nav>
    <br/>
    {{"Propiedad 'username' cargada desde fichero de configuracion config.json: " + username}}
    <br/>
    {{"Autenticado (store): " + authenticated}}
</template>

<script>
export default {
  data() {
    return {
      username: this.$EnvConfig.username
    }
  },
  computed: {
    authenticated(){
      return this.$store.getters.authenticated
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logoutAction')
      this.$router.push("/login")
    }
  }
}
</script>