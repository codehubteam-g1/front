<template>
  <div class="columns" style="padding: 0px 20px 0px 20px">
    <div class="column">
      <div v-for="product in firstColumnProducts" v-bind:key="product.id">
        <product :product="product" />
      </div>
    </div>
    <div class="column">
      <div v-for="product in secondColumnProducts" v-bind:key="product.id">
        <product :product="product" />
      </div>
    </div>
    <div class="column">
      <div v-for="product in thirdColumnProducts" v-bind:key="product.id">
        <product :product="product" />
      </div>
    </div>
    <div class="column">
      <div v-for="product in fourthColumnProducts" v-bind:key="product.id">
        <product :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import product from "~/components/product";
export default {
  data() {
    return {
      firstColumnProducts: [],
      secondColumnProducts: [],
      thirdColumnProducts: [],
      fourthColumnProducts: []
    };
  },
  components: {
    product
  },

  created() {
    let token = this.$auth.getToken("local");
    this.$axios
      .get(process.env.apiUrl+"/stores/getStoreProducts/"+this.storeId, {
        Authorization: "bearer" + token
      })
      .then(response => {
        let products = response.data.products;
        products.forEach((product, index) => {
          if (index % 4=== 0) this.firstColumnProducts.push(product);
          else if (index % 4 === 1) this.secondColumnProducts.push(product);
          else if (index % 4 === 2) this.thirdColumnProducts.push(product);
          else this.fourthColumnProducts.push(product);
        });
      })
      .catch(error => error);
  },

  props: ["storeId"]
};
</script>

<style>
</style>

