const app = Vue.createApp({
    data() {
        return {
            text1: '',
            text2: '',
        }
    },
    methods:{
        buttonPress(){
            alert('Enviado');
        },
        addText(event){
            if (event.key=='Enter'){
                this.text2 = event.target.value;
            }else{
                this.text1 = event.target.value;
            }
        }
    },
});

app.mount('#assignment');