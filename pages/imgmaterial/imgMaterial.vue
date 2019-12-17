<template>
	<view style="height: 100%;">
		<cu-custom class="seat" bgColor="bg-white" :isBack="false">
			<block slot="backText">返回</block>
			<block slot="content">图片素材</block>
		</cu-custom>

		<scroll-view scroll-y="true" @scrolltolower="lower" @scroll="scroll" class="my-atlas" :style="'height:100%'">
			<view class="atlas-box">
				<view class="item" v-for="(item,index) in list" :key="index" >
					<image :src="item.imgList[0].url" mode="aspectFill" v-if="item.isCanPrivate == 1" @tap="toImgChoice(item.imgList[0].url)" ></image>
					<video :id="'myVideo' + item.imgList[0].id" :src="item.imgList[0].url" controls v-else class="video"  >
						<cover-view class="video-shadow" @tap="toAtlas(item.imgList[0].url,'myVideo' +item.imgList[0].id)" @longpress="toVideoChoice(item.imgList[0].url)"></cover-view>
					</video>
					<text class="num cuIcon-album" v-if="item.imgList.length>1"></text>
				</view>
			</view>
		</scroll-view>
	</view>

</template>

<script>
	import {
		searchGoods
	} from '@/axios/index.js'
	let that;
	export default {
		data() {
			return {
				scrollTop: 0,
				scrollHeight: 0,
				list: [],
				//图片视频判断值1则当前的是图片素材,2则当前的是视频素材
				imgVideoBol:1,
				videoContext:'',
				videoId:''
			}
		},
		onLoad(options) {
			that = this;
			that.imgVideoBol=options.imgVideoBol
		},
		mounted() {
			// const query = uni.createSelectorQuery().in(that);
			// query.select('.index-top').boundingClientRect((r) => {
			// 	that.scrollHeight = that.footHeight - r.height
			// }).exec()
			that.allList = []
			searchGoods({
				which_page: 1,
				pageSize: 20,
				getDetail: 1,
				orderDescCol: "optm"
			}).then(res => {
				// uni.hideLoading()
				//验证图片视频格式
				var list = res.info.list;
				var imgType=["gif", "jpeg", "jpg", "bmp", "png"];
				var videoType=["avi","wmv","mkv","mp4","mov","rm","3gp","flv","mpg","rmvb"];
				list.forEach(item=>{
					//判断是否是图片素材库
					if(that.imgVideoBol==1){
						if(RegExp("\.(" +imgType.join("|") + ")$", "i").test(item.imgList[0].url.toLowerCase())) {	  
						    that.list.push(item);
						 }
					}else{//否则就是视频素材库
						if(RegExp("\.(" + videoType.join("|") + ")$", "i").test(item.imgList[0].url.toLowerCase())) {
						     that.list.push(item);
						} 
					}
				})
				that.noAllData = that.list.length ? false : true
			})
		},
		methods: {
			toImgChoice:function(src){//图片选择
				uni.showModal({
				    title: '提示',
				    content: '是否选择当前图片?',
				    success: function (res) {
				        if (res.confirm) {
							uni.setStorageSync('imgUrl',src)
							uni.$emit('MaterialBack');
							console.log('返回');
				            that.$Router.back(1);
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			toVideoChoice:function(src){//视频选择
			console.log('进入长按');
				uni.showModal({
				    title: '提示',
				    content: '是否选择当前视频上传?',
				    success: function (res) {
				        if (res.confirm) {
							uni.setStorageSync('videoUrl',src)
							uni.$emit('videoMaterial');
							console.log('返回');
				            that.$Router.back(1);
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			toAtlas:function(src,videoId){//视频播放
				if(that.videoContext){
					that.videoContext.pause();//暂停
				}
				if(that.videoId==videoId){//相同就说明是同一视频多次点击，那么不给其进行播放 并且清空用于重复再点击一次播放
				that.videoId=0;
					return;
				}
				that.videoContext = uni.createVideoContext(videoId, this)
				that.videoId=videoId;
				that.videoContext.play();//播放
			},
			scroll: function(e) {
				console.log(e.detail.scrollTop)
				if (this.scrollTop < e.detail.scrollTop) {
					this.$emit('isScroll', false)
				} else {
					this.$emit('isScroll', true)
				}
				this.scrollTop = e.detail.scrollTop
			}
		}
	}
</script>

<style lang="less">
	.my-atlas {
		padding: 17rpx;

		// background: #fff;
		.atlas-box {
			display: flex;
			flex-wrap: wrap;

			.item {
				width: 175rpx;
				height: 240rpx;
				margin-right: 6rpx;
				margin-bottom: 6rpx;
				position: relative;
				// background: #999;
				border: 1px solid #eee;

				&:nth-child(4n) {
					margin-right: 0;
				}

				image {
					width: 100%;
					height: 100%;
				}

				.num {
					color: #fff;
					position: absolute;
					bottom: 2rpx;
					right: 4rpx;
				}

				.video {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
