<template>
	<navbar></navbar>
	<div class="uk-flex main-body">
		<div id="mainContent" class="main-content">
			<router-view></router-view>
		</div>
		<chatroom></chatroom>
	</div>
</template>

<script>
import Navbar from './../components/navbar.vue'
import Chatroom from './../components/chatroom.vue'

export default {
	components: {
		Navbar,
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
