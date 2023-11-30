<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        funds(){
            return this.$store.getters.funds
        },
        insufficientFunds(){
            return this.stock.price * this.quantity > this.funds
        }
    },
    methods: {
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity                
            }
            this.$store.dispatch('buyStock', order);
            this.quantity = 0
        }
    }
}
</script>
<template>
    <div class="col col-md-4 col-sm-6 col-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">{{stock.name}}
                    <small class="fs-6">(Price: {{stock.price}})</small>
                </h3>
            </div>
            <div class="card-body d-flex justify-content-between">
                <div class="me-3">
                    <input type="number" class="form-control" :class="{danger: insufficientFunds}" placeholder="Quantity" v-model="quantity" >
                </div>
                <div>
                    <button class="btn btn-success" @click="buyStock" :disabled="quantity<=0 || !Number.isInteger(quantity) || insufficientFunds">
                        {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>