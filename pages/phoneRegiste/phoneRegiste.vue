<template>
	<view class="registe">
		<!-- <cu-custom class="seat" bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">注册</block>
		</cu-custom> -->
		<view class="banner" >
			<view class="back"  :style="style" @tap="toBack">
				<text class="cuIcon-back"></text>
				返回
			</view>
			<image src="../../static/img/banner.jpg" mode="aspectFill" ></image>
			<view class="logo-box">
				<image class="logo" src="../../static/img/logo.png" mode=""></image>
				<text>羽迹试试商家版</text>
			</view>
		</view>
		<view class="login-box">
			<view class="phone input">
				<input type="number" v-model="ucode" placeholder="请输入手机号" placeholder-class="placeholderClass"/>
			</view>
			<view class="code input">
				<input type="number" v-model="code" placeholder="请输入验证码"   placeholder-class="placeholderClass"/>
				<button class='cu-btn round bg-black' type="" :disabled='isDis'  @tap="getCode">{{timerInfo}}</button>
			</view>
			<button class="cu-btn block bg-gray margin-tb-sm lg" @tap="registe">确定</button>
			<text>点击确定，即表示已阅读并同意
				<text class="agreement-text">《服务协议》</text>
			</text>
		</view>
		
		
	</view>
</template>

<script>
	let that;
	import {
		checkPhone,
		random
	} from '@/utils/util.js'
	import {
		sendSms,
		newBkUser,
		login
	} from '@/axios/index.js'
	import { JSEncrypt } from '@/js_sdk/jsencrypt'
	
	var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDj6PZda698SzzOFEx1ElWe+byydAXoLGlfLR9G" +
				    "79aJ1p/Tb/rHNvhe2MIq9UwBuipFO0M41LQ0Hb/JRNCHucWD2ta3hEIymc+NuEzCGl2gMpG/M4PK" +
				    "PQoVtXzFUeV47d2WqPMap2BhUUr82K/NPuVkzHWF7zxjRFL4mLXPGi6KzQIDAQAB";
			var	crypt = new JSEncrypt();
				crypt.setPublicKey(publicKey);
	export default {
		data() {
			return {
				isDis: false,
				count: 59,
				timerInfo: '获取验证码',
				timer: '',
				ucode: '',//手机号码
				
				code: '',//验证码
				sendCode: '968893',
				imgHeight: '',
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			}
		},
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var style = `line-height:${CustomBar - StatusBar}px;height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		onLoad() {
			that = this
			that.pass = 'yujishangjia'
			that.name = '未设置店铺名' //店铺名称名称
		},
		methods: {
			toBack: function() {
				that.$Router.back(1)
			},
			agree: function() {
				that.isAgree = true
			},
			getCode: function() { //获取验证码
				if(!that.ucode) {
					uni.showToast({
					    title: '请输入手机号码',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(!checkPhone(that.ucode)) {
					uni.showToast({
					    title: '手机号码不正确',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				that.isDis = true
				that.sendCode = random(6)
				uni.setStorageSync('token','wx38bc57e857a97b29')
				sendSms({
					"mobile": that.ucode,
					"msgInfo": that.sendCode, 
					"templateId": "SMS_170415493",
				}).then(res=>{
					console.log(res)
					uni.setStorageSync('token','')
					uni.showToast({
					    title: '验证码已发送',
					    duration: 2000,
						icon: 'none'
					});
					that.timer = setInterval(function() {
						if (that.timerInfo == '1s 后获取') {
							clearInterval(that.timer);
							that.isDis = false
							that.timerInfo = '获取验证码'
							that.count = 59
						} else {
							that.timerInfo = (that.count--) + 's 后获取'
							
						}
					}, 1000);
				})
			},
			registe: function() { //确定
				if(!that.validate()) {
					return false;
				}
				that.toLogin().then(res=>{
					that.newUser()
				})
			},
			toLogin: function() {
				return new Promise((resolve,reject)=>{
					login({
						ucode: that.ucode,
						pass: crypt.encrypt(that.pass),
						type: 2
					}).then(data=>{
						console.log(data)
						if(data.ret == 0) {
							uni.$off()
							uni.setStorageSync('token',data.info.token)
							uni.setStorageSync('uInfo',JSON.stringify(data.info.uinfo))
							that.$Router.replaceAll({name:'home'})
						}
						if(data.ret == -1) {
							resolve()
						}
					})
					
				})
			},
			newUser: function() { //创建新用户
				newBkUser({
					ustr: JSON.stringify({
						ucode: that.ucode,
						type: 2,
						pass: crypt.encrypt(that.pass),
						name:  that.name,
						co: {
							name: that.name
						}
					})
					
				}).then(res=>{
					console.log(res)
					if(res.ret == 0) {
						that.toLogin()
					}
				})
			},
			validate: function() {
				if(!that.ucode) {
					uni.showToast({
					    title: '请输入手机号',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				
				if(!that.code) {
					uni.showToast({
					    title: '请输入验证码',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				
				if(that.code != that.sendCode) {
					uni.showToast({
					    title: '验证码不正确',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				
				return true
			}
		}
	}
</script>

<style lang="less">
	@import url("./phoneRegiste.less");
</style>
