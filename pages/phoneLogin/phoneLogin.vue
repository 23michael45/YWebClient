<template>
	<view class="login" :style="{height: height + 'px'}">
		<!-- <cu-custom class="seat" bgColor="bg-black" :isBack="false">
			<block slot="backText">返回</block>
			<block slot="content">羽迹试试商家版</block>
		</cu-custom> -->
		<image src="../../static/img/login.jpg" mode="aspectFill"></image>
		<view class="logo-box">
			<image src="../../static/img/logo.png" mode=""></image>
			<text>羽迹试试商家版</text>
		</view>
		<view class="padding flex flex-direction btn-box">
			<button class="cu-btn  bg-green  wx-login" @getphonenumber="getPhone" open-type="getPhoneNumber">微信一键登录</button>
			<button class="cu-btn  phone-logon" @tap="toPhoneRegiste">手机号验证码登录</button>
		</view>
	</view>
</template>

<script>
	let that;
	import {
		mpEncData,
		login,
		newBkUser,
	} from '@/axios/index.js'
	import {
		JSEncrypt
	} from '@/js_sdk/jsencrypt'

	var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDj6PZda698SzzOFEx1ElWe+byydAXoLGlfLR9G" +
		"79aJ1p/Tb/rHNvhe2MIq9UwBuipFO0M41LQ0Hb/JRNCHucWD2ta3hEIymc+NuEzCGl2gMpG/M4PK" +
		"PQoVtXzFUeV47d2WqPMap2BhUUr82K/NPuVkzHWF7zxjRFL4mLXPGi6KzQIDAQAB";
	var crypt = new JSEncrypt();
	crypt.setPublicKey(publicKey);
	export default {
		data() {
			return {
				height: this.$scrollHeight,
				code: '',
				phone: ''
			}
		},
		onLoad() {
			that = this
			that.pass = 'yujishangjia'
			that.name = '未设置店铺名', //店铺名称名称
				wx.login({
					success(res) {
						if (res.code) {
							that.code = res.code
						}
					}
				})
		},
		methods: {
			getPhone: function(e) { //获取加密信息
				that.getMpEncData(e.detail.encryptedData, e.detail.iv)
			},
			toPhoneRegiste: function() {
				that.$Router.push({
					name: 'phoneRegiste'
				})
			},
			getMpEncData: function(encData, iv) { //获取手机号
				mpEncData({
					code: that.code,
					encData: encData,
					iv: iv
				}).then(res => {
					console.log(res)
					if (res.ret == 0) {
						var info = JSON.parse(res.info)
						that.phone = info.phoneNumber
						console.log(that.phone)
						that.Login().then(res => {
							that.newUser()
						})
					}
				})
			},
			Login: function() { //登录
				return new Promise((resolve, reject) => {
					login({
						ucode: that.phone,
						pass: crypt.encrypt(that.pass),
						type: 2
					}).then(data => {
						console.log(data)
						if (data.ret == 0) {
							uni.$off()
							uni.setStorageSync('token', data.info.token)
							uni.setStorageSync('uInfo', JSON.stringify(data.info.uinfo))
							that.$Router.replaceAll({
								name: 'home'
							})
						}
						if (data.ret == -1) {
							resolve()
						}
					})

				})
			},
			newUser: function() { //创建新用户
				newBkUser({
					ustr: JSON.stringify({
						ucode: that.phone,
						type: 2,
						pass: crypt.encrypt(that.pass),
						name: that.name,
						co: {
							name: that.name
						}
					})

				}).then(res => {
					console.log(res)
					if (res.ret == 0) {
						that.Login()
					}
				})
			},
		}
	}
</script>

<style lang="less">
	@import url('./phoneLogin.less');
</style>
