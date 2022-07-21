<template>
  <section>
  <header class="formHeader"><h1>Agregar User</h1></header>
  <div class="divForm">
  <form @submit.prevent="submitData">
    
    <div>
      <label for="">Name</label>
      <input type="text" placeholder="Your name?" v-model="enteredName" />
    </div>
    <div>
      <label for="">Edad</label>
      <input type="integer" placeholder="Your Age?" v-model="enteredAge" />
    </div>
    <div>
    <button>Add User</button>
    </div>
  </form>
  </div>
  </section>
</template>

<script>
export default {
    emits:['add-user'],
    data(){
        return{
            enteredName:'',
            enteredAge:''
        }
    },
    methods:{
        submitData(){
            this.$emit(
                "add-user",
                this.enteredName,
                this.enteredAge
            );
        }
    }
};
</script>
