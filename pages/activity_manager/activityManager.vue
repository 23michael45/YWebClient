<template>
	<view>

		<cu-custom class="seat" bgColor="bg-white" :isBack="false">
			<block slot="backText">返回</block>
			<block slot="content">活动</block>
		</cu-custom>
		<view class="content">
			<view class="top" :style="{top: CustomBar + 'px'}">
				<view class="cu-bar search bg-white">
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input :adjust-position="false" type="text" placeholder="搜索活动" confirm-type="search" v-model="seos"></input>
					</view>
					<view class="action" >
						<button class="cu-btn bg-green shadow-blur round" @tap="query_seo">搜索</button>
					</view>
				</view>
				<view class="bg-white nav text-center">
					<view class="cu-item" :class="index==swiperCurrentIndex?'choiceIndex cur':''" v-for="(item,index) in list" :key="index"
					 @tap="tabSelect(index)">
						{{item}}
					</view>
					<view class="cu-item creates" @tap="create">创建活动</view>
				</view>
			</view>
			<swiper class="swiper" :style="'height:'+ scrollHeight + 'px;margin-top:' +  topHeight + 'px'" @change='swiperChoice' :current="swiperCurrentIndex">
				<swiper-item>
					<scroll-view class="" :style="'height:'+ scrollHeight + 'px;'" @scrolltolower='scrollChoiceOne'>
						<view class="sectiondd" v-for="(item,index) in activity_one"  :key='item.id' @tap="update(item.id,'activity_one',index)">
							<view class="mode">
								<image :src="item.subType==1?'/static/img/01.png':'/static/img/02.png'" mode=""></image>
							</view>
							<image v-for="i in item.gcImgList" :key='i.id' v-if="i.type==3" :src='i.url' style="width: 750upx; height:315upx;" mode="aspectFill"></image>
							<view class="section_header">
								<h3>名称:{{item.name}}</h3>
								<h3>访问:{{item.activity_upCnt?item.activity_upCnt:0}}</h3>
								<h3>进店:{{item.shop_upCnt?item.shop_upCnt:0}}</h3>
								<h3 class='update' style='visibility:hidden'>收藏:{{}}</h3>
							</view>
							<view class="section_footer">
								<h3>转发:{{}}</h3>
								<h3>点赞:{{item.upCnt}}</h3>
								<h3>收藏:{{}}</h3>
								<h3 class='update'>编辑</h3>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view class="" :style="'height:'+ scrollHeight + 'px;'" @scrolltolower='scrollChoiceTwo'>
						<view class="sectiondd" v-for="(item,index) in activity_two" :key='item.id' @tap="update(item.id,'activity_two',index)">
							<view class="mode">
								<image :src="item.subType==1?'/static/img/01.png':'/static/img/02.png'" mode=""></image>
							</view>
							<image v-for="i in item.gcImgList" :key='i.id' v-if="i.type==3" :src='i.url' style="width: 750upx;height:315upx;"></image>
							<view class="section_header">
								<h3>名称:{{item.name}}</h3>
								<h3>访问:{{item.activity_upCnt?item.activity_upCnt:0}}</h3>
								<h3>进店:{{item.shop_upCnt?item.shop_upCnt:0}}</h3>
								<h3 class='update' style='visibility:hidden'>收藏:{{}}</h3>
							</view>
							<view class="section_footer">
								<h3>转发:{{}}</h3>
								<h3>点赞:{{item.upCnt}}</h3>
								<h3>收藏:{{}}</h3>
								<h3 class='update' @tap="update(item.id)">编辑</h3>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view :style="'height:'+ scrollHeight + 'px;'" @scrolltolower='scrollChoiceThree'>
						<view class="sectiondd" v-for="(item,index) in activity_three" :key='item.id' @tap="update(item.id,'activity_three',index)">
							<view class="mode">
								<image :src="item.subType==1?'/static/img/01.png':'/static/img/02.png'" mode=""></image>
							</view>
							<image v-for="i in item.gcImgList" :key='i.id' v-if="i.type==3" :src='i.url' style="width: 750upx;height:315upx;"></image>
							<view class="section_header">
								<h3>名称:{{item.name}}</h3>
								<h3>访问:{{item.activity_upCnt?item.activity_upCnt:0}}</h3>
								<h3>进店:{{item.shop_upCnt?item.shop_upCnt:0}}</h3>
								<h3 class='update' style='visibility:hidden'>收藏:{{}}</h3>
							</view>
							<view class="section_footer">
								<h3>转发:{{}}</h3>
								<h3>点赞:{{item.upCnt}}</h3>
								<h3>收藏:{{}}</h3>
								<h3 class='update'>编辑</h3>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y class="" :style="'height:'+ scrollHeight + 'px;'" @scrolltolower='scrollChoiceFour'>
						<view class="sectiondd" v-for="(item,index) in activity_four"  :key='item.id' @tap="update(item.id,'activity_four',index)">
							<view class="mode">
								<image :src="item.subType==1?'/static/img/01.png':'/static/img/02.png'" mode=""></image>
							</view>
							<image v-for="i in item.gcImgList" :key='i.id' v-if="i.type==3" :src='i.url' style="width: 750upx; height:315upx;" mode="aspectFill"></image>
							<view class="section_header">
								<h3>名称:{{item.name}}</h3>
								<h3>访问:{{item.activity_upCnt?item.activity_upCnt:0}}</h3>
								<h3>进店:{{item.shop_upCnt?item.shop_upCnt:0}}</h3>
								<h3 class='update' style='visibility:hidden'>收藏:{{}}</h3>
							</view>
							<view class="section_footer">
								<h3>转发:{{}}</h3>
								<h3>点赞:{{item.upCnt}}</h3>
								<h3>收藏:{{}}</h3>
								<h3 class='update'>编辑</h3>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	let that;
	import config from '@/components/config.js'
	import {
		searchGoodsClass,
		setSts
	} from '@/axios/index.js'
	export default {
		props: {
			footHeight: {
				type: Number
			}
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				scrollHeight: '',
				topHeight: '',
				list: ['运营中', '审核中', '可发布', '编辑中'],
				activity_one: [],
				activity_two: [],
				activity_three: [],
				activity_four: [],
				//默认状态
				status: 1,
				query_status: true,
				search_box: false,
				//模糊查询字段
				seos: '',
				seo: '',
				swiperCurrentIndex: 0,
				Onepage_end: 0, //页码
				Onewhich_page: 1, //数量,
				Twopage_end: 0, //页码
				Twowhich_page: 1, //数量,
				Threepage_end: 0, //页码
				Threewhich_page: 1, //数量,
				Fourpage_end: 0, //页码
				Fourwhich_page: 1, //数量,
				loadOne: false,
				loadTwo: false,
				loadThree: false,
				loadFour: false,

			}
		},
		mounted() {
			that = this
			const query = uni.createSelectorQuery().in(that);
			query.select('.top').boundingClientRect((r) => {
				that.topHeight = r.height
				that.scrollHeight = that.footHeight - r.height - 10
			}).exec()
			that.init(1, 10, 1, 'activity_one');
			that.init(1, 10, 2, 'activity_two');
			that.init(1, 10, 3, 'activity_three');
			that.init(1, 10, 4, 'activity_four');
		},
		methods: {
			scrollChoiceOne: function() { //上线活动拉取底部查询
				if (that.loadOne) {
					return;
				}
				if (this.Onewhich_page < this.Onepage_end) { //判断是否大于当前页码
					this.Onewhich_page = this.Onewhich_page + 1
					this.init(this.Onewhich_page, 10, 1, 'activity_one');
				} else {
					uni.showToast({
						title: '已经是最后一个活动',
						mask: true,
						duration: 1500,
						icon: 'none'
					});
					this.loadOne = true;
				}
			},
			scrollChoiceTwo: function() { //审核中活动拉取底部查询
				if (that.loadTwo) {
					return;
				}
				if (this.Twowhich_page < this.Twopage_end) { //判断是否大于当前页码
					this.Twowhich_page = this.Twowhich_page + 1
					this.init(this.Twowhich_page, 10, 2, 'activity_two');
				} else {
					uni.showToast({
						title: '已经是最后一个活动',
						mask: true,
						duration: 1500,
						icon: 'none'
					});
					this.loadTwo = true;
				}
			},
			scrollChoiceThree: function() { //可发布活动拉取底部查询
				if (that.loadThree) {
					return;
				}
				if (this.Threewhich_page < this.Threepage_end) { //判断是否大于当前页码
					this.Threewhich_page = this.Threewhich_page + 1
					this.init(this.Threewhich_page, 10, 3, 'activity_three');
				} else {
					uni.showToast({
						title: '已经是最后一个活动',
						mask: true,
						duration: 1500,
						icon: 'none'
					});
					this.loadThree = true;
				}
			},
			scrollChoiceFour: function() { //编辑中活动拉取底部查询
				if (that.loadFour) {
					return;
				}
				if (this.Fourwhich_page < this.Fourpage_end) { //判断是否大于当前页码
					this.Fourwhich_page = this.Fourwhich_page + 1
					this.init(this.Fourwhich_page, 10, 4, 'activity_four');
				} else {
					uni.showToast({
						title: '已经是最后一个活动',
						mask: true,
						duration: 1500,
						icon: 'none'
					});
					this.loadFour = true;
				}
			},
			update: function(id, dataName, index) { //编辑活动  活动ID 参数名  活动在数组下的下标
				that.$Router.push({
					name: 'edit-activity',
					params: {
						activityId: id,
						dataName: dataName,
						index: index
					}
				})
			},
			OnshowInit: function(e) { //修改属性值
				if (e.dataName) {
					if(e.index){//判断index是否存在
					console.log('存在下标')
						that[e.dataName].splice(e.index, 1);//存在可以直接删除
					}else{//不存在则自行搜索删除
					console.log('不存在下标')
						that[e.dataName].forEach((item,index)=>{
							if(item.id==e.id){//等于 则剔除
								that[e.dataName].splice(index, 1);//存在可以直接删除
							}
						});
					}
				}
				searchGoodsClass({
					getDetail: true,
					id: e.id
				}).then(res => {
					if (res.ret == 0) {
						if (res.info.list[0].status == 1) {
							that.activity_one.unshift(res.info.list[0]);
						} else if (res.info.list[0].status == 2) {
							that.activity_two.unshift(res.info.list[0]);
						} else if (res.info.list[0].status == 3) {
							that.activity_three.unshift(res.info.list[0]);
						} else if (res.info.list[0].status == 4) {
							that.activity_four.unshift(res.info.list[0]);
						}

					}

				});
			},
			/**
			 * 活动内容初始化查询 
			 * @param {Object} which_page  第几页
			 * @param {Object} page_size   每页数量
			 */
			init: function(which_page, page_size, status, status_name) {
				searchGoodsClass({
					getDetail: true,
					type: 2,
					which_page: which_page,
					pageSize: page_size,
					status: status,
					seo: that.seo
				}).then(async res => {
					if (res.ret == 0) {
						if (status == 1) {
							that.Onepage_end = res.info.pageInfo.page_end;
							that.Onewhich_page = res.info.pageInfo.which_page;
						} else if (status == 2) {
							that.Twopage_end = res.info.pageInfo.page_end;
							that.Twowhich_page = res.info.pageInfo.which_page;
						} else if (status == 3) {
							that.Threepage_end = res.info.pageInfo.page_end;
							that.Threewhich_page = res.info.pageInfo.which_page;
						} else if (status == 4) {
							that.Fourpage_end = res.info.pageInfo.page_end;
							that.Fourwhich_page = res.info.pageInfo.which_page;
						}
						await that.sortList(res.info.list, status_name);//插入
					}
				});
			},
			sortList: function(list, status_name) { //图片数据分组
				return new Promise((resolve, reject) => {
					for (let i = 0; i < list.length; i++) {
						that[status_name].push(list[i]);
					}
					resolve();
				});
			},
			/**
			 * @param {Object} status_name
			 * TODO 让后台修改 直接返回相应数量
			 */
			//查询活动点击量、商铺点击量
			querySts: function(status_name) {
				/* let list = that[status_name].gcImgList;
				return new Promise((resolve, reject) => {
					list.forEach((item, index) => {
						console.log(status_name);
					})
					resolve();
				});
				for (let b = 0; b < list.length; b++) {
					let par = {};
					par.rid = list[b].id; //活动id
					par.mask = 0;
					// for (let i = 1; i <= 2; i++) {
					// 	par.type = i;
					// 	setSts(par).then(res => {
					// 		if (i == 1) {
					// 			res.info > 0 ? that[status_name].gcImgList[b].activity_upCnt = res.info : that[
					// 				status_name].gcImgList[b].activity_upCnt = 0
					// 		} else {
					// 			//活动点击量
					// 			res.info > 0 ? that[status_name].gcImgList[b].shop_upCnt = res.info : that[
					// 				status_name].gcImgList[b].shop_upCnt = 0
					// 		}
					// 	});
					// }
				} */
			},
			create: function() { //创建活动按钮
				that.$Router.push({
					name: 'create-activity'
				})
			},
			tabSelect: function(index) { //标签栏选择切换
				that.swiperCurrentIndex = index
			},
			swiperChoice: function(e) { //滑块切换
				that.swiperCurrentIndex = e.detail.current;
			},
			query_seo: function() { //搜索框模糊查询
				//跳转查询列表页面 带上模糊查询的值
				if (that.seos) {
					that.$Router.push({
						name: 'activityQuery',
						params: {
							seo: that.seos
						}
					})
				} else {
					uni.showToast({
						title: '请输入需要搜索的值',
						icon: 'none',
						position: 'top'
					})
				}


			},
			activityInit: function() { //初始化参数
				return new Promise((resolve, reject) => {
					that.status = 1;
					that.swiperCurrentIndex = 0;
					that.seo = '';
					that.activity_one = []
					that.activity_two = []
					that.activity_three = []
					that.activity_four = []
					that.swiperCurrentIndex = 0
					that.Onepage_end = 0 //页码
					that.Onewhich_page = 1 //数量 
					that.Twopage_end = 0 //页码
					that.Twowhich_page = 1 //数量 
					that.Threepage_end = 0 //页码
					that.Threewhich_page = 1 //数量 
					that.Fourpage_end = 0 //页码
					that.Fourwhich_page = 1 //数量 
					that.loadOne = false
					that.loadTwo = false
					that.loadThree = false
					that.loadFour = false
					resolve();
				})
			}
		}
	}
</script>
<style scoped>
	@import url(css/Activity_Manager);

	uni-page-body {
		height: 100%;
	}

	uni-page-body>view:nth-of-type(1) {
		height: 100%;
		position: relative;
	}
</style>
