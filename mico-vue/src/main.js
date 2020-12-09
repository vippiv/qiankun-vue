import './public-path'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import routes from './router'
import microStore from './store'
import VueRouter from 'vue-router'
import actions from './shared/action'
Vue.config.productionTip = false

Vue.use(Vuex)

Vue.prototype.microStore = microStore // 解决子应用也存在store的情况

let router = null;
let instance = null;


	//下面的 /star  与主应用  registerMicroApps 中的  activeRule 字段对应
function render(props = {}) {
	const { container, store } = props
	if (props) {
		actions.setActions(props)
	}
	router = new VueRouter({
		base: window.__POWERED_BY_QIANKUN__ ? '/star' : '/',
		mode: 'history',
		routes,
	});

	instance = new Vue({
		router,
		store, // 使用主应用提供的store，非响应式
		render: h => h(App),
	}).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
	render();
}


export async function bootstrap() {
	// console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
 //props 包含主应用传递的参数  也包括为子应用 创建的节点信息
	// console.log('star', props)
	render(props);
}

export async function unmount() {
	instance.$destroy();
	instance = null;
	router = null;
}
