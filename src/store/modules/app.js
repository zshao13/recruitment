
const state = {
    user: {}
}

const mutations = {
    SET_USER: (state, payload) => {
        state.user = { ...payload }
    },
    CLEAR: (state, payload) => {
        switch (payload) {
        case 'ALL':
            state.user = {}
            break
        default:
            break
        }
    }
}

const actions = {
    setUser ({ commit }, payload) {
        commit('SET_USER', payload)
    },
    clear ({ commit }, payload) {
        commit('CLEAR', payload)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
