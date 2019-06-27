<template>
  <div>
    <div id="motto">
      <h2 style="color: #999;">Regístrate en la mejor app de domicilios de latinoamérica</h2>
    </div>
    <form @submit.prevent="signup">
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

        <div class="signup-form-input-container">
          <input
            class="input"
            type="text"
            placeholder="Nombre completo"
            required
            v-model="user.name"
          >
        </div>

        <div class="signup-form-input-container">
          <input class="input" type="tel" placeholder="Celular" required v-model="user.phone">
        </div>

        <div class="signup-form-input-container" style="margin-top: 25px">
          <input class="button is-link" type="submit" value="Registrarte">
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
    signup() {
      let credenciales = {
        email: this.user.email,
        name: this.user.name,
        phone: this.user.phone,
        password: this.user.password
      };
      axios
        .post("http://127.0.0.1:3001/signup", credenciales)
        .then(response => this.$router.push("user/home"))
        .catch(error => {
          if (error.response) alert(error.response.data.errorMessage);
          else
            alert(
              "Error: No se ha podido acceder al servidor. Por favor intente más tarde"
            );
        });
    }
  }
}
</script>

<style scoped>
#signup-form-container {
  text-align: center;
}

#motto {
  display: block;
  margin: 25px 60px 25px 60px;
  text-align: center;
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
