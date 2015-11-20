<template>
	<div id="chatroom" class="chatroom">
		<div id="chatItems" class="chat-items"></div>
		<div class="chat-input-wrapper">
			<textarea id="chatInput" class="chat-input" rows="2" v-model="chatInput" @keydown="checkInput" @keyup="clearText"></textarea>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			chatInput: ''
		}
	},

	methods: {
		checkInput(e) {
			if (event.keyCode == 13 && ! event.shiftKey) {
				this.submitForm();

			}
		},

		submitForm() {
			console.log('"' + this.chatInput + '"');
		},

		clearText(e) {
			if (event.keyCode == 13 && ! event.shiftKey) {
				this.chatInput = '';
			}
		}
	}
}
</script>

<style lang="stylus">
@require '../styles/vars'

.chatroom
	border-left light-border
	display flex
	flex-direction column
	width chatroom-width
	height "calc(100vh - %s)" % navbar-height
	padding chatroom-padding

.chat-items
	flex 1
	overflow-y scroll

.chat-input
	border none
	border-top light-border
	outline none
	resize none
	box-sizing border-box
	width 100%
	height chat-input-height
	padding chatroom-padding
</style>
