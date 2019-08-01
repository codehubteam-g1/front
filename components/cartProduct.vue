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
            style="  display: flex; align-items: center; justify-content: center; padding-right: 20px; padding-top: 0px"
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
        <span class="button" style="cursor: default">Cantidad: {{cartProduct.quantity}}</span>
        <span class="button is-primary" v-on:click="addCartProduct">+</span>
        <span class="button is-primary" v-on:click="reduceCartProduct">-</span>
        <span class="button is-danger" v-on:click="deleteCartProduct">Eliminar</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {}
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
          this.$router.go({ path: '/shoppingCart', force: true })
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
    },
    deleteCartProduct() {
      let token = this.$auth.getToken("local");
      this.$axios
        .post(
          process.env.apiUrl + ":3001/shoppingCarts/deleteCartProduct",
          {
            productId: this.product.id,
            quantity: 1
          },
          { Authorization: "bearer" + token }
        )
        .then(response2 => {
          this.$router.go({ path: '/shoppingCart', force: true })
          this.$toast.info("Se ha eliminado del carrito", {
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
    },
    reduceCartProduct() {
      let token = this.$auth.getToken("local");
      this.$axios
        .post(
          process.env.apiUrl + ":3001/shoppingCarts/reduceCartProduct",
          {
            productId: this.product.id,
            quantity: 1
          },
          { Authorization: "bearer" + token }
        )
        .then(response2 => {
          this.$router.go({ path: '/shoppingCart', force: true })
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

  created() {
    let token = this.$auth.getToken("local");
    this.$axios
      .get(
        process.env.apiUrl +
          ":3001/stores/getProductByProductId/" +
          this.cartProduct.productId,
        {
          Authorization: "bearer" + token
        }
      )
      .then(response => {
        this.product = response.data.product;
      })
      .catch(error => error);
  },

  props: ["cartProduct"]
};
</script>

<style scoped>
</style>
