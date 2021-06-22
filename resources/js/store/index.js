export const buildyStore = {
    state: () => ({
        breakpoint: 'xs'
    }),
    mutations: {
        SWITCH_BREAKPOINT(state, payload) {
            state.breakpoint = payload
            console.log(state.breakpoint)
        }
    },
    actions: {
        switchBreakpoint({ commit }, payload) {
            if (payload) {
                commit('SWITCH_BREAKPOINT', payload)
            }
        }
    },
    getters: {
        breakpoint: state => state.breakpoint
    }
}
