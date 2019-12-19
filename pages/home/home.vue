<template>
	<view class="home">
		<view :class="PageCur=='index'?'z-index1':'z-index'">
			<index :footHeight="footHeight"></index>
		</view>
		<view :class="PageCur=='huodong'?'z-index1':'z-index'">
			<ActivityManager  :footHeight="footHeight" ref='OnshowIns'></ActivityManager>
		</view>
		<view :class="PageCur=='store'?'z-index1':'z-index'">
			<store :companyInfo="companyInfo"></store>
		</view>

		<view class="cu-bar tabbar bg-white foot">
			<view class="action" :class="PageCur=='index'?'active':''" @tap="change('index')">
				<view class="cuIcon-cu-image">
					<image  :src="PageCur=='index'?'../../static/tabbar_icon/shouye_cur.png' : '../../static/tabbar_icon/shouye.png'" mode=""></image>
				</view>
				<view>
					首页
				</view>
			</view>
			<view class="action" :class="PageCur=='huodong'?'active':''" @tap="change('huodong')">
				<view class="cuIcon-cu-image">
					<image :src="PageCur=='huodong'?'../../static/tabbar_icon/huodong_cur.png' : '../../static/tabbar_icon/huodong.png'" mode=""></image>
				</view>
				<view>
					活动
				</view>
			</view>
			<view class="action" :class="PageCur=='store'?'active':''" @tap="change('store')">
				<view class="cuIcon-cu-image">
					<image  :src="PageCur=='store'?'../../static/tabbar_icon/wode_cur.png' : '../../static/tabbar_icon/wode.png'" mode=""></image>
				</view>
				<view>
					我的
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	let that;
	import Index from '@/pages/index/index'
	import Store from '@/pages/store/store'
	import ActivityManager from '@/pages/activity_manager/activityManager.vue'
	import {
		searchCompany
	} from '@/axios/index.js'
	export default {
		components: {
			Index,
			Store,
			ActivityManager
		},
		data() {
			return {
				footHeight: '',
				PageCur: 'index',
				companyInfo: {}
			}
		},
		onLoad() {
			
			that = this
			const querys = uni.createSelectorQuery();
			querys.select('.foot').boundingClientRect((res) => {
				if (res) {
					that.footHeight = that.$scrollHeight - that.CustomBar - res.height
				}
			}).exec()
			uni.$on('updateActivity',that.updateActivity);
			that.getCompany()
		},
		beforeDestroy: function() {
			uni.$off('updateActivity');
		},
		methods: {
			change: function(el) {
				that.PageCur = el
			},
			getCompany: function() {
				searchCompany().then(res=>{
					console.log(res)
					if(res.ret == 0) {
						that.companyInfo = res.info.list[0]
					}
				})
			},
			updateActivity:function(e){
				/**
				 * 父组件调用子组件的方法
				 * 页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面（页面显示生命周期）
				 * 给组件赋值ref属性为OnshowIns,就是为组件定义一个名字
				 * 通过this.$refs.refName得到子组件,进而调用子组件的变量和方法
				 * OnshowInit()是子组件的方法
				 */
				that.$refs.OnshowIns.OnshowInit(e);
			}
		}
	}
</script>

<style>
	#home {}

	.my-btn {
		width: 120rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 50rpx;
		font-weight: 600;
		border-radius: 15rpx;
	}

	.tab-color {
		color: #BEBEBE;
	}

	.active {
		color: #FB95AD;
	}

	.z-index {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		background: #F2F2F2
	}
	
	.z-index1 {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 99999;
		background: #F2F2F2
	}
	
</style>
