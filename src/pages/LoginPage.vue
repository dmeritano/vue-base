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

<style scoped></style>
