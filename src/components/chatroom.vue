<template>
	<div id="chatroom" class="chatroom">
		<div id="chatItems" class="chat-items"></div>
		<div class="chat-input-wrapper">
			<textarea id="chatInput" class="chat-input" rows="2"></textarea>
		</div>
	</div>
</template>

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
