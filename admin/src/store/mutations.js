import * as types from './mutation-types'
import state from './state';

const mutations = {
    [types.CREATE_TOKEN]: (state, token) => {
        state.token = token;
        sessionStorage.setItem('token', token)
    },
    [types.DELETE_TOKEN]: (state, token) => {
        sessionStorage.removeItem('token')
        state.token = null 
    },
    [types.TOGGLE_COLLAPSE]: (state) => {
        state.isCollapse = !state.isCollapse;
    }
}

export default mutations