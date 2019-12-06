<template>
	<view class="edit-goods">
		<cu-custom bgColor="bg-white" :isBack="true"><block slot="backText">返回</block><block slot="content">编辑商品</block></cu-custom>
		<view class="cu-form-group margin-top">
			<textarea maxlength="-1" v-model="info" placeholder="请输入商品描述,如:(尺寸,颜色,货号等..)"></textarea>
		</view>
		<view class="cu-form-group">
			<view class="grid margin-top-sm col-4 grid-square flex-sub" v-if="isCanPrivate == 1">
				<view class="bg-img" v-for="(item,index) in List" :key="index">
					<image :src="item.url" mode="aspectFill" @tap="ViewImage(index)"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg(index)" :data-index="index">
						<text class='cuIcon-close  bg-red'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="List.length<8">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
			<view class="grid margin-top-sm col-4 grid-square flex-sub" v-else>
				<view class="bg-img" v-for="(item,index) in List" :key="index">
					<video :src="item.url">
						<!-- <cover-view class="video-shadow" @tap="showVideo(item.url)"></cover-view> -->
					</video>
					<view class="cuIcon-close bg-red" @tap.stop="DelVideo"></view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="List.length<1">
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
		searchGoods,
		delGoodsImg,
		upGoodsImg
	} from '@/axios/index.js'
	import {
		generateUUID,
		dateFormat,
		compareUp
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
				List: [],
				oldList: [],
				isCanPrivate: 1, //1图片商品 2视频商品
				info: '', //商品详情
				oldInfo: '',
				goodsId: '', //商品id
				videoList: [],
				delList:[],
				addList:[],
				isAtlas: ''
			}
		},
		onLoad(options) {
			that = this;
			that.isCanPrivate = options.isCanPrivate
			that.goodsId = options.id
			that.isAtlas = options.isAtlas?options.isAtlas: ''
			that.getGoods()
		},
		methods: {
			getGoods: function() {
				searchGoods({
					which_page: 1,
					pageSize: 20,
					getDetail: 1,
					id: that.goodsId
				}).then(res => {
					console.log(res)
					that.List = res.info.list[0].imgList.sort(compareUp(res.info.list[0].imgList,'seqno'))
					that.info = res.info.list[0].unit
					that.oldInfo = res.info.list[0].unit
					console.log(that.List)
				})
			},
			ChooseImage() {
				if (that.isCanPrivate == 1) {

					uni.chooseImage({
						count: 1,
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album'], //从相册选择
						success: (res) => {
							console.log(res)
							if (that.List.length != 0) {
								that.List = that.List.concat({url:res.tempFilePaths[0],seqno: that.List[that.List.length-1].seqno + 1})
							} else {
								that.List = [{url:res.tempFilePaths[0], seqno: 1}]
							}
							that.addList.push(that.List[that.List.length-1])
							console.log(that.addList)
						}
					});
				} else {
					uni.chooseVideo({
						count: 1,
						sourceType: ['camera', 'album'],
						maxDuration: 15,
						success: function(res) {
							console.log(res)
							// if(res.duration > 15) {
							// 	uni.showToast({
							// 		title: `视频时长不能大于15秒`,
							// 		duration: 2000,
							// 		icon: 'none'
							// 	});
							// 	return false;
							// }
							that.List = [{
								url: res.tempFilePath,
								seqno: 1
							}];
							that.addList = that.List.concat()
						}
					});
				}
			},
			ViewImage: function(i) { //展示图片
				var arr = []
				that.List.forEach((el) => {
					arr.push(el.url)
				})
				uni.previewImage({
					urls: arr,
					current: i
				});
			},
			showVideo: function(url) { //播放视频
				that.video = url
				that.show = true
			},
			hideVideo: function() { //停止视频
				that.show = false
			},
			DelVideo: function() { //删除视频
				if(that.List[0].hasOwnProperty('id')) {
					that.delList.push(that.List[0])
				}
				that.List = []
			},
			DelImg: function(index) { //删除图片
				var obj = that.List[index]
				if(obj.hasOwnProperty('id')) {
					that.delList.push(obj)
				} else {
					that.addList.forEach((el,i)=>{
						if(el.url == obj.url) {
							that.addList.splice(i,1)
						}
					})
				}
				that.List.splice(index, 1)
			},
			upGoods: function() {

				if (!that.List.length) {
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
				uni.showLoading({
					title: '保存中...',
					mask: true,
				})
				var list = []
				that.delList.forEach( el=>{
					list.push(that.delGoodsImgVideo(el.id)) 
				})
				that.addList.forEach(el=>{
					list.push(that.addGoodsImgVideo(el.url,el.seqno))
				})
				list.push(that.upGoodsInfo())
				Promise.all(list).then(res=>{
					uni.$emit('getGoods')
					uni.hideLoading()
					uni.showToast({
						title: `保存成功`,
						duration: 2000,
						icon: 'none',
						mask: true
					});
					var step = that.isAtlas? 2: 1
					that.$Router.back(step)

				}).catch(err=>{
					console.log(err)
				})
				
			},
			upGoodsInfo: function() { //修改详情
				return new Promise((resolve,reject)=>{
					if (that.info != that.oldInfo) {
						nuGoodName({
							id: that.goodsId,
							unit: that.info
						}).then((res) => {
							
							resolve()
						})
					} else {
						resolve()
					}
				})
			},
			addGoodsImgVideo: function(url,seqno) { //添加图片或者视频
				return new Promise((resolve,reject)=>{
					
					upGoodsImg(url,{
						goodsNameId: that.goodsId,
						seqno: seqno,
						type: 1
					}).then((res) => {
						
						resolve()
					})
				})
			},
			delGoodsImgVideo: function(id) { //删除图片或者视频
				return new Promise((resolve,reject)=>{
				
					delGoodsImg({
						id
					}).then((res) => {
						
						resolve()
					})
					
				})
			}
		}
	}
</script>

<style lang="less">
	@import url("./edit_goods.less");
</style>
