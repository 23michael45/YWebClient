<template>
	<view>
		<cu-custom class="seat" bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">查询列表</block>
		</cu-custom>
		<view class="cu-bar bg-white search ">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" placeholder="输入搜索的关键词" confirm-type="search" v-model="seos"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-gradual-green shadow-blur round" @tap="queryActivity">搜索</button>
			</view>
		</view>
		<view class="sections">
			<view class="sectiondd" v-for="item in activityList" :key='item.id' @tap="update(item)">
				<image v-for="i in item.gcImgList" :key='i.id' v-if="i.type==3" :src='i.url' style="width: 100%;height:318upx;"></image>
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
		</view>
	</view>
</template>

<script>
	let that;
	import {
		searchGoodsClass,
		setSts
	} from '@/axios/index.js'
	export default {
		data() {
			return {
				seo: '',
				seos: '',
				activityList: [

				],
				pageInfo: {
					page_cnt: 0,
					which_page: 1,
					page_size: 4,
					page_start: 1,
					page_end: 0,
					total_cnt: 0
				}
			}
		},
		onLoad(obj) {
			that = this;
			that.seo = obj.seo;
			that.seos = obj.seo;
		},
		mounted() {
			uni.showLoading({
				title: '加载中.....'
			})
			that.activityList.splice(0, that.activityList.length);
			that.init(1, 100); //初始化查询数据
		},
		methods: {
			queryActivity() {
				that.activityList.splice(0, that.activityList.length);
				that.seo = that.seos ? that.seos : '';
				that.init(1, 100);
			},
			init: function(which_page, pageSize) { //初始化查询
				searchGoodsClass({
					seo: that.seo,
					getDetail: 1,
					type: 2,
					which_page: which_page,
					pageSize: pageSize
				}).then(res => {
					if (res.ret == -1) {
						uni.showToast({
							title: '查询失败',
							complete: () => {
								uni.hideToast();
							}
						});
					} else if (res.ret == 0) {
						that.pageInfo = res.info.pageInfo;
						let count = 0;
						console.log(res.info.list)
						res.info.list.forEach(item => {
							if (that.activityList.length > 0) {
								that.activityList.forEach(i => {
									if (i.id == item.id) {
										count++;
									}
								})
								if (count == 0) {
									that.activityList.push(item);
								}
							} else {
								that.activityList.push(item);
							}
						});
					}
					uni.hideLoading();
				});
			},
			update: function(item) { //编辑活动  活动对象 
				that.$Router.push({
					name: 'edit-activity',
					params: {
						activityId: item.id,
						dataName: item.status == 1 ? 'activity_one' : item.status == 2 ? 'activity_two' : item.status == 3 ?
							'activity_three' : 'activity_four'
					}
				})
			},
		}
	}
</script>

<style>
	@import url(css/Activity_Manager);
</style>
