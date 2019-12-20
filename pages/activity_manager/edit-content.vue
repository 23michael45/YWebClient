<template>
	<view class="my-edit">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">活动编辑</block>
		</cu-custom>
		<view class="top" :style="'top:' + CustomBar +'px'">
			<tapBar :tabCur="tabCur" :tabList="tabList" @changeTab="changeTab"></tapBar>
		</view>
		<scroll-view scroll-y class="edit-content">
			<view class="pages" v-if="tabCur == 0">
				<cardBox>
					<view class="pages-content" slot="content">
						<view class="pages-left">
							<view class="pages-text">背景图片</view>
							<view class="pages-img-box">
								<image :src="backdropImg" mode=""></image>
							</view>
						</view>
						<view class="right">
							<button class="cu-btn round line-black">参考</button>
							<button class="cu-btn round bg-black" @tap="uploadBackdropImg">上传</button>
						</view>
					</view>
				</cardBox>
				<cardBox>
					<view class="banner-content" slot="content">
						<view class="banner-left">
							<view class="banner-text">广告图片</view>
							<view class="banner-img-box">
								<image :src="bannerImg" mode=""></image>
							</view>
						</view>
						<view class="right">
							<button class="cu-btn round line-black">参考</button>
							<button class="cu-btn round bg-black" @tap="uploadBannerImg">上传</button>
						</view>
					</view>
				</cardBox>
				<!-- <view class="addr-box">
					<view class="addr-top">店铺跳转地址，默认为店铺主页</view>
					<view class="addr-bottom">
						<view class="bottom-left">链接地址:</view>
						<view class="bottom-right">
							<input type="text"></input>
						</view>
					</view>
				</view> -->
			</view>
			<view class="mode" v-else>
				<cardBox v-for="(item,index) in modeArr" :key="index" :title="true" @del="delMode(index)">
					<view slot="title">
						<text class="title-text">造型 {{index +1 }}</text>
					</view>
					<view class="mode-content" slot="content">
						<view class="content-left">
							<view class="mode-left">
								<view class="mode-text">上传视频</view>
								<view class="mode-img-box">
									<image :src="imgLoad" mode="aspectFill" style="width: 100%;height: 100%;" v-if="imgLoadBol==false"></image>
									<image :src="item.gifUrl" @load="loadImgs" mode="aspectFill" :style="imgLoadBol?imgCss:'display: none'"></image>
								</view>
							</view>
							<view class="right btn-width">
								<button class="cu-btn round line-black" @tap="playVideo(item.videoUrl,index)">播放</button>
								<button class="cu-btn round bg-black" @tap="upload(item,index)">上传</button>
								<view class="">
									<view style="text-align: center;margin-bottom: 10upx;">排序</view>
									<input @focus="pitchOrder(item)" @blur="blurOrder(item)" class="cu-btn round  line-black" type="number"
									 v-model="item.order" maxlength="3" />
								</view>
							</view>
						</view>
						<view class="content-right">
							<view class="mode-name">
								<view class="label">造型名称:</view>
								<view class="input">
									<input @blur="blurParam(item)" type="text" v-model="item.param" placeholder-class="inputPlaceholder"
									 placeholder="如:演模特(5个字以内)" />
								</view>
							</view>
							<view class="mode-tag">
								<view class="label">一句话简介:</view>
								<view class="textarea">
									<textarea @blur="blurParam(item)" v-model="item.param1" style="width:230upx;height:120upx" placeholder-class="inputPlaceholder"
									 placeholder="如:高雅,不要低调,让你多一点魅力" />
									</view>
							</view>
						</view>
					</view>
				</cardBox>
				<!--添加新的造型按钮-->
				<view class="add-model">
					<text class="add text-gray cuIcon-add" @tap="addMode"></text>
				</view>
			</view>
		</scroll-view>
		<view class="btn-box flex flex-direction">
			<button class="cu-btn bg-black lg" @tap="save">保存</button>
		</view>
		<view class="cu-modal" :class="showVideo?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar justify-end text-white">
					<view class="action" @tap="hideVideo">
						<text class="cuIcon-close "></text>
					</view>
				</view>
				<video  id="myVideoIndex" class="video" :class="showVideo?'show':''" :src="playVideoUrl" autoplay  initial-time="0"></video>
			</view>
		</view>
	</view>
