<template>
	<view class="preview-02">
		<image class="img" :src="backdropImg" mode="" @tap="change" :mode="aspectFit"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
			backdropImg: {
				type: String
			}
		},
		methods: {
			change: function() {
				this.$emit('chengeTap',{index:1})
			}
		}
	}
</script>

<style>
	.preview-02 {
		width: 100%;
		height: 875upx;
	}
	
	.preview-02 .img {
		width: 100%;
		height: 100%;
	}
</style>
