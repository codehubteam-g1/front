<template>
  <div class="columns" style="padding: 6.25em 40px 0px 40px">
    <div class="column"></div>
    <div class="column">
      <div v-for="cartProduct in cartProducts" v-bind:key="cartProduct.id">
        <cartProduct @reload="load" :cartProduct="cartProduct" />
      </div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import cartProduct from "~/components/cartProduct";
export default {
  data() {
    return {
      cartProducts: []
    };
  },
  components: {
    cartProduct
  },
  methods: {
    load() {
      console.log('Ejecutó load')
      let token = this.$auth.getToken("local");
      this.$axios
        .get(process.env.apiUrl + ":3001/shoppingCarts/getCartProducts", {
          Authorization: "bearer" + token
        })
        .then(response => {
          this.cartProducts = response.data.cartProducts;
        })
        .catch(error => error);
    }
  },
  created() {
    this.load();
  }
};
</script>

<style>
</style>

