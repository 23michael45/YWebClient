<template>
	<view class="preview-02">
		<image class="img" :src="backdropImg2" mode="" @tap="change"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props: {
			backdropImg2: {
				type: String
			}
		},
		methods: {
			change: function() {
				this.$emit('chengeTap',{index:3})
			}
		}
	}
</script>

<style>
	.preview-02 {
		width: 100%;
		height: 840upx;
	}
	
	.preview-02 .img {
		width: 100%;
		height: 100%;
	}
</style>
