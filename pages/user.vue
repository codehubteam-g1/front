<template>
  <div id="background-container">
    <div class="columns">
      <div class="column"></div>
      <div class="column" style="text-align:center">
        <profilePicture ref="picture" style="width: 200px; height: 200px;" />
        <br />
        <input
          v-on:click="changeProfilePicture()"
          class="button is-link"
          type="submit"
          value="Cambiar foto de perfil"
        />
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import profilePicture from "~/components/profilePicture";
export default {
  //middleware: ['generalAuthMw'],

  methods: {
    changeProfilePicture() {
      let token = this.$auth.getToken("local");
      this.$axios
        .post(
          "http://localhost:3001/user/updateProfilePicture",
          {
            profilePictureUrl:
              "https://img.freepik.com/free-psd/young-pretty-woman-smiling-happy-taking-selfie-holding-camera_1187-11328.jpg"
          },
          { Authorization: "bearer" + token }
        )
        .then(response => {
          this.$refs.picture.update()
        })
        .catch(error => {
          alert(error.message);
        });
    }
  },
  components: {
    profilePicture
  }
};
</script>

<style>
/* #background-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  text-align: center;
} */

/* #my-list {
    ...
    max-height: 720px;
    overflow-y: scroll;
} */
</style>
