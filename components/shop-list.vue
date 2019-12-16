<template>
	<scroll-view scroll-y="true" @scrolltolower="lower" @scroll="scroll" class="shop" :style="'height:'+ scrollHeight + 'px'">
		<view class="shop-list" :class="isDel && delId == item.id?'select-active':''" v-for="(item,index) in arrData" :key="index" @longtap="del(item)">
			<view class="select" v-if="isDel && delId == item.id">
				<text class="cuIcon-delete" @tap="del(item)"></text>
			</view>
			<view class="list-left">
				<text class="day">{{item.code|timeFormat('day')}}</text>
				<text class="month">{{item.code|timeFormat('month')}}</text>
				
			</view>
			<view class="list-right">
				<view class="list-icon" v-if="item.isCanPrivate == 1">
						<image  v-for="(el,i) in item.imgList" :src="el.url" :key="i"
						 v-if="i < 4" @tap="ChooseImage(item.imgList,el.url)" mode="aspectFill" :class="[item.imgList.length<2?'image':'',item.imgList.length == 2?'img-size-01':'',item.imgList.length > 2?'img-size':'']"></image>
				</view>
				<view class="list-icon" v-else @tap="play(item.imgList[0].id)">
					<video :src="item.imgList[0].url" :id="'myVideo' + item.imgList[0].id" style="width: 100%;height: 100%">
					</video>
				</view>
				<view class="list-info">
					<view class="info-top">
						{{item.unit}}
					</view>
				</view>
				<view class="share">
					
					<!-- <view class="list-share">
						分享
					</view> -->
					<view class="share-box">
						<image src="../static/img/share.png" mode=""></image>
						<text>分享</text>
					</view>
				</view>
			</view>
			<view class="edit"  @tap="edit(item)">
				编辑
			</view>
			<view class="line" v-if="item.code"></view>
		</view>

	</scroll-view>
</template>

<script>
	let that;
	import {
		dateFormat
	} from '@/utils/util.js'
	export default {
		data() {
			return {
				current: '',
				videoContext: '',
				old: '',
				arrData: [],
				imgLength: '',
				scrollTop: 0,
				delId: '',
				isDel: false,
			}
		},
		props: {
			list: {
				type: Array
			},
			isvideo: {
				type: Boolean
			},
			scrollHeight: {
				type: Number
			}
		},
		watch: {
			list(a, b) {
				
				var arr = a.map(o=> Object.assign({},o))
				a.forEach((el, i) => {
					if (a.length - 1 != i) {
						if (dateFormat(+el.code.split('@')[1]) == dateFormat(+a[i + 1].code.split('@')[1])) {
							arr[i + 1].code = ''
						}
					}
				})
				that.arrData = arr
				// if(b.length) {
				// 	arr.forEach((el,i)=> {
				// 		b.forEach((item,index)=>{
				// 			if(item.id == el.id && item.imgList.length < el.imgList.length) {
				// 				el.imgList.push({})
				// 				console.log(el.imgList.length)
				// 				el.imgList.splice(el.imgList.length - 1 , 1)
				// 				console.log(el.imgList.length)
								
				// 			}
				// 		})
				// 	})
				// }
				// console.log(that.arrData)
				
			}
		},
		created() {
			that = this
		},
		methods: {
			edit: function(item) {
				this.$emit('edit', item)
			},
			longtap: function(item) {
				this.isDel = !this.isDel
				this.delId = item.id
			},
			del: function(item) {
				this.$emit('del', item)
			},
			ChooseImage: function(list, url) {
				var arr = []
				list.forEach((el, i) => {
					arr.push(el.url)
				})
				uni.previewImage({
					urls: arr,
					current: url
				});
			},
			play: function(id) {
				if (this.current) {
					this.videoContext.pause()
				}
				if (this.current == id) {
					this.current = ''
					this.videoContext.pause()
				} else {

					this.current = id
					this.videoContext = uni.createVideoContext('myVideo' + this.current, this)
					this.videoContext.play()
				}
			},
			lower: function() {
				this.$emit('lower')
			},
			scroll:  function(e) {
				if(that.scrollTop < e.detail.scrollTop) {
					this.$emit('isScroll',false)
				} else {
					this.$emit('isScroll',true)
				}
				this.scrollTop = e.detail.scrollTop
			}
		},
		filters: {
			timeFormat: function(arg, type) {
				if(!arg) {
					return '';
				}
				var time = arg.split('@')

				if (dateFormat(+time[1]) == dateFormat(new Date().getTime())) {
					if (type == 'day') {
						return '今'
					} else {
						return '天'
					}
				} else {

					var date = new Date(+time[1])
					var m = date.getMonth() + 1 + '月'
					var d = date.getDate()

					if (type == 'day') {
						return d
					} else {
						return m
					}
				}
			}
		}
	}
</script>

<style lang="less">
	.shop-list {
		display: flex;
		padding: 25rpx 0;
		height: 260rpx;
		background: #fff;
		position: relative;
		margin-bottom: 10rpx;
		&.select-active {
			background: rgba(0,0,0,.1);
		}
		.select {
			position:absolute;
			top: 0;
			left: 0;
			z-index: 999;
			height: 100%;
			width: 100%;
			.cuIcon-delete {
				position: absolute;
				top: 50%;
				left: 20rpx;
				transform: translateY(-50%);
				font-size: 50rpx;
				color: red;
			}
		}
		.list-left {
			width: 120rpx;
			text-align: right;
			padding: 0 10rpx;
			.day {
				font-size: 42rpx;
				font-weight: 600;
			}

			.month {
				font-size: 26rpx;
			}
		}

		.list-right {
			position: relative;
			flex: 1;
			display: flex;

			.list-icon {
				width: 210rpx;
				height: 210rpx;
				position: relative;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-content: space-between;

				.cuIcon-record {
					font-size: 50rpx;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					color: #fff;
				}

				.image {
					border: 1px solid #eee;
					width: 100%;
					height: 100%;
					overflow: hidden;
				}

				.img-size {
					width: 100rpx;
					height: 100rpx;
				}

				.img-size-01 {
					width: 100rpx;
					height: 210rpx;
				}
			}

			.list-info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding-left: 20rpx;
				width: 260rpx;
				height: 100%;
				font-size: 24rpx;

				.info-top {
					font-size: 26rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				.info-operate {
					display: flex;

					text {
						margin-right: 30rpx;
						color: #0081ff;
					}
				}
			}

			.share {
				position: absolute;
				bottom: 0;
				right: 60rpx;
				// display: flex;
				// align-items: flex-end;
				
				.list-share {
					color: #fff;
					border: 1px solid #FB95AD;
					background: #FB95AD;
					height: 60rpx;
					line-height: 60rpx;
					padding: 0rpx 50rpx;
					border-radius: 100rpx;
					margin-top: 10rpx;
				}
				.share-box {
					display: flex;
					flex-direction: column;
					align-items: center;
					image {
						width: 50rpx;
						height: 50rpx;
					}
					text {
						color: #333;
						font-size: 26rpx;
						margin-top: 10rpx;
					}
				}
			}
		}
		
		.line {
			position: absolute;
			top: 0;
			width: 100%;
			height: 4rpx;
			background: #eee;
		}
		.edit {
			position: absolute;
			top: 10rpx;
			right: 30rpx;
			width: 110rpx;
			background: #fff;
			color: #a3a3a3;
			border: 1px solid #e2e2e2;
			height: 44rpx;
			line-height: 44rpx;
			text-align: center;
			border-radius: 100rpx;
			margin-top: 10rpx;
			font-size: 22rpx;
		}
	}
</style>
