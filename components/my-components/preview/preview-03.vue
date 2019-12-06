<template>
	<view class="preview-03">
		<view class="banner">
			<image :src="bannerImg" mode=""></image>
		</view>
		<scroll-view scroll-y="true" class="scroll" style="height:640upx">
				<view class="product-list">
					<!--商品列表-->
					<view class="pro-item" v-for="(item,index) in videoList" :key="index" @tap="change(item.videoUrl)">
						<video :src="item.videoUrl" class="pro-img"></video>
						<view class="pro-bottom">
							<view class="pro-text">{{item.param}}</view>
							<view class="pro-text1">{{item.param1}}</view>
						</view>
					</view>
					<!--商品列表-->
				</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: 0,
				productList:'123456789'
			}
		},
		props: {
			bannerImg: {
				type: String
			},
			videoList: {
				type: Array
			}
		},
		methods: {
			change: function(videoUrl) {
				this.$emit('chengeTap',{index:3,videoUrl:videoUrl})
			}
		}
	}
</script>

<style scoped>
	.banner {
		height: 180upx;
	}

	.banner image {
		width: 100%;
		height: 100%;
	}
	
	.product-list {
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
		padding: 20upx 20upx 0 20upx;
		background: #fff;
	}
	
	.pro-item {
		background: #fff;
		box-sizing: border-box;
		width: 49%;
		position: relative;
		margin-bottom: 2%;
	}
	
	.pro-item::after {
		content: '';
		position: absolute;
		height: 200%;
		width: 200%;
		border: 1upx solid #eaeef1;
		transform-origin: 0 0;
		-webkit-transform-origin: 0 0;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		left: 0;
		top: 0;
	}
	
	.pro-img {
		height: 280upx;
		width: 100%;
		display: block;
	}
	
	.pro-bottom {
		position: absolute;
		width: 100%;
		bottom: 0;
		height: 60upx;
		background: rgba(0,0,0,.5);
		color: #f5f5f5;
		padding: 0upx 15upx;
		box-sizing: border-box;
	}
	
	.pro-text {
		font-size: 22upx;
	}
	.pro-text1 {
		font-size: 20upx;
		margin-top: 4upx;
	}
	
	.product-box {
		padding-top: 80upx;
	}
	
</style>
