<template>
	<view class="">
		<cu-custom class="seat" bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">实名认证</block>
		</cu-custom>
		<view class="headerss">
			<h2>拍摄上传您的本人身份证信息页</h2>
		</view>
		<view class="section">
			<view class="left">
				<image class='lefts' :src='charter' mode="aspectFit" @tap="previewImage(charter)"></image>
			</view>
			<view class="right">
				<h2>正面</h2>
				<view class="right_section">
					<view class="right_sections" @tap="charter_upload(1)">
						<text class="cuIcon-camera"></text>
					</view>
				</view>
				<h3>{{charterBol}}</h3>
			</view>
		</view>
		<view class="section">
			<view class="left">
				<image class='lefts' :src='ID_card' mode="aspectFit" @tap="previewImage(ID_card)"></image>
			</view>
			<view class="right">
				<h2>反面</h2>
				<view class="right_section">
					<view class="right_sections" @tap="charter_upload(2)">
						<text class="cuIcon-camera"></text>
					</view>
				</view>
				<h3>{{iDCardBol}}</h3>
			</view>
		</view>
		<!-- <view class="footer">
			<button id='nexts' @tap="next" :disabled="btnBol">{{navigates}}</button>
		</view> -->
	</view>
</template>

<script>
	import {
		upCommImg,
		searchCommImg,
		idCardCheck,
		searchUsr
	} from '@/axios/index.js'
	let that;
	export default {
		data() {
			return {
				charter: '',
				charterID: 0,
				ID_card: '',
				ID_cardID: 0,
				charterBol: '点击拍摄/上传',
				iDCardBol: '点击拍摄/上传'

			}
		},
		onLoad(options) {
			that = this;
		},
		mounted() {
			let count = 0;
			searchCommImg({}).then(res => {
				res.info.list.forEach(item => {
					if (item.type == 6 && item.param1 != '反面') { //身份证正面
						that.charter = item.url;
						++count;
						that.charterBol = '已上传'
					} else if (item.type == 6 && item.param1 == '反面') { //身份证反面
						that.ID_card = item.url;
						++count;
						that.iDCardBol = '已上传'
					}
				});
				if (count < 2) {
					that.navigates = '确认'
				} else if (count == 2) {
					that.navigates = '已实名'
					that.btnBol = true;
				}
			})

		},
		methods: {
			charter_upload: function(type) {
				let coid = 0;
				searchUsr({}).then(res => {
					coid = res.info.list[0].coid; //公司ID
				});
				if (type == 2) { //判断正面是否上传
					if (that.ID_card) { //已上传了
						uni.showToast({
							title: '身份证反面已上传,无需重新上传',
							icon: 'none'
						});
						return;
					}
					if (!that.charter) {
						uni.showToast({
							title: '请先上传身份证正面照',
							icon: 'none'
						});
						return;
					}
				} else if (type == 1) {
					if (that.charter) { //已上传了
						uni.showToast({
							title: '身份证正面已上传,无需重新上传',
							icon: 'none'
						});
						return;
					}
				}
				this.$utils.Img_upload(['album', 'camera']).then(res => {
					let url = res;
					let title = '';
					console.log(coid);
					if (coid > 0) {
						if (type == 2) { //反面验证
							upCommImg(res, {
								type: 6,
								rid: coid,
								seqno: 1,
								param1: '反面'
							}).then(res => {
								let re = JSON.parse(res);
								if (re.retMsg == '操作成功') {
									that.ID_card = url;
									that.ID_cardID = re.info[0]; //上传后的图片ID
									that.iDCardBol = '已上传'
									title = '身份证反面上传成功';
								} else if (re.ret == -1) {
									title = '反面上传失败，请重试'
								}
								uni.showToast({
									title: title,
									icon: 'none'
								});
							});
						} else {
							idCardCheck(
								res, {}).then(res => {
								let re = JSON.parse(res);
								if (re.retMsg == '操作成功') {
									that.charter = url;
									that.charterID = re.info[0]; //上传后的图片ID
									that.charterBol = '已上传'
									title = '身份证正面上传成功';
									uni.showToast({
										title: title,
										duration: 1500,
										icon: 'none'
									});
								} else if (re.ret == -1) {
									title = '正面图片上传识别失败，请查看图片是否正确或者是否清晰';
								}
								uni.showToast({
									title: title,
									icon: 'none'
								});
							});
						}
					} else {
						uni.showToast({
							title: '图片上传失败，请重试',
							icon: 'none',
							duration: 1500
						})
						return;
					}
				});
			},
			previewImage(res) {
				if (!res) {
					uni.showToast({
						title: '请先上传图片！',
						duration: 1000,
						icon: 'none'
					});
					return;
				}
				let list = [];
				list.push(res);
				uni.previewImage({
					urls: list
				});
			}
		}
	}
</script>

<style scoped>
	@import url('./attestAtion.css');
</style>
