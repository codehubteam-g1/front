<template>
  <div style="max-width: 1920px; min-width: 1000px; margin: 0 auto;">
    <navigationBar />
    <div style="padding: 6.25em 0px 0px 0px">
      <div style="height: 250px; overflow: hidden; display: flex; align-items: center;">
        <img style="width: 100%;" v-bind:src="bucketUrl+store.coverPictureUrl"/>
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
                  <img v-bind:src="bucketUrl+store.logoUrl" />
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
    <products :storeId="storeId"/>
  </div>
</template>

<script>
import navigationBar from "~/components/navigationBar";
import products from "~/components/products"

export default {
  data() {
    return {
      score: (Math.random() + 3.6).toFixed(1),
      number: Math.ceil(Math.random() * 10) * 50,
      store: [],
      storeId: null,
      bucketUrl: process.env.bucketUrl
    };
  },
  components: {
    navigationBar,
    products
  },

  created() {
    let id = this.$route.params.id;
    this.storeId = id
    let token = this.$auth.getToken("local");
    this.$axios
      .get(process.env.apiUrl+`/stores/getStoreByStoreId/${id}`, {
        Authorization: "bearer" + token
      })
      .then(response => {
        this.store = response.data.store
      })
      .catch(error => error);
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