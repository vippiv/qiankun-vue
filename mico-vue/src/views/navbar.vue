<template>
	<div class="navbar">
		slogan: {{sloganHappy}}
		<p style="float: right; margin: 0">子应用store内容：{{microContent}}</p>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Navbar',
	data () {
		return {
			userInfo: ''
		}
	},
	computed: {
		...mapState({
			sloganHappy: state => state.microApp.sloganHappy
		}),
		microContent: {
			get (){
				return this.microStore.state.microContent
			}
		}
	},
	methods: {
		getUserInfo () {
			this.userInfo = {
				username: 'zwl',
				nikename: 'zwwl'
			}
		}
	}
}
</script>

<style>
	.navbar {
		line-height: 3;
		font-size: 16px;
		font-weight: bold;
		text-indent: 1em;
		background-color: #ede9e9;
	}
</style>