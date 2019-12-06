<template>
	<view>
		<view class="banner">
			<image src="https://yjkj-0508.oss-cn-shenzhen.aliyuncs.com/FAC:30c31196298a4547a1bfe0ef5f175d27.jpg" mode=""></image>
		</view>
		<view class="tips">下方为您编辑的活动</view>
		<view class="activity-box">
			<view class="my-card" @tap="change">
				<view class="title">
					<view>{{activityName}}</view>
				</view>
				<view class="logo">
					<image v-if="logoImg" :src="logoImg" mode=""></image>
					<view v-else class="upload-logo">LG</view>
				</view>
				<view class="mode">
					<image src="../../../static/img/02.png" mode=""></image>
				</view>
			
				<view class="bgc">
					<image v-if="bgcImg" :src="bgcImg" mode=""></image>
					<view v-else class="bgcTip">
						<text class="lg text-gray cuIcon-add"></text>
						<view class="tip-text">
							点击上传活动封面
						</view>
					</view>
				</view>
			
				<view class="bottom">
					<view class="bottom-item">
						<image src="../../../static/img/shares.png" mode=""></image>
					</view>
					<view class="bottom-item">
						<image src="../../../static/img/zan.png" mode=""></image>
					</view>
					<view class="bottom-item">
						<image src="../../../static/img/shoucang.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		//父页面引入了当前组件，并且给当前组件定义了相对的属性名key:value 子组件通过props拿到定义的组件的属性名
		props:{
			activityName: {
				type: String,
				default: ''
			},
			bgcImg: {
				type: String,
				default: ''
			},
			logoImg: {
				type: String,
				default: ''
			},
		},
		methods: {
			change: function() {
				this.$emit('chengeTap',{index:1})
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
	.tips {
		height: 40upx;
		line-height: 40upx;
		font-size: 20upx;
		text-align: center;
	}
	
	.activity-box {
		padding: 0 20upx;
	}
	.my-card {
		width: 100%;
		height: 220upx;
		background: #fff;
		border-radius: 10upx;
		overflow: hidden;
		position: relative;
	}
	
	.my-card .title {
		position: absolute;
		width: 100%;
		height: 30upx;
		line-height: 30upx;
		background: rgba(0,0,0,.3);
		text-align: center;
		color: #fff;
		font-size: 18upx;
		z-index: 98
	}
	.my-card .title input {
		height: 30upx;
		min-height: 30upx;
		line-height: 30upx;
	}
	.my-card .logo {
		position: absolute;
		top: 10upx;
		left: 10upx;
		width: 40upx;
		height: 40upx;
		z-index: 99;
	}
	.my-card .logo image {
		width: 100%;
		height: 100%;
		border-radius: 100%;
	}
	
	.my-card .upload-logo {
		width: 40upx;
		height: 40upx;
		line-height: 40upx;
		font-size: 18upx;
		text-align: center;
		background: #626262;
		color: #fff;
	}
	
	.my-card .mode {
		position: absolute;
		top: 0;
		right: 10upx;
		width: 26upx;
		height: 60upx;
		z-index: 99
	}
	
	.my-card .mode image {
		width: 100%;
		height: 100%;
	}
	
	.my-card .bgc {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	
	.my-card .bgc image {
		width: 100%;
		height: 100%;
	}
	
	.my-card .bgc .bgcTip {
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%,-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.my-card .bgc .bgcTip text {
		font-size: 70upx;
	}
	.my-card .bgc .bgcTip .tip-text {
		font-size: 26upx;
	}
	
	.my-card .bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 40upx;
		background: rgba(0,0,0,.3);
		display: flex;
		justify-content: space-around;
		align-items: center;
		z-index: 99;
	}
	.my-card .bottom .bottom-item {
		width: 30upx;
		height: 30upx;
	}
	.my-card .bottom .bottom-item image {
		width: 100%;
		height: 100%;
	}
</style>
