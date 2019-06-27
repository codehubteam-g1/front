<template>
    <div>
        <p>Bienvenido a Rappi</p>
        <div>
            <button @click="logout">
                Logout
            </button>
        </div>
    </div>
</template>

<script>
export default {
    //middleware: ['generalAuthMw'],

    methods: {
        logout() {
            this.$auth.logout().then(response => {
                this.$toast.success('Logged out');
                this.$router.push('../login');
            });   
        }
    }
}
</script>

<style>

</style>
