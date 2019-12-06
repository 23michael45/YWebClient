<template>
	<view class="card-box">
		<view class="box-title" v-if="title">
			<slot name="title"></slot>
			<text class="delete text-gray cuIcon-delete" @tap="del"></text>
		</view>
		<view class="content">
			<slot name="content"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type:Boolean,
				default: false
			}
		},
		data() {
			return {

			}
		},
		methods: {
			del: function() {
				this.$emit('del');//调用父组件的删除方法，父组件需监听当前事件
			}
		}
	}
</script>

<style scoped>
	.card-box {
		margin: 20upx;
		background: #fff;
		border-radius: 10upx;
	}

	.box-title {
		height: 60upx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		border-bottom: 2upx solid #BABABA;
		margin: 0 20upx;
	}
	.content {
		padding-top: 20upx;
	}
	.delete {
		width: 40upx;
		height: 40upx;
		font-size: 40upx;
		position: absolute;
		right: 20upx;
	}
</style>
