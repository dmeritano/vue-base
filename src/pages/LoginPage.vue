<template>
  <div class="container mt-5">
    <h2>Login page</h2>

    <div class="row">
      <div class="col col-auto">
        <button class="btn btn-primary btn-sm" @click="idioma('es')">
          Español
        </button>
      </div>
      <div class="col col-auto">
        <button class="btn btn-primary btn-sm" @click="idioma('en')">
          English
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="mt-5 mb-5" style="max-width: 400px">
          <form @submit.prevent>
            <div class="mb-3">
              <label for="user" class="form-label"
                >User</label
              >
              <input
                v-model="user"
                type="text"
                class="form-control"
                id="user"
              />
            </div>
            <div class="mb-3">
              <label for="pass" class="form-label"
                >Password</label
              >
              <input
                v-model="pass"
                type="password"
                class="form-control"
                id="pass"
              />
            </div>
            <button type="button"  @click="authenticate()" class="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
    U: {{user}} - P: {{pass}}
    <div class="mt-5">
      <p>{{ "Mensaje:" + $t("message", { number: 18 }) }}</p>
      <p>{{ $t("text", 2) }}</p>
      <p>{{ $t("lobos", 0) }}</p>
      <p>{{ $t("lobos", 1) }}</p>
      <p>{{ $t("lobos", 2, { n: 3 }) }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      user:"admin",
      pass:"admin"
    }
  },
  mounted() {},
  methods: {
    ...mapActions({
      login : "moduleUsers/login",
      dmsInfo : "moduleUsers/dmsInfo",
    }),
    idioma(idioma) {
      if (idioma === "en") {
        this.$i18n.locale = "en"
      } else {
        this.$i18n.locale = "es"
      }
    },
    async authenticate() {
      const payload = {
        user:this.user,
        pass:this.pass
      }
      try {        
        await this.login(payload)
        await this.dmsInfo()
        
        this.$router.push("/")
      } catch (error) {
        console.log(error);
      }      
    },
  },
}
</script>

<style scoped></style>
