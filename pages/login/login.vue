<template>
	<view class="login" :style="{height: height + 'px'}">
		<cu-custom class="seat" bgColor="bg-black" :isBack="false"><block slot="backText">返回</block><block slot="content">羽迹试试管理后台</block></cu-custom>
		<image src="../../static/img/login.jpg" mode="aspectFill"></image>
		<!-- <view class="btn-box"  :class="showLG?'animate':''">
			<button class="cu-btn round lines-white lg" @tap="showLogin">账号登录</button>
			<button class="cu-btn round lines-white lg" @tap="toRegiste">账号注册</button>
		</view> -->
		<view class="login-box">
			<view class="login-item margin-top">
				<view class="title cuIcon-people"></view>
				<input placeholder="请输入账号" v-model="ucode" name="input"></input>
			</view>
			<view class="login-item">
				<view class="title cuIcon-lock"></view>
				<input placeholder="请输入密码" v-model="pass" password name="input"></input>
			</view>
			<view class="padding">
				<button @tap="Login" class="login-btn cu-btn bg-black" :disabled="!isTrue" type="">登录</button>
				<button class="login-btn cu-btn bg-black" @tap="toRegiste">注册</button>
				
			</view>
			
			<view class="tip">
				<text>
					忘记密码？
				</text>
			</view>
			<!-- <view class="close" @tap="hideLogin">
				<text class="cuIcon-roundclose"></text>
			</view> -->
		</view>
	</view>
</template>

<script>
	let that;
	import { JSEncrypt } from '@/js_sdk/jsencrypt'
	
	var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDj6PZda698SzzOFEx1ElWe+byydAXoLGlfLR9G" +
				    "79aJ1p/Tb/rHNvhe2MIq9UwBuipFO0M41LQ0Hb/JRNCHucWD2ta3hEIymc+NuEzCGl2gMpG/M4PK" +
				    "PQoVtXzFUeV47d2WqPMap2BhUUr82K/NPuVkzHWF7zxjRFL4mLXPGi6KzQIDAQAB";
			var	crypt = new JSEncrypt();
				crypt.setPublicKey(publicKey);
	import {
		login
	} from '@/axios/index.js'
	export default {
		data() {
			return {
				showLG: false,
				isTrue: false,
				crypt: null,
				ucode: '',
				pass: '',
				height: this.$scrollHeight - this.CustomBar,
				isBack: ''
			}
		},
		onLoad(options) {
			that = this
			that.crypt = crypt
			console.log(options)
			that.isBack = options.isBack
		},
		watch: {
			ucode: function(a) {
				if(a && that.pass) {
					that.isTrue = true
				}else {
					that.isTrue = false
				}
			},
			pass: function(a) {
				if(a && that.ucode) {
					that.isTrue = true
				}else {
					that.isTrue = false
				}
			}
		},
		methods: {
			Login: function() {
				uni.showLoading({
					title: '登录中...'
				});
				login({
					ucode: that.ucode,
					pass: that.crypt.encrypt(that.pass),
					type: 2
				}).then(data=>{
					console.log(data)
					if(data.ret == 0) {
						uni.setStorageSync('token',data.info.token)
						uni.setStorageSync('uInfo',JSON.stringify(data.info.uinfo))
						uni.setStorageSync('againLogin','')
						// if(that.isBack) {
						// 	that.$Router.back(1)
						// } else {
							uni.$off()
							that.$Router.replaceAll({name:'home'})
						// }
					} else {
						uni.showToast({
						    title: '账号或密码错误，请重新登录',
						    duration: 2000,
							mask: true,
							icon: 'none'
						});
					}
				})
			},
			toRegiste: function() {
				that.$Router.push({name: 'registe'})
			},
			showLogin: function() {
				that.showLG = true
			},
			hideLogin: function() {
				that.showLG = false
			}
		}
	}
</script>

<style lang="less">
	@import url("./login.less");
</style>
