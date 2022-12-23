<template>    
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand logo-menu" href="#">    
            <img src="@/assets/images/logo-addalia-header.png" alt="Logo">    
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>            
          </ul>
          <div class="d-flex">
              <router-link to="/login" v-if="!authenticated" class="nav-link text-white me-3">Login</router-link>
              <a href="#" @click.prevent="logout" v-if="authenticated" class="nav-link text-white me-3">Logout</a>                        
          </div>
        </div>
      </div>
    </nav>

</template>

<script>
export default {
  computed: {
    authenticated(){
      return this.$store.getters.authenticated
    }
  },
  methods:{
    async logout(){
      await this.$store.dispatch('moduleUsers/logout')
      this.$router.push("/login")
    }
  },
  mounted(){
  }
}
</script>