</template>

<script>
	import tapBar from '@/components/my-components/top-bar.vue'
	import cardBox from '@/components/my-components/card-box.vue'
	import {compareUp} from '@/utils/utils.js'
	import {
		searchGoodsClass,
		Activity_Create,
		delGcImg,
		upGcImg,
		updateGcImgInfo
	} from '@/axios/index.js'
	import config from '@/components/config.js'
	let that;
	export default {
		components: {
			tapBar,
			cardBox
		},
		data() {
			return {
				showVideo: false,
				gifUrl:'',
				playVideoUrl: '',
				CustomBar: this.CustomBar,
				scrollTop: 0,
				tabCur: 0,
				tabList: ['页面', '造型'],
				modeArr: [],
				activityInfo: {},
				activityId: '',
				bannerImg: '',
				bannerImgId: '',
				backdropImg: '',
				backdropImgId: '',
				videoList: [],
				imgLoad:'https://yjkj-0508.oss-cn-shenzhen.aliyuncs.com/FAC:23dd7b8c7ac24fa387707054382332f2.gif',//图片加载时动画
				imgLoadBol:false,//加载完全时判断
				imgCss:'width: 100%;height: 100%;',//图片样式
				modeArrIndex:0,
				//用于选择素材库上传时返回监听事件获取上传位置的index
				materialIndex:0,
				//用于选择素材库上传时返回监听事件删除之前存在的数据或者上传所需要的参数
				materialItem:'',
				orderTmp:''
			}
		},
		onLoad(options) {
			that =  this
			that.activityId = options.activityId
			that.getActivity();
			//上传图片监听事件
			uni.$on('bannerFn', that.bannerFn)
			uni.$on('backdropFn', that.backdropFn);
			uni.$on('upGif',that.upGif);
			uni.$on('videoMaterial',that.videoMaterial)
			that.VideoContext = uni.createVideoContext('myVideoIndex');
		},
		beforeDestroy: function() {
			console.log('销毁');
			uni.$off('bannerFn');
			uni.$off('backdropFn');
			uni.$off('upGif');
			uni.$off('videoMaterial');
		},
		methods: {
			getActivity: function() {//查询指定活动数据
				searchGoodsClass({
					id: that.activityId,
					type: 2,
					subType:2,
					getDetail: true, 
				}).then((res)=>{
					if(res.ret==0){
					that.activityInfo = res.info.list[0];
					if(that.activityInfo.gcImgList.length) {
						that.videoList = []
						//排序(为什么不设置成一个变量数据是因为GIF需要通过param参数绑定到视频对象中好用于更新操作)
						let gcImgList = res.info.list[0].gcImgList.sort(that.$utils.compare('seqno')); 
						 gcImgList = that.$utils.list_sort(gcImgList) //分组
						let gifList=[];
						for (let i = 0; i < gcImgList.length; i++) {
							var modeArr={
								id: '',
								videoUrl: '',
								param: '',
								param1: '',
								seqno: 1,
								order: 1,
								gifId:0,
								gifUrl:'',
								gifseqno:0,
							};
							gcImgList[i].forEach(function(item) {
								if(item.type == 17) {//视频活动的广告图Banner
									that.bannerImg = item.url
									that.bannerImgId = item.id
								} else if(item.type == 6){//活动轮播图
									that.backdropImg = item.url
									that.backdropImgId = item.id
								} else if (item.type == 4) {//视频
									modeArr.videoUrl = item.url;
									modeArr.param = item.param;
									modeArr.param1 = item.param1;
									modeArr.seqno = item.seqno;
									modeArr.id = item.id;
									modeArr.order = item.order* 1;
								}else if (item.type == 16){//视频裁剪后GIF图
								   var gif={}
									gif.gifId=item.id;
									gif.gifUrl=item.url;
									gif.gifseqno=item.seqno;
									gif.param=item.param;
									gifList.push(gif);
								}
							});
							if(modeArr.id>0){
								that.modeArr.push(modeArr);
							}
						}
						that.gifcompareUp(gifList);
						 // if(that.videoList.length) {
							// that.modeArr = that.videoList.sort(that.$utils.compareUp(that.videoList,'order'));//排序
						 // }
					}
					if(that.modeArr.length==0){
						//没有数据则默认添加一组
						var modeObj = {
							videoUrl: '',
							param: '',
							param1: '',
							seqno: 1,
							id: '',
							order: 1,
							gifId:0,
							gifUrl:'',
							gifseqno:0,
						}
						that.modeArr.push(modeObj);
					}
					}
				})
			},
			gifcompareUp:function(gifList){//GIF在排序一次 通过判断param的参数绑定Video存在的对象数据
				gifList.forEach(i=>{
					that.modeArr.forEach((item,index)=>{
						if(i.param==item.id){
							that.modeArr[index].gifId=i.gifId;
							that.modeArr[index].gifUrl=i.gifUrl;
							that.modeArr[index].gifseqno=i.gifseqno;
						}
					})
				});	
			},
			uploadBackdropImg: function() { //上传活动首屏背景图片
				  // width 宽
				  // height 高
				  // pixelRatio 设备像素比 用于宽高相成得到的就是实际的上传图片大小 
				  // type 回调的上传方法
				  // fileType 上传的图片文件类型
				that.$Router.push({
					name: 'cut',
					params: {
						width: 300,
						height: 580,
						pixelRatio: 2.5,
						type: 'backdropFn'
					}
				});
			},
			uploadBannerImg: function() { //上传广告图片
				  // width 宽
				  // height 高
				  // pixelRatio 设备像素比 用于宽高相成得到的就是实际的上传图片大小 
				  // type 回调的上传方法
				  // fileType 上传的图片文件类型
				that.$Router.push({
					name: 'cut',
					params: {
						width: 300,
						height: 148,
						pixelRatio: 2.5,
						type: 'bannerFn'
					}
				});
			},
			bannerFn: function(item) {//视频活动广告图片上传(裁剪框调用,本页面监听触发)
				that.bannerImg = item[0].src;
				that.upImg(that.bannerImg,{type: 17,seqno: 0,goodClassId:that.activityId},that.bannerImgId,'bannerImgId',undefined,true);
			},
			backdropFn: function(item) {//视频活动首屏背景图片上传(裁剪框调用,本页面监听触发)
				that.backdropImg = item[0].src;
				that.upImg(that.backdropImg,{type: 6,seqno: 0,goodClassId:that.activityId},that.backdropImgId,'backdropImgId',undefined,true);
			},
			changeTab: function(e) {
				that.tabCur = e
			},
			addMode: function() { //添加造型
				var mode = that.modeArr[that.modeArr.length-1]
				if(mode&&!mode.videoUrl) {
					uni.showToast({
						title: `请先完成造型${that.modeArr.length}`,
						duration: 2000,
						icon: 'none'
					});
					return false;
				}
				var modeObj = {
					videoUrl: '',
					param: '',
					param1: '',
					seqno: that.modeArr.length>0?that.modeArr[that.modeArr.length-1].order + 1:1,
					id: '',
					order: that.modeArr.length>0?that.modeArr[that.modeArr.length-1].order + 1:1,
					gifId:0,
					gifUrl:'',
					gifseqno:0,
				}
				that.modeArr.push(modeObj)
			},
			delMode: function(e) { //删除造型
				uni.showModal({
				    title: '提示',
				    content: `确定要删除造型${e+1}吗？`,
				    success: function (res) {
				      if (res.confirm) {//确认
				      	if(that.modeArr[e].gifId){//GIFID
				      		that.delImg(that.modeArr[e].gifId).then(res=>{
								console.log(res)
				      	     if(!res){
							   uni.showToast({
								title:'删除失败，请稍后重试',
								icon:'none',
								duration:1000
							    });
							    return;
				      		}	
				      	});
				      }
				      	if(that.modeArr[e].id){//视频ID
				      		that.delImg(that.modeArr[e].id).then(res=>{
								console.log(res)
				      			if(res){
				      				that.modeArr.splice(e,1);
									uni.showToast({
										title:'删除成功',
										icon:'none',
										duration:1000
									});
				      			}else{
				      				uni.showToast({
				      					title:'删除失败，请稍后重试',
				      					icon:'none',
				      					duration:1000
				      				});
				      				return;
				      			}
				      		});
				      	}else{
							that.modeArr.splice(e,1);
						}					
				      }		
					
				    }
				});
				console.log(e)
			},
			delImg: function(id) { //删除图片
				if(!id) {//判断是否需要删除 不需要直接返回true 不调用接口
					return true;
				}
				return new Promise((resolve,reject)=>{
					delGcImg({id:id}).then((res)=>{
						console.log(res)
						if(res.ret == 0) {
							resolve(true);
						}else {
							return;
						}
					})
				})
			},
			upload: function(item,index) {//选择视频上传
				if(!that.modeArr[index].param) {
					uni.showToast({
						title: '请输入造型名称',
						duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(!that.modeArr[index].param1) {
					uni.showToast({
						title: '请输入简介',
						duration: 2000,
						icon: 'none'
					});
					return false;
				}
				uni.showActionSheet({
				    itemList: ['本地上传', '素材库上传'],
				    success: function (res) {
						that.materialIndex=index;//素材库选择视频返回后上传位置的index
						that.materialItem=item;//用于选择素材库上传时返回监听事件删除之前存在的数据或者上传所需要的参数
						if(res.tapIndex == 1) {
							that.$Router.push({//调用素材库传参
								name: 'imgMaterial',
								params:{
									imgVideoBol:2
								}
							});
						}else {
							uni.chooseVideo({
								count: 1,
								sourceType: ['album'],
								compressed:true,
								success: function (res) {
									that.upImg(res.tempFilePath,{
										goodClassId: that.activityId,
										type: 4,
										seqno: that.modeArr[index].seqno,
										param: that.modeArr[index].param,
										param1: that.modeArr[index].param1,
										order: item.order
									},item.id,item.gifId,index,true);
								},
								fail: (err) => {
									uni.showToast({
										title:'上传失败',
										icon:'none',
										duration:2500
									})
								}
							});
						}
				    },
				    fail: function (res) {
				        console.log(res.errMsg);
				    }
				});
			},
			/**上传GIF 视频
			 * @param {Object} src  图片地址
			 * @param {Object} obj  参数对象 type:类型 seno:序号 goodClassId：活动Id
			 * @param {Object} videoId 删除的视频ID
			 * @param {Object} gifId 删除的GIF图片ID
			 * @param {Object} index 数组下标
			 * @param {Object} urlBol 判断是素材上传地址还是本地上传地址
			 */
			upImg: async function(src,obj,videoId,gifId,index,urlBol) { 
				 if (videoId>0) await that.delImg(videoId);//删除视频再上传
				 if(gifId>0) await that.delImg(gifId);//删除视频对应的GIF再上传
				 uni.showLoading({
				     title: '上传中...'
				 });
				 if(!urlBol){
					 obj.url=src;
					 obj.noFile=1;
				 }
					upGcImg(urlBol?src:null,obj).then(res=>{
						uni.hideLoading();
						let re=''
						if(typeof res=='string'){
							re=JSON.parse(res);
						}else{
							re=res;
						}
						if(re.ret==0){//说明上传成功
						if(index>=0){
							uni.hideLoading();
							that.modeArr[index].id=(urlBol?re.info:re.info.id);
							that.modeArr[index].videoUrl=(urlBol?re.fsList[0].fUrlName:re.info.url);
							that.modeArrIndex=index;
							that.$Router.push({
								name: 'gifCut',
								params: {
									videoUrl: (urlBol?re.fsList[0].fUrlName:re.info.url),
									id: that.activityId,
									token: uni.getStorageSync('token'),
									index: obj.seqno,
									videoId: (urlBol?re.info:re.info.id)
								}
							})
								// that.getActivity();
							}else{
								uni.hideLoading();
								that[index]=(urlBol?re.info:re.info.id);
								console.log(that[index])
								uni.showToast({
									title: '上传成功',
									icon: 'none',
									duration: 2000
								});
							}	
						}else{
							uni.showToast({
								title: '上传失败',
								icon: 'none',
								duration: 2000
							});
						}
					});
			},
			upGif:function(e){//上传后的GIF参数
				that.modeArr[that.modeArrIndex].gifUrl = e.gifInfo.url;
				that.modeArr[that.modeArrIndex].gifId = e.gifInfo.id;
				that.modeArrIndex=0;
				uni.showToast({
					title:'视频上传成功',
					icon:'none'
				})
			},
			blurParam: function(e) { //更新视频param param1信息
				if(e.id && e.videoUrl) {
					let obj={
						id: e.id,
						param: e.param,
						param1: e.param1
					}
					that.updateGcImgInfoServiceImpl(obj);
				}
			},
			blurOrder:function(e){//更新视频排序信息
			let bol=true;
				if(e.id && e.videoUrl) {
					that.modeArr.forEach(item=>{
						if(item.seqno==e.order&&item.order==e.order){
							bol=false;
						}
					})
				}else{
					if(e.order!=that.orderTmp.order){
						uni.showToast({
							title:'还没有视频数据存在,不允许修改排序位置',
							icon:'none',
							duration:1500,
							mask:true
						})
						e.order=that.orderTmp;
						that.orderTmp='';
						return;
					}	
				}
				let obj={
					id: e.id,
					seqno: e.order,
					order: e.order
				}
				if(!bol){
					uni.showToast({
						title:'此序号已存在',
						icon:'none',
						duration:1500,
						mask:true
					});
					e.order=that.orderTmp;
					that.orderTmp='';
					return;
				}else{
					that.updateGcImgInfoServiceImpl(obj);
				}
			},
			pitchOrder:function(item){//输入框聚焦选择
				that.orderTmp=item.order;//中转对象属性 用于判断是否存在重复的排序号用于回退数值
			},
			updateGcImgInfoServiceImpl:function(obj){//9.1 更新分类、活动图片信息
				updateGcImgInfo(obj).then((res)=>{
					uni.hideLoading()
					if(res.ret == 0) {
						that.orderTmp='';
						uni.showToast({
							title:'更新成功',
							icon:'none',
							duration:1500,
							mask:true,
							complete:function(){
								setTimeout(function(){
									// that.getActivity();
								},1500);
							}
						})
					}else if(res.ret==-1){
						uni.showToast({
							title:'数据更新失败',
							icon:'none',
							duration:1500
						});
					}
				});
			},
			save: function() { //保存活动
				uni.showLoading({
				    title: '保存中.'
				});
				Activity_Create({
					id: that.activityInfo.id,
					status: that.activityInfo.status?that.activityInfo.status: 4
				}).then((res)=>{	
					uni.hideLoading();
					if(res.ret == 0) {
						uni.$emit('save')
						uni.showToast({
							title:'保存成功',
							icon:'none',
							position:'top',
							complete:function(){
								setTimeout(function(){
									that.$Router.back(1);
								},1500);
							}
						})
						
					}else if(res.ret==-1){
						uni.showToast({
							title:'保存失败，请稍后重试',
							icon:'none'
						})
						return;
					}
				})
			},
			playVideo: function(url,index) { //播放视频
				if(!url) {
					uni.showToast({
						title: '请先上传视频',
						duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(that.playVideoUrl !=url){
					that.playVideoUrl = url
				}
				that.showVideo = true
				that.VideoContext.play();//播放视频
			},
			hideVideo: function() {
				// that.playVideoUrl = ''
				that.showVideo = false
				that.VideoContext.seek(0); //跳转到视频指定位置 单位s/秒
				that.VideoContext.pause(); //暂停视频
			},
			loadImgs:function(){//视频加载LoadIng事件
				that.imgLoadBol=true;
			},
			videoMaterial:function(){//视频素材监听上传事件
			let videoUrl=uni.getStorageSync('videoUrl');
				that.upImg(videoUrl,{
					goodClassId: that.activityId,
					type: 4,
					seqno: that.modeArr[that.materialIndex].seqno,
					param: that.modeArr[that.materialIndex].param,
					param1: that.modeArr[that.materialIndex].param1,
					order: that.materialItem.order
				},that.materialItem.id,that.materialItem.gifId,that.materialIndex,false);
			}
		},
		
	}
</script>

<style >
	@import url(css/edit-content.css);
</style>
