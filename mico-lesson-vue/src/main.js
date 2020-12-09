import './public-path'
import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router'
import './styles/base.css'
Vue.config.productionTip = false
import actions from '@/shared/actions'

let router = null;
let instance = null;


// 下面的 /lesson  与主应用  registerMicroApps 中的  activeRule 字段对应
function render(props = {}) {
	const { container } = props
	if (props) {
		actions.setActions(props)
	}
	router = new VueRouter({
		base: window.__POWERED_BY_QIANKUN__ ? '/lesson' : '/',
		mode: 'history',
		routes,
	})
	instance = new Vue({
		router,
		store,
		render: h => h(App),
	}).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
	render()
}


export async function bootstrap() { // 不完全的props
	console.log('[vue] vue app bootstraped')
}

export async function mount(props) { // 完整的props
	props.onGlobalStateChange((state, prev) => {
		// state: 变更后的状态; prev 变更前的状态
		console.log(state, prev)
	})
	render(props)
}

export async function unmount() {
	instance.$destroy()
	instance = null
	router = null
}
