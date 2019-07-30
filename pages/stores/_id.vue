<template>
  <div style="max-width: 1920px; min-width: 1000px; margin: 0 auto;">
    <navigationBar />
    <div style="padding: 6.25em 0px 0px 0px">
      <div style="height: 250px; overflow: hidden; display: flex; align-items: center;">
        <img style="width: 100%;" v-bind:src="store.coverPictureUrl" alt />
        <div class="card" style="position: absolute; padding-left: 30px">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{store.name}}</p>
                <p class="subtitle is-6 has-text-grey">
                  {{store.description}}
                  <br />
                  {{store.address}}
                </p>
              </div>

              <div class="media-right">
                <figure class="image is-64x64">
                  <img v-bind:src="store.logoUrl" />
                </figure>
              </div>
            </div>
            <div class="content">
              <div class="rectangle" style="has-icons-right; margin-left: -15px">
                <span>{{score}}</span>
                <span class="icon is-small is-right" style="color: orange">
                  <i class="fas fa-star"></i>
                </span>
                <span class="has-text-grey">({{number}}+)</span>
              </div>
              <div class="rectangle">
                <span>30 - 40 min</span>
              </div>
              <div class="rectangle">
                <span>$ 3.500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="padding: 5px 0 5px 54px; border-bottom: 1px solid #e6e6e6">
      <p class="is-size-6">
        <strong>Horario</strong>&nbsp;(8:00 am - 9:00 pm)
      </p>
    </div>
  </div>
</template>

<script>
import navigationBar from "~/components/navigationBar";
export default {
  data() {
    return {
      store: {
        name: "Poke",
        description: "Asiática",
        logoUrl:
          "https://images.squarespace-cdn.com/content/5784db22cd0f68f8a73d4007/1475462692394-31VZKFP3Y9Z5FRUS815X/Red+on+Pink.jpg?content-type=image%2Fjpeg",
        coverPictureUrl:
          "https://images.squarespace-cdn.com/content/v1/5784db22cd0f68f8a73d4007/1537804032389-SOPDKQNJYUC3NU32OCVF/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/118.jpg?format=2500w",
        address: "Av. 80 #No. 16-14"
      },
      score: (Math.random() + 3.6).toFixed(1),
      number: Math.ceil(Math.random() * 10) * 50
    };
  },
  components: {
    navigationBar
  }
};
</script>

<style>
.rectangle {
  display: inline-block;
  background-color: #f5f5f5;
  padding: 5px 15px 5px 15px;
}
</style>

<span>jijiji asdasdasda {{this.$route.params.id}}</span>