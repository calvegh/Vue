<template>
<section>
    <h3>
       {{counter}} 
    </h3>
    <p>We do more...</p>
    </section>
</template>
<script>
export default {
    computed: {
    counter() {
      return this.$store.getters['counter/normalizedCounter'];
    },
  },
}
</script>