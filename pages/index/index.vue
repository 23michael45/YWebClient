<template>
	<view>
		<cu-custom class="seat" bgColor="bg-white" :isBack="false">
			<block slot="backText">返回</block>
			<block slot="content">首页</block>
		</cu-custom>
		<view>
			<view class="index-top" :style="{top: CustomBar + 'px'}">
				<topBar :tabCur="tabCur" :tabList="tabList" @changeTab="changeTab" border></topBar>
			</view>
			<!-- <view style="height:100rpx;"></view> -->
		</view>
		<view class="index-bottom">
			<swiper scroll-y="true" @change="changeSwiper" :duration="300" :current="tabCur" :style="'height:'+ scrollHeight + 'px'">
				<swiper-item>
					<view class="tab-item">
						<shop-list :list="allList" @edit="toEdit_goods" @del="del" @lower="lowerAll" :scrollHeight="scrollHeight" @isScroll="isScroll"></shop-list>
						<view v-if="noAllData" class="tip">
							<image src="../../static/img/nomore.png" mode=""></image>
							<text>没有更多数据</text>
						</view>
					</view>
				</swiper-item>
				<swiper-item class="tab-item">
					<video-list :list="videoList" @edit="toEdit_goods" @del="del" @lower="lowerVideo" :scrollHeight="scrollHeight"
					 @isScroll="isScroll"></video-list>
					<view v-if="noVideoData" class="tip">
						<image src="../../static/img/nomore.png" mode=""></image>
						<text>没有更多数据</text>
					</view>
				</swiper-item>
				<swiper-item class="tab-item">
					<my-atlas :list="atlasList" @toAtlas="toAtlas" @lower="lowerImg" :scrollHeight="scrollHeight" @isScroll="isScroll"></my-atlas>
					<view v-if="noImgData" class="tip">
						<image src="../../static/img/nomore.png" mode=""></image>
						<text>没有更多数据</text>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="my-camera" v-if="shouUpBtn" @tap="showActionSheet">
			<!-- <view class="quan">
				<view class="max-quan"></view>
				<view class="min-quan"></view>
				<view class="color-quan"></view>
				<text class="cuIcon-camerafill"></text>
			</view> -->
			<image src="../../static/img/camera.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	let that;
	import topBar from '@/components/top-bar.vue'
	import shopList from '@/components/shop-list.vue'
	import videoList from '@/components/video-list.vue'
	import myAtlas from '@/components/my-atlas.vue'
	import {
		searchGoods,
		delGoodsName
	} from '@/axios/index.js'
	export default {
		components: {
			topBar,
			shopList,
			myAtlas,
			videoList
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				tabCur: 0,
				tabList: ['上新', '小视频', '图集'],
				videoList: [],
				allList: [],
				atlasList: [],
				allPage_end: '', //全部数据页数
				allWhich_page: 1, //全部数据的页码
				videoPage_end: '', //视频数据页数
				videoWhich_page: 1,//视频数据页码
				imgPage_end: '', //图集数据页数
				imgWhich_page: 1,//图集数据页码
				noAllData: false,
				noVideoData: false,
				noImgData: false,
				shouUpBtn: true,
				scrollHeight: ''
			}
		},
		props: {
			footHeight: {
				type: Number
			}
		},
		created() {

			that = this
			that.getGoods()
			uni.$on('getGoods', that.getGoods)
			uni.$on('addGoods', that.addGoods)
			uni.$on('editGoods', that.editGoods)
			uni.$on('changeData',that.changeData)
		},
		watch: {
			tabCur(a) {
				that.shouUpBtn = true
			},
			// footHeight(a) {
			// 	that.scrollHeight = a - that.scrollHeight
			// 	console.log(that.scrollHeight)
			// }
		},
		mounted() {
			
			const query = uni.createSelectorQuery().in(that);
			query.select('.index-top').boundingClientRect((r) => {
				that.scrollHeight = that.footHeight -  r.height
			}).exec()

		},
		methods: {
			getGoodsData: function() { //获取全部商品数据 --上新
				// that.allList = []
				searchGoods({
					which_page: that.allWhich_page,
					pageSize: 10,
					getDetail: 1,
					orderDescCol: "optm"
				}).then(res => {
					// uni.hideLoading()
					if(res.ret == 0) {
						
						var list = res.info.list
						that.allList = that.allList.concat(list) 
						that.noAllData = that.allList.length ? false : true
						that.allPage_end = res.info.pageInfo.page_end
					}
				})
			},
			lowerAll: function() {
				if(that.allWhich_page < that.allPage_end) {
					that.allWhich_page = that.allWhich_page + 1
					that.getGoodsData()
				} else {
					uni.showToast({
						title: '已无更多数据',
						duration: 2000,
						icon: 'none'
					});
				}
			},
			lowerVideo: function() {
				if(that.videoWhich_page < that.videoPage_end) {
					that.videoWhich_page = that.videoWhich_page + 1
					that.getVideoGoods()
				} else {
					uni.showToast({
						title: '已无更多数据',
						duration: 2000,
						icon: 'none'
					});
				}
			},
			lowerImg: function() {
				if(that.imgWhich_page < that.imgPage_end) {
					that.imgWhich_page = that.imgWhich_page + 1
					that.getAtlasGoods()
				} else {
					uni.showToast({
						title: '已无更多数据',
						duration: 2000,
						icon: 'none'
					});
				}
				console.log('加载图集')
			},
			isScroll: function(item) {
				that.shouUpBtn = item
			},
			showActionSheet: function() { //创建商品
				uni.showActionSheet({
					itemList: ['视频', '图片'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						switch (res.tapIndex) {
							case 0:
								that.toFound_goods(2)
								break;
							case 1:
								that.toFound_goods(1)
								break;
							default:
								break;
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			toFound_goods: function(isCanPrivate = '') { //创建
				that.$Router.push({
					name: 'found_goods',
					params: {
						isCanPrivate
					}
				})
			},
			getVideoGoods: function() { //获取视频商品 --小视频
				searchGoods({
					which_page: that.videoWhich_page,
					pageSize: 5,
					getDetail: 1,
					isCanPrivate: 2,
					orderDescCol: "optm"
				}).then(res => {
					// uni.hideLoading()
					if(res.ret == 0) {
						
						that.videoList = that.videoList.concat(res.info.list) 
						that.noVideoData = that.videoList.length ? false : true
						console.log(that.videoList)
						that.videoPage_end = res.info.pageInfo.page_end
					}
				})
			},
			getAtlasGoods: function() { //获取图库数据 --图集
				searchGoods({
					which_page: that.imgWhich_page,
					pageSize: 20,
					getDetail: 1,
					isCanPrivate: 1,
					orderDescCol: "optm"
				}).then(res => {
					uni.hideLoading()
					if(res.ret == 0) {
						
						that.atlasList = that.atlasList.concat(res.info.list) 
						that.noImgData = that.atlasList.length ? false : true
						that.imgPage_end = res.info.pageInfo.page_end
					}
				})
			},
			getGoods: function() {
				uni.showLoading({
					title: '加载中...'
				})
				that.videoList = []
				that.allList = []
				that.atlasList = []
				that.allWhich_page = 1
				that.videoWhich_page = 1
				that.imgWhich_page = 1
				that.getGoodsData()
				setTimeout(res=>{
					that.getVideoGoods()
				},1000)
				setTimeout(res=>{
					that.getAtlasGoods()
				},2000)
			},
			addGoods: function() { //添加数据
				var add = JSON.parse(uni.getStorageSync('add')) 
				console.log('调用啦')
				searchGoods({
					id: add.id,
					getDetail: 1,
					orderDescCol: "optm"
				}).then(res => {
					// uni.hideLoading()
					console.log(res)
						that.allList.unshift(res.info.list[0])
						that.noAllData = that.allList.length ? false : true
					if(add.type == 'video') {
						that.videoList.unshift(res.info.list[0])
						that.noVideoData = that.videoList.length ? false : true
					}else {
						that.atlasList.unshift(res.info.list[0])
						that.noImgData = that.atlasList.length ? false : true
					}
				})
			},
			editGoods: function() { //编辑数据
				var edit = JSON.parse(uni.getStorageSync('edit')) 
				console.log('调用啦')
				searchGoods({
					id: edit.id,
					getDetail: 1,
					orderDescCol: "optm"
				}).then(res => {
					// uni.hideLoading()
					console.log(res)
					var list = that.allList.map(o=> Object.assign({},o)) 
					console.log(list)
					list.forEach((el,i)=>{
						if(edit.id == el.id) {
							list.splice(i,1,res.info.list[0])
						}
					})
					that.allList = list
					if(edit.type == 'video') {
						that.videoList.forEach((el,i)=>{
							if(edit.id == el.id) {
								that.videoList.splice(i,1,res.info.list[0])
							}
						})
					}else {
						that.atlasList.forEach((el,i)=>{
							if(edit.id == el.id) {
								that.atlasList.splice(i,1,res.info.list[0])
							}
						})
					}
				})
			},
			changeTab: function(e) {
				console.log(e)
				that.tabCur = e
			},
			changeSwiper: function(e) {
				if (e.detail.source == 'touch') {
					that.tabCur = e.detail.current
				}
			},

			toEdit_goods: function(item) { //编辑
				var isCanPrivate = item.isCanPrivate
				var id = item.id
				that.$Router.push({
					name: 'edit_goods',
					params: {
						isCanPrivate,
						id
					}
				})
			},
			del: function(item) {
				uni.showModal({
					title: '提示',
					content: '确定删除吗？',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							that.delGoods(item)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			delGoods: function(item) {
				delGoodsName({
					id: item.id
				}).then(res => {
					console.log(res)
					if (res.ret == 0) {
						// uni.$emit('getGoods')
						console.log(item)
						that.changeData(item)
						uni.showToast({
							title: '删除成功',
							duration: 2000
						});
					} else {
						uni.showToast({
							title: '删除失败，请重试',
							duration: 2000
						});
					}
				})
			},
			changeData: function(item) {
				that.allList.forEach((el,i)=>{
					if(item.id == el.id) {
						that.allList.splice(i,1)
					}
					that.noAllData = that.allList.length ? false : true
				})
				if(item.isCanPrivate == 1) {
					that.atlasList.forEach((el,i)=>{
						if(item.id == el.id) {
							that.atlasList.splice(i,1)
						}
					})
					that.noImgData = that.atlasList.length ? false : true
				} else {
					that.videoList.forEach((el,i)=>{
						if(item.id == el.id) {
							that.videoList.splice(i,1)
						}
					})
					that.noVideoData = that.videoList.length ? false : true
				}
			},
			toAtlas: function(item) {
				console.log(item)
				uni.setStorageSync('goodsObj', JSON.stringify(item))
				that.$Router.push({
					name: 'atlas'
				})
			}
		}
	}
</script>

<style lang="less">
	@import url("./index.less");
</style>
