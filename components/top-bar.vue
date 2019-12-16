<template>
	<view>
		<!-- <view  class="top-bar" :class="[border?'border':'']">
			<view class="top-item" v-for="(item,index) in tabList" :key="index" :class="[index == cur?'active':'']" @tap="changeTab(index)">{{item}}</view>
		</view> -->
		<view  class="top-bar" :class="[border?'border':'']">
			<view class="top-item" v-for="(item,index) in tabList" :key="index" @tap="changeTab(index)" :class="[index == cur?'active':'active'+index]" >
				<text>{{item}}</text>
			</view>
			<view class="line" :style="'left:'+ left + 'px;width:'+ width + 'px'"></view>
		</view>
	</view>
</template>

<script>
	let that
	export default {
		props: {
			tabCur: {
				type: Number
			},
			tabList: {
				type: Array
			},
			border: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				cur: 0,
				left: '',
				right: '',
				width: '',
			}
		},
		mounted() {
			that = this
			this.cur = this.tabCur
			this.getLeft('')
		},
		methods: {
			changeTab: function(index) {
				if(this.cur == index) return
				this.getLeft(index)
				this.cur = index
				this.$emit('changeTab',this.cur)
			},
			getLeft: function(index) {
				var query = uni.createSelectorQuery().in(this);
				var el = '.active' + index
				query.select(el).boundingClientRect((r) => {
					// if(that.left > r.left) {
					// 	that.width = that.right - r.left
					// 	that.left = r.left
					// } else {
					// 	that.width = r.right - that.left
					// }
					// setTimeout(res=>{
						
					// 	that.left = r.left
					// 	that.right = r.right
					// 	that.width = r.width
					// },150)
					console.log(r)
						that.left = r.left
						that.width = r.width
					
				}).exec()
			}
		},
		watch: {
			tabCur(a) {
				
				this.cur = a
				this.getLeft(a)
			}
		}
	}
</script>

<style lang="less">
	.top-bar {
		height: 100rpx;
		background: #fff;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: relative;
	}
	.border {
		border-bottom: 1px solid #eee;
	}
	.top-item {
		font-size: 30rpx;
		height: 60rpx;
		line-height: 60rpx;
		color: #666;
	}
	
	.top-item.active {
		// border-bottom: 3px solid #FFA8BB;
		position: relative;
		font-weight: 600;
		color: #333;
		// border-radius: 3px;
		
		// &::after{
		// 	position: absolute;
		// 	bottom: 6rpx;
		// 	left: 0;
		// 	content: '';
		// 	width: 100%;
		// 	height: 5rpx;
		// 	background: #FC5D59;
		// 	border-radius: 100px;
		// }
		// &::before{
		// 	position: absolute;
		// 	bottom: 0px;
		// 	left: 0;
		// 	content: '';
		// 	width: 100%;
		// 	height: 5rpx;
		// 	background: #FFA8BB;
		// 	border-radius: 100px;
		// }
	}
	
	
		.line {
			 position: absolute;
			 bottom: 18rpx;
			 transition: all .2s linear;
			 &::after{
			 	position: absolute;
			 	bottom: 6rpx;
			 	left: 0;
			 	content: '';
			 	width: 100%;
			 	height: 5rpx;
			 	background: #FC5D59;
			 	border-radius: 100px;
			 }
			 &::before{
			 	position: absolute;
			 	bottom: 0px;
			 	left: 0;
			 	content: '';
			 	width: 100%;
			 	height: 5rpx;
			 	background: #FFA8BB;
			 	border-radius: 100px;
			 }
		}
	
</style>
