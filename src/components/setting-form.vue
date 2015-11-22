<template>
	<div class="uk-dropdown-blank uk-panel uk-panel-box setting-form-panel">
		<form class="uk-form" v-on:submit.prevent>
			<input type="text" name="username" v-model="username" @keyup="updateUsername" placeholder="使用者名稱">
		</form>
	</div>
</template>

<script>
import store from './../lib/store'

export default {
	data() {
		return {
			username: store.getUsername()
		}
	},

	methods: {
		updateUsername() {
			store.setUsername(this.username);
		}
	}
}

</script>

<style lang="stylus">
.setting-form-panel
	box-shadow 0 2px 2px 0 rgba(0,0,0,.16),0 3px 1px -2px rgba(0,0,0,.2),0 2px 6px 0 rgba(0,0,0,.12),0 0 3px rgba(0,0,0,.4)
	background #FFF
	width 240px
</style>
