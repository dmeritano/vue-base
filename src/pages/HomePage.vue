<template>
  <div class="container px-5">

    <h3 class="my-4">{{ $t("HOME_MAIN_TITLE") }}</h3>

    <div>
      <table class="table table-responsive table-striped">
        <thead>
          <tr>
            <th scope="col">Usuario</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in users" :key="index">
            <td>{{entry.user}}</td>
            <td>{{entry.name}}</td>
            <td>{{entry.surname}}</td>
            <td>
              <button class="btn btn-sm btn-default">Editar</button>
            </td>
          </tr>          
        </tbody>
      </table>
    </div>
  </div>
</template>



<script>
import { mapActions } from "vuex"
export default {
  data() {
    return {
      dmsInfo: this.$store.getters["moduleUsers/dmsInfo"],
      users: this.$store.getters["moduleUsers/users"],
    }
  },
  computed: {},
  mounted() {
    document.title =
      this.$t("HTML_HEAD_TITLE_BASE") +
      " - " +
      this.$t("HTML_HEAD_TITLE_HOMEPAGE")
  },
  methods: {
    ...mapActions({
      getUsers: "moduleUsers/getUsers",
    }),
  },
  created() {
    this.getUsers()
  },
}
</script>
<style scoped></style>
