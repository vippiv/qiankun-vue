<template>
	<div id="app">
		<div id="nav">
			<div class="main-title">娱乐应用</div>
			<div :class="link === 1 ? 'active' : ''" @click="onChangePage('/star/linjunjie', 1)" >林俊杰</div>
			<div :class="link === 2 ? 'active' : ''" @click="onChangePage('/star/zhoujielun', 2)" >周杰伦</div>
			<div class="main-title">学习应用</div>
			<div :class="link === 3 ? 'active' : ''" @click="onChangePage('/lesson/math', 3)" >数学</div>
			<div :class="link === 4 ? 'active' : ''" @click="onChangePage('/lesson/chinese', 4)" >语文</div>
		</div>
		<router-view />
		<div id="subView" class="sub-content-wrap"></div>
	</div>
</template>

<script>
	import actions from '@/shared/action'
	import { mapState } from 'vuex'
	export default{
		data(){
			return {
				link: 1
			}
		},
		computed:{
			...mapState('microApp', ['content']),
			...mapState('microApp', ['mircoAppLoading']),
		},
		mounted () {
			actions.onGlobalStateChange((state, prevState) => {
				console.log("主应用观察者：token 改变前的值为 ", prevState.token)
				console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state.token)
			})
			actions.setGlobalState({
				token: '111111111'
			})
		},
		methods:{
			onChangePage(url, link){
				this.link = link
				this.routerGo(url, '我喜爱的男明星')
			},
			routerGo(href = '/', title = null, stateObj = {}) {
				window.history.pushState(stateObj, title, href); 
			},
		}
	}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	height: 100%;
}

#nav {
	width: 180px;
	float: left;
	height: 100%;
	background-color: #001629;
	& > div {
		cursor: pointer;
		line-height: 2.8;
		padding: 0 0 0 25px;
		color: white;
		font-size: 15px;
	}
	.main-title {
		padding-left: 10px;
	}
	.active {
		background-color: #1890ff;
	}
}

#subView {
	overflow: hidden;
	height: 100%;
	overflow-y: auto;
}
</style>
