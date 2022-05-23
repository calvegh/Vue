const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname:'',
      confirmedName:'',
      /* fullname:'', */
    };
  },
  watch:{
    counter(value){
      if (value>50){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        },2000);
      }
    }
   /*  name(value){
      this.fullname = value + ' ' + 'Vega'
  }  */
  },
  computed:{
    fullname(){
      /* if (this.name===''){
        return '';
      } */
      return this.name + ' ' + this.lastname;
    }
  },
methods: {
  outputFullname(){
    console.log("Running again...")
    if (this.name ===''){
      return '';
    }
    return this.name + ' ' + this.lastname;
  },
  increment(num){
    this.counter = this.counter + num
  },
  decrement(num){
    this.counter = this.counter - num
  },
  setName(event,last_name){
    this.name = event.target.value
  },
  submitForm(){
    alert('Submitted!')
  },
  confirmInput(){
    this.confirmedName = this.name
  },
  resetInput(){
    this.name='';
  }
}
});

app.mount('#events');
