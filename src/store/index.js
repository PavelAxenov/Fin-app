import Vuex from 'vuex'
import dashboard from './dashboard.js'
import wallets from './wallets.js'

export default new Vuex.Store({
    modules: {
        dashboard,
        wallets
    }
})