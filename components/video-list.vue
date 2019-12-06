<template>
	<scroll-view scroll-y="true" @scrolltolower="lower" @scroll="scroll" class="video-list" :style="'height:'+ scrollHeight + 'px'">
		<view class="item" v-for="(item,index) in list" :key="index">
			<view class="item-left">
				<view class="video-box" @tap="play(item.imgList[0].id)">
					<video :src="item.imgList[0].url" :id="'myVideo' + item.imgList[0].id" style="width: 100%;height: 100%">
					</video>
				</view>
				<view class="video-btn-box">
					<view class="video-btn" @tap="del(item)">删除</view>
					<view class="video-btn border-left" @tap="edit(item)">编辑</view>
				</view>
			</view>
			<view class="item-right">
				<view class="right-top">
					{{item.unit}}
				</view>
				<view class="right-bottom">
					分享
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array
			},
			scrollHeight: {
				type: Number
			}
		},
		data() {
			return {
				current: '',
				videoContext: '',
				scrollTop: 0
			}
		},
		methods: {
			edit: function(item) {
				this.$emit('edit', item)
			},
			del: function(item) {
				this.$emit('del', item)
			},
			play: function(id) {
				if (this.current) {
					this.videoContext.pause()
				}
				if (this.current == id) {
					this.videoContext.pause()
					this.current = ''
				} else {

					this.current = id
					this.videoContext = uni.createVideoContext('myVideo' + this.current, this)
					this.videoContext.play()
				}
			},
			lower: function() {
				this.$emit('lower')
			},
			scroll:  function(e) {
				console.log(e.detail.scrollTop)
				if(this.scrollTop < e.detail.scrollTop) {
					this.$emit('isScroll',false)
				} else {
					this.$emit('isScroll',true)
				}
				this.scrollTop = e.detail.scrollTop
			}
		}
	}
</script>

<style lang="less">
	.video-list {
		.item {
			background: #fff;
			height: 300rpx;
			padding: 20rpx 60rpx;
			display: flex;
			margin-bottom: 10px;

			.item-left {
				flex-basis: 380rpx;
				height: 260rpx;
				background: #eee;
				position: relative;
				border: 1px solid #eee;

				.video-box {
					height: 200rpx;

				}

				.video-btn-box {
					position: absolute;
					bottom: 0;
					width: 100%;
					height: 60rpx;
					line-height: 60rpx;
					background: #fff;
					display: flex;

					.video-btn {
						flex: 1;
						text-align: center;
					}

					.border-left {
						border-left: 1px solid #eee;
					}
				}
			}

			.item-right {
				padding-left: 50rpx;
				flex: 1;
				position: relative;

				.right-top {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				.right-bottom {
					position: absolute;
					bottom: 0;
					right: 0;
					color: #fff;
					border: 1px solid #FB95AD;
					background: #FB95AD;
					height: 60rpx;
					line-height: 60rpx;
					padding: 0rpx 50rpx;
					border-radius: 100rpx;
				}
			}
		}
	}
</style>
