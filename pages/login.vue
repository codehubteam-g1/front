<template class="has-background-danger clase2">
    <div class=" has-background-danger clase2">
    <form >
    Email:<br>
  <input type="email" name="email" v-model="user.email">
  <br>
  Password:<br>
  <input type="password" name="password" v-model="user.password">
  <br><br>
  <input type="submit" value="Submit"  @click.prevent="handleSubmit">
</form> 

    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: 'yonatan',
        password: ''
      }
    }
  },

  methods: {
    handleSubmit() {
      alert(this.user.email)
    }
  }
}
</script>

<style>
.clase2{
    position: absolute;
    height: 100%;
    width: 100%
}
</style>