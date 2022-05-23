const app = Vue.createApp({
    data(){
        return {
            value1: false,
            value2: false,
            text1: '',
            toggle: true,
            color: 'red',
        }
    },
    methods:{
        addText(event){
            if (event.key=='Enter'){
                this.text1 = event.target.value
            }
            if(this.text1==='user1'){
                this.value1 =true;
                this.value2 =false;
            }else if(this.text1==='user2'){
                this.value2 =true;
                this.value1 =false;}
            else{
                this.value2 =false;
                this.value1 =false;
            }
        },
        toogleClick(){
            this.toggle = !this.toggle;
            console.log(this.color)
        },
        addColor(event){
            this.color = event.target.value;
        }
    }
})

app.mount('#assignment')