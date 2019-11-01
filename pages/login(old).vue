<template class="clase2">
  <div class="clase2 columns centrarElemento">
    <form class="column is-2 is-offset-5 has-text-centered">
      <div class="text-shadow has-text-white is-size-4">Email:</div>
      <input
        class="input is-rounded"
        type="email"
        name="email"
        v-model="user.email"
        placeholder="tucorreo@gmail.com"
      >
      <div class="text-shadow has-text-white is-size-4">Password:</div>
      <input class="input is-rounded" type="password" name="password" v-model="user.password">
      <p>
        <br>
      </p>
      <input
        class="button is-fullwidth is-link text-shadow has-text-white is-size-4"
        type="submit"
        value="Submit"
        @click.prevent="login"
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    login() {
      let credenciales = {
        email: this.user.email,
        password: this.user.password
      };
      axios
        .post(process.env.apiUrl+"/login", credenciales)
        .then(response => this.$router.push("secure/home"))
        .catch(error => alert(error.response.data.errorMessage));
    },

    signup() {}
  }
};
</script>


<style>
.clase2 {
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url("https://recipes-secure-graphics.grocerywebsite.com/0_GraphicsRecipes/4589_4k.jpg");
  background-size: 1920px 1080px;
}

.centrarElemento {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

div.text-shadow {
  text-shadow: 1px 1px 2px #000000;
}

input[type="submit"] {
  text-shadow: 1px 1px 2px #000000;
}
</style>