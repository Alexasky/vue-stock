<script>
import {mapActions} from 'vuex'
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientsQuantity(){
            return this.quantity > this.stock.quantity;
        }
    },
    methods: {
        ...mapActions({
            sellStockAction:'sellStock'
        }),
        sellStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity                
            }
            this.sellStockAction(order)
            this.quantity = 0
        }
    }
}
</script>
<template>
    <div class="col col-md-4 col-sm-6 col-12">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">{{ stock.name }}
                    <small class="fs-6">(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="card-body d-flex justify-content-between">
                <div class="me-3">
                    <input type="number" class="form-control" :class="{danger: insufficientsQuantity}" placeholder="Quantity" v-model="quantity" >
                </div>
                <div>
                    <button class="btn btn-info" @click="sellStock" :disabled="quantity<=0 || !Number.isInteger(quantity) || insufficientsQuantity">
                        {{ insufficientsQuantity ? 'Not enough stock' : 'Sell' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>