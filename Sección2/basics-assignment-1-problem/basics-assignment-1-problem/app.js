const assigment1 = Vue.createApp({
    data(){
        return {
            name:'Carlos',
            edad:28,
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Triathlon_pictogram.svg/800px-Triathlon_pictogram.svg.png"
        }
    },
    methods:{
        ageplus(value){
            return this.edad+value;
        },
        randomNumber(){
            return Math.random();
        }
    }
}
);

assigment1.mount('#assignment')