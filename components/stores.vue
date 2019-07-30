<template>
  <div class="columns" style="padding: 6.25em 40px 0px 40px">
    <div class="column">
      <store :storeData="prueba" />
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
            name: 'Restorando',
            description: 'Pizzas',
            coverPictureUrl: 'http://localhost:3000/_nuxt/static/rappi-logo.svg',
            logoUrl: 'http://localhost:3000/_nuxt/static/rappi-logo.svg'
        }
    };
  },
  components: {
    store
  }
};
</script>

<style>
</style>

