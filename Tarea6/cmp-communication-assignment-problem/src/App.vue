<template>
  <header><h1>Tarea 3</h1></header>
  <section>
  <div class="row">
    <div class="column">
      <header class="formHeader"><h1>Usuarios</h1></header>
      <active-user
        v-for="active in actives"
        :key="active.id"
        :name="active.name"
        :age="active.age"
      >
      </active-user>
    </div>
    <div class="column"><user-data @add-user="addUser"></user-data></div>
  </div>
  </section>
</template>
<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: {
    ActiveUser,
    UserData,
  },
  data() {
    return {
      actives: [
        {
          id: "Carlos",
          name: "Carlos Vega",
          age: 28,
        },
        {
          id: "Victoria",
          name: "Victoria Oporto",
          age: 26,
        },
      ],
    };
  },
  methods: {
    addUser(name, age) {
      const newUser = {
        id: new Date().toString(),
        name: name,
        age: age,
      };
      this.actives.push(newUser);
    },
  },
};
</script>
<style>
html {
  font-family: "Jost", sans-serif;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 0.1rem;
  background-color: #58004d;
  color: white;
  display: flex;
  justify-content: center;
  max-width: 55rem;
  width: 90%;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0.2rem 0 1rem 0;
  justify-content: center;
  display: flex;
}
#app h3 {
  font-size: 1.5rem;
  margin: 0.2rem 0 1rem 0;
  justify-content: center;
  display: flex;
}
.column {
  float: left;
  width: 50%;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.formHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem auto;
  background-color: #f1a520;
  max-width: 20rem;
  margin-bottom: 2rem;
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
