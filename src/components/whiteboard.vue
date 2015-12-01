<template>
	<iframe v-bind:src="whiteboardURL" id="whiteboard" class="whiteboard" frameborder="0"></iframe>
</template>

<script>
export default {
	data() {
		return {
			whiteboardURL: 'http://52.34.251.134:9002/d/' + this.$route.params.room
		}
	}
}
</script>

<style lang="stylus">
@require './../styles/vars.styl'

.whiteboard
	width 100%
	height "calc(100vh - %s - 10px)" % navbar-height
</style>
