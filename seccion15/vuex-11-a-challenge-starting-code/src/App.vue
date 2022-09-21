<template>
<section>
  <the-header></the-header>
  <router-view></router-view>
  </section>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
    };
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