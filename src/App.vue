<template>
	<div class="app">
		<h1>雪梨 - Snow pear</h1>
		<OptionPage
			title="nextcloud"
			context="使用开源的 nextcloud 构建的云盘系统."
			imageSrc="static/image/nextcloud.jpg"
			enterSrc="http://nextcloud.winterwonder.top"
			docSrc="http://docs.winterwonder.top"
		/>
		<OptionPage
			title="docs"
			context="使用开源的 gitbook 构建的 docs, 用以记录开发中遇到的各种问题."
			imageSrc="static/image/gitbook.png"
			enterSrc="http://docs.winterwonder.top"
			docSrc="http://docs.winterwonder.top"
		/>
	</div>
</template>

<script>
import OptionPage from "./components/OptionPage.vue";

export default {
	name: "App",
	components: {
		OptionPage,
	},
};
</script>

<style>
.app {
	width: auto;
	height: auto;
}

.app h1 {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
