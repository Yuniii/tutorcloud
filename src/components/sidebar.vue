<template>
	<div class="sidebar">
		<ul class="uk-nav uk-nav-side">
			<li class="run"><a href="javascript:void(0)"><i class="uk-icon-play"></i> 執行程式</a></li>
			<li class="uk-nav-divider"></li>
			<li id="newTab" class="new-tab"><a href="javascript:void(0)" @click="newCodepad"><i class="uk-icon-plus"></i> 新增分頁</a></li>
			<li v-for="pad in codepads"><a v-link="{ path: '/' + $route.params.room + '/editor/' + pad }">{{ pad }}</a></li>
			<li><a v-link="{ path: '/' + $route.params.room + '/editor/default' }">Default</a></li>
		</ul>
	</div>
</template>

<script>
import store from './../lib/store'

export default {
	data() {
		return {
			codepads: []
		}
	},

	ready() {
		this.codepads = [];
		store.getCodepads(this.$route.params.room, val => {
			for (var key in val) {
				this.codepads.push(val[key]);
			}
		});
	},

	methods: {
		newCodepad() {
			UIkit.modal.prompt("輸入分頁名稱：", null, (value) => {
				if (value === '') {
					return;
				}
				store.addCodepad(this.$route.params.room, value)
				this.codepads.push(value);
			}
			, {labels: {Ok: "確認", Cancel: "取消"}});
		}
	}
}
</script>

<style lang="stylus">
@require './../styles/vars'

.sidebar
	padding 16px 6px 0
	width sidebar-width
	border-right light-border
	.run
		font-weight bold
		text-align center
	li a.v-link-active
		background main-color
		color #FFF
</style>
