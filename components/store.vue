<template>
  <div class="card" style="margin: 20px 0px 20px 0px">
    <div class="card-image">
      <figure class="image is-2by1">
        <img
          src="https://cdn.vox-cdn.com/thumbor/w4Ddhb6pjvkU2d1vGPWoJpqOU0Y=/0x0:7425x6750/1200x800/filters:focal(3119x2781:4307x3969)/cdn.vox-cdn.com/uploads/chorus_image/image/63654502/SouthFlorida_InternationalMenuItems.0.jpg"
          alt="Placeholder image"
        />
      </figure>
    </div>

    <div class="card-content">

      <div class="media">
        <div class="media-content">
          <p class="title is-4">Mc Donald's Chapinero</p>
          <p class="subtitle is-6">Carrera 4A #55-55</p>
        </div>

        <div class="media-right">
          <figure class="image is-64x64">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/50/McDonald%27s_SVG_logo.svg"
              alt="Placeholder image"
            />
          </figure>
        </div>
      </div>

      <div class="content">
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        <div class="stars">4.5 e</div>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  methods: {
    // update() {
    //   let token = this.$auth.getToken("local");
    //   this.$axios
    //     .get("http://127.0.0.1:3001/users", { Authorization: "bearer" + token })
    //     .then(response => {
    //       let pictureUrl = response.data.user.profilePictureUrl;
    //       if (pictureUrl) this.profilePictureUrl = pictureUrl;
    //       else this.profilePictureUrl = this.profilePictureUrlDefault;
    //     })
    //     .catch(error => error);
    // }
  },

  computed: {}

  // created: function() {
  //   let token = this.$auth.getToken("local");
  //   this.$axios
  //     .get("http://127.0.0.1:3001/users", { Authorization: "bearer" + token })
  //     .then(response => {
  //       let pictureUrl = response.data.user.profilePictureUrl;
  //       if (pictureUrl) this.profilePictureUrl = pictureUrl;
  //       else this.profilePictureUrl = this.profilePictureUrlDefault;
  //     })
  //     .catch(error => error);
  // }
};
</script>

<style scoped>
  .stars {
    display: inline-block;
    background-color: rgb(203, 202, 204);
    padding: 5px 15px 5px 15px
  }
</style>
