<template>
	<view>
		
		<view class="video-play" v-if="show"  :style="{'padding-top': CustomBar + 'px'}">
			<view class="back" @tap="hide"  :style="{'top': CustomBar + 'px'}">返回</view>
			<video id="video" class="video" :src="video" controls autoplay></video>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			video: {
				type: String
			},
			show: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				src: '',
				videoContext: '',
				CustomBar: this.CustomBar,
			}
		},
		mounted() {
			this.videoContext = uni.createVideoContext('video')
		},
		methods: {
			hide: function() {
				this.$emit('hide')
			}
		},
		watch: {
			show(a) {
				if(a) {
					this.videoContext.play()
				} else {
					this.videoContext.stop()
				}
			}
		}
	}
</script>

<style lang="less">
	.video-play {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		background: #000;
		z-index: 9999;
		.video {
			width: 100%;
			height: 100%;
		}
		.back {
			position: absolute;
			left: 0rpx;
			top: 0rpx;
			width:100%;
			padding-left: 20rpx;
			height: 50rpx;
			line-height: 50rpx;
			background: #fff;
			z-index: 99
		}
	}
</style>
