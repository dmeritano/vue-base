<template>
  <div class="login">
    <h2>Login page</h2>

    <div>
      <button @click="idioma('es')">Español</button>
      <button @click="idioma('en')">English</button>
    </div>

    <p>{{ "Mensaje:" + $t("message", { number: 18 }) }}</p>
    <p>{{ $t("text", 2) }}</p>
    <p>{{ $t("lobos", 0) }}</p>
    <p>{{ $t("lobos", 1) }}</p>
    <p>{{ $t("lobos", 2, { n: 3 }) }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {
    idioma(idioma) {
      if (idioma === "en") {
        this.$i18n.locale = "en"
      } else {
        this.$i18n.locale = "es"
      }
    },
  },
}
</script>

<style scoped>
.login {
  padding: 20px 20px;
}
</style>
