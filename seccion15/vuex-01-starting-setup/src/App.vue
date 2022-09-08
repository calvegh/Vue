<template>
  <section>
    <base-container v-if="isLogin" title="Vuex">
      <the-counter></the-counter>
      <change-counter></change-counter>
      <favorite-value></favorite-value>
      <button @click="addOne">Add 10</button>
    </base-container>
    <base-container title="Auth">
      <user-auth> </user-auth>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },

  methods: {
    addOne() {
      //this.$store.dispatch('increase',{value: 10})
      this.$store.dispatch({
        type: 'counter/increase',
        value: 10,
      });
    },
  },
  computed: {
      isLogin(){
          return this.$store.getters.isLogin;
      }
    //...mapGetters(['isLogin']),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
