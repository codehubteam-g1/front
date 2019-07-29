<template>
  <div>
    <div id="background-container" class="has-navbar-fixed-top" style="max-width: 1920px; margin: 0 auto;">
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      <nav
        class="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
        style="border-bottom: 1px solid #e6e6e6; max-width: 1920px; margin: 0 auto"
      >
        <div class="navbar-brand">
          <div class="navbar-item">
            <div style="width: 200px; text-align: center;">
              <img src="../static/rappi-logo.svg" width="140" />
            </div>
          </div>
        </div>

        <div class="navbar-menu is-active">
          <div class="navbar-start">
            <div
              class="navbar-item has-dropdown is-hoverable"
              style="padding-right: 50px; padding-left: 20px;"
            >
              <div class="navbar-item">
                <span class="icon is-small" style="padding-right: 20px">
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <span>{{selectedAddress.address}}</span>
              </div>

              <div class="navbar-dropdown">
                <div class="navbar-item" v-if="selectedAddress.id">
                  <a
                    class="is-size-6 has-text-grey-dark"
                    style="min-width: 305px;"
                  >{{ selectedAddress.tag }}: &nbsp;&nbsp;&nbsp;{{ selectedAddress.address }}</a>
                  <a
                    class="button is-danger"
                    style="margin-left: 5px;"
                    @click="deleteAddress(selectedAddress.id)"
                  >Eliminar</a>
                </div>
                <div class="navbar-item" v-for="item in unselectedAddresses" v-bind:key="item.id">
                  <a
                    class="is-size-6 has-text-grey-dark"
                    style="min-width: 305px;"
                    @click="selectAddress(item.id)"
                  >{{ item.tag }}: &nbsp;&nbsp;&nbsp;{{ item.address }}</a>
                  <a
                    class="button is-danger"
                    style="margin-left: 5px;"
                    @click="deleteAddress(item.id)"
                  >Eliminar</a>
                </div>

                <hr class="navbar-divider" />
                <div class="navbar-item">
                  <a
                    class="is-size-6 has-text-grey-dark"
                    style="cursor: default;"
                  >Agrega una nueva dirección:</a>
                </div>

                <div>
                  <div class="navbar-item">
                    <form @submit.prevent="addAddress">
                      <input
                        class="input"
                        style="width: 165px;"
                        type="text"
                        placeholder="Tu dirección"
                        v-model="insertedAddress"
                      />
                      <input
                        class="input"
                        style="width: 135px;"
                        type="text"
                        placeholder="(casa, trabajo, etc.)"
                        v-model="insertedTag"
                      />
                      <input class="button is-link" type="submit" value="Agregar" />
                    </form>
                  </div>
                </div>
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
                <a class="navbar-item" href="/user">&nbsp;&nbsp;&nbsp;Mi Perfil</a>
                <hr class="navbar-divider" />
                <a class="navbar-item" @click="logout">Cerrar sesión</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <stores />
    </div>
  </div>
</template>

<script>
import profilePicture from "~/components/profilePicture";
import stores from "~/components/stores";

export default {
  data() {
    return {
      selectedAddress: { address: "Ingresa tu dirección" },
      unselectedAddresses: [],
      insertedAddress: "",
      insertedTag: ""
    };
  },

  methods: {
    logout() {
      this.$auth.logout().then(response => {
        this.$toast.info("Sesión cerrada", {
          duration: 1500,
          position: "top-center"
        });
        this.$router.push("../login");
      });
    },
    getAddresses() {
      this.selectedAddress = { address: "Ingresa tu dirección" };
      let token = this.$auth.getToken("local");
      this.$axios
        .get("http://127.0.0.1:3001/users/addressesByUserId", {
          Authorization: "bearer" + token
        })
        .then(response => {
          this.unselectedAddresses = [];
          let addresses = response.data.addresses;
          console.log(addresses);

          if (addresses.length !== 0) {
            addresses.forEach(element => {
              if (element.selected === false) {
                this.unselectedAddresses.push(element);
              } else {
                this.selectedAddress = element;
              }
            });
          }
        })
        .catch(error => error);
    },

    addAddress() {
      let token = this.$auth.getToken("local");
      this.$axios
        .post(
          "http://127.0.0.1:3001/users/createAddress",
          {
            address: this.insertedAddress,
            tag: this.insertedTag
          },
          { Authorization: "bearer" + token }
        )
        .then(response2 => {
          this.$toast.success("Se han guardado los cambios", {
            duration: 1500,
            position: "top-right"
          });
          this.getAddresses();
          this.insertedAddress = "";
          this.insertedTag = "";
        })
        .catch(error => {
          this.alertMessage = error.response.data.errorMessage;
          this.alert = true;
        });
    },
    selectAddress(id) {
      let token = this.$auth.getToken("local");
      this.$axios
        .post(
          "http://127.0.0.1:3001/users/selectAddress",
          {
            id
          },
          { Authorization: "bearer" + token }
        )
        .then(response2 => {
          this.getAddresses();
        })
        .catch(error => {
          this.alertMessage = error.response.data.errorMessage;
          this.alert = true;
        });
    },
    deleteAddress(id) {
      let token = this.$auth.getToken("local");
      this.$axios
        .post(
          "http://127.0.0.1:3001/users/deleteAddress",
          {
            id
          },
          { Authorization: "bearer" + token }
        )
        .then(response2 => {
          this.$toast.success("Se ha eliminado", {
            duration: 1500,
            position: "top-right"
          });
          this.getAddresses();
        })
        .catch(error => {
          this.alertMessage = error.response.data.errorMessage;
          this.alert = true;
        });
    }
  },
  components: {
    profilePicture,
    stores
  },
  created() {
    this.getAddresses();
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

.navbar {
  min-height: 6.25em; /* Increases the minimun height of the navbar from 3.25em to 6.25em */
}

.navbar-item img {
  max-height: 6.25em; /* Increases the maximum height of the navbar-item images from 1.75em to 6.25em */
}
</style>
