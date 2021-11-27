<template>
	<div class="option_page">
		<div class="firstRow">
			<p>{{ title }}</p>
		</div>
		<div class="secondRow">
			<div class="srFirst" style="width: auto; height: auto">
				<img v-bind:src="imageSrc" v-bind:alt="imageSrc + ' image'" />
			</div>
			<div class="srSecond">
				<p>{{ context }}</p>
			</div>
			<div class="srThird">
				<div>
					<RoundButton text="进入" v-bind:src="enterSrc" />
					<RoundButton text="文档" v-bind:src="docSrc" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import RoundButton from "./RoundButton.vue";

export default {
	name: "OptionPage",
	components: {
		RoundButton,
	},
	props: {
		title: String,
		context: String,
		imageSrc: String,
		enterSrc: String,
		docSrc: String,
	},
};
</script>

<style>
/* 背景设置 */
.firstRow {
	background-color: #fffdd9;
}

.srSecond,
.srThird {
	background-color: #e8f0fe;
}

/* 大小, 排版设置 */
.option_page {
	width: 60%;
	height: 140px;
	margin: 20px auto 20px;
	display: grid;
	grid-template-rows: 40px auto;
}

.firstRow,
.secondRow,
.srFirst,
.srSecond,
.srThird {
	width: auto;
	height: auto;
}

.secondRow {
	display: grid;
	grid-template-columns: 100px auto 100px;
}

.srThird {
	display: flex;
	align-items: center;
	justify-content: center;
}

.firstRow {
	display: flex;
	align-items: center;
}

.srFirst > img {
	width: 100%;
	height: 100%;

	border-radius: 0 0 0 5px;
}

.option_page p {
	padding-left: 20px;
	padding-right: 20px;
}

/* 边框设置 */
.firstRow {
	border: #dadce0 solid 1px;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
}

.srFirst,
.srSecond,
.srThird {
	border-left: #dadce0 solid 1px;
}

.srThird {
	border-right: #dadce0 solid 1px;
	border-bottom-right-radius: 6px;
}

.srFirst,
.srSecond,
.srThird {
	border-bottom: #dadce0 solid 1px;
}

.srFirst {
	border-bottom-left-radius: 6px;
}
</style>
