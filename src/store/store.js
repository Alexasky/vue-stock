import {createStore} from 'vuex';
import stocksModule from './modules/stocksModule'
import portfolioModule from './modules/portfolioModule'


const store = createStore({
    modules: {
        stocksModule,
        portfolioModule
    }
})
export default store;