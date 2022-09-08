<template>
  <section>
    <button v-if="isLogin" @click="login({ value: false })">Logout</button>
    <button v-else @click="login({ value: true })">Login</button>
  </section>
</template>

<script>
import { mapActions, /* mapGetters */ } from 'vuex';
export default {
  methods: {
    ...mapActions(['login']),
    /* login(payload){
        this.$store.dispatch('login',payload)
    } */
  },
  computed: {
      isLogin(){
          return this.$store.getters.isLogin;
      }
    //...mapGetters(['isLogin']),
  },
};
</script>
