<template>
    <div class="">
        <h3>{{ fio }}</h3>
        <input class="w3-margin" v-model="login" type="text" style="width: 500px;" placeholder="Введите логин">
        <br>
        <input class="w3-margin" v-model="password" type="password" style="width: 500px;" placeholder="Введите пароль">
        <br>
        <button @click="login1">войти</button>
        <hr>
        Выбран : {{ selected  }}
        <hr>
        <select v-model="selected" id="">
            <option value="1">1</option> 
            <option value="2">2</option> 
            <option value="3">3</option> 
            <option value="4">4</option> 
            <option value="5">5</option> 
        </select>

    </div>
</template>
<script>
   export default {
    data(){
        return{
           fio:'Ооржак Кан-Болат Владимирович',
           login:'',
           password:'',
           selected:''

        }
    },
    methods:{
        login1(){
            console.log(this.login + ' ,  '+ this.password)
        }
    }
   }
</script>
