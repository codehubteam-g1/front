<template>
  <div class="card" style="margin: 20px 0px 20px 0px;">
    <div class="card-content" style="padding-left: 30px">
      <div class="media">
        <div class="media-content">
          <div style="height: 180px; text-overflow: ellipsis; overflow: hidden; ">
            <p class="title is-5">{{product.name}}</p>
            <p class="subtitle is-6 has-text-grey">{{product.description}}</p>
          </div>

          <div
            style="  display: flex; align-items: center; justify-content: center; padding-right: 20px; padding-top: 20px"
          >
            <p class="subtitle is-5 has-text-black">$ {{product.price}}</p>
          </div>
        </div>

        <div class="media-right">
          <figure class="image">
            <img style="height: 200px; width: 200px" v-bind:src="product.pictureUrl" />
          </figure>
        </div>
      </div>

      <div class="content" style="  display: flex; align-items: center; justify-content: center;">
        <span class="button is-link" v-on:click="addCartProduct">Agregar</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      score: (Math.random() + 3.6).toFixed(1),
      number: Math.ceil(Math.random() * 10) * 50
    };
  },
  methods: {
    addCartProduct() {
      let token = this.$auth.getToken("local");
      this.$axios
        .post(
          process.env.apiUrl + ":3001/shoppingCarts/addCartProduct",
          {
            productId: this.product.id,
            quantity: 1
          },
          { Authorization: "bearer" + token }
        )
        .then(response2 => {
          this.$toast.success("Se ha agregado al carrito", {
            duration: 1000,
            position: "top-right"
          });
        })
        .catch(error => {
          this.$toast.error("Error", {
            duration: 1000,
            position: "top-right"
          });
        });
    }
  },

  props: ["product"]
};
</script>

<style scoped>
</style>
