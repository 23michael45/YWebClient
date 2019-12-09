<template>
	<view class="service-info">
		<cu-custom class="seat" bgColor="bg-white" :isBack="true"><block slot="backText">返回</block><block slot="content">客服详情</block></cu-custom>
		<view class="cu-list menu  sm-border">
			<view class="cu-item">
				<view class="content">
					<text class="text-grey">客服微信二维码：</text>
				</view>
				<view class="action logo" @tap="changeImg">
					<image :src="imgLoad"   mode="aspectFill" style="width: 100%;height: 100%;" v-if="imgLoadBol==false"></image>
					<text  class="cuIcon-add add text-grey" v-if="!imgurl&&imgLoadBol"></text>
					<image v-else :src="imgurl"  @load="loadImgs" mode="aspectFill" :style="imgLoadBol?imgCss:'display: none'"></image>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="text-grey">客服微信名称：</text>
				</view>
				<view class="action">
					<input placeholder="请输入客服微信名称" v-model="name" class="input" :disabled="isEdit"></input>
				</view>
			</view>
		</view>
		
		<view class="my-btn">
			<button @tap="edit" class='cu-btn bg-green round lg'  style="background: #FB95AD" v-if="isEdit">编辑</button>
			<button @tap="upService" class='cu-btn bg-green round lg'  style="background: #FB95AD" v-else >保存</button>
		</view>
	</view>
</template>

<script>
	let that;
	import {
		upCommImg,
		searchCommImg,
		delCommImg
	} from '@/axios/index.js'
	export default {
		data() {
			return {
				service: {},
				imgurl: '',
				name: '',
				oldImgurl: '',
				oldName: '',
				id: '',
				isEdit: false,
				imgLoad:'https://yjkj-0508.oss-cn-shenzhen.aliyuncs.com/FAC:23dd7b8c7ac24fa387707054382332f2.gif',//图片加载时动画
				imgLoadBol:false,//加载完全时判断
				imgCss:'width: 100%;height: 100%;',//图片样式
			}
		},
		onLoad() {
			that = this;
			that.searchService()
		},
		methods: {
			searchService: function() { //查询客服
				var coid = JSON.parse(uni.getStorageSync('uInfo')).coid
				searchCommImg({
					type: 8,
					coid: coid
				}).then(res=>{
					if(res.ret == 0 && res.info.list.length) {
						console.log(res)
						that.imgurl = res.info.list[0].url
						that.oldImgurl = res.info.list[0].url
						that.name = res.info.list[0].param1
						that.oldName = res.info.list[0].param1
						that.id = res.info.list[0].id
						that.isEdit = true
					}
				})
			},
			upService: async function() { //添加客服
				if(!that.imgurl) {
					uni.showToast({
					    title: '请上传微信客服二维码',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(!that.name) {
					uni.showToast({
					    title: '请输入客服昵称',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(that.imgurl == that.oldImgurl && that.name == that.oldName) {
					return false;
				}
				console.log(111)
				if(that.id) {
					if(!await that.delService()) {
						return false
					}
				}
				that.addService()
				
			},
			edit: function() {
				that.isEdit = false
				that.name = ''
				that.imgurl = ''
			},
			changeImg: function() {
				
				if(that.isEdit) {
					uni.showToast({
					    title: '请点击编辑按钮后修改',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				uni.chooseImage({
				    count: 1, 
				    sizeType: ['original', 'compressed'],
				    sourceType: ['album'],
				    success: function (res) {
						that.imgurl = res.tempFilePaths[0]
				    }
				});
			},
			addService: function() {//添加客服
				uni.showLoading({
					 title: '保存中'
				})
				upCommImg(that.imgurl,{
					type: 8,
					param1: that.name
				}).then(res=>{
					console.log(res)
					uni.hideLoading()
					if(JSON.parse(res).ret == 0) {
						uni.showToast({
						    title: '保存成功',
						    duration: 2000,
							icon: 'none',
							mask:true,
							success() {
								setTimeout(res=>{
									that.$Router.back(1) 
								},2000)
							}
						});
					}
				})
			},
			delService: function() { //删除客服
				return new Promise((resolve, reject) => {
					delCommImg({
						id: that.id
					}).then(res=> {
						if(res.ret == 0) {
							
							resolve(true) 
						} else {
							uni.showToast({
							    title: '保存失败，请重试',
							    duration: 2000,
								icon: 'none',
								mask:true
							});
							resolve(false) 
						}
					})
				})
			},
			loadImgs(){
				that.imgLoadBol=true;
			}
		}
	}
</script>

<style lang="less">
	@import url("./service_info.less");
</style>
