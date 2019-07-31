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
              <input class="input" type="email" placeholder="Email" required v-model="user.email" />
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
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
        </div>

        <div class="signup-form-input-container">
          <p class="control has-icons-left">
            <input
              class="input"
              type="text"
              placeholder="Nombre completo"
              required
              v-model="user.name"
              v-on:change="checkName"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>

        <div class="signup-form-input-container">
          <p class="control has-icons-left">
            <input class="input" type="tel" placeholder="Celular" required v-model="user.phone" />
            <span class="icon is-small is-left">
              <i class="fas fa-mobile-alt"></i>
            </span>
          </p>
        </div>
        <div id="alert" class="is-size-6" v-if="alert">
          <p>{{alertMessage}}</p>
        </div>
        <div class="signup-form-input-container" v-bind:style="{'margin-top': buttonMargin+'px'}">
          <input class="button is-link" type="submit" value="Registrarte" />
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
      buttonMargin: 30,
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
        .post(process.env.apiUrl+":3001/signup", credenciales)
        .then(response => {
          this.$auth
            .loginWith("local", {
              data: {
                email: this.user.email,
                password: this.user.password
              }
            })
            .then(response2 => {
              alert = false;
              this.buttonMargin = 40;
              this.$toast.success("Te has registrado exitosamente", {
                duration: 1500,
                position: "top-center"
              });
              this.$router.push({ path: "./" });
            });
        })
        .catch(error => {
          console.log(error);
          if (error.response)
            this.alertMessage = error.response.data.errorMessage;
          else
            this.alertMessage =
              "Lo sentimos. Ocurrió un error creando tu cuenta. Por favor inténtalo de nuevo en un momento";

          this.alert = true;
          this.buttonMargin = 0;
        });
    },

    checkName() {
      console.log("Checking");
    }
  }
};
</script>

<style scoped>
#signup-form-container {
  text-align: center;
}

#motto {
  display: block;
  margin: 20px 60px 27px 60px;
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

#alert {
  display: block;
  margin: 15px 30px 15px 30px;
  text-align: center;
  color: #ed4956;
}
</style>
