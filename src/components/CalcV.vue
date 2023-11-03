<template>
    <div id="app"> 
       <p> x <input v-model="x"> </p> 
       <p> y <input v-model="y"></p>
          <hr>        
       Сложение = <span v-text="plus" ></span> 
       <hr>
       Вычитание = <span v-text="minus" ></span>
       <hr>
       Умножение = <span v-text="umn" ></span>
       <hr>
       Деление = <span v-text="del" ></span>
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
           plus(){
                if(isNotNumericValue(parseFloat(this.x))) return this.lastResult;
                if(isNotNumericValue(parseFloat(this.y))) return this.lastResult; 
                return parseFloat(this.x) + parseFloat(this.y)
           },
           minus(){
                if(isNotNumericValue(parseFloat(this.x))) return this.lastResult;
                if(isNotNumericValue(parseFloat(this.y))) return this.lastResult; 
                return parseFloat(this.x) - parseFloat(this.y)
           },
           umn(){
                if(isNotNumericValue(parseFloat(this.x))) return this.lastResult;
                if(isNotNumericValue(parseFloat(this.y))) return this.lastResult; 
                return parseFloat(this.x) * parseFloat(this.y)
           },
           del(){
                if(isNotNumericValue(parseFloat(this.x))) return this.lastResult;
                if(isNotNumericValue(parseFloat(this.y))) return this.lastResult; 
                if (this.y==0) return "Деление на ноль"
                else return parseFloat(this.x) / parseFloat(this.y)
           },
    }
}
</script>
<style> 
        р, input { font-family: monospace; } 
        р { white-space: pre; } 
</style>