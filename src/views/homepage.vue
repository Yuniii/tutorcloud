<template>
	<div class="home-container uk-form">
		<div class="logo-container"><img src="/assets/images/logo.png" alt="TutorCloud"></div>
		<div class="room-form">
			<div class="room-input">
				<label for="roomURL">請輸入討論室名稱：</label>
				<input type="text" v-model="roomURL" id="roomURL" name="roomURL" @keyup="checkEnter">
			</div>
			<a v-show="roomURL !== ''" v-link="{ path: '/' + roomURL + '/editor' }">點此進入 {{ roomURL }}</a>
			<a v-show="roomURL === ''" v-link="{ path: '/' }">&nbsp;</a>
		</div>
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
@require '../styles/vars'

.home-container
	background main-color
	text-align center
	height 100%
	padding 20px
	.logo-container
		max-width 300px
		margin 40px auto
	.room-form
		background #FFF
		width 600px
		margin 0 auto
		padding 80px
		box-shadow 1px 1px 12px 0 rgba(0,0,0,0.36)
	.room-input
		margin-bottom 24px

</style>