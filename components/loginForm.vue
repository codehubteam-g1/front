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
        <div id="alert" class="is-size-6" v-if="alert">
          <p>{{alertMessage}}</p>
        </div>
        <div class="signup-form-input-container" v-bind:style="{'margin-top': buttonMargin+'px'}">
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
      alert: false,
      alertMessage: "",
      user: {
        email: ""
      },
      buttonMargin: 30
    };
  },
  methods: {
    login() {
      this.$auth
        .loginWith("local", {
          data: {
            email: this.user.email,
            password: this.user.password
          }
        })
        .then(response => {
          alert = false;
          this.buttonMargin = 40;
          this.$toast.success("Has inciado sesión", {duration: 1500, position: 'top-center'});
          this.$router.push({ path: "./" });
        })
        .catch(error => {
          console.log(error);
          if (error.response)
            this.alertMessage = error.response.data.errorMessage;
          else
            this.alertMessage =
              "Lo sentimos. Ocurrió un error al ingresar a tu cuenta. Por favor inténtalo de nuevo en un momento";

          this.alert = true;
          this.buttonMargin = 0;
        });
    }
  },

  computed: {
  }
};
</script>

<style scoped>
#signup-form-container {
  text-align: center;
  margin-top: 35px;
}

.signup-form-input-container {
  display: block;
  margin: 10px 30px 10px 30px;
  text-align: center;
}

.button {
  width: 100%;
}

#alert {
  display: block;
  margin: 15px 30px 0px 30px;
  padding-bottom: 15px;
  text-align: center;
  color: #ed4956;
}
</style>
