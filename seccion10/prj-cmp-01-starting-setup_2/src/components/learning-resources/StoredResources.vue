<template>
  <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>
<script>
import learningResource from './LearningResource.vue'
export default {
    components:{'learning-resource':learningResource},
    inject:['resources'],
}
</script>
<style scoped>
ul{
    list-style: none;
    margin:0;
    padding:0;
    margin:auto;
    max-width: 40rem;
}
</style>