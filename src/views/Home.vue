<template>
	<div class="home">
		<h1>雪梨 - Snow Pear</h1>
		<OptionPage
			title="nextcloud"
			context="使用开源的 nextcloud 构建的云盘系统."
			:imageSrc="require('../assets/nextcloud.jpg')"
			enterSrc="http://nextcloud.winterwonder.top"
			docSrc="http://winterwonder.top/docs/cloud"
		/>
		<OptionPage
			title="docs"
			context="使用开源的 gitbook 构建的 docs, 用以记录开发中遇到的各种问题."
			:imageSrc="require('../assets/gitbook.png')"
			enterSrc="http://docs.winterwonder.top"
			docSrc="http://winterwonder.top/docs"
		/>
	</div>
</template>

<script>
import OptionPage from "../components/OptionPage.vue";

export default {
	name: "Home",
	components: {
		OptionPage,
	},
};
</script>

<style>
.home {
	width: auto;
	height: auto;
}

.home h1 {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
