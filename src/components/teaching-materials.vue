<template>
<div class="tm-container">
	<iframe v-bind:src="tmURL" class="tm" id="tm" frameborder="0"></iframe>
</div>
</template>

<script>
export default {
	data() {
		return {
			tmURL: 'http://52.34.251.134/?room=' + this.$route.params.room
		}
	}
}
</script>
<style lang="stylus">
@require '../styles/vars'

.tm-container
	overflow-y hidden
	box-sizing border-box
	height "calc(100vh - %s)" % navbar-height

.tm
	width 100%
	height "calc(100vh - %s)" % navbar-height
</style>
