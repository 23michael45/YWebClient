<template>
	<view>
		<view  class="top-bar" :class="[border?'border':'']">
			<view class="top-item" v-for="(item,index) in tabList" :key="index" :class="[index == cur?'active':'']" @tap="changeTab(index)">{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tabCur: {
				type: Number,
				default: 0
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
				cur: 0
			}
		},
		mounted() {
			this.cur = this.tabCur
		},
		methods: {
			changeTab: function(index) {
				this.cur = index
				this.$emit('changeTab',this.cur)
			}
		},
		watch: {
			tabCur(a) {
				this.cur = a
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
	}
	.border {
		border-bottom: 1px solid #eee;
	}
	.top-item {
		font-size: 30rpx;
		height: 60rpx;
		line-height: 60rpx;
		color: #444;
	}
	
	.top-item.active {
		// border-bottom: 3px solid #FFA8BB;
		position: relative;
		// border-radius: 3px;
		
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
