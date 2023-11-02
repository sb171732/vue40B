<template>
     <div class="">
          <input type="number" v-model="p1">
          <input type="number" v-model="p2">
          <hr>
          <button @click="plus(p1,p2)">+</button>
          <button @click="minus(p1,p2)">-</button>
          <button @click="umn(p1,p2)">*</button>
          <button @click="del(p1,p2)">/</button>
     </div>
</template>
<script>

  export default {
     data(){
        return{
           p1:'',
           p2:''

        }
     },
     methods:{
        show(){
            console.log('!!!!!!!')
        },
        plus(p1,p2){
            console.log(parseInt(p1) + parseInt(p2))
        },
        minus(p1,p2){
            console.log(parseInt(p1) - parseInt(p2))
        },
        umn(p1,p2){
            console.log(parseInt(p1) * parseInt(p2))
        },
        del(p1,p2){
            // проверка на ноль p2
            console.log(parseInt(p1) / parseInt(p2))
        },
     }
  }

</script>