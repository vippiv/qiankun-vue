<template>
	<div class="starbox">
		<div> 语文高手 哈哈!!!!</div>

		<img v-for="item in [1,2,3,4,5,6] " :key="item" :src=" require(`../assets/ch${item}.jpg`)" />
	</div>
</template>

<script>
export default {
	name: 'Chinese'
}
</script>