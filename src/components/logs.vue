<template>
	<div class="logs-container">
		<h1 id="my-ida">編譯記錄</h1>
		<div v-for="log in logs | orderBy 'time' -1" class="uk-panel uk-panel-box log">
			<dl class="uk-description-list-horizontal">
				<div class="uk-panel-badge"><a href="javascript:void(0)" class="uk-close uk-close-alt delete" @click="delete(log)"></a></div>
				<dt>名稱</dt>
				<dd>{{ log.padname }}</dd>
				<dt>時間</dt>
				<dd>{{ log.time }}</dd>
				<dt class="code-title">程式碼</dt>
				<dd><a href="javascript:void(0)" @click="showCode($index, $event)">點擊展開程式碼</a><pre class="code-content" id="code-content-{{ $index }}">{{ log.code }}</pre></dd>
				<dt>編譯訊息</dt>
				<dd><pre>{{ log.data }}</pre></dd>
			</dl>
		</div>
	</div>
</template>

<script>
import store from './../lib/store'

export default {
	data() {
		return {
			logs: []
		}
	},

	ready() {
		this.logs = store.getLogs();
	},

	methods: {
		showCode(i, e) {
			e.target.style.display = 'none';
			document.getElementById('code-content-' + i).style.display = 'block';
		},

		delete(log) {
			this.logs.$remove(log);
		}
	}
}
</script>

<style lang="stylus">
@require '../styles/vars'

.logs-container
	padding 20px
	overflow-y scroll
	height "calc(100vh - %s)" % navbar-height
	.delete
		color #C00
	.log
		margin-bottom 16px
		box-shadow 0 2px 2px 0 rgba(0,0,0,.12),0 2px 1px -2px rgba(0,0,0,.14),1px 2px 4px 0 rgba(0,0,0,.12)
	pre
		font-family 'Roboto Mono', '微軟正黑體'
		font-size 15px
		line-height 1.8
		padding 0
		overflow visible
	.code-content
		margin-top 0
		display none
</style>
