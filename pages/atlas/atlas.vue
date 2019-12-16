<template>
	<view>
		<cu-custom class="seat" bgColor="bg-white" :isBack="true"><block slot="backText">返回</block><block slot="content">图集</block></cu-custom>
		<view class="atlas">
			<view class="atlas-content">
				<view class="atlas-time">2019/09/11</view>
				<view class="atlas-text">{{goodsObj.unit}}</view>
				<view class="atlas-goods" v-if="goodsObj.isCanPrivate == 1">
					<view class="goods-item" v-for="(item,index) in goodsObj.imgList" :key="index">
						<image :src="item.url" mode="aspectFill" @tap="ChooseImage(item.url)"></image>
					</view>
				</view>
				<view  v-if="goodsObj.isCanPrivate == 2" class="atlas-goods">
					<video :src="goodsObj.imgList[0].url" controls></video>
				</view>
				<view class="atlas-btn-box">
					<view class="atlas-btn" @tap="del">删除</view>
					<view class="atlas-btn" @tap="edit">编辑</view>
				</view>
				<view class="atlas-share">
					分享
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let that;
	import {delGoodsName} from '@/axios/index.js'
	export default {
		data() {
			return {
				goodsObj: ''
			}
		},
		onLoad(options) {
			that = this;
			that.goodsObj = JSON.parse(uni.getStorageSync('goodsObj'))
			console.log(that.goodsObj)
		},
		methods: {
			del: function() {
				uni.showModal({
					title: '提示',
					content: '确定删除吗？',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							that.delGoods(that.goodsObj)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			delGoods: function(item) { //删除
				delGoodsName({
					id: item.id
				}).then(res =>{
					console.log(res)
					if(res.ret == 0) {
						uni.$emit('changeData',item)
						uni.showToast({
							title: '删除成功',
							duration: 2000
						});
						that.$Router.back(1)
					}else {
						uni.showToast({
							title: '删除失败，请重试',
							icon:'none',
							duration: 2000
						});
					}
				})
			},
			edit: function() {//编辑
				var isCanPrivate = that.goodsObj.isCanPrivate
				var id = that.goodsObj.id
				that.$Router.push({name: 'edit_goods',params:{isCanPrivate,id,isAtlas:'true'}})
			
			},
			ChooseImage: function(url) {
				var arr = []
				that.goodsObj.imgList.forEach((el,i)=>{
					arr.push(el.url)
				})
				uni.previewImage({
					urls: arr,
					current: url
				});
			},
		},
		filters: {
			time: function(arg) {
				
			}
		}
	}
</script>

<style lang="less">
	@import url('./atlas.less');
</style>
