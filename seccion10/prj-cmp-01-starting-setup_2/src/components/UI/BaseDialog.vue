<template>
<teleport to="body" >
  <div @click="$emit('close')"></div>
  <dialog open>
    <header>
      <slot name="header">
        <h2>{{ title }}</h2>
      </slot>
    </header>
    <section>
      <slot></slot>
    </section>

    <menu>
      <slot name="actions">
          <base-button @click="$emit('close')">Close</base-button>
      </slot>
    </menu>
  </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  emits:['close']
};
</script>

<style scoped>
div{
    position:fixed;
    top:0;
    left:0;
    height:100vh;
    width: 100%;
    background-color: rgba(0,0,0,0.75);
}
header{
    background-color: #3a0061;
    color: white;
    width: 100%;
    padding: 1rem;
}
header h2{
    margin:0;
}
section{
    padding:1rem;
}
menu{
    padding:1rem;
    display:flex;
    justify-content: flex-end;
    margin:0;
}
@media (min-width:768px){
    dialog{
        border-radius: 8px;
        left:calc(50%-20rem);
        width: 40rem;
    }
}
</style>
