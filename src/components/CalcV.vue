<template>
    <div id="app"> 
       <p> x <input v-model="x"> </p> 
       <p> y <input v-model="y"></p>
          <hr>        
        = <span v-text="result"></span>
</div> 
</template>
<script> 
    function isNotNumericValue(value) { 
        return isNaN(value) || ! isFinite(value)
    }  
     
   export default{ 
    data(){ 
        return{ 
            x:0,
            y:0, 
            lastResult: 0 }
    }, 
    computed:{
           result(){
            
            if(isNotNumericValue(parseFloat(this.x)))
                return this.lastResult;

            
            if(isNotNumericValue(parseFloat(this.y))) 
                return this.lastResult; 
            
            return parseFloat(this.x) + parseFloat(this.y)
           }
    }
}
</script>
<style> 
        р, input { font-family: monospace; } 
        р { white-space: pre; } 
</style>