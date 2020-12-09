<template>
	<div class="login">
		<button @click="login">login</button>
	</div>
</template>

<script>
	import actions from '@/shared/action'
	export default {
		name: 'Login',
		mounted () {
			// actions.onGlobalStateChange((state, prevState) => {
				// console.log('主应用观察者：token改变前的值为', prevState)
				// console.log('主应用观察者：登录状态发生改变，改变后的token的值为', state)
			// })
		},
		methods: {
			login () {
				// 请求获取token
				const token = "ddgkj-kdnd4-die4g"
				actions.setGlobalState(token)
				this.$router.push("/star/linjunjie")
			}
		}
	}
</script>

<style scoped>
	.login {
		padding: 50px;
		text-align: center;
	}
	.login button {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		background: #fff;
		border: 1px solid #dcdfe6;
		color: #606266;
		-webkit-appearance: none;
		text-align: center;
		box-sizing: border-box;
		outline: none;
		margin: 0;
		transition: .1s;
		font-weight: 500;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		padding: 12px 20px;
		font-size: 14px;
		border-radius: 4px;

		color: #fff;
		background-color: #409eff;
		border-color: #409eff;
	}
</style>