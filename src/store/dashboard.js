export default {
    state: {
        isMenuOpen: false,
        menuArr: [
            {
                id: 'dashboard',
                name: 'Dashboard',
                img_name: 'dashboard'
            },
            {
                id: 'wallet',
                name: 'Wallets',
                img_name: 'wallet'
            },
            {
                id: 'chart',
                name: 'Reports',
                img_name: 'chart'
            },
            {
                id: 'transfer',
                name: 'Transactions',
                img_name: 'transfer'
            },
            {
                id: 'settings',
                name: 'Settings',
                img_name: 'settings'
            },
        ]
    },
    mutations: {
        setMenuOpen(state, boolean) {
            state.isMenuOpen = boolean
        }
    },
    actions: {},
    getters: {
        isMenuOpen(state) {
            return state.isMenuOpen;
        },

        getMenuArr(state) {
            return state.menuArr;
        }
    }
}