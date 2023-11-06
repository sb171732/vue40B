<template>
    <div class="">
        <h2>Анимация</h2>
        show: {{ show }} <br>
        <button @click="show = !show">
            Переключить
        </button>

        <transition name="fade">
            <p v-if="show">привет</p>
        </transition>
       <hr>
       <transition name="slide-fade">
            <p v-if="show">привет</p>
        </transition>


    </div>
</template>
<script>
export default {
    data() {
      return{
        show: true
      }  
    },
}
</script>
<style>
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }


    /* Анимации появления и исчезновения могут иметь    */
    /* различные продолжительности и функции плавности. */
    .slide-fade-enter-active {
    transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
    }
</style>