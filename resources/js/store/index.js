import { baseAPI } from "../services/statamic_api";

export const buildamicStore = {
    state: () => ({
        breakpoint: 'xs',
        globals: []
    }),
    mutations: {
        SWITCH_BREAKPOINT(state, payload) {
            state.breakpoint = payload
        },
        SET_GLOBALS(state, payload) {
            state.globals = payload
        }
    },
    actions: {
        switchBreakpoint({ commit }, payload) {
            if (payload) {
                commit('SWITCH_BREAKPOINT', payload)
            }
        },
        async fetchGlobals({ commit }) {
            try {
                const res = await baseAPI.get("/collections/buildamic_globals/entries");
                commit('SET_GLOBALS', res.data);
            } catch (error) {
                console.log(error)
            }
        }
    },
    getters: {
        breakpoint: state => state.breakpoint,
        globals: state => state.globals
    }
}
