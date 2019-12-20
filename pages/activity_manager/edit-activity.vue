<template>
	<view>
		<cu-custom class="seat" bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">编辑活动</block>
		</cu-custom>
		<view class="card-box">
			<view class="my-card">
				<!-- <avatar @upload="myUpload" ref="avatar" style="position: absolute;left: 999999px;"></avatar> -->
				<view class="title">
					<input type="text" v-model="names" placeholder="点击此处编辑活动标题" placeholder-style="color: #fff;" @blur="update_activity">
				</view>
				<view class="logo">
					<image v-if="activity[1].url" :src="activity[1].url" mode=""></image>
					<view v-else class="upload-logo">LOGO</view>
				</view>
				<view class="mode">
					<image :src="activitys.subType==1?'/static/img/01.png':'/static/img/02.png'" mode=""></image>
				</view>
				<view class="bgc" @tap="clk(0)">
					<image v-if="activity[0].url" :src="activity[0].url" mode="scaleToFill" style="width: 750upx; height: 356upx;"></image>
					<view v-else class="bgcTip">
						<text class="lg text-gray cuIcon-add"></text>
						<view class="tip-text">
							点击上传活动封面
						</view>
					</view>
				</view>
				<view class="bottom">
					<view class="bottom-item">
						<image src="/static/img/shares.png" mode=""></image>
					</view>
					<view class="bottom-item">
						<image src="/static/img/zan.png" mode=""></image>
					</view>
					<view class="bottom-item">
						<image src="/static/img/shoucang.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<canvas canvas-id="myCanvas" style="width: 1080px;height: 1920px;position: absolute;left: -999999999999999999999999999px; top: -99999999999999999999999px;"></canvas>
		<view class="btn-box" v-if="activitys.status==3||activitys.status==4">
			<view class="tips">编辑活动内页面及造型</view>
			<view class="btn" @tap="toEditContent(undefined)">
				内容编辑
			</view>
		</view>
		<view v-if="activitys.status!=null" class="boms">
			<view class="preview" @tap="preview">活动预览 </view>
			<view class="preview" v-if="activitys.status==1" @tap="update_status(activitys.status,'是否将当前活动下线，下线后将不能在平台搜索到当前活动，请问是否继续?')">下线</view>
			<view class="preview" v-if="activitys.status==2" @tap="update_status(activitys.status,'此操作会将当前活动取消审核,取消后需要重新提交审核，请问是否继续?')">取消审核</view>
			<view class="preview" v-if="activitys.status==3" @tap="update_status(activitys.status,'此操作会将当前活动进行发布，发布后在平台中能够搜索到当前活动，请问是否继续?')">活动发布</view>
			<view class="preview" v-if="activitys.status==4" @tap="update_status(activitys.status,'此操作会将当前活动提交审核,审核通过后可以将活动发布到平台上，请问是否继续?')">提交审核</view>
		</view>
	</view>
</template>

