<template>
  <div id="third-level-container">
    <div id="registration-container" >
      <div id="logo-container">
        <img id="logo" v-bind:src="bucketUrl+'general/rappi-logo.svg'" alt="Logo de Rappi">
      </div>
      <signupForm v-if="signupOption"/>
      <loginForm v-if="loginOption"/>
    </div>

    <div id="other-option-container" v-if="signupOption">
      <p class>
        ¿Ya tienes una cuenta?
        <span v-on:click="loginOption=true; signupOption=false" class="has-text-link"  style="cursor: pointer;">Inicia sesión</span>
      </p>
    </div>

    <div id="other-option-container" v-if="loginOption">
      <p class>
        ¿No tienes una cuenta?
        <span v-on:click="loginOption=false; signupOption=true" class="has-text-link"  style="cursor: pointer;">Regístrate</span>
      </p>
    </div>

  </div>
</template>

<script>
import signupForm from "~/components/signupForm";
import loginForm from "~/components/loginForm";

export default {
  data () {
    return {
      signupOption: false,
      loginOption: true,
      bucketUrl: process.env.bucketUrl
    }
  },
  components: {
    signupForm,
    loginForm
  }
};
</script>

<style scoped>
#third-level-container {
  position: absolute;
  height: 545px;
  width: 350px;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#registration-container {
  background-color: white;
  width: 400px;
  padding: 35px 0px 20px 0px;
  margin-bottom: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
}

#other-option-container {
  background-color: white;
  width: 400px;
  height: 70px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#logo-container {
  display: block;
  text-align: center;
}

#logo {
  height: 60px;
}
</style>



