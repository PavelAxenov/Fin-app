export default {
    state: {
        isMenuOpen: false,
        menuArr: [
            {
                url: '/',
                name: 'Dashboard',
                img_name: 'dashboard',
                exact: true
            },
            {
                url: '/wallet',
                name: 'Wallets',
                img_name: 'wallet',
            },
            {
                url: '/chart',
                name: 'Reports',
                img_name: 'chart',
            },
            {
                url: '/transfer',
                name: 'Transactions',
                img_name: 'transfer',
            },
            {
                url: '/settings',
                name: 'Settings',
                img_name: 'settings',
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