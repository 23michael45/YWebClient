<template>
	<view class="edit-goods">
		<cu-custom class="seat" bgColor="bg-white" :isBack="true"><block slot="backText">返回</block><block slot="content">创建商品</block></cu-custom>
		<!-- <view style="height:100rpx;"></view> -->
		<view class="cu-form-group margin-top">
			<textarea maxlength="-1" v-model="info" placeholder="请输入商品描述,如:(尺寸,颜色,货号等..)"></textarea>
		</view>
		<view class="cu-form-group">
			<view class="grid margin-top-sm col-4 grid-square flex-sub" v-if="isCanPrivate == 1">
				<view class="bg-img" v-for="(item,index) in imgList" :key="index">
					<image :src="imgList[index]" mode="aspectFill"  @tap="ViewImage(index)"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg(index)" :data-index="index">
						<text class='cuIcon-close  bg-red'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="imgList.length<8">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
			<view class="grid margin-top-sm col-4 grid-square flex-sub" v-else>
				<view class="bg-img" v-for="(item,index) in videoList" :key="index">
					<video :src="videoList[index]" >
						<!-- <cover-view class="video-shadow"  @tap="showVideo"></cover-view> -->
					</video>
					<view class="cuIcon-close bg-red" @tap.stop="DelVideo"></view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="videoList.length<1">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
		</view>
		<view class="my-btn">
			<button style="background: #FB95AD" class='cu-btn bg-green lg shadow' @tap="upGoods">保存</button>
		</view>
		<video-play :video="video" :show="show" @hide="hideVideo"></video-play>
	</view>
</template>

<script>
	let that;
	import {
		nuGoodName,
		upGoodsImg
	} from '@/axios/index.js'
	import {
		generateUUID
	} from '@/utils/util.js'
	import videoPlay from '@/components/video-play.vue'
	export default {
		components: {
			videoPlay
		},
		data() {
			return {
				video: '',
				show: false,
				imgList: [],
				isCanPrivate: 1, //1图片商品 2视频商品
				info: '', //商品详情
				goodsId: '', //商品id
				videoList:[]
			}
		},
		onLoad(options) {
			that = this;
			that.isCanPrivate = options.isCanPrivate
			console.log(options)
		},
		methods: {
			ChooseImage() { //选择素材
				if (that.isCanPrivate == 1) {
					uni.chooseImage({
						count: 8,
						sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['camera', 'album'], //从相册选择
						success: (res) => {
							uni.getImageInfo({
								src:res.tempFilePaths[0],
								success:function(e){
									if (that.imgList.length != 0) {
										that.imgList = that.imgList.concat(res.tempFilePaths)
									} else {
										that.imgList = res.tempFilePaths
									}
								},
								fail:function(e){
									uni.showToast({
										title:'不支持当前格式图片上传,请挑选其余图片',
										icon:'none'
									})
									return;
								}
							})
							

						}
					});
				} else {
					uni.chooseVideo({
						count: 1,
						sourceType: ['camera', 'album'],
						maxDuration: 15,
						success: function(res) {
							that.videoList = [res.tempFilePath];
							console.log(that.videoList)
						}
					});
				}
			},
			ViewImage(i) { //图片预览
				uni.previewImage({
					urls: that.imgList,
					current: i
				});
			},
			showVideo: function() {  //视频预览
				that.video = that.videoList[0]
				that.show = true
			},
			hideVideo: function() { //关闭视频预览
				that.show = false
			},
			DelVideo: function() { //清除视频
				that.videoList = []
			},
			DelImg: function(index) {//清除图片
				that.imgList.splice(index,1)
			},
			upGoods: async function() { //保存
				var list = that.isCanPrivate ==1?that.imgList:that.videoList
				if (!list.length) {
					uni.showToast({
						title: `请上传${that.isCanPrivate==1?"图片":"视频"}`,
						duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if (!that.info) {
					uni.showToast({
						title: `商品描述不能为空`,
						duration: 2000,
						icon: 'none'
					});
					return false;
				}
				var params = {
					name: `${generateUUID(32,16)}`,
					code: `${generateUUID(32,16)}@${new Date().getTime()}`,
					unit: that.info,
					isCanPrivate: that.isCanPrivate,
				}

				await nuGoodName(params).then(res => {
					uni.showLoading({
						title: '保存中...',
						mask: true,
					})
					if (res.ret == 0) {
						that.goodsId = res.info
					}
				})
				if(that.isCanPrivate == 1) { //保存图片商品
					console.log(1111)
					var arr = []
					that.imgList.forEach((el, i) => {
						arr.push(that.upImg(el, i))
					})
					console.log(2222)
					Promise.all(arr).then((res) => {
						uni.hideLoading()
						uni.setStorageSync('add',JSON.stringify({
							type: 'img',
							id: that.goodsId
						}))
						uni.$emit('getGoods')
						uni.showToast({
							title: `保存成功`,
							duration: 3000,
							icon: 'none',
							mask: true
						});
						that.$Router.back(1)
						
					}).catch(err => {
						console.log(err)
					});
				} else { //保存视频商品
					that.upImg(that.videoList[0]).then((res)=>{
						console.log(res)
						console.log('res')
						uni.hideLoading()
						uni.setStorageSync('add',JSON.stringify({
							type: 'video',
							id: that.goodsId
						}))
						uni.$emit('getGoods')
						uni.showToast({
							title: `保存成功`,
							duration: 2000,
							icon: 'none',
							mask: true
						});
						that.$Router.back(1)
					})
				}
			},
			upImg: function(url, seqno=1) { //上传
				console.log(3333)
				return new Promise((resolve, reject) => {
					upGoodsImg(url, {
						goodsNameId: that.goodsId,
						seqno: seqno,
						type: 1
					}).then(res => {
						resolve(res)
					}).catch((err) => {
						reject(err)
					})
				})
			}
		}
	}
</script>

<style lang="less">
	@import url("../edit_goods/edit_goods.less");
</style>
