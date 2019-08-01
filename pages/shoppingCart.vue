<template>
  <div style="max-width: 1920px; margin: 0 auto;">
    <navigationBar/>
    <cartProducts/>
  </div>
</template>

<script>
import navigationBar from "~/components/navigationBar";
import cartProducts from "~/components/cartProducts";

export default {
  components: {
    cartProducts,
    navigationBar
  }
};
</script>

<style>
</style>
