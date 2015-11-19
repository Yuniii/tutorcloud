<template>
	<!--<ul id="editorTabs" class="editor-tab uk-tab" data-uk-tab>
		<li id="newTab" class="new-tab"><a href="javascript:void(0)"><i class="uk-icon-plus"></i></a></li>
	</ul>-->
	<div class="editor-container">
		<sidebar></sidebar>
		<div id="editor" class="editor"></div>
	</div>
</template>

<script>
import Firebase from 'firebase'
import Sidebar from './sidebar.vue'

export default {
	ready: function() {
		var ref = 'https://teamcloud.firebaseio.com/' + this.$route.params.room + '/codepad/';

		var codeMirror = CodeMirror(document.getElementById('editor'), {
			mode: "text/x-java",
			matchBrackets: true,
			lineNumbers: true,
			indentUnit: 4,
			viewportMargin: Infinity
		});
		var firepad = Firepad.fromCodeMirror(new Firebase(ref + 'Default'), codeMirror);
	},
	components: {
		Sidebar
	}
}

</script>

<style lang="stylus">
@require '../styles/vars'

.editor-tab
	height tab-height
	box-sizing border-box
	li:first-child
		margin-left 29px

.editor-container
	display flex

.editor, .firepad, .CodeMirror
	flex 1
	height "calc(100vh - %s)" % navbar-height

</style>
