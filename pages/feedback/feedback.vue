<template>
	<view>
		<cu-custom class="seat" bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">功能反馈</block>
		</cu-custom>
		<view class="section">
			<view class="cu-bar bg-white margin-top heaeds">
				<h3 class='wenti'>问题和意见描述</h3>
				<view class="uni-textarea txt">
					<textarea v-model="coupleBack" placeholder="简要描述你要反馈的问题和意见" style="width: 100%;height: 250upx;" maxlength="300"></textarea>
					<text class="len">{{coupleBack.length}}/300</text>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						<image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
					<!-- <text class="len ImgList">{{imgList.length}}/4</text> -->
				</view>
			</view>
		</view>
		<view class="sub" @tap='feedBack'>提交</view>
	</view>
</template>

<script>
	let that;
	import {
		upHelpMsg,
		upCommImg
	} from '@/axios/index.js'
	export default {
		data() {
			return {
				index: -1,
				imgList: [],
				coupleBack: ''
			}
		},
		onLoad() {
			that = this;
		},
		methods: {
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			//预览
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg: function(e) {
				uni.showModal({
					title: '提示',
					content: '是否删除这张照片?',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			
			feedBack:  function() { //提交功能反馈
				uni.showModal({
					title: '提示',
					content: '是否将当前信息反馈到平台中',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({
								title:'上传中'
							})
								//此接口只上传反馈信息不上传图片
								upHelpMsg('',{
									type: 2,
									topic: 2,
									mark: that.coupleBack
								}).then(async res => {
									if (res.ret == -1) {
										uni.hideLoading();
										uni.showToast({
											title:'反馈信息提交失败,请稍后重试',
											icon:'none'
										});
										return;
									}else if(res.ret==0){
										let rid=res.info;//反馈信息ID通过upCommIng的rid参数绑定反馈图片信息
										let count=0;
										for (let i = 0; i < that.imgList.length; i++) {
											await upCommImg(that.imgList[i],{
												type:1,
												rid:rid,
												seqno:i
											}).then(res=>{
												console.log(count);
												let re=JSON.parse(res);
												 if(re.ret==0){
													++count;
												}
											});
										}
										uni.showToast({
											title:'反馈信息提交成功,反馈图片成功上传'+count+'张',
											icon:'none',
											mask:true,
											duration:2000,
											complete:function(){
												setTimeout(function(){
													that.$Router.back(1);//返回上一页
												},2000);
											}
										});
										return;
									}
								})
							
						}
					}
				})
			}
		}
	}
</script>

<style>
	@import url(feedback);

	uni-page-body {
		height: 100%;
	}

	uni-page-body>view:nth-of-type(1) {
		height: 100%;
		position: relative;

	}
</style>
