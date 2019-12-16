<template>
	<view>
		<cu-custom class="seat" bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">图片活动编辑</block>
		</cu-custom>
		<topCar v-bind:top="top"></topCar>
		<scroll-view enable-back-to-top='true' class="scroll-list">
			<view v-if="top.TabCur==0" class="one" v-for="(item,index) in 4" :key='index'>
				<view class="section_header">
					<view class="seqno">{{index+1}}</view>
					<view class="seqno_title">背景图片</view>
				</view>
				<view class="section_section" @tap="privew(index)">
					<image :src='list[index].url' style="width: 100%;height: 100%;"></image>
				</view>
				<view class="section_footer">
					<button class="reference" @tap="reference(index)">参考</button>
					<button class="uploading" @tap="activityBanner(index)" :disabled="bannerBol">上传</button>
				</view>
			</view>
			<view v-if="top.TabCur==1" class="two" v-for="(item,index) in activity_imgList" :key='index'>
				<view class="two_header">造型<view class="two_seqno">{{index+1}}</view>
					<view class="close" @tap="delList(index)"></view>
				</view>
				<view class="two_section">
					<view class="two_section_role">
						<view class='title'>造型图</view>
						<view class='role_img'>
							<image :src='item[0].url'></image>
						</view>

					</view>
					<view class="two_section_mask">
						<view class='mask_img'>
							<image :src='item[1].url'></image>
						</view>
						<view class='title'>前景图</view>
					</view>

				</view>
				<view class="footers">
					<view class="role_btn">
						<button class="demo">参考</button>
						<button class="uploads" @tap="imgs_Upload('role','jpg',index)">上传</button>
					</view>
					<view class="mask_btn">
						<button class="demo">参考</button>
						<button class="uploads" @tap="imgs_Upload('mask','png',index)">上传</button>
					</view>
				</view>
			</view>
			<button class="botms" @tap="imgAdd(index)" v-if="top.TabCur==1">
				+
			</button>
			<button class="bottms" @tap="back()">
				保存
			</button>
		</scroll-view>
		<canvas canvas-id="myCanvas" style="width: 1080px;height: 1920px;position: absolute;left: 999999999999999999999999999px;top:-999999999999px;
"></canvas>
	</view>
</template>

