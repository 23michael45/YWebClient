<template>
	<view class="store">
		<cu-custom class="seat" bgColor="bg-white" :isBack="false"><block slot="backText">返回</block><block slot="content">我的</block></cu-custom>
		<view class="top">
			<view class="logo">
				<view class="icon" @tap="upLogo">
					<image v-if="imgurl" :src="imgurl" mode="aspectFill"></image>
					<view v-else class="text text-black">未设置LOGO
					</view>
				</view>
				<view class="text">{{companyInfo.name?companyInfo.name:'未设置店铺名'}}
				</view>
					<!-- <text class="cuIcon-vip" style="margin-left: 10rpx;font-size:32rpx;color: #F97341"></text> -->
			</view>
		</view>
		<view class="bottom">
			<view class="cu-list menu sm-border">
				<view class="cu-item arrow" @tap="toStoreInfo">
					<view class="content">
						<text class="cuIcon-taoxiaopu text-black"></text>
						<text class="text-black">店铺信息</text>
					</view>
				</view>
				<!-- <view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-discoverfill text-black"></text>
						<text class="text-black">活动详情</text>
					</view>
				</view> -->
				<view class="cu-item arrow" @tap="toAttestAtion">
					<view class="content">
						<text class="cuIcon-selectionfill text-black"></text>
						<text class="text-black">认证信息</text>
					</view>
				</view>
				<view class="cu-item arrow" @tap="toServiceInfo">
					<view class="content">
						<text class="cuIcon-profilefill text-black"></text>
						<text class="text-black">客服信息</text>
					</view>
				</view>
				<view class="cu-item arrow" @tap="toFeedBack">
					<view class="content">
						<text class="cuIcon-profilefill text-black"></text>
						<text class="text-black">功能反馈</text>
					</view>
				</view>
				<!-- <view class="cu-item arrow" @tap="toSettings">
					<view class="content">
						<text class="cuIcon-settingsfill text-black"></text>
						<text class="text-black">设置</text>
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	let that;
	import {
		updateCo,
		searchCompany
	} from '@/axios/index.js'
	export default {
		data() {
			return {
				imgurl: '',
				companyInfo: {}
			}
		},

		mounted() {
			that = this;
			that.getCompany()
			uni.$on('getCompany',that.getCompany)
		},
		methods: {
			toStoreInfo: function() {
				that.$Router.push({name:'store_info'})
			},
			toServiceInfo: function() {
				uni.navigateTo({
					url: '../service_info/service_info'
				})
			},
				
			toLogin: function() {
				uni.navigateTo({
					url: '../login/login'
				})
			},
			toAttestAtion: function() {
				that.$Router.push({name:'attestAtion'})
			},
			upLogo: function() {
				uni.chooseImage({
				    count: 1, 
				    sizeType: ['original', 'compressed'],
				    sourceType: ['album'],
				    success: function (res) {
				        console.log(res.tempFilePaths[0]);
						that.imgurl = res.tempFilePaths[0]
						uni.showModal({
						    title: '提示',
						    content: '是否更改店铺LOGO',
						    success: function (res) {
						        if (res.confirm) {
									that.updateIcon(that.imgurl)
						        } else if (res.cancel) {
						            that.imgurl = that.companyInfo.imgurl 
						        }
						    }
						});
				    }
				});
			},
			toFeedBack:function(){
				that.$Router.push({name:'feedBack'})
			},
			updateIcon: function(url) {
				console.log(that.companyInfo.id)
				updateCo(url,{
					id: that.companyInfo.id
				}).then((res)=>{
					if(JSON.parse(res).ret == 0) {
						uni.$emit('getCompany')
						uni.showToast({
						    title: '更改成功',
						    duration: 2000
						});
					} else {
						console.log(res)
						that.imgurl = that.companyInfo.imgurl 
						uni.showToast({
						    title: '更改失败，请重试',
						    duration: 2000
						});
					}
				})
			},
			getCompany: function() {
				searchCompany({id:JSON.parse(uni.getStorageSync('uInfo')).coid}).then(r=>{
					console.log(r)
					if(r.ret == 0) {
					  that.companyInfo = r.info.list[0]
					  that.imgurl = that.companyInfo.imgurl
					}
				})
			},
			toSettings: function() { //设置
				that.$Router.push({name:'settings'})
			}
		}
	}
</script>

<style lang="less">
	@import url('./store.less');
</style>
