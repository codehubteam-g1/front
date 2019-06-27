<template>
  <div id="third-level-container">
    <div id="registration-container" v-bind:style="{ height: containerHeight + 'px'} ">
      <div id="logo-container">
        <img id="logo" src="../static/rappi-logo.svg" alt="Logo de Rappi">
      </div>
      <signupForm v-if="signupOption"/>
      <loginForm v-if="loginOption"/>
    </div>

    <div id="other-option-container" v-if="signupOption">
      <p class>
        ¿Ya tienes una cuenta?
        <a v-on:click="loginOption=true; signupOption=false; containerHeight=350">Inicia sesión</a>
      </p>
    </div>

    <div id="other-option-container" v-if="loginOption">
      <p class>
        ¿No tienes una cuenta?
        <a v-on:click="loginOption=false; signupOption=true; containerHeight=460">Regístrate</a>
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
      containerHeight: 350
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
  width: 350px;
  padding: 30px 0px 20px 0px;
  margin-bottom: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
}

#other-option-container {
  background-color: white;
  width: 350px;
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



