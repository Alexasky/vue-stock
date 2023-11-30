<script>
import StockComponent from '../components/StockComponent.vue';

export default {
    components: { StockComponent },
    computed: {
      stocks(){
        return this.$store.getters.stocks
      }
    }
}
</script>
<template>
    <div class="row gy-4"
    >
        <stock-component v-for="stock in stocks" :key="stock.id" :stock="stock"> </stock-component>
    </div>
  </template>
  
  <style>
  
  </style>