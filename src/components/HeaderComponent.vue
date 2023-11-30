<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            isDropdownOpen: false
        }
    },
    computed: {
        funds(){
            return this.$store.getters.funds;
        }
    },
    methods: {
        ...mapActions([
            'randomizeStocks'
        ]),
        endDay(){
            this.randomizeStocks()
            this.dropdownClosed()
        },
        dropdownClosed(){
            this.isDropdownOpen = false
        }
    }
}
</script>
<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand">Stock Trader</router-link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" @click="dropdownClosed">
                            <router-link to="portfolio" class="nav-link" active-class="active">Portfolio</router-link>
                        </li>
                        <li class="nav-item" @click="dropdownClosed">
                            <router-link to="stocks" class="nav-link" active-class="active">Stocks</router-link>
                        </li>                                              
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" active-class="active" href="#" role="button" @click="endDay">End Day</a>
                        </li>  
                        <li class="nav-item dropdown" :class="{show: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Save & Load
                            </a>
                            <transition name="slide" mode="out-in">
                                <ul class="dropdown-menu" :class="{show: isDropdownOpen}" v-if="isDropdownOpen">
                                    <li><a class="dropdown-item" href="#">Save Data</a></li>
                                    <li><a class="dropdown-item" href="#">Load Data</a></li>
                                </ul>
                            </transition>                        
                        </li>                        
                    </ul>
                </div>
                <strong class="navbar-text">Funds:  {{ $filters.currencyUSD(funds) }}</strong>
            </div>
        </nav>
    </header>    
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