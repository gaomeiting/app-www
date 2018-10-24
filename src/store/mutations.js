import * as types from "./mutation-types";

const mutations = {
	[types.SET_LOGIN](state, data) {
		localStorage.user = JSON.stringify(data);
		state.user= data;
	},
    [types.SET_LOGOUT](state) {
        localStorage.removeItem('user');
        state.user = null
    }
}
export default mutations
