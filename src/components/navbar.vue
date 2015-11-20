<template>
	<nav class="uk-navbar navbar">
		<div class="navbar-nav uk-container-center">
			<ul class="uk-navbar-nav">
				<li><a v-link="{ path: '/' + $route.params.room + '/editor' }">程式撰寫</a></li>
				<li><a v-link="{ path: '/' + $route.params.room + '/whiteboard' }" id="whiteboardBtn">白板</a></li>
				<li><a v-link="{ path: '/' + $route.params.room + '/teaching-materials' }" id="materialBtn">教材管理</a></li>
			</ul>
		</div>
	</nav>
</template>

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

.navbar-nav
	width navbar-width
</style>
