<template>
  <div>
    <form @submit.prevent="login">
      <div id="signup-form-container">
        <div class="signup-form-input-container">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" required v-model="user.email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
        </div>
        <div class="signup-form-input-container">
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                placeholder="Contraseña"
                required
                v-model="user.password"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </div>

        <div class="signup-form-input-container" style="margin-top: 25px">
          <input class="button is-link" type="submit" value="Iniciar sesión">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        email: ""
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
        .post("http://127.0.0.1:3001/login", credenciales)
        .then(response => this.$router.push("user/home"))
        .catch(error => alert(error.response.data.errorMessage));
    }
  }
};
</script>

<style scoped>
#signup-form-container {
  text-align: center;
  margin-top: 55px;
}

.signup-form-input-container {
  display: block;
  margin: 10px 30px 10px 30px;
  text-align: center;
}

.button {
  width: 100%;
}
</style>
