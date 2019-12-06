<template>
	<view>
		<view  class="top-bar">
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
		}
	}
</script>

<style>
	.top-bar {
		height: 100upx;
		background: #fff;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.top-item {
		font-size: 30upx;
		height: 70upx;
		line-height: 70upx;
		font-weight: 600;
	}
	
	.top-item.active {
		border-bottom: 6upx solid #000;
	}
</style>
