<template>
    <div id="demo">
        <input class="w3-radio" v-model="view" type="radio" value="v-a" id="a"><label for="a">Aнимация</label>
         <br>
        <input class="w3-radio" v-model="view" type="radio" value="v-b" id="b"><label for="b">Список группы</label>
        <transition name="component-fade" mode="out-in">
            <component :is="view"></component>
        </transition>
</div>
</template>
<script>
    import CV from "./AnimateV.vue"
    import GL from "./GroupList.vue"
   export default{
    data() {
        return {
            view: 'v-a'
        }
    },
    components: {
        'v-a': CV,
        'v-b': GL
    }
   }
</script>
<style>
    .component-fade-enter-active,
    .component-fade-leave-active {
    transition: opacity 1.5s ease;
    }

    .component-fade-enter-from,
    .component-fade-leave-to {
    opacity: 0;
    }
</style>