<script>
	import topCar from '@/components/top_car/top_car.vue'
	import config from '@/components/config.js'
	import {
		searchGoodsClass,
		searchGcImg,
		delGcImg,
		upGcImg,
		updateGcImgInfo,
		Activity_Create
	} from '@/axios/index.js'
	let that;
	export default {
		components: {
			topCar
		},
		data() {
			return {
				top: {
					TabCur: 0,
					scrollLeft: 0,
					item: ['页面', '造型']
				},
				list: [{
					id: 0,
					seqno: 0,
					type: 0,
					url: ''
				}, {
					id: 0,
					seqno: 0,
					type: 0,
					url: ''
				}, {
					id: 0,
					seqno: 0,
					type: 0,
					url: ''
				}, {
					id: 0,
					seqno: 0,
					type: 0,
					url: ''
				}],
				activity_imgList: [
					[{
							id: '',
							thumbnail_id: '',
							role_id: '',
							seqno: 1,
							url: '',
						},
						{
							id: '',
							thumbnail_id: '',
							seqno: 1,
							url: ''
						}
					],
				],
				imgObj: {
					one: '',
					two: '',
					three: '',
					four: ''
				},
				list_index: 0,
				bannerCount: 0,
				roleCount: 0,
				maskCount: 0,
				bannerBol: false,
				goodClassId: '',
				activity:'',
				materialBack:false,
				imgType:'jpg',
				ImgIndex:0
				
			}
		},
		onLoad(options) {
			that = this;
			options.activityId ? that.goodClassId = options.activityId : ''
			uni.$on('uploads', that.uploads);
			uni.$on('list_imgupload', that.list_imgupload);
			uni.$on('MaterialBack', that.MaterialBack);
		},
		beforeDestroy: function() {
			console.log('销毁');
			uni.$off('uploads');
			uni.$off('list_imgupload');
			uni.$off('MaterialBack');
		},
		//加载的时候查询是否存在活动 存在则查询活动下的所有图片信息并调用工具类排序
		mounted() {
			let par = {};
			let goodClassId = that.goodClassId;
			if (goodClassId) {
				par.id = goodClassId;
				par.getDetail = true;
				//查询活动
				searchGoodsClass(par).then(res => {
					let gcImgList = res.info.list[0].gcImgList.sort(that.$utils.compare('seqno')); //排序
					gcImgList = that.$utils.list_sort(gcImgList) //分组
					that.activity=res.info.list[0];
					let activity_imgList = [];
					//从第一个开始 0下标数组位置存放的是活动的其余图片
					for (let i = 0; i < gcImgList.length; i++) {
						let index = i;
						--index;
						var list = [{
								id: '',
								thumbnail_id: '',
								role_id: '',
								seqno: 1,
								url: '',
							},
							{
								id: '',
								thumbnail_id: '',
								seqno: 1,
								url: ''
							}
						];
						let bol = false;
						gcImgList[i].forEach(function(item) {
							if (item.type == 4) {
								list[0].id = item.id;
								list[0].url = item.url;
								list[0].seqno = item.seqno;
								list[1].seqno = item.seqno;
								bol = true;
							} else if (item.type == 5) {
								if (item.seqno > i) { //大于i的就是小图序号需要截取
									activity_imgList[item.seqno - 21][1].thumbnail_id = item.id;
									bol = false;
								} else {
									list[1].id = item.id;
									list[1].url = item.url;
									list[1].seqno = item.seqno
								}
							} else if (item.type == 9) {
								list[0].role_id = item.id;
							} else if (item.type == 11) {
								list[0].thumbnail_id = item.id;
							} else if (item.type == 6) {
								that.list.splice(item.seqno, 1, item)
								// that.list[item.seqno]
							} else if (item.type == 7) {
								that.list.splice(item.seqno, 1, item)
								// that.list[item.seqno]
							}
						});
						if (bol) {
							activity_imgList.push(list);
						}
					}
					if (gcImgList.length && gcImgList[0]) {
						gcImgList[0].forEach(function(item) {
							if (item.type == 6) {
								that.list.splice(item.seqno, 1, item)
							}
						});
					}
					that.activity_imgList = activity_imgList;
					if (!that.activity_imgList.length > 0) {
						that.imgAdd(); //如果数组中没有数据那么就插入一个新数组
					}
				});
				
				that.searchReference(); //查询参考图
			}
		},
		methods: {
			/**
			 * 本地or素材库选择页面轮播图
			 * @param {Object} index 
			 */
			activityBanner: function(index) {
				that.list_index = index; //当裁剪完成回调时当上传序号或者删除以前的图片
				that.bannerCount = 0;
				//调用裁剪框
				that.$Router.push({
					name: 'cut',
					params: {
						width: 187.5,
						height: 362.5,
						pixelRatio: 4,
						type: 'list_imgupload',
						fileType: 'jpg'
					}
				});
			},
			/**
			 * 上传页面轮播图
			 * @param {Object} item
			 */
			list_imgupload: async function(item) {
				that.bannerBol = true;
				uni.showLoading({
					title: '正在上传'
				})
				let par;
				if (that.list_index != 3) {
					par = {
						goodClassId: that.goodClassId,
						type: 6,
						seqno: that.list_index
					};
				} else {
					par = {
						goodClassId: that.goodClassId,
						type: 7,
						seqno: that.list_index
					};
				}
				if (that.list[that.list_index].id) {
					//删除原本位置图片
					await delGcImg({
						id: that.list[that.list_index].id
					}).then(res => {
						if (res.ret == -1) {
							that.bannerBol = false;
							uni.hideLoading();
							uni.showToast({
								title: '图片上传失败请重试',
								icon: 'none',
								complete: () => {
									setTimeout(function() {
										uni.hideToast();
									}, 1500);
								}
							});
							return;
						}
					});
				}
				if (that.bannerCount == 0) { //每次上传都会判断页面图是否上传过 因为裁剪框有时候会造成多次调用上传接口,所以进行了判断限制,上传成功+1
					await upGcImg(item[0].src, par).then(res => {
						uni.hideLoading();
						that.bannerBol = false;
						let re = JSON.parse(res);
						if (re.ret == 0) {
							console.log(res);
							that.list[that.list_index].url = item[0].src;
							that.list[that.list_index].id = re.info;
							that.list[that.list_index].type = par.type;
							that.list[that.list_index].seqno = par.seqno;
							that.bannerCount = that.bannerCount + 1;
							uni.showToast({
								title: '图片上传成功',
								icon: 'none',
								complete: () => {
									setTimeout(function() {
										uni.hideToast();
									}, 1500);
								}
							});
						} else if (re.ret == -1) {
							uni.showToast({
								title: '图片上传失败请重试',
								icon: 'none',
								complete: () => {
									setTimeout(function() {
										uni.hideToast();
									}, 1500);
								}
							});
						}
					});
				}
			},
			/**
			 * @param {Object} item 裁剪后返回的数组数据进行角色图 mask图循环上传
			 */
			uploads: function(item) {
				console.log(11111);
				let li = JSON.parse(item);
				let imgfile_type;
				uni.getImageInfo({
					src: li[0].src,
					success: async function(image) {
						imgfile_type = image.type; //图片类型
						for (let i = 0; i < li.length; i++) {
							let items = li[i];
							let par = {};
							let parm = {};
							let upload = {}
							let concrete_type = items.imgType == 'raw' ? 'id' : items.imgType == 'thumbnail' ? 'thumbnail_id' :
								'role_id'
							if (items.imgType == 'raw') { //原图
								//1080*1920的参数
								par = {
									goodClassId: that.goodClassId,
									type: imgfile_type == 'jpeg' ? 4 : 5,
									seqno: that.activity_imgList[items.index][(imgfile_type == 'jpeg' ? 0 : 1)].seqno,
									param: imgfile_type == 'jpeg' ? '' : that.activity_imgList[items.index][0].id
								}
							} else if (items.imgType == 'thumbnail') { //小图
								//小图
								par = {
									goodClassId: that.goodClassId,
									type: imgfile_type == 'jpeg' ? 11 : 5,
									seqno: imgfile_type == 'jpeg' ? that.activity_imgList[items.index][0].seqno : that.activity_imgList[items
										.index][1].seqno + 20,
									param: imgfile_type == 'jpeg' ? '' : that.activity_imgList[items.index][0].thumbnail_id
								}
							} else if (items.imgType == 'role') { //缩略图
								//上传缩略图需要图片类型=9,序号,param=小图id，param1为null,rid为角色图id
								console.log(imgfile_type);
								 imgfile_type == 'jpeg' ? par ={
									goodClassId: that.goodClassId,
									type: 9,
									seqno: that.activity_imgList[items.index][0].seqno,
									param: that.activity_imgList[items.index][0].thumbnail_id,
									rid: that.activity_imgList[items.index][0].id
								} : ''
							}

							if (imgfile_type == 'jpeg') { //如果是jpg 那么就判断相应地址的id是否存在
								if (that.activity_imgList[items.index][0][concrete_type]) {
									parm.id = that.activity_imgList[items.index][0][concrete_type]
								}
								//如果上传的是角色图 判断相反位置的mask图是否存在
								if (that.activity_imgList[items.index][1][concrete_type]) {
									upload.id = that.activity_imgList[items.index][1][concrete_type];
									upload.param = that.activity_imgList[items.index][0][concrete_type];
								}
							} else {
								if (that.activity_imgList[items.index][1][concrete_type]) {
									parm.id = that.activity_imgList[items.index][1][concrete_type]
								}
							}

							if (!Object.keys(parm).length == 0) { //删除之前存在的图片
								await that.delData(parm)
							}
							if (!Object.keys(par).length == 0) { //上传图片
								await that.uploading(par, items.src, items.index, imgfile_type, items.imgType);
								that.activity_imgList[items.index][(imgfile_type == 'jpeg' ? 0 : 1)].url = items.src
							}
							if (!Object.keys(upload).length == 0) { //更新图片信息
								await that.updateImg(upload, items.index, imgfile_type, items.imgType);
							}
						}
					}
				});
			},
			/**
			 * 本地or素材库上传角色图或者mask图判断验证
			 * @param {Object} type  上传图片类型
			 * @param {Object} img_type 图片文件类型 jpg/png
			 * @param {Object} index 数组下标
			 */
			imgs_Upload: function(type, img_type, index) {
				that.imgType=img_type;
				that.ImgIndex=index;
				if (type == 'mask') { //判断是否是上传mask
					//如果上传得是mask图那么必须先上传角色图
					if (!(that.activity_imgList[index][0].id > 0 && that.activity_imgList[index][0].url)) {
						uni.showToast({
							title: '请先上传角色图',
							icon: 'none',
							complete: () => {
								setTimeout(function() {
									uni.hideToast();
								}, 1500);
								
							}
						});
						return;
					}
				}
				let list = [{
						width: 1080,
						height: 1920,
						img_type: 'raw'
					},
					{
						width: 486,
						height: 864,
						img_type: 'thumbnail'
					},
					{
						width: 108,
						height: 192,
						img_type: 'role'
					},
				];
				let list1 = [{
						width: 1080,
						height: 1920,
						img_type: 'raw'
					},
					{
						width: 486,
						height: 864,
						img_type: 'thumbnail'
					}
				];
				uni.showActionSheet({
					itemList: ['素材', '本地上传'],
					success: (res) => {
						if (res.tapIndex == 1 && img_type == 'jpg') {
							
							list = JSON.stringify(list);
							that.roleCount = 0; //设置图片上传次数验证数量 防止多次上传
							that.$Router.push({
								name: 'cut',
								params: {
									width: 216,
									height: 384,
									pixelRatio: 5,
									type: 'uploads',
									fileType: 'jpg',
									drawing_number: 3,
									index: index,
									tailor_count: list
								}
							});
						} else if (res.tapIndex == 1 && img_type == 'png') {
							
							list1 = JSON.stringify(list);
							that.maskCount = 0;
							that.$Router.push({
								name: 'cut',
								params: {
									width: 216,
									height: 384,
									pixelRatio: 5,
									type: 'uploads',
									drawing_number: 2,
									index: index,
									tailor_count: list1
								}
							});
						} else {
							that.$Router.push({//调用素材库传参
								name: 'imgMaterial',
								params:{
									imgVideoBol:1
								}
							});
						}

					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				})
			},
			/**
			 * @param {Object} par 删除角色图 mask图片(单张)
			 */
			delData: function(par) {
				return new Promise(resolve => {
					delGcImg(par).then(res => {
						resolve();
					})
				})
			},
			/**
			 * 角色图 mask图上传
			 * @param {Object} par    上传参数
			 * @param {Object} src    图片文件
			 * @param {Object} first_index    数组序号
			 * @param {Object} imgtype 上传的图片类型    jpg/png
			 * @param {Object} concrete_type 图片具体类型    raw/thumbnail/role
			 */
			uploading: function(par, src, first_index, imgtype, concrete_type) {
				return new Promise(resolve => {
					if ((that.roleCount >= 0 && that.roleCount <= 3) || (that.maskCount >= 0 && that.roleCount <= 2)) {
						upGcImg(src, par).then(res => {
							let re=JSON.parse(res);
							if(re.ret==0){
								let seqno = imgtype == 'jpeg' ? 0 : 1;
								//判断图片得上传尺寸类型 raw/1080*1920原图  thumbnail/486*864小图 role/192*168缩略图
								switch (concrete_type) {
									case 'raw':
										if (src.type == 4) {
											that.roleCount = that.roleCount + 1;
										} else {
											that.maskCount = that.maskCount + 1;
										}
										that.activity_imgList[first_index][seqno].id = re.info;
										break;
									case 'thumbnail':
										if (src.type == 11) {
											that.roleCount = that.roleCount + 1;
										} else {
											that.maskCount = that.maskCount + 1;
										}
										that.activity_imgList[first_index][seqno].thumbnail_id = re.info;
										break;
									case 'role':
										if (src.type == 9) {
											that.roleCount = that.roleCount + 1;
										} else {
											that.maskCount = that.maskCount + 1;
										}
										that.activity_imgList[first_index][seqno].role_id = re.info;
										break;
								}
								resolve();
							}else if(re.ret==-1){
								uni.showToast({
									title:'图片上传错误，请重新上传当前图片',
									icon:'none',
									mask:true
								});
								return;
							}
							
						})
					};

				})
			},
			/**
			 * 更新mask图参数 角色图第二次上传如果存在mask图则需要更新mask图的参数值
			 * @param {Object} par 更新传递的参数
			 * @param {Object} first_index    数组序号
			 * @param {Object} imgtype 上传的图片类型    jpeg/png
			 * @param {Object} concrete_type 图片具体类型    raw/thumbnail/role
			 */
			updateImg: function(par, first_index, imgtype, concrete_type) {
				let typeId;
				//图片尺寸类型 raw/1080*1920原图  thumbnail/486*864小图 role/192*168缩略图
				concrete_type = concrete_type == 'raw' ? 'id' : concrete_type == 'thumbnail' ? 'thumbnail_id' : 'role_id'
				par.id = that.activity_imgList[first_index][1][concrete_type];
				par.param = that.activity_imgList[first_index][0][concrete_type];
				return new Promise(resolve => {
					updateGcImgInfo(par).then(res => {
						resolve();
					})
				})
			},
			privew: function(index) { //页面轮播图预览
				let list = [this.list[index].url]
				uni.previewImage({
					urls: list
				});
			},
			reference: function(index) { //页面banner参考图
				let url = index == 0 ? that.imgObj.one : index == 1 ? that.imgObj.two : index == 2 ? that.imgObj.three : that.imgObj
					.four
				uni.previewImage({
					urls: [url]
				});
			},
			imgAdd: function() { //插入新的空数据用于角色图mask图上传
				var par = [{
						id: '',
						thumbnail_id: '',
						role_id: '',
						seqno: that.activity_imgList.length > 0 ? (that.activity_imgList[that.activity_imgList.length - 1][0].seqno +
							1) : 1,
						url: '',
					},
					{
						id: '',
						thumbnail_id: '',
						seqno: that.activity_imgList.length > 0 ? (that.activity_imgList[that.activity_imgList.length - 1][0].seqno +
							1) : 1,
						url: ''
					}
				];
				if (that.activity_imgList.length != 0) {
					if (that.activity_imgList[that.activity_imgList.length - 1][0].url) {
						that.activity_imgList.push(par); //为数组响应式添加数据
					} else {
						uni.showToast({
							title: '请先上传上方角色图',
							icon: 'none'
						})
					}
				} else {
					that.activity_imgList.push(par); //为数组响应式添加数据
				}
			},
			delList:  function(index) { //删除角色列表数据
				console.log(index);
				let par = {};
				par.id = that.activity_imgList[index][0].id;
				that.$utils.show_modal('此操作会将此序号图片删除,请问是否继续').then( async res => {
					if (res) {
						await delGcImg(par).then(res => {})
						par.id = that.activity_imgList[index][0].thumbnail_id;
						await delGcImg(par).then(res => {})
						par.id = that.activity_imgList[index][0].role_id;
						await delGcImg(par).then(res => {})
						if (that.activity_imgList[index][1].id) {
							par.id = that.activity_imgList[index][1].id;
							await delGcImg(par).then(res => {})
						}
						if (that.activity_imgList[index][1].thumbnail_id) {
							par.id = that.activity_imgList[index][1].thumbnail_id;
							await delGcImg(par).then(res => {})
						}
						that.activity_imgList.splice(index, 1) //从指定下标删除长度为1的数组元素
					}
				});
			},
			//保存并返回
			back: function() { 
				let listCount = 0; //页面轮播图计数
				let sculptCount = 0; //造型图计数
				that.list.forEach(item => {
					if (item.type == 6) {
						listCount++;
					} else if (item.type == 7) {
						listCount++;
					}
				});
				if (listCount != 4) {
					uni.showToast({
						title: '页面图还未上传完毕,请先上传页面图在保存!',
						icon: 'none',
						position: 'top'
					});
					that.top.TabCur = 0;
					return;
				}
				if (that.activity_imgList[0][0].id > 0) { //1080*1920原图
					sculptCount++;
				}
				if (that.activity_imgList[0][0].thumbnail_id > 0) { //486*864小图
					sculptCount++;
				}
				if (that.activity_imgList[0][0].role_id > 0) { //108*192缩略图
					sculptCount++;
				}
				if (sculptCount != 3) {
					uni.showToast({
						title: '请查看造型图是否上传完毕，如已上传却不能保存请重新替换造型1的造型图',
						icon: 'none',
						position: 'top'
					});
					that.top.TabCur = 1;
					return;
				}
				that.activity_imgList.forEach(item => {

				})
				uni.showLoading({
					title: '保存中.'
				});
				let par = {};
				par.id = that.goodClassId;
				par.status = 4;
				
				Activity_Create(par).then(res => {
					uni.hideLoading();
					console.log(res)
					if (res.ret == 0) {
						uni.showToast({
							title: '保存成功!',
							icon: 'none',
							position: 'top'
						});
						setTimeout(function() {
							// uni.$emit('updateModuleInformation',{id:that.goodClassId,type:that.activity.status});
							 that.$Router.back(1);//回退到上一个页面
						}, 1500);

					}else if(res.ret==-1){
						uni.showToast({
							title: '保存失败!请稍后重试!',
							icon: 'none',
							position: 'top'
						});
					}
				});
			},
			/**
			 * 查询页面Banner参考图
			 */
			searchReference: function() { 
				let search = {};
				search.orderDescCol = '';
				search.prderInCol = '';
				search.orderDescCol = '';
				search.which_page = 1;
				search.pageSize = 20;
				search.type = 10;
				search.goodClassId = '';
				search.param = 'reference'; //这个是查询参考图的判断信息
				searchGcImg(search).then(res => {
					res.info.list.forEach(item => {
						if (item.param1 == "reference1") {
							that.imgObj.one = item.url;
						}
						if (item.param1 == "reference2") {
							that.imgObj.two = item.url;
						}
						if (item.param1 == "reference3") {
							that.imgObj.three = item.url;
						}
						if (item.param1 == "reference4") {
							that.imgObj.four = item.url;
						}
					})
				})
			},
			MaterialBack:function(item){//素材选择的图片返回监听事件
				let list = [{
						width: 1080,
						height: 1920,
						img_type: 'raw'
					},
					{
						width: 486,
						height: 864,
						img_type: 'thumbnail'
					},
					{
						width: 108,
						height: 192,
						img_type: 'role'
					},
				];
				let list1 = [{
						width: 1080,
						height: 1920,
						img_type: 'raw'
					},
					{
						width: 486,
						height: 864,
						img_type: 'thumbnail'
					}
				];
				list=JSON.stringify(list);
				list1=JSON.stringify(list1);
				if(that.imgType=='jpg'){
					
					that.$Router.push({
						name: 'cut',
						params: {
							width: 216,
							height: 384,
							pixelRatio: 5,
							type: 'uploads',
							fileType: 'jpg',
							drawing_number: 3,
							index:  that.ImgIndex,
							tailor_count: list
						}
					});
				}else{
					
					that.$Router.push({
						name: 'cut',
						params: {
							width: 216,
							height: 384,
							pixelRatio: 5,
							type: 'uploads',
							drawing_number: 2,
							index: that.ImgIndex,
							tailor_count: list1
						}
					});
				}
			}
		}
	}
</script>

<style>
	@import url(css/Surface_activity);

	uni-page-body {
		height: 100%;
	}

	uni-page-body>view:nth-of-type(1) {
		height: 100%;
		position: relative;
	}
</style>
