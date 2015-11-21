<template>
	<navbar></navbar>
	<div class="uk-flex main-body">
		<div id="mainContent" class="main-content">
			<whiteboard v-show="$route.path==='/' + $route.params.room + '/whiteboard'"></whiteboard>
			<router-view></router-view>
		</div>
		<chatroom></chatroom>
	</div>
</template>

<script>
import Navbar from './../components/navbar.vue'
import Chatroom from './../components/chatroom.vue'
import Whiteboard from './../components/whiteboard.vue'

export default {
	ready() {
		console.log(this.$route.path);
	},
	components: {
		Navbar,
		Chatroom,
		Whiteboard
	}
}
</script>

<style lang="stylus">
@require './../styles/vars'
@require './../styles/basic'

.main-content
	flex 1

</style>
