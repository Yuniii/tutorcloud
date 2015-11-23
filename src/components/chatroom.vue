<template>
	<div id="chatroom" class="chatroom">
		<div id="chatItems" class="chat-items">
			<div class="chat-item" v-for="item in chatItems"><span class="chat-username">{{ item.user }}：</span><span class="chat-content">{{{ item.content | escapeHTML | nl2br }}}</span></div>
		</div>
		<div class="chat-input-wrapper">
			<textarea id="chatInput" class="chat-input" rows="2" v-model="chatInput" @keydown="checkInput" @keyup="clearText"></textarea>
		</div>
	</div>
</template>

<script>
import store from './../lib/store'

export default {
	data() {
		return {
			chatItems: {},
			chatInput: ''
		}
	},

	created() {
		store.getChatItems(this.$route.params.room, val => {
			this.chatItems = val;
			setTimeout(this.scrollToBottom, 200);
		});
	},

	methods: {
		checkInput(e) {
			if (event.keyCode == 13 && ! event.shiftKey && this.chatInput !== '') {
				this.submitForm();
			}
		},

		submitForm() {
			store.addChatItem(this.$route.params.room, store.getUsername(), this.chatInput, () => {
				this.scrollToBottom();
			});
		},

		clearText(e) {
			if (event.keyCode == 13 && ! event.shiftKey) {
				this.chatInput = '';
			}
		},

		scrollToBottom() {
			var el = document.getElementById('chatItems');
			el.scrollTop = el.scrollHeight;
		}
	}
}
</script>

<style lang="stylus">
@require '../styles/vars'

.chatroom
	background #F6F6F6
	border-left light-border
	display flex
	flex-direction column
	width chatroom-width
	height "calc(100vh - %s)" % navbar-height

.chat-items
	flex 1
	overflow-y scroll
	padding chatroom-padding

.chat-item
	overflow auto

.chat-username
	vertical-align top
	font-weight bold

.chat-content
	tab-size 4

.chat-input-wrapper
	background #FFF

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
