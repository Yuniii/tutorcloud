<template>
	<navbar></navbar>
	<div class="uk-flex main-body">
		<div id="mainContent" class="main-content">
			<whiteboard v-show="$route.path==='/' + $route.params.room + '/whiteboard'"></whiteboard>
			<teaching-materials v-show="$route.path==='/' + $route.params.room + '/teaching-materials'"></teaching-materials>
			<router-view></router-view>
		</div>
		<chatroom></chatroom>
	</div>
</template>

<script>
import Navbar from './../components/navbar.vue'
import Chatroom from './../components/chatroom.vue'
import Whiteboard from './../components/whiteboard.vue'
import TeachingMaterials from './../components/teaching-materials.vue'

export default {
	components: {
		Navbar,
		Chatroom,
		Whiteboard,
		TeachingMaterials
	}
}
</script>

<style lang="stylus">
@require './../styles/vars'
@require './../styles/basic'

.main-content
	flex 1

</style>
