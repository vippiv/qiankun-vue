
export default {
	namespaced: true,
	state: {
		sloganHappy: "娱乐至上",
		sloganSad: "好好学习，天天向上",
		content: '主应用内容', // html  自应用内容 ,
		mircoAppLoading: false,// 子应用加载框
		mircoAppShow: false, // 主子应用内容 展示状态判断

	},
	getters: {
		
	},
	mutations: {
		changeCenter(state, params) {
			state.content = params;
		},
		changeLoading(state, params) {
			state.mircoAppLoading = params;
		},
		changeMircoAppShow(state, params) {
			state.mircoAppShow = params;
		},
		
	},
 
};
