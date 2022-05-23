const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
      console.log(this.currentUserInput)
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userText.value
      //console.log(this.$refs.userText)
    },
    
  },
  beforeCreate(){
    console.log('beforeCreate()');
  },
  created(){
    console.log('created()');
  },
  beforeMount(){
    console.log('beforeMount()');
  },
  mounted(){
    console.log('mounted()');
  },
  beforeUpdate(){
    console.log('beforeUpdate()');
  },
  updated(){
    console.log('updated()');
  },
  beforeUnmount(){
    console.log('beforeUnmount()');
  },
  unmounted(){
    console.log('unmounted()');
  }
  
});

app.mount('#app');
setTimeout(function(){
  app.unmount();
  
},3000)


const data = {
  message:'Hello',
  longMessage: 'Hello! World!' 
};

const handler = {
  set(target, key, value){
    if (key === 'message'){
      target.longMessage = value + ' World!';
    }
    target.message = value;
    /* console.log(target);
    console.log(key);
    console.log(value); */
  }
}
const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!!!!"

/* console.log(proxy.longMessage) */

const app2  = Vue.createApp({
  template:'<p>{{ favoriteMeal }}</p>',
  data(){
    return {
      favoriteMeal: 'pizza'
    }
  }

})

app2.mount("#app2");