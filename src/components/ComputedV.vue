<template>
	<div class="">
        <p>Имя: <input type="text" v-model="name"></p>
        <p>Фам: <input type="text" v-model="surn"></p>
        <p>ФИО: {{ full }}</p>
    </div>
</template>
<script>
export default{
    data(){
        return{
            name: '',
            surn: '',
        }
    },
    computed: {
        full: function() {
            return this.name + ' ' + this.surn;
        }
}
}
</script>
