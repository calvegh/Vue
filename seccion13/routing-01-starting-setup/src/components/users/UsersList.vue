<template>
<section>
<button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
  </section>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {changesSaved:false};
  },
  methods: {
    saveChanges(){
      this.changesSaved =true
    }
  },
  beforeRouteLeave(to, from, next){
    console.log('UserList comp beforeRouteLeave');
    console.log(to, from)
    if (this.changesSaved){
      next();
    }else{
        const usersWantsToLeave = confirm('Are you sure? You got unsaved changes');
        next(usersWantsToLeave)
    }
  },
  unmounted(){
    console.log('unmounted')
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>