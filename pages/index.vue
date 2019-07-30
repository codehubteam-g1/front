<template>
  <div style="max-width: 1920px; margin: 0 auto;">
    <navigationBar/>
    <stores/>
  </div>
</template>

<script>
import navigationBar from "~/components/navigationBar";
import stores from "~/components/stores";

export default {
  components: {
    stores,
    navigationBar
  }
};
</script>

<style>
</style>
