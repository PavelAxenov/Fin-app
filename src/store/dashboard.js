export default {
    state: {
        isMenuOpen: false,
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
    }
}