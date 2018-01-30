import * as types from './mutation-types'

const mutations = {
    [types.CREATE_TOKEN]: (state, token) => {
        state.token = token;
        sessionStorage.setItem('token', token)
    },
    [types.DELETE_TOKEN]: (state, token) => {
        sessionStorage.removeItem('token')
        state.token = null 
    }
}

export default mutations