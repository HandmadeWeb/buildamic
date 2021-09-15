export const buildamicStore = {
    state: () => ({
        breakpoint: 'xs',
        globals: [],
        fieldDefaults: {},
    }),
    mutations: {
        SWITCH_BREAKPOINT(state, payload) {
            state.breakpoint = payload
        },
        SET_FIELD_DEFAULTS(state, payload) {
            state.fieldDefaults = payload
        },
        SET_GLOBALS(state, payload) {
            state.globals.push(...payload)
        }
    },
    actions: {
        switchBreakpoint({ commit }, payload) {
            if (payload) {
                commit('SWITCH_BREAKPOINT', payload)
            }
        },
        setFieldDefaults({ commit }, payload) {
            commit('SET_FIELD_DEFAULTS', payload)
        },
        setGlobals({ commit }, payload) {
            commit('SET_GLOBALS', payload)
        }
    },
    getters: {
        breakpoint: state => state.breakpoint,
        fieldDefaults: state => state.fieldDefaults,
        globals: state => state.globals,
    }
}
