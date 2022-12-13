<template>
    <nav>
      <router-link to="/">Home</router-link>&nbsp;
      <router-link to="/login">Login</router-link>
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
  }
}
</script>