<template>
  <div id="background-container" class="has-navbar-fixed-top">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <div style="width: 200px; text-align: center;">
            <img src="../static/rappi-logo.svg" width="140" />
          </div>
        </div>
      </div>

      <div id="navbarBasicExample" class="navbar-menu is-active" style="m">
        <div class="navbar-start">
          <div
            class="navbar-item has-dropdown is-hoverable"
            style="padding-right: 50px; padding-left: 20px;"
          >
            <div class="navbar-item">
              <span class="icon is-small" style="padding-right: 20px">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span>Carrera 4A #55-55</span>
            </div>

            <div class="navbar-dropdown">
              <a class="navbar-item">Carrera 51 #96-24, Pasadena</a>
              <a class="navbar-item">Calle 12 #22-11</a>
              <a class="navbar-item">Centro de alta tecnología, local 114</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Agregar una nueva dirección</a>
            </div>
          </div>
          <div class="navbar-item">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Busca un restaurante o producto" />
              <span class="icon is-small is-left">
                <i class="fas fa-search"></i>
              </span>
            </p>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <a href>
              <div style="padding-left: 10px;">
                <img src="~/static/shopping-bag.svg" title="Bolsa de compras" width="60px" alt />
              </div>
            </a>
          </div>

          <div
            class="navbar-item has-dropdown is-hoverable"
            style="margin-right: 30px; margin-top: 10px; margin-left: 30px;"
          >
            <a href="/user">
              <div style="padding-left: 10px;">
                <profilePicture ref="picture" style="width: 80px; height: 80px;" />
              </div>
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="/user">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Perfil</a>
              <hr class="navbar-divider" />
              <a class="navbar-item" @click="logout">Cerrar sesión</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import profilePicture from "~/components/profilePicture";

export default {
  //middleware: ['generalAuthMw'],

  methods: {
    logout() {
      this.$auth.logout().then(response => {
        this.$toast.info("Sesión cerrada", {
          duration: 1500,
          position: "top-center"
        });
        this.$router.push("../login");
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
