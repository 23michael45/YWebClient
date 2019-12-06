<template>
	<view class="video-replace">
		<view v-if="src">
			
			<view class="video">
				<video class="myVideo" :src="src" autoplay loop @error="videoErrorCallback" :controls="false"></video>
			</view>
			<view class="replace">
				<view class="updater">
					<view class="updater-left">
						<view class="icon">
							<image src="https://yjkj-0508.oss-cn-shenzhen.aliyuncs.com/FAC:ede1d4079a694f7590f1ed616ca3691f.png"></image>
						</view>	
						<view class="name">羽迹试试上传</view>
					</view>
					<view class="update-right">
						版权说明
					</view>
				</view>
				<view class="video-name">圣母玛利亚风2019</view>
				<view class="video-tips">
					<view class="tip">#保罗·高缇耶设计</view>
					<view class="tip">#美女</view>
				</view>
				<view class="replace-btn"  @tap="tips">
					<image src="https://yjkj-0508.oss-cn-shenzhen.aliyuncs.com/FAC:ede1d4079a694f7590f1ed616ca3691f.png"></image>
					<view class="btn">换脸</view>
				</view>
			</view>
			<view class="replace-bottom">
				<!-- <div class="share">
					<view class="iconfont iconstar"></view>
					<view class="share-text">分享</view>
				</div> -->
				<view class="create" @tap="tips">立即生成</view>
			</view>
		</view>
		<view v-else class="tips-box">
			<view class="tips">请在活动列表选择视频</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '',
				
			}
		},
		props: {
			videoUrl: {
				type: String,
				default: ''
			}
		},
		watch: {
			videoUrl(a) {
				this.src = this.videoUrl
			}
		},
		mounted() {
			
			console.log(123)
		},
		methods: {
			videoErrorCallback: function() {
				
			},
			tips: function() {
				uni.showToast({
					title: '请发布活动后在客户端体验',
					duration: 2000,
					icon: 'none'
				});
			}
 		}
	}
</script>

<style scoped>
	
	.video-replace {
		height: 840upx;
		background: #1b191a;
		position: relative;
	}
	
	.video {
		width: 100%;
		height: 264upx;
		background: pink;
		text-align: center;
		line-height: 264upx;
	}
	.myVideo {
		width: 100%;
		height: 100%;
	}
	.replace {
		background: #1b191a;
		padding: 10upx 20upx 0;
		color: #fff;
		position: relative;
		box-sizing: border-box;
	}
	
	.updater {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28upx;
		color: #9d9d9d;
	}
	
	.updater-left {
		display: flex;
		align-items: center;
	}
	
	.updater-left .icon {
		width: 70upx;
		height: 70upx;
	}
	
	.updater-left .icon image {
		width: 100%;
		height: 100%;
	}
	
	.updater-left .name {
		margin-left: 20upx;
	
	}
	
	.video-name {
		font-size: 32upx;
		margin-top: 16upx;
	}
	
	.video-tips {
		font-size: 22upx;
		margin-top: 16upx;
		display: flex;
		color: #ccc;
	}
	
	.video-tips .tip {
		margin-right: 20upx;
	}
	
	.replace-btn {
		width: 120upx;
		height: 120upx;
		border-radius: 100%;
		border: 1px solid #eee;
		position: relative;
		top: 60upx;
		left: 50%;
		transform: translateX(-50%);
		
	}
	
	.replace-btn image {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	
	.replace-btn .btn {
		width: 60upx;
		height: 60upx;
		line-height: 60upx;
		border-radius: 100%;
		text-align: center;
		position: absolute;
		bottom: -10upx;
		right: -20upx;
		background: #fb5d5a;
		font-size: 20upx;
	}
	
	.replace-bottom {
		width: 100%;
		height: 80upx;
		background: #262626;
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		color: #fff;
	}
	.share {
		height: 74upx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.share .iconstar:before {
		font-size: 40upx;
	}
	
	.share .share-text {
		font-size: 22upx;
		margin-top: 4upx;
	}
	
	.create {
		height: 50upx;
		line-height: 50upx;
		text-align: center;
		width: 180upx;
		border-radius: 100upx;
		background: #fb95ae;
		font-size: 26upx;
	}
	
	.tips-box {
		height: 100%;
		background: #fff;
		position: relative;
	}
	
	.tips {
		position: absolute;
		top: 100upx;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		font-size: 26upx;
	}
</style>
