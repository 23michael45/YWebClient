<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">活动创建</block>
		</cu-custom>
		<view class="create-in">
			<view class="create-box">
				<view class="create-title">创建一个造型活动</view>
				<view class="create-btn" @tap="create(1)">
					<text class="lg text-gray cuIcon-add"></text>
				</view>
				<view class="create-tips">提供造型平面图片，供用户换脸体验</view>
			</view>
		</view>
		<view class="create-in">
			<view class="create-box">
				<view class="create-title">创建一个视频活动</view>
				<view class="create-btn" @tap="create(2)">
					<text class="lg text-gray cuIcon-add"></text>
				</view>
				<view class="create-tips">提供造型视频内容，供用户换脸体验</view>
			</view>
		</view>
		<view class="content">
			<chunLei-modal v-model="value" :mData="inputData" type="input" @onConfirm="onConfirm" navMask>
			</chunLei-modal>
		</view>
	</view>
</template>

<script>
	let that;
	import config from '@/components/config.js'
	import chunLeiModal from '@/components/chunLei-modal/chunLei-modal.vue'
	import {
		Activity_Create
	} from '@/axios/index.js'
	export default {
		components: {
			chunLeiModal
		},
		data() {
			return {
				value: false,
				inputData: {
					title: '创建活动',
					isType: 2,
					content: [{
						title: '活动名称',
						content: '',
						type: 'text',
						placeholder: '请输入活动名称'
					}, ]
				},
				subType: 0
			}
		},
		onLoad() {
			that = this
		},
		methods: {
			onConfirm: function(e) {
				if(!e[0].content){
					uni.showToast({
						title:'请输入活动名',
						icon:'none'
					})
					return;
				}
				var data = {
					name: e[0].content,
					type: 2,
					subType: this.subType,
					status: 4
				}
				Activity_Create(data).then(res => {
					if(res.ret == 0) {
						console.log(res.info);
						uni.showToast({
							title: '创建成功',
							icon: 'none',
							duration: 1500,
							mask:true,
							success() {
								setTimeout(ress => {
									
									that.$Router.push({
										name: 'edit-activity',
										params: {
											activityId: res.info
										}
									})
								},1500)
							}
						});
					} else {
						
						let title = '';
						if (res.retMsg == '记录已存在') {
							title = '活动名称重复,请重新输入'
						} else if (res.retMsg == 'USR_CHECK_NO_PASS_ERR') {
							title = '用户还未实名，不允许创建活动，请先实名认证在重试'
						}
						uni.showToast({
							title: title ? title : res.retMsg,
							icon: 'none',
							mask:true,
							duration: 3000,
							success: () => {
								setTimeout(function() {
									uni.hideToast();
								}, 3000);
							},
							fail: () => {
								setTimeout(function() {
									uni.hideToast();
								}, 3000);
							}
						});
					}
				})
			// 	this.$https(config.Activity_Create, data, 'POST', undefined, undefined).then(res => {

			// 		uni.showToast({
			// 			title: '创建成功',
			// 			icon: 'none'
			// 		});
			// 		that.$Router.push({
			// 			name: 'edit-activity',
			// 			params: {
			// 				activityId: res.data.info
			// 			}
			// 		})

			// 	}).catch(err => {
			// 		let title = '';
			// 		if (err.retMsg == '记录已存在') {
			// 			title = '活动名称重复,请重新输入'
			// 		} else if (err.retMsg == 'USR_CHECK_NO_PASS_ERR') {
			// 			title = '用户还未实名，不允许创建活动，请先实名认证在重试'
			// 		}
			// 		uni.showToast({
			// 			title: title ? title : err.retMsg,
			// 			icon: 'none',
			// 			duration: 1500,
			// 			success: () => {
			// 				setTimeout(function() {
			// 					uni.hideToast();
			// 				}, 1500);
			// 			},
			// 			fail: () => {
			// 				setTimeout(function() {
			// 					uni.hideToast();
			// 				}, 1500);
			// 			}
			// 		});
			// 	});
			},
			create(subType) {
				this.subType = subType; //创建的活动属性什么类型 视频 平面
				uni.removeStorageSync('goodClassId');
				this.value = true
			}
		}
	}
</script>

<style>
	@import url("./create.css");
</style>
