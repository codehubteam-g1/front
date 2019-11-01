<template>
  <div>
    <div class="has-navbar-fixed-top">
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      <nav
        class="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
        style="border-bottom: 1px solid #e6e6e6; max-width: 1920px; margin: 0 auto; padding: 0px 50px 0px 50px"
      >
        <div class="navbar-brand">
          <div class="navbar-item" style="padding: 0px 0px 0px 0px">
            <div style="text-align: center;">
              <nuxt-link to="/">
                <img v-bind:src="bucketUrl+'general/rappi-logo.svg'" width="140" />
              </nuxt-link>
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
                <span class="icon is-small" style="padding: 0px 20px 0px 40px">
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <span>{{selectedAddress.address}}</span>
              </div>

              <div class="navbar-dropdown">
                <div class="navbar-item" v-if="selectedAddress.id">
                  <span
                    class="is-size-6 has-text-grey-dark"
                    style="min-width: 305px; cursor: pointer"
                  >{{ selectedAddress.tag }}: &nbsp;&nbsp;&nbsp;{{ selectedAddress.address }}</span>
                  <span
                    class="button is-danger"
                    style="margin-left: 5px"
                    @click="deleteAddress(selectedAddress.id)"
                  >Eliminar</span>
                </div>
                <div class="navbar-item" v-for="item in unselectedAddresses" v-bind:key="item.id">
                  <span
                    class="is-size-6 has-text-grey-dark"
                    style="min-width: 305px; cursor: pointer"
                    @click="selectAddress(item.id)"
                  >{{ item.tag }}: &nbsp;&nbsp;&nbsp; {{ item.address }}</span>
                  <span
                    class="button is-danger"
                    style="margin-left: 5px;"
                    @click="deleteAddress(item.id)"
                  >Eliminar</span>
                </div>

                <hr class="navbar-divider" />
                <div class="navbar-item">
                  <span class="is-size-6 has-text-grey-dark">Agrega una nueva dirección:</span>
                </div>

                <div>
                  <div class="navbar-item">
                    <form @submit.prevent="addAddress">
                      <input
                        class="input"
                        style="width: 160px;"
                        type="text"
                        placeholder="(casa, trabajo, etc.)"
                        v-model="insertedTag"
                      />
                      <input
                        class="input"
                        style="width: 240px;"
                        type="text"
                        placeholder="Tu dirección completa"
                        v-model="insertedAddress"
                      />
                      <input class="button is-link" type="submit" value="Agregar" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item" style="padding: 0px 40px 0px 10px;">
              <p class="control has-icons-left">
                <input class="input" type="text" placeholder="Busca un restaurante o producto" />
                <span class="icon is-small is-left">
                  <i class="fas fa-search"></i>
                </span>
              </p>
            </div>
            <div class="navbar-item">
              <nuxt-link to="/shoppingCart">
                <div style="padding: 0px 15px 0px 10px;">
                  <img v-bind:src="bucketUrl+'general/shopping-bag.svg'" title="Bolsa de compras" width="60px" alt />
                </div>
              </nuxt-link>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <nuxt-link to="/user">
                <div style="margin-right: 0px; margin-top: 10px; margin-left: 20px;">
                  <profilePicture ref="picture" style="width: 80px; height: 80px;" />
                </div>
              </nuxt-link>
              <div class="navbar-dropdown">
                <nuxt-link to="/user">
                  <span class="navbar-item" style="width: 120px">&nbsp;&nbsp;&nbsp;Mi Perfil</span>
                </nuxt-link>
                <hr class="navbar-divider" />
                <span
                  class="navbar-item"
                  style="width: 120px; cursor: pointer"
                  @click="logout"
                >Cerrar sesión</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import profilePicture from "~/components/profilePicture";

export default {
  data() {
    return {
      selectedAddress: { address: "Ingresa tu dirección" },
      unselectedAddresses: [],
      insertedAddress: "",
      insertedTag: "",
      bucketUrl: process.env.bucketUrl
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
        .get(process.env.apiUrl+"/users/addressesByUserId", {
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
          process.env.apiUrl+"/users/createAddress",
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
          process.env.apiUrl+"/users/selectAddress",
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
          process.env.apiUrl+"/users/deleteAddress",
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
    profilePicture
  },
  created() {
    this.getAddresses();
  }
};
</script>

<style>
.navbar {
  min-height: 6.25em; /* Increases the minimun height of the navbar from 3.25em to 6.25em */
}

.navbar-item img {
  max-height: 6.25em; /* Increases the maximum height of the navbar-item images from 1.75em to 6.25em */
}
</style>