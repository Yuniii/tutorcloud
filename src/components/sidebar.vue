<template>
	<div class="sidebar">
		<ul class="uk-nav uk-nav-side">
			<li class="run"><a href="javascript:void(0)"><i class="uk-icon-play"></i> 執行程式</a></li>
			<li class="uk-nav-divider"></li>
			<li id="newTab" class="new-tab"><a href="javascript:void(0)" @click="newCodepad"><i class="uk-icon-plus"></i> 新增分頁</a></li>
			<li v-for="pad in codepads">
				<div v-link="{ path: '/' + $route.params.room + '/editor/' + pad.name }" class="pad-tab"><i class="uk-icon-times delete-pad" @click="deleteCodepad(pad)"></i>{{ pad.name }}</div>
			</li>
			<li><div v-link="{ path: '/' + $route.params.room + '/editor/Default' }" class="pad-tab">Default</div></li>
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
		store.getCodepads(this.$route.params.room, val => {
			this.codepads = [];
			for (var key in val) {
				this.codepads.push({
					'key': key,
					'name': val[key]
				});
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
			}
			, {labels: {Ok: "確認", Cancel: "取消"}});
		},

		deleteCodepad(pad) {
			UIkit.modal.confirm('確定要刪除 ' + pad.name + ' 嗎？', () => {
				this.$route.router.go('/' + this.$route.params.room + '/editor/Default');
				store.deleteCodepad(this.$route.params.room, pad);
				this.codepads.$remove(pad);
			});
		}
	}
}
</script>

<style lang="stylus">
@require './../styles/vars'
@require './../styles/functions'

.sidebar
	padding 16px 6px 0
	width sidebar-width
	border-right light-border
	.run
		font-weight bold
		text-align center
	.new-tab
		text-align center
	.pad-tab
		cursor pointer
		padding 5px 15px
		&:hover
			background blackA(.05)
			color #444
	li .v-link-active
		background main-color
		color #FFF
		&:hover
			background main-color
			color #FFF
	.delete-pad
		display inline-block
		width 15px
		line-height 37px
		margin-right 5px
		&:hover
			color #C00
</style>
