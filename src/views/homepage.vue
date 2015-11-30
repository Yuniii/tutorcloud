<template>
	<div class="home-container uk-form">
		<h1>TutorCloud</h1>
		<label for="roomURL">輸入教室名稱：</label><input type="text" v-model="roomURL" id="roomURL" name="roomURL" @keyup="checkEnter"> 
		<a v-show="roomURL !== ''" v-link="{ path: '/' + roomURL + '/editor' }">點此進入{{ roomURL }}</a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			roomURL: ''
		}
	},
	methods: {
		checkEnter(e) {
			if (e.keyCode == 13) {
				this.$route.router.go('/' + this.roomURL + '/editor');
			}
		}
	}
}
</script>

<style lang="stylus">
.home-container
	padding 20px
</style>