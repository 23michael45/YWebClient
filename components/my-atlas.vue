<template>
	<scroll-view scroll-y="true" @scrolltolower="lower" @scroll="scroll" class="my-atlas" :style="'height:'+ scrollHeight + 'px'">
		<view class="atlas-box">
			<view class="item" v-for="(item,index) in list" :key="index">
				<image :src="item.imgList[0].url" mode="aspectFill" v-if="item.isCanPrivate == 1" @tap="toAtlas(item)"></image>
				<video :src="item.imgList[0].url" controls v-else class="video">
					<cover-view class="video-shadow" @tap="toAtlas(item)"></cover-view>
				</video>
				<text class="num cuIcon-album" v-if="item.imgList.length>1"></text>
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
				scrollTop: 0
			}
		},
		onLoad() {
			
		},
		methods: {
			toAtlas: function(item) {
				console.log(123)
				this.$emit('toAtlas',item)
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
	.my-atlas {
		padding: 17rpx;
		// background: #fff;
		.atlas-box {
			display: flex;
			flex-wrap: wrap;
			.item {
				width: 175rpx;
				height: 240rpx;
				margin-right: 6rpx;
				margin-bottom: 6rpx;
				position: relative;
				// background: #999;
				border: 1px solid #eee;
				&:nth-child(4n) {
					margin-right: 0;
				}
				image {
					width: 100%;
					height: 100%;
				}
				.num {
					color: #fff;
					position: absolute;
					bottom: 2rpx;
					right: 4rpx;
				}
				.video {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
