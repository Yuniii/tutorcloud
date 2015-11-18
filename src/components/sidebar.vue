<template>
	<div class="sidebar">
		<ul class="uk-nav uk-nav-side">
			<li><a v-link="{ path: '/' + $route.params.room }">程式撰寫</a></li>
			<li><a v-link="{ path: '/' + $route.params.room + '/whiteboard' }" id="whiteboardBtn">白板</a></li>
			<li><a v-link="{ path: '/' + $route.params.room + '/teaching-materials' }" id="materialBtn">教材管理</a></li>
		</ul>
	</div>
</template>

<style lang="stylus">
@require './../styles/vars'

.sidebar
	padding-top tab-height
	width sidebar-width
</style>
