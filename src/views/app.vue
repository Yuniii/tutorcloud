<template>
	<navbar></navbar>
	<div class="uk-flex main-body">
		<sidebar></sidebar>
		<div id="mainContent" class="main-content">
			<router-view></router-view>
		</div>
		<chatroom></chatroom>
	</div>
</template>

<script>
import Navbar from './../components/navbar.vue'
import Sidebar from './../components/sidebar.vue'
import Chatroom from './../components/chatroom.vue'

export default {
	components: {
		Navbar,
		Sidebar,
		Chatroom
	}
}
</script>

<style lang="stylus">
@require './../styles/vars'
@require './../styles/basic'

.main-content
	flex 1

</style>
