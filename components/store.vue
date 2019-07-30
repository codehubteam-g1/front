<template>
  <a href>
    <div class="card" style="margin: 20px 0px 20px 0px">
      <div class="card-image">
        <figure class="image is-2by1">
          <img v-bind:src="store.coverPictureUrl" />
        </figure>
      </div>

      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{store.name}}</p>
            <p class="subtitle is-6 has-text-grey">{{store.description}}</p>
          </div>

          <div class="media-right">
            <figure class="image is-64x64">
              <img v-bind:src="store.logoUrl" />
            </figure>
          </div>
        </div>

        <div class="content">
          <div class="rectangle">
            <span>30 - 40 min</span>
          </div>
          <div class="rectangle" style="has-icons-right">
            <span>4.3</span>
            <span class="icon is-small is-right" style="color: orange">
              <i class="fas fa-star"></i>
            </span>
            <span class="has-text-grey">(500+)</span>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
    };
  },
  props: [
    'store'
  ]
};
</script>

<style scoped>
.rectangle {
  display: inline-block;
  background-color: #f5f5f5;
  padding: 5px 15px 5px 15px;
}
</style>
