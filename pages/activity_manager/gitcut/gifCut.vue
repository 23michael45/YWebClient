<template>
	<view>
		<web-view :src="Video" @message="message"></web-view>
	</view>
</template>

<script>
	var wv; //计划创建的webview
	let that;
	export default {
		data() {
			return {
				Video: ''
			}
		},
		onLoad(options) {
			that = this;
			if (options.type) {
				that.Video =
					`https://m.yujishishi.com/pages/hybrid/html/upGif.html?video=${options.videoUrl}&goodClassId=${options.id}&token=${options.token}`
			} else {
				console.log('进入上传视频活动GIF');
				console.log('视频地址为:' + options.videoUrl);
				console.log('活动ID为:' + options.id);
				console.log('token：' + options.token);
				console.log('数组下标为：' + options.index);
				console.log('视频ID为：' + options.videoId);
				that.Video =
					`https://m.yujishishi.com/pages/hybrid/html/canvas.html?video=${options.videoUrl}&goodClassId=${options.id}&token=${options.token}&index=${options.index}&videoId=${options.videoId}`
			}
		},
		methods: {
			message: function(e) {
				// console.log(e)
				uni.$emit('upGif', {
					gifInfo: e.detail.data[0].gifInfo
				});
			}
		},
		onReady() {

		}
	}
</script>

<style>
</style>
