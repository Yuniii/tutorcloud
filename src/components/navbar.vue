<template>
	<nav class="uk-navbar navbar">
		<div class="navbar-nav uk-container-center">
			<ul class="uk-navbar-nav">
				<li><a v-link="{ path: '/' + $route.params.room + '/editor' }">程式撰寫</a></li>
				<li><a v-link="{ path: '/' + $route.params.room + '/whiteboard' }" id="whiteboardBtn">白板</a></li>
				<li><a v-link="{ path: '/' + $route.params.room + '/teaching-materials' }" id="materialBtn">教材管理</a></li>
			</ul>
			<div class="uk-navbar-flip">
				<ul class="uk-navbar-nav">
					<li class="uk-parent" data-uk-dropdown="{mode:'click'}">
						<a href="javascript:void(0)">設定 <i class="uk-icon-caret-down"></i></a>
						<setting-form></setting-form>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import SettingForm from './setting-form.vue'

export default {
	components: {
		SettingForm
	}
}

</script>

<style lang="stylus">
@require './../styles/vars'
@require './../styles/functions'

.navbar
	background main-color
	color #FFF
	height navbar-height
	box-shadow  0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 7px 0 rgba(0,0,0,.12)
	position relative
	z-index 300
	li a
		color #FFF
		font-family $font-family
		font-size 16px
		height navbar-height
		line-height navbar-height
		&:hover, &:focus, &:active
			background whiteA(.10)
			color #FFF
	li a.v-link-active
		background whiteA(.20)
	li.uk-open a
		&:hover, &:focus, &:active
			color #444
			background #f5f5f5

.navbar-nav
	width navbar-width
</style>
