<script>
  export default {
    computed: {
      funds(){
        return this.$store.getters.funds
      }
    }
  }
</script>

<template>
  <div>
    <h1>Trade or View your portfolio</h1>
    <h6>You may Save & Load your Data</h6>
    <h6>Click on 'End Day' to begin a New Day!</h6>
    <hr>
    <p>Your Funds: {{ $filters.currencyUSD(funds) }}</p>
  </div>
</template>
