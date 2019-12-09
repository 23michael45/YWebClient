<template>
	<view class='cut-img-page'>
		<view class='cropper-wrapper-bg'>
			<view class="cropper-wrapper" style='margin-top: 25px'>
				<canvas class="cropper" disable-scroll="true" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"
				 :style="'width:' + cropperOpt.width + 'px;height:'+ cropperOpt.height + 'px;background-color: rgba(0, 0, 0, 0.8)'"
				 :canvas-id="cropperOpt.id">
				</canvas>
				<canvas class="cropper" disable-scroll="true" :style="'position: fixed; top: -'+cropperOpt.width * cropperOpt.pixelRatio + 'px; left: -' + cropperOpt.height * cropperOpt.pixelRatio + 'px; width:' + cropperOpt.width * cropperOpt.pixelRatio + 'px;height:' + cropperOpt.height * cropperOpt.pixelRatio+'px;'"
				 :canvas-id="cropperOpt.targetId">
				</canvas>
				<view class="getCropperImage">
					<view @tap='cancleCropper'>取消</view>
					<view>
					</view>
					<view @tap.once="getCropperImage" >确定</view>
				</view>
			</view>
		</view>
		<canvas canvas-id="myCanvas" :style="'position: fixed; top: -'+cropperOpt.width * cropperOpt.pixelRatio + 'px; left: -' + cropperOpt.height * cropperOpt.pixelRatio + 'px; width:' + cropperOpt.width * cropperOpt.pixelRatio + 'px;height:' + cropperOpt.height * cropperOpt.pixelRatio+'px;'"></canvas>
	</view>
