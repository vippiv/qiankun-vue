import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		slogan: '学习'
	},
	mutations: {
		getSlogan ({state}, payload) {
			alert(payload)
			state.slogan = payload
		}
	},
	actions: {
		GET_SLOGAN ({commit}, payload) {
			commit('getSlogan', payload.slogan)
		}
	},
	modules: {
	}
})
