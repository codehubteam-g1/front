<template>
  <a href>
    <div class="card" style="margin: 20px 0px 20px 0px;">
      <div class="card-image">
        <figure class="image is-2by1">
          <img v-bind:src="store.coverPictureUrl" />
        </figure>
      </div>

      <div class="card-content" style="padding-left: 30px">
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
      score: (Math.random() + 3.6).toFixed(1),
      number: Math.ceil(Math.random() * 10) * 50
    };
  },
  props: ["store"]
};
</script>

<style scoped>
.rectangle {
  display: inline-block;
  background-color: #f5f5f5;
  padding: 5px 15px 5px 15px;
}
</style>
