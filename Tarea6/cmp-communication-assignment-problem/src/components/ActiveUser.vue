<template>
  <section> 
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
  },
};
</script>

<style>
section{
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>