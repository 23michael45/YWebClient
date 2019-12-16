<template>
	<view>
	<cu-custom class="seat" bgColor="bg-white" :isBack="true">
		<block slot="backText">返回</block>
		<block slot="content">平面活动预览</block>
	</cu-custom>
		<view class="pre-content">
			<view class="pre-back">
				<text class="my-back text-gray cuIcon-back" @tap="back" v-if="num != 0"></text>
				<view style="width: 60upx" v-else></view>
				<view class="my-title">{{title}}</view>
				<view style="width: 60upx"></view>
			</view>
			<view class="pre-switch">
				<previewOne :logoImg="logoImg" :activityName="activityName" :bgcImg="bgcImg" :class="[num == 0?'show':'hide']"
				 @chengeTap='chengeTap'></previewOne>
				<previewTwo :backdropImg="backdropImg" :class="[num == 1?'show':'hide']" @chengeTap='chengeTap'></previewTwo>
				<previewThree :backdropImg1="backdropImg1"  :class="[num == 2?'show':'hide']" @chengeTap='chengeTap'></previewThree>
				<previewFour :backdropImg2="backdropImg2"  :class="[num == 3?'show':'hide']"  @chengeTap='chengeTap'></previewFour>
				<previewFive :backdropImg3="backdropImg3"  :class="[num == 4?'show':'hide']"  @chengeTap='chengeTap'></previewFive>
			</view>
		</view>
		<view style="position: fixed;left: 0; bottom: 0; width: 100%;">
			<view class="cu-bar bg-white solid-bottom" >
				<view class="action">
					<text class="cuIcon-title text-orange"></text> 活动预览
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow sm" @tap="NumSteps">{{num == numList.length-1?'首页':'下一页'}}</button>
				</view>
			</view>
			<view class="bg-white padding-bottom">
				<view class="cu-steps">
					<view class="cu-item" :class="index>num?'':'text-blue'" v-for="(item,index) in numList" :key="index">
						<text @tap="chengeTap({index})" class="num" :data-index="index + 1"></text> {{item.name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import previewOne from '@/components/my-components/img_preview/preview_01.vue'
	import previewTwo from '@/components/my-components/img_preview/preview-02.vue'
	import previewThree from '@/components/my-components/img_preview/preview-03.vue'
	import previewFour from '@/components/my-components/img_preview/preview-04.vue'
	import previewFive from '@/components/my-components/img_preview/preview-05.vue'
	import {
		searchGoodsClass
	} from '@/axios/index.js'
	let that;
	export default {
		components: {
			previewOne,
			previewTwo,
			previewThree,
			previewFour,
			previewFive
		},
		data() {
			return {
				numList: [{
					name: '活动封面'
				}, {
					name: '活动首页'
				}, {
					name: '上传照片'
				}, {
					name: '选择造型'
				}, {
					name: '更多惊喜'
				}],
				num: 0,
				title: '活动封面',
				activityId: '', //活动id
				activityName: '', // 活动名称
				bgcImg: '', //封面图片
				logoImg: '', // logo图片
				backdropImg: '', //活动首屏图片
				backdropImg1: '', //活动第二张图片
				backdropImg2: '', //活动第三张图片
				backdropImg3: '', //活动第四张图片
				thumbnail_list: [], //视频列表,
				videoUrl: '', //视频地址
			}
		},
		onLoad(options) {
			that = this
			that.activityId = options.activityId
			// that.activityId = 9
			that.getActivity()
		},
		//深度监听
		watch: {
			num: function(e) {
				that.title = that.numList[e].name
			}
		},
		methods: {
			NumSteps: function() {
				that.num = that.num == that.numList.length - 1 ? 0 : that.num + 1
			},
			back: function() {
				that.num = that.num - 1
			},
			//改变页面标题
			chengeTap: function(e) {
				console.log(e)
				that.num = e.index
				if (e.videoUrl) {
					that.videoUrl = e.videoUrl
				}
			},
			getActivity: function() { //活动查询
				searchGoodsClass({id:that.activityId,getDetail:true}).then(res => {
					console.log(res)
					that.activityInfo = res.info.list[0]
					that.activityName = that.activityInfo.name
					if (that.activityInfo.gcImgList.length) {
						that.videoList = []
						that.activityInfo.gcImgList.forEach((item, index) => {
							if (item.type == 8) {
								that.logoImg = item.url
							} else if (item.type == 3) {
								that.bgcImg = item.url
							} else if (item.type == 6 && item.seqno == 0) {
								that.backdropImg = item.url
							} else if (item.type == 6 && item.seqno == 1) {
								that.backdropImg1 = item.url
							} else if (item.type == 6 && item.seqno == 2) {
								that.backdropImg2 = item.url
							} else if (item.type == 7 && item.seqno == 3) {
								that.backdropImg3 = item.url
							} else if (item.type == 9) { //缩略图
								that.thumbnail_list.push(item);
							}
						})
					}
				})
			},
		}
	}
</script>

<style>
	@import url(img_preview.css);
</style>
