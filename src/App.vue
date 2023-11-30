<script>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  components: {
    RouterView,
    HeaderComponent
  },
  created() {
    this.$store.dispatch('initStocks')
  },
}
</script>

<template>
  <div class="container">
    <header-component />
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>  
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 200ms ease-out;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>