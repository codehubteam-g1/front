<template>
  <div>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <div
      class="columns is-desktop is-vcentered"
      style="text-align: center; width: 100vw; height: 100vh;"
    >
      <div class="column"></div>
      <div class="column">
        <div id="registration-container">
          <profilePicture ref="picture" style="width: 200px; height: 200px;" />
          <br />
          <input
            v-on:click="changeProfilePicture()"
            class="button is-link"
            type="submit" 
            value="Cambiar foto de perfil"
          />
          <br />
          <br />
          <br />
          <p>Correo:</p>
          <p class="control has-icons-right has-icons-left">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <input class="input" type="email" placeholder="email request" readonly v-model="email" />
            <span class="icon is-small is-right">
              <i class="fas fa-lock"></i>
            </span>
          </p>
          <br />
          <p>Nombre:</p>
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="name request" v-model="name" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
          <br />
          <p>Celular:</p>
          <p class="control has-icons-left">
            <input class="input" type="tel" placeholder="telephone request" v-model="phone" />
            <span class="icon is-small is-left">
              <i class="fas fa-mobile-alt"></i>
            </span>
          </p>
          <div v-if="!alert">
            <br />
            <br />
          </div>
          <div id="alert" class="is-size-6" v-if="alert">
            <p>{{alertMessage}}</p>
          </div>
          <div>
            <input
              v-on:click="saveChanges()"
              class="button is-link"
              type="submit"
              value="Guardar cambios"
            />
            <a href="../" class="button is-primary" value="Volver">Volver</a>
          </div>
        </div>
        <div style="height: 100px;"></div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import profilePicture from "~/components/profilePicture";
export default {
  //middleware: ['generalAuthMw'],
  data() {
    return {
      alertMessage: "Error alksjdlaskj",
      alert: false,
      email: "Email address",
      name: "User name",
      phone: "User phone number"
    };
  },
  methods: {
    changeProfilePicture() {
      let token = this.$auth.getToken("local");
      this.$axios
        .post(
          "http://127.0.0.1:3001/user/updateProfilePicture",
          {
            profilePictureUrl:
              "https://img.freepik.com/free-psd/young-pretty-woman-smiling-happy-taking-selfie-holding-camera_1187-11328.jpg"
          },
          { Authorization: "bearer" + token }
        )
        .then(response => {
          this.$refs.picture.update();
        })
        .catch(error => {
          alert(error.message);
        });
    },
    saveChanges() {
      this.alert = false;
      let token = this.$auth.getToken("local");
      this.$axios
        .post(
          "http://127.0.0.1:3001/user/updateName",
          {
            name: this.name
          },
          { Authorization: "bearer" + token }
        )
        .then(response => {
          this.$axios
            .post(
              "http://127.0.0.1:3001/user/updatePhone",
              {
                phone: this.phone
              },
              { Authorization: "bearer" + token }
            )
            .then(response2 => {
              this.$toast.success("Se han guardado los cambios", {
                duration: 1500,
                position: "top-right"
              });
            })
            .catch(error => {
              this.alertMessage = error.response.data.errorMessage;
              this.alert = true
            });
        })
        .catch(error => {
          this.alertMessage = error.response.data.errorMessage;
          this.alert = true
        });
    }
  },
  components: {
    profilePicture
  },

  created: function() {
    let token = this.$auth.getToken("local");
    this.$axios
      .get("http://127.0.0.1:3001/user", { Authorization: "bearer" + token })
      .then(response => {
        this.email = response.data.user.email;
        this.name = response.data.user.name;
        this.phone = response.data.user.phone;
      })
      .catch(error => error);
  }
};
</script>

<style>
#registration-container {
  display: inline-block;
  background-color: white;
  width: 500px;
  padding: 40px 60px 40px 60px;
  margin-bottom: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
}

#alert {
  display: block;
  margin: 15px 30px 15px 30px;
  text-align: center;
  color: #ed4956;
}
</style>
