<template>
	<ul id="editorTabs" class="editor-tab uk-tab" data-uk-tab>
		<li id="newTab" class="new-tab"><a href=""><i class="uk-icon-plus"></i></a></li>
	</ul>
	<div id="editor" class="editor"></div>
</template>

<script>
import Firebase from 'firebase'

export default {
	ready: function() {
		var codeMirror = CodeMirror(document.getElementById('editor'), {
			mode: "text/x-java",
			matchBrackets: true,
			lineNumbers: true,
			indentUnit: 4,
			viewportMargin: Infinity
		});
		var firepad = Firepad.fromCodeMirror(new Firebase('https://teamcloud.firebaseio.com/room1/codepad/Default'), codeMirror);
	}
}

</script>

<style lang="stylus">
@require '../styles/vars'

.editor-tab
	li:first-child
		margin-left 29px

.editor, .firepad, .CodeMirror
	flex 1
	height "calc(100vh - %s - %s)" % (navbar-height tab-height)

</style>
