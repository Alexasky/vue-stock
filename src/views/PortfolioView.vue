<script>
import { mapGetters } from 'vuex';
import PortfolioStock from '../components/PortfolioStock.vue'
export default {  
  computed:{
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: { PortfolioStock}
}
</script>
<template>
  <div class="row gy-4">
    <portfolio-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></portfolio-stock>
  </div>
</template>

<style>

</style>
