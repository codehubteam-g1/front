<template>
  <div style="margin-left: auto; margin-right: auto;" class="image-cropper">
    <img v-bind:src="profilePictureUrl" alt="Foto de perfil" class="image" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      profilePictureUrlDefault: "/profile-picture.svg",
      profilePictureUrl: ""
    };
  },
  methods: {
    update() {
      let token = this.$auth.getToken("local");
      this.$axios
        .get("http://localhost:3001/user", { Authorization: "bearer" + token })
        .then(response => {
          let pictureUrl = response.data.user.profilePictureUrl;
          if (pictureUrl) this.profilePictureUrl = pictureUrl;
          else this.profilePictureUrl = this.profilePictureUrlDefault;
        })
        .catch(error => error);
    }
  },

  computed: {},

  created: function() {
    let token = this.$auth.getToken("local");
    this.$axios
      .get("http://localhost:3001/user", { Authorization: "bearer" + token })
      .then(response => {
        let pictureUrl = response.data.user.profilePictureUrl;
        if (pictureUrl) this.profilePictureUrl = pictureUrl;
        else this.profilePictureUrl = this.profilePictureUrlDefault;
      })
      .catch(error => error);
  }
};
</script>

<style scoped>
.image-cropper {
  border-radius: 50%;
  border-style: solid;
  border-width: 5px;
  border-color: #ff7175;
  overflow: hidden;
}

.image {
  height: 100%;
}
</style>
