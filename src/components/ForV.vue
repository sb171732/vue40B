<template>
    <div class="">
        <input :type="type">
        <hr>
        <select v-model="type" id="">
             <option v-for="t in type_list " :key="t"  :value="t">{{ t }}</option>
        </select>
        <hr>
        <img id="img" v-bind:src="url" alt="">
        <hr>
        <h4>Список типов input:</h4>
        <ul>
            <li v-for="t in type_list " :key="t">{{ t }}</li>
        </ul>
        

    </div>
</template>
<script>
export default {
    data() {
       return{
         type:'text',
         type_list:['radio','checkbox','password','number','date']
        } 
    },
}
</script>
<style>
      #img{
        width: 500px;
      }
</style>