<template>
   <div>
      <app-header/>
      <div><router-view></router-view></div>      
   </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'App',
  components: {
    'app-header' : AppHeader
  }
}
</script>

<style>
</style>
