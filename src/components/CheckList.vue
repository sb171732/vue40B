<template>
   <div class="">
        <input v-model="new_todo" type="text" placeholder="Новое дело"> 
        <el-button icon="el-icon-plus" @click="add()"></el-button>
        <hr>
        Список дел:
        <ul>
            <li v-for="(t,index) in todo" :key="index">
                    <input type="checkbox" :checked="t.checked" @change="check(t.name)">
                    <span v-if="t.checked == true" style="text-decoration: line-through;"> {{ t.name }}</span> 
                    <span v-else > {{ t.name }}</span> 
            </li>
        </ul>
   </div>
</template>

<script>
export default {
   data(){
     return{
        new_todo:'',
        todo:[
            { checked:false, name:"Дело 1"},
            { checked:true, name:"Дело 2"},
        ]  
     }
   },
   methods:{
    add(){
        this.todo.push({checked:false, name:this.new_todo})
        this.new_todo = ''
    },
    check(name){
        for (let t in this.todo){
            if (this.todo[t].name==name){
                this.todo[t].checked = true
            }
        }
     
    }
   }
}
</script>

<style>

</style>