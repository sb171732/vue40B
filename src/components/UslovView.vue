<template>
    <div class="">
        <h1 v-if="seen == true">Видно?   </h1>
        <h1 v-else> Не видно  </h1>
        
        <h2 v-if="col<3"> {{ m }}  </h2>

        <h3 v-else> {{ col-5 }}  </h3>
    </div>
</template>
<script>
   export default {
    data(){
        return{
            message:'Видно ',
            m:'2',
            col:6,
            seen:true
        }
    }
   }

</script>
