<template>
	<iframe src="http://draw.etherpad.org/d/ZShla8wu84" id="whiteboard" class="whiteboard" frameborder="0"></iframe>
</template>

<style lang="stylus">
@require './../styles/vars.styl'

.whiteboard
	width 100%
	height "calc(100vh - %s)" % navbar-height
</style>
