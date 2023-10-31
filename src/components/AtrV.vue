<template>
    <div class="">
        <a target="_blank" :href="url">Открыть картинку</a>
        <hr>
        
        <input :type="type">
        <hr>
        <select v-model="type" id="">
             <option value="radio">radio</option>
             <option value="checkbox">checkbox</option>
             <option value="password">password</option>
             <option value="number">number</option>
             <option value="date">date</option>
             <option value="file">file</option>
        </select>
        <hr>
        <img id="img" v-bind:src="url" alt="">
        <hr>
    </div>
</template>
<script>
export default {
    data() {
       return{
         url:'https://res.cdn.office.net/officehub/images/content/images/unauth-refresh/highlight-consumer-1-rebrand-fdd28e2535.png'
         ,
         type:'text'
        } 
    },
}
</script>
<style>
      #img{
        width: 500px;
      }
</style>