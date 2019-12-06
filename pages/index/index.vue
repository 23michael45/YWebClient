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
						<shop-list :list="allList" @edit="toEdit_goods" @del="del" @lower="lower" :scrollHeight="scrollHeight" @isScroll="isScroll"></shop-list>
						<view v-if="noAllData" class="tip">暂无数据，请上传...</view>
					</view>
				</swiper-item>
				<swiper-item class="tab-item">
					<video-list :list="videoList" @edit="toEdit_goods" @del="del" @lower="lower" :scrollHeight="scrollHeight"
					 @isScroll="isScroll"></video-list>
					<view v-if="noVideoData" class="tip">暂无小视频哦，请上传...</view>
				</swiper-item>
				<swiper-item class="tab-item">
					<my-atlas :list="atlasList" @toAtlas="toAtlas" @lower="lower" :scrollHeight="scrollHeight" @isScroll="isScroll"></my-atlas>
					<view v-if="noAllData" class="tip">图集暂无数据，请上传...</view>
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
				noAllData: false,
				noVideoData: false,
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
		},
		watch: {
			tabCur() {
				that.shouUpBtn = true
			}
		},
		mounted() {
			
			const query = uni.createSelectorQuery().in(that);
			query.select('.index-top').boundingClientRect((r) => {
				that.scrollHeight = that.footHeight - r.height
			}).exec()

		},
		methods: {
			getGoodsData: function() { //获取全部商品数据 --上新
				that.allList = []
				searchGoods({
					which_page: 1,
					pageSize: 20,
					getDetail: 1,
					orderDescCol: "optm"
				}).then(res => {
					// uni.hideLoading()
					var list = res.info.list
					that.allList = list
					that.noAllData = that.allList.length ? false : true
				})
			},
			lower: function() {
				console.log('加载')
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
					which_page: 1,
					pageSize: 20,
					getDetail: 1,
					isCanPrivate: 2,
					orderDescCol: "optm"
				}).then(res => {
					// uni.hideLoading()
					that.videoList = res.info.list
					that.noVideoData = that.videoList.length ? false : true
				})
			},
			getAtlasGoods: function() { //获取图库数据 --图集
				searchGoods({
					which_page: 1,
					pageSize: 20,
					getDetail: 1,
					orderDescCol: "optm"
				}).then(res => {
					uni.hideLoading()
					that.atlasList = res.info.list
					that.noAllData = that.atlasList.length ? false : true
				})
			},
			getGoods: function() {
				uni.showLoading({
					title: '加载中...'
				})
				that.getGoodsData()
				that.getVideoGoods()
				that.getAtlasGoods()
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
							that.delGoods(item.id)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			delGoods: function(id) {
				delGoodsName({
					id
				}).then(res => {
					console.log(res)
					if (res.ret == 0) {
						uni.$emit('getGoods')
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
