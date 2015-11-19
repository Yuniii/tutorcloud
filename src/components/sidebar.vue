<template>
	<div class="sidebar">
		<ul class="uk-nav uk-nav-side">
			<li id="newTab" class="new-tab"><a href="javascript:void(0)" @click="newCodepad"><i class="uk-icon-plus"></i> 新增分頁</a></li>
			<li v-for="pad in codepads"><a v-link="{ path: '/' + $route.params.room + '/editor/' + pad }">{{ pad }}</a></li>
			<li><a v-link="{ path: '/' + $route.params.room + '/editor/default' }">Default</a></li>
		</ul>
	</div>
</template>

<style lang="stylus">
@require './../styles/vars'

.sidebar
	padding-top tab-height
	width sidebar-width
</style>

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
