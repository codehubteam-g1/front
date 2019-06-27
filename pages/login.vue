<template>
  <div id="background-container">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <div id="first-level-container">
      <div id="second-level-container-left">
        <div id="app-image-container">
          <img src="../static/background-app-image.webp" alt="Logo de Rappi">
        </div>
      </div>

      <div id="second-level-container-right">
        <registrationForm/>
      </div>
    </div>
  </div>
</template>

<script>
import registrationForm from "~/components/registrationForm";

export default {
  components: {
    registrationForm
  },

  //middleware: ['loginAuthMw']
};
</script>

<style scoped>
#background-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  text-align: center;
}

#first-level-container {
  position: absolute;
  display: inline-block;
  height: 850px;
  width: 1000px;
  top: 50%;
  left: 46%;
  transform: translate(-50%, -50%);
  /* background-color: blue; */
}

#app-image-container {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#second-level-container-left {
  position: absolute;
  height: 850px;
  width: 600px;
}

#second-level-container-right {
  position: absolute;
  height: 850px;
  width: 400px;
  right: 0px;
}
</style>
