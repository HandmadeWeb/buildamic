export const buildamicStore = {
  state: () => ({
    breakpoint: 'xs',
    pasteLocations: [],
    globals: [],
    fieldDefaults: {},
    dirtyFields: [],
    errorBag: [],
  }),
  mutations: {
    SWITCH_BREAKPOINT(state, payload) {
      state.breakpoint = payload
    },
    SET_FIELD_DEFAULTS(state, payload) {
      state.fieldDefaults = payload
      console.log({ payload })
    },
    SET_GLOBALS(state, payload) {
      state.globals.push(...payload)
    },
    SET_PASTE_LOCATIONS(state, payload) {
      state.pasteLocations = [...payload]
    },
    SET_DIRTY_FIELDS(state, payload) {
      state.dirtyFields = payload
    },
    SET_ERROR_BAG(state, payload) {
      state.errorBag = payload
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
    setDirtyFields({ commit }, payload) {
      commit('SET_DIRTY_FIELDS', payload)
    },
    setErrorBag({ commit }, payload) {
      commit('SET_ERROR_BAG', payload)
    },
    setPasteLocations({ commit }, payload) {
      if (payload.includes('field') || payload.includes('set')) {
        payload = ['field', 'set']
      } else if (payload.includes('section') || payload.includes('global-section')) {
        payload = ['section', 'global-section']
      } else[
        payload = [payload]
      ]

      commit('SET_PASTE_LOCATIONS', payload)
    },
    setGlobals({ commit }, payload) {
      commit('SET_GLOBALS', payload)
    }
  },
  getters: {
    breakpoint: state => state.breakpoint,
    fieldDefaults: state => state.fieldDefaults,
    globals: state => state.globals,
    pasteLocations: state => state.pasteLocations,
    dirtyFields: state => state.dirtyFields,
    errorBag: state => state.errorBag
  }
}
