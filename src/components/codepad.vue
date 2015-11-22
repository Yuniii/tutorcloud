<template>
	<div class="editor-container">
		<sidebar></sidebar>
		<div id="editor" class="editor"></div>
	</div>
</template>

<script>
import Firebase from 'firebase'
import Sidebar from './sidebar.vue'
import { encodeB64, decodeB64 } from './../lib/util.js'

export default {
	data() {
		return {
			ref: 'https://teamcloud.firebaseio.com/' + this.$route.params.room + '/codepad/',
			codeMirror: {},
			firepad: {},
			init: false
		}
	},

	ready() {
		this.codeMirror = CodeMirror(document.getElementById('editor'), {
			mode: "text/x-java",
			matchBrackets: true,
			lineNumbers: true,
			indentUnit: 4,
			viewportMargin: Infinity
		});
		this.init = true;
		if (this.$route.params.codepad !== 'Default') {
			return this.$route.router.go('/' + this.$route.params.room + '/editor/Default');
		}
		this.firepad = Firepad.fromCodeMirror(new Firebase(this.ref + 'Default'), this.codeMirror);
	},

	route: {
		data(transition) {
			if (! this.init) {
				return;
			}
			if (typeof this.firepad.dispose !== 'undefined') {
				this.firepad.dispose();
				this.firepad = {};
			}
			
			var padname = 'Default';
			if (this.$route.params.codepad !== 'Default') {
				padname = encodeB64(this.$route.params.codepad);
			}
			this.codeMirror.setValue('');
			this.firepad = Firepad.fromCodeMirror(new Firebase(this.ref + padname), this.codeMirror);
		}
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
	pre
		font-family Roboto Mono, monospace

</style>
