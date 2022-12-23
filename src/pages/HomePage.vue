<template>
  <h1>Home Page</h1>
  <label>Dms Info: <span class="fw-bold text-danger">{{dmsInfo}}</span></label>
</template>


<script>
export default {
  data() {
    return {
      dmsInfo : this.$store.getters['moduleUsers/dmsInfo']
    }    
  },
  computed:{},
  mounted() {},
  methods: {} 
}


</script>
<style scoped>
</style>