<script>
	import cut from "@/colorui/components/cu-custom.vue";
	import {
		searchGcImg,
		searchUsr,
		searchGoodsClass,
		Activity_Create,
		delGcImg,
		upGcImg,
		searchCompany
	} from '@/axios/index.js'
	let that;
	export default {
		components: {
			cut
		},
		data() {
			return {
				urls: ["", ""],
				activity: [{
					url: '',
					id: ''
				}, {
					url: '',
					id: ''
				}],
				activitys: {
					name: '',
					id: '',
					status: null
				},
				names: '',
				activity_bols: false,
				goodClassId: '',
				dataName: '',
				index: ''
			}
		},
		onLoad(options) {
			console.log('活动id为:' + options.activityId);
			that = this;
			that.goodClassId = options.activityId
			that.dataName = options.dataName
			options.index?that.index = options.index:''
			uni.$on('LG', that.LG);
		},
		beforeDestroy: function() {
			console.log('销毁');
			uni.$off('LG');
			uni.$off('updateModuleInformation');
		},
		mounted() {
			uni.showLoading({
				title: '查询中.........'
			})
			let searUserBol = true;
			if (that.goodClassId) {
				let parm = {};
				parm.token = uni.getStorageSync('token');
				parm.id = that.goodClassId;
				parm.getDetail=true;
				searchGoodsClass(parm).then(res => {
					if (res.ret == 0) {
						that.activitys = res.info.list[0];
						console.log(that.activitys);
						that.names = that.activitys.name;
						if(res.info.list[0].gcImgList.length>0){
							res.info.list[0].gcImgList.forEach(item => {
								if (item.type == 3 && item.seqno == 0) {
									that.activity.splice(0, 1, item);
								} else if (item.type == 8 ) {
									searUserBol = false
									that.activity.splice(1, 1, item);
								}
							});
							that.updateUserLogo(searUserBol);
						}else{
							that.updateUserLogo(searUserBol);
						}
					}
					uni.hideLoading();
				});
			}
		},
		methods: {
			updateUserLogo:function(searUserBol){
				if (searUserBol) {
					searchCompany({//查询店铺LOGO
						id: JSON.parse(uni.getStorageSync('uInfo')).coid
					}).then(r => {
						if (r.ret == 0) {
							if(r.info.list[0].imgurl){
								//将用户头像作为活动的LOGO上传
								upGcImg(null, {
									goodClassId: that.goodClassId,
									type: 8,
									seqno: 0,
									url:r.info.list[0].imgurl,
									noFile: 1
								}).then(re => {
									if (re.ret == 0) {
										that.activity[1].url = r.info.list[0].imgurl;
									}
								})
							}
						}
					})
				}
			},
			//更新活动组件信息
			// updateModuleInformation:function(e){
			// 	console.log('调用emit事件:'+e);
			// 	e.img=that.activity[0].url;
			// 	console.log('赋值返回的数据对象:'+e);
			// 	uni.$emit('updateActivity',e);
			// },
			toEditContent: async function(validation) {
				let bol = true;
				if (that.activitys.status == 3) {
					await that.$utils.show_modal('活动审核已通过,如果编辑内容将需要重新提交审核，请问是否继续?').then(res => {
						bol = res;
						if (!res) {
							console.log('进入')
							return;
						}
					});
				}
				if (bol) {
					if (that.activitys.status != 4) {
						let par = {};
						par.id = that.goodClassId
						par.status = 4; //编辑状态
						await Activity_Create(par).then(res => {
							console.log(res);
							let title = '';
							if (res.ret == -1) {
								title = '修改失败，请稍后重试';
							} else {
								title = '修改成功';
								that.activitys.status = 4;
								uni.$emit('updateActivity', {
									id: that.goodClassId,
									dataName: that.dataName,
									index: that.index?that.index:''
								}); //调用父级方法修改值
							}
							uni.showToast({
								title: title,
								icon: 'none',
								complete: () => {
									setTimeout(function() {
										uni.hideToast();
									}, 1500);
								}
							});
						});
					}

				} else if (!bol) {
					return;
				}
				if (validation == 1) { //为1则是status值更改为4进行编辑跳转
					that.clk();
					return;
				} else if (this.activitys.subType == 1) { //图片活动
					that.$Router.push({
						name: 'surfaceActivity',
						params: {
							activityId: that.activitys.id
						}
					})
				} else { //否则就是视频活动
					that.$Router.push({
						name: 'edit-content',
						params: {
							activityId: that.activitys.id
						}
					})
				}
			},
			myUpload: async function(rsp) {
				let par = rsp.index == 1 ?
					that.$utils.form_data(8, 0, undefined, undefined, undefined) :
					that.$utils.form_data(3, 0, undefined, undefined, undefined); //上传活动封面图
				let pars = {};
				if (that.activity[rsp.index] != undefined) {
					if (that.activity[rsp.index].id) {
						pars.id = that.activity[rsp.index].id;
						await delGcImg(pars).then(res => {});
					}
				}
				par.goodClassId = that.goodClassId;
				await upGcImg(rsp.path, par).then(res => {
					let title = '';
					let re = JSON.parse(res);
					console.log(re);
					if (re.ret == -1) {
						title = '图片上传失败'
					} else if (re.ret == 0) {
						title = '图片上传成功'
						that.activity[rsp.index].url = rsp.path;
						that.activity[rsp.index].id = re.info;
						console.log(that.goodClassId)
						uni.$emit('updateActivity', {
							id: that.goodClassId,
							dataName: that.dataName,
							index: that.index?that.index:''
						}); //调用父级方法修改值
					}
					uni.showToast({
						title: title,
						icon: 'none',
						success: () => {
							setTimeout(function() {
								uni.hideToast();
							}, 1500);
						},
						fail: () => {
							setTimeout(function() {
								uni.hideToast();
							}, 1500);
						}
					});
				});
			},
			/**
			 * TODO 12.3日修改封面图裁剪框代码
			 * @param {Object} index
			 */
			clk: function(index) { //上传活动封面图
				if (!that.verify()) return;
				/**
				 * 封面图上传宽高为 728*356
				 * width 宽
				 * height 高
				 * pixelRatio 设备像素比 用于宽高相成得到的就是实际的上传图片大小 
				 * type 回调的上传方法
				 * fileType 上传的图片文件类型
				 */
				that.$Router.push({
					name: 'cut',
					params: {
						width: 364,
						height: 178,
						pixelRatio: 2,
						type: 'LG',
						fileType: 'jpg'
					}
				})


			},
			clks: function(index) { //上传活动LOGO图 此方法已抛弃 改为查询用户头像
				if (!that.verify()) return;
				//裁剪是默认返回PNG图片并监听事件回调当前的LG方法
				that.$Router.push({
					name: 'cut',
					params: {
						width: 200,
						height: 200,
						pixelRatio: 0.4,
						type: 'LG'
					}
				});
			},
			verify: function() { //验证LOGO 封面图修改时是否是下线状态
				let title = '';
				if (that.activitys.status == 1) { //已发布
					title = '请点击右下角下线按钮将活动下线即可编辑'
				} else if (that.activitys.status == 2) { //待审核
					title = '请点击右下角取消审核按钮即可进行编辑'
				} else if (that.activitys.status == 3) { //审核通过
					that.toEditContent(1);
					return;
				} else {
					return true;
				}
				uni.showToast({
					title: title,
					duration: 1000,
					icon: 'none',
					mask: true,
					success: () => {
						setTimeout(function() {
							uni.hideToast()
						}, 1000);
						return false;
					},
					fail: () => {
						setTimeout(function() {
							uni.hideToast()
						}, 1000);
						return false;
					}
				}, )

			},
			LG: function(item) {
				let rsp = {};
				uni.getImageInfo({
					src: item[0].src,
					success: function(res) {
						if (res.type == 'png') {
							rsp.index = 1;
							rsp.path = item[0].src;
						} else {
							rsp.index = 0;
							rsp.path = item[0].src;
						}
						that.myUpload(rsp); //调用上传方法
					},
					fail: function(e) {
						uni.showToast({
							title: '裁剪失败,请稍后重试',
							icon: 'none',
							mask: true
						});
						return;
					}
				})
			},
			/**
			 * 更新活动名称
			 */
			update_activity: function() {
				if (that.activitys.status == 1) {
					that.names = that.activitys.name;
					uni.showToast({
						title: '活动已发布，如需要修改请点击右下角下线按钮将活动进行下线即可修改',
						icon: 'none'
					});
					return;
				}
				if (that.activitys.status == 2) {
					that.names = that.activitys.name;
					uni.showToast({
						title: '活动正在审核中,如需修改请点击右下角的取消审核按钮取消审核即可修改',
						icon: 'none'
					});
					return;
				}
				if (that.activitys.status == 3) {
					that.names = that.activitys.name;
					uni.showToast({
						title: '活动审核已通过',
						icon: 'none'
					});
					return;
				}
				that.$utils.show_modal('是否修改活动名称,修改后活动需要重新提交审核').then(res => {
					if (res) {
						let par = {};
						par.name = this.names;
						par.id = that.goodClassId
						uni.showLoading({
							title: '修改中....'
						});
						Activity_Create(par).then(res => {
							console.log(res);
							let title = '';
							if (res.ret == -1) {
								title = '修改失败，请稍后重试';
							} else if (res.retMsg == '记录已存在') {
								title = '此活动名称已重复，请重新输入';
							} else if (res.ret == 0) {
								title = '更改活动名称成功';
								uni.$emit('updateActivity', {
									id: that.goodClassId,
									dataName: that.dataName,
									index: that.index?that.index:''
								}); //调用父级方法修改值
							}
							uni.showToast({
								title: title,
								icon: 'none',
								complete: () => {
									setTimeout(function() {
										uni.hideToast();
									}, 1500);
								}
							});
						});
					}
				})

			},
			/**
			 * 更新活动状态 
			 * @param {Object} stauts
			 * @param {Object} title
			 */
			update_status: function(stauts, title) {
				var statu;
				that.$utils.show_modal(title).then(res => {
					console.log(res);
					if (res) {
						//如果下线 状态为4 如果取消审核 状态为4 如果发布 状态为1 如果提交审核 状态为2
						statu = stauts == 1 ? 4 : stauts == 2 ? 4 : stauts == 3 ? 1 : stauts == 4 ? 2 : 4;
						let par = {};
						par.id = that.goodClassId
						par.status = statu; //发布状态
						Activity_Create(par).then(res => {
							console.log(res);
							let title = '';
							if (res.ret == -1) {
								title = '修改失败，请稍后重试';
							} else if (res.ret == 0) {
								title = statu == 2 ? '活动提交审核成功' : statu == 4 ? '活动下线成功' : '活动状态修改成功';
								that.activitys.status = statu;
								uni.$emit('updateActivity', {
									id: that.goodClassId,
									dataName: that.dataName,
									index: that.index?that.index:''
								}); //调用父级方法修改值
							}
							uni.showToast({
								title: title,
								icon: 'none',
								complete: () => {
									setTimeout(function() {
										uni.hideToast();
									}, 1500);
								}
							});
						});
					}
				})
			},
			preview() {
				let count = 0;
				let mp4Count = 0;
				let bannerCount = 0;
				let activity = '';

				searchGoodsClass({
					id: that.activitys.id,
					getDetail: 1
				}).then(res => {
					console.log(res);
					let List = res.info.list[0].gcImgList; //获得所有图片数据
					activity = res.info.list[0];
					if (List.length > 0) {
						List.forEach((item) => {
							if (item.type == 6 && item.seqno == 0 && res.info.list[0].subType == 1) {
								++count;
							} else if (item.type == 6 && item.seqno == 1 && res.info.list[0].subType == 1) {
								++count;
							} else if (item.type == 6 && item.seqno == 2 && res.info.list[0].subType == 1) {
								++count;
							} else if (item.type == 7 && item.seqno == 3 && res.info.list[0].subType == 1) {
								++count;
							} else if (item.type == 4 && res.info.list[0].subType == 2) { //视频活动的视频
								if (mp4Count == 0) {
									++count;
									++mp4Count;
								}
							} else if (item.type == 6 && res.info.list[0].subType == 2) { //视频活动的视频
								++count;
							} else if (item.type == 3 && res.info.list[0].subType == 2) { //视频活动的视频
								++count;
							} else if (item.type == 17 && res.info.list[0].subType == 2) { //视频活动的视频
								if (bannerCount == 0) {
									++count;
									++bannerCount;
								}
							}
						});
						if (count != 4) {
							uni.showToast({
								title: activity.subType == 1 ? '活动封面图数量不够,请点击进入内容编辑查看页面内容4张图片是否已全部上传' : '视频活动数据不够完整，请点击内容编辑完善活动数据',
								icon: 'none',
								complete: () => {
									setTimeout(function() {
										uni.hideToast();
									}, 2000);
								}
							});
						} else {
							if (that.activitys.subType == 1) { //图片活动
								that.$Router.push({
									name: 'imgPreview',
									params: {
										activityId: that.activitys.id
									}
								})
							} else { //否则就是视频活动
								that.$Router.push({
									name: 'videoPreview',
									params: {
										activityId: that.activitys.id
									}
								});
								// that.$Router.back(1);//回退到上一个页面
							}
						}


					} else {
						uni.showToast({
							title: '活动封面图片还未上传,请点击上方上传活动封面图片!',
							icon: 'none',
							success: () => {
								setTimeout(function() {
									uni.hideToast();
								}, 1500);
							},
							fail: () => {
								setTimeout(function() {
									uni.hideToast();
								}, 1500);
							}
						});
					}
				}).catch(err => {
					console.log(err);
					uni.showToast({
						title: '预览失败，请稍后重试',
						icon: 'none',
						success: () => {
							setTimeout(function() {
								uni.hideToast();
							}, 1500);
						},
						fail: () => {
							setTimeout(function() {
								uni.hideToast();
							}, 1500);
						}
					});
				})
			}
		}
	}
</script>

<style>
	@import url(css/edit-activity.css);
</style>
