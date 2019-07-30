<template>
  <div class="columns" style="padding: 6.25em 40px 0px 40px">
    <div class="column">
      <store :store="prueba" />
    </div>
    <div class="column"></div>
    <div class="column"></div>
  </div>
</template>

<script>
import store from "~/components/store";
export default {
  data() {
    return {
      prueba: {
        name: "Restorando",
        description: "Pizzas",
        coverPictureUrl: "http://localhost:3000/_nuxt/static/rappi-logo.svg",
        logoUrl: "http://localhost:3000/_nuxt/static/rappi-logo.svg"
      },
      stores: []
    };
  },
  components: {
    store
  },

  created() {
    let token = this.$auth.getToken("local");
    this.$axios
      .get("http://127.0.0.1:3001/stores/getAllStores", {
        Authorization: "bearer" + token
      })
      .then(response => {
        let stores = response.data.stores;
        console.log(stores)
      })
      .catch(error => error);
  }
};
</script>

<style>
</style>

