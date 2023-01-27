<template>
	<img :class="classy" :src="require(`~/assets/images/icons/${src}?data`)"/>
</template>

<!-- Use this for inlining -- overlapping class defs. Need unique IDs->
<!-- <div class="svgz"  v-html="require(`~/assets/${src}?raw`)"></div> -->

<script>

export default {
	name: 'svgz',
	props: {
		src: {
			type: String
		},
		classy: {
			type: String
		}
	},
	// computed: {
	// 	//can't use reserved "class" in component but wanna keep this prop name in markup
	// 	classy() {
	// 		return this.class
	// 	}
	// }
}
</script>

<style>
.image .svgz {
	width: 100%;
	height: auto;
}

</style>
