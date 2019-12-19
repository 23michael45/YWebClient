<template>
	<view class="store-info">
		<cu-custom class="seat" bgColor="bg-white" :isBack="true"><block slot="backText">返回</block><block slot="content">店铺详情</block></cu-custom>
		<view class="top">
			<view class="logo">
				<view class="icon" @tap="upLogo">
					<image v-if="imgurl" :src="imgurl" mode="aspectFill"></image>
					<view v-else class="text text-black">未设置LOGO
					</view>
				</view>
				<view class="text">店铺LOGO
				</view>
			</view>
		</view>
		<view class="cu-list menu ">

			<view class="cu-item">
				<view class="contents">
					<text class="text-black">店铺名称：</text>
				</view>
				<view class="action">
					<input placeholder="请输入店铺名称" v-model="companyName" placeholder-class="placeholder" style="text-align: left;" class="input"></input>
				</view>
			</view>
			<view class="cu-item">
				<view class="contents">

					<view class="text-black" >店铺简介：</view>
				</view>
				<view class="action">
						<textarea  v-model="companyMark" placeholder-class="placeholder" maxlength="-1" placeholder="请输入店铺简介"></textarea>
				</view>
			</view>
		</view>
		
		<view class="my-btn">
			<button class='cu-btn bg-green round lg'  style="background: #FB95AD" @tap="upCompany">保存</button>
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
				companyName: '',
				companyMark: '',
				companyId: '',
				imgurl: '',
			}
		},
		onLoad() {
			that = this
			that.getCompany()
		},
		methods: {
			getCompany: function() {
				searchCompany({id:JSON.parse(uni.getStorageSync('uInfo')).coid}).then(res=>{
					console.log(res)
					if(res.ret == 0) {
						that.companyInfo = res.info.list[0]
						that.companyName = that.companyInfo.name
						that.companyMark = that.companyInfo.mark
						that.companyId = that.companyInfo.id
						that.imgurl = that.companyInfo.imgurl
					}
				})
			},
			upCompany: function() {
				var url = ''
				if(that.imgurl != that.companyInfo.imgurl) {
					url = that.imgurl
				} 
				updateCo(url,{
					name: that.companyName,
					mark: that.companyMark,
					id: that.companyId
				}).then(res=>{
					if(res.ret == 0) {
						uni.$emit('getCompany')
						uni.showToast({
						    title: '更改成功',
						    duration: 2000,
							mask: true,
							success: () => {
								setTimeout(()=>{
									that.$Router.back(1)
								},1500)
							}
						});
					} else {
						that.imgurl = that.companyInfo.imgurl 
						uni.showToast({
						    title: '更改失败，请重试',
						    duration: 2000
						});
					}
				})
			},
			upLogo: function() {
				uni.chooseImage({
				    count: 1, 
				    sizeType: ['original', 'compressed'],
				    sourceType: ['album'],
				    success: function (res) {
				        console.log(res.tempFilePaths[0]);
						that.imgurl = res.tempFilePaths[0]
				    }
				});
			},
		}
	}
</script>

<style lang="less">
	@import url("./store_info.less");
</style>