</template>
<script>
	const WeCropper = require('@/utils/we-cropper.js')
	const device = uni.getSystemInfoSync() // 获取设备信息
	const width = device.windowWidth // 示例为一个与屏幕等宽的正方形裁剪框
	const system = device.system;
	let height = device.windowHeight - 100
	let that;
	export default {
		data() {
			return {
				rotateI: 0,
				cropperOpt: {
					id: 'cropper', // 用于手势操作的canvas组件标识符
					targetId: 'targetCropper', // 用于用于生成截图的canvas组件标识符
					pixelRatio: device.pixelRatio, // 传入设备像素比
					width, // 画布宽度
					height, // 画布高度
					scale: 2.5, // 最大缩放倍数
					zoom: 8, // 缩放系数
					cut: {
						x: (width - 280) / 2, // 裁剪框x轴起点
						y: (height - 440) / 2, // 裁剪框y轴期起点
						width: 280, // 裁剪框宽度
						height: 420 // 裁剪框高度
					}
				},
				chooseImg: false,
				imgSrc: '',
				type: '',
				fileType: '',
				drawing_number: 0,
				tailor_count: '',
				list: [],
				index: 0,
				step: true,
				etep: true,
				clicktag:0,
				imgUrl:''
			}
		},
		onLoad: function(options) {
			that = this;
			console.log(options)
			this.type = options.type
			this.cropperOpt.cut.x = (width - options.width) / 2
			this.cropperOpt.cut.y = (height - options.height) / 2
			this.cropperOpt.cut.width = Number(options.width)
			this.cropperOpt.cut.height = Number(options.height)
			this.cropperOpt.pixelRatio = Number(options.pixelRatio) || device.pixelRatio
			this.fileType = options.fileType || 'png'
			this.drawing_number = options.drawing_number?options.drawing_number:0
			//是否存在图片 存在则不调用本地上传,直接裁剪
			this.imgUrl = options.imgUrl?options.imgUrl:''
			console.log(options.imgUrl)
			//裁剪尺寸次数
			this.tailor_count = options.tailor_count ? JSON.parse(options.tailor_count) : ''
			this.index = options.index || 0
			console.log(this.tailor_count);
			console.log(this.cropperOpt)
			const self = this;
			new WeCropper(this.cropperOpt)
				.on('ready', (ctx) => {
					this.wecropper = ctx
					this.wecropper.updateCanvas()
				})
				.on('beforeImageLoad', (ctx) => {
					uni.showToast({
						title: '上传中',
						icon: 'loading',
						duration: 20000
					})
				})
				.on('imageLoad', (ctx) => {
					uni.hideToast()
				})
			this.chooseImgs();//调用裁剪框的选择图片方法
		},
		methods: {
			chooseImgs() {
				const self = this;
				if (!that.step) return;
				that.step = false
				that.imgUr=uni.encodeURI(that.imgUrl) 
				console.log(that.imgUrl)
				if(that.imgUrl){
					self.wecropper.pushOrign(that.imgUrl)
					self.chooseImg = true
				}else{
					uni.chooseImage({
						count: 1, // 默认9
						sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
						success(res) {
							const src = res.tempFilePaths[0]
							if (src) {
								self.wecropper.pushOrign(src)
								self.chooseImg = true
							};
							uni.hideToast()
						},
						fail(res) {
							uni.hideToast();
							uni.navigateBack()
						}
					})
				}
				
			},
			touchStart(e) {
				this.wecropper.touchStart(e)
			},
			touchMove(e) {
				this.wecropper.touchMove(e)
			},
			touchEnd(e) {
				this.wecropper.touchEnd(e)
			},
			// 获取裁剪后的图片
			getCropperImage() {
				console.log('确认按钮进入判断值为:'+that.etep)
				if (!that.etep){
					return;
				} 
				that.etep = false;
				console.log('确认按钮判断值为:'+that.etep)
				if (this.chooseImg) {
					uni.showLoading({
						title: '正在截图中...'
					})
					this.wecropper.getCropperImage({
						original: true
					}, (src) => {
						if (src) {
							console.log(that.drawing_number)
							if (that.drawing_number == 0) {
								if (that.fileType == 'jpg') {
									let canvas = uni.createCanvasContext('myCanvas');
									var myWidth = this.cropperOpt.cut.width * this.cropperOpt.pixelRatio
									var myHeight = this.cropperOpt.cut.height * this.cropperOpt.pixelRatio
									// console.log('裁剪宽:' + myWidth + '裁剪高:' + myHeight)
									canvas.clearRect(0, 0, myWidth, myHeight)
									canvas.drawImage(src, 0, 0, myWidth, myHeight);
									canvas.draw(true, function() {
										uni.canvasToTempFilePath({
											x: 0,
											y: 0,
											width: myWidth,
											height: myHeight,
											destWidth: myWidth,
											destHeight: myHeight,
											fileType: that.fileType,
											canvasId: 'myCanvas',
											success: function(res) {
												var li = {
													src: res.tempFilePath,
												}
												uni.hideLoading();
												that.list.splice(0, that.list.length, li);
												that.etep=true;//上传完数据后修改此状态值
												uni.$emit(that.type, that.list);
												uni.navigateBack();
											}
										})
									});
								} else {
									var li = {
										src: src,
									}
									uni.hideLoading();
									that.list.splice(0, that.list.length, li);
									uni.$emit(that.type, that.list);
									that.etep=true;//上传完数据后修改此状态值
									uni.navigateBack();
								}
							} else {
								this.multiple_cropping(src);
							}

						} else {
							uni.hideLoading();
							uni.hideToast();
							uni.showToast({
								title: '获取图片地址失败，请稍后再试！',
							})
						}
					})
				} else {
					uni.showToast({
						title: '您还没选择图片！',
						icon: 'none'
					})
				}

			},
			async multiple_cropping(src) {
				that.list = []; //清空
				uni.showLoading({
					title: '上传中',
					mask: true
				})
				for (let i = 0; i < that.tailor_count.length; i++) {
					await this.cj(that.tailor_count[i], src);
				}
				let arry = JSON.stringify(that.list);
				uni.hideLoading();
				that.etep=true;
				uni.$emit(that.type, arry);
				uni.navigateBack();
			},
			cj(item, src) {
				return new Promise(resolve => {
					let canvas = uni.createCanvasContext('myCanvas');
					canvas.clearRect(0, 0, item.width, item.height)
					canvas.drawImage(src, 0, 0, item.width, item.height);
					canvas.draw(true, function() {
						uni.canvasToTempFilePath({
							x: 0,
							y: 0,
							width: item.width,
							height: item.height,
							destWidth: item.width,
							destHeight: item.height,
							fileType: that.fileType,
							canvasId: 'myCanvas',
							success: function(res) {
								var li = {
									src: res.tempFilePath,
									imgType: item.img_type,
									index: that.index
								}
								that.list.push(li);
								resolve();
							}
						})
					});
				})
			},
			cancleCropper() {
				uni.hideToast()
				uni.navigateBack()
			},
			

		}
	}
</script>


<style>
	page {
		min-height: auto;
		height: auto;
	}

	.cropper-wrapper {
		background: #fff;
	}

	.getCropperImage {
		text-align: center;
		font-size: 32upx;
		display: flex;
		justify-content: space-around;
		position: absolute;
		bottom: 0;
		width: 750upx;
		padding: 40 0upx;
		background: #000;
		z-index: 9999;
		color: #fff;
		align-items: center;
	}

	.getCropperImage>view {
		padding: 0 40upx;
		height: 60px;
		line-height: 60px;
	}

	.getCropperImage>button {
		padding: 0 40upx;
		height: 60px;
		line-height: 60px;
	}

	.cropper-wrapper-bg {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgb(0, 0, 0);
		z-index: 22;
	}

	.rotate {
		width: 44upx;
		height: 44upx;
	}
</style>
