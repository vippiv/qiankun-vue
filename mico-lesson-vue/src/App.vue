<template>
	<div id="app">
		<p class="slogan">token: {{token}}</p>
		<router-view/>
	</div>
</template>

<script>
import actions from '@/shared/actions'

export default {
	data () {
		return {
			token: ''
		}
	},
	mounted () {
		actions.onGlobalStateChange(state => {
			const { token } = state
			// 未登录 - 返回主页
			// if (!token) {
			// 	this.$message.error("未检测到登录信息！");
			// 	return this.$router.push("/");
			// }
			this.token = token
			console.log('micro app lesspn token', token)
		}, true)
	}
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

#nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}


.starbox{
	div{
		text-align: center;
		font-size:20px;
		color:#8E2DE2;
		font-weight: 600;
		margin-bottom:20px;
	}
	img{
		width:400px;
		margin: 0 10px;
	}
}

.slogan {
	line-height: 3;
	font-size: 16px;
	font-weight: bold;
	text-indent: 1em;
	background-color: #ede9e9;
}
</style>
