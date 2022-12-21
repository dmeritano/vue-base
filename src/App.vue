<template>
   <div>
      <app-header/>
      <div><router-view></router-view></div>
      <app-footer v-if="showAppFooter" />    
   </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'App',
  components: {
    'app-header' : AppHeader,
    'app-footer' : AppFooter
  },
  data() {
    return {
      showAppFooter: this.$EnvConfig.showAppFooter
    }
  }
}
</script>    
  