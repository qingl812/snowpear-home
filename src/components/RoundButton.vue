<template>
	<div class="roundButton">
		<button type="button">
			<a v-bind:href="src">{{ text }}</a>
		</button>
	</div>
</template>

<script>
export default {
	name: "RoundButton",
	props: {
		text: String,
		src: String,
	},
};
</script>

<style>
.roundButton button {
	width: 60px;
	height: 20px;
	line-height: 100%;
	background-color: #38831d;
	border: none;
	border-radius: 14px;
}

.roundButton a:link,
.roundButton a:visited,
.roundButton a:hover,
.roundButton a:active {
	color: white;
	text-decoration: none;
}
</style>
