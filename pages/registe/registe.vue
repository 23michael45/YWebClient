<template>
	<view class="registe">
		<cu-custom class="seat" bgColor="bg-white" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">注册</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">
					账号：
				</view>
				<input  placeholder="输入账号(店铺名称)" placeholder-class="placeholder" v-model="ucode" name="ucode"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					密码：
				</view>
				<input placeholder="输入密码" placeholder-class="placeholder" password v-model="pass" name="pass"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					确认密码：
				</view>
				<input placeholder="再次输入密码" placeholder-class="placeholder" password v-model="againPass" name="againPass"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					公司名称：
				</view>
				<input placeholder="输入公司名称" placeholder-class="placeholder" v-model="name" name="name"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					公司执照编码：
				</view>
				<input placeholder="输入公司执照编码" placeholder-class="placeholder" v-model="registerCode" name="registerCode"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					公司法人：
				</view>
				<input placeholder="输入公司法人" placeholder-class="placeholder" v-model="charger" name="charger"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					公司地址：
				</view>
				<input placeholder="输入公司地址" placeholder-class="placeholder" v-model="addr" name="addr"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					手机号码：
				</view>
				<input placeholder="输入手机号码" placeholder-class="placeholder" maxlength="11"  type="number" v-model="tel" name="tel"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					验证码：
				</view>
				<input placeholder="输入验证码" placeholder-class="placeholder" type="number" maxlength="6" v-model="code" name="code" ></input>
				<button class='cu-btn bg-green shadow' type="" :disabled='isDis' @tap="getCode">{{timerInfo}}</button>
			</view>
			<view class="agreement">
				<text class="round" :class="isAgree?'cuIcon-roundcheck':'cuIcon-round'" @tap="agree">
					<text>阅读并同意以下协议</text>
				</text>
				<text class="agreement-text">《服务协议》</text>
			</view>
			<view class="registe-btn">
				<button @tap="registe" class="cu-btn block bg-blue margin-tb-sm lg"  :class="isAgree?'':'opt'">注册</button>
			</view>
		</form>
		
		
		
	</view>
</template>

<script>
	let that;
	import topBar from '@/components/top-bar.vue'
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
		components: {
			topBar
		},
		data() {
			return {
				isDis: false,
				count: 59,
				timerInfo: '验证码',
				timer: '',
				isAgree: false,
				ucode: '',//账号
				pass: '',//密码
				againPass: '',//确认密码
				name: '',//公司名称
				registerCode: '',//公司执照编码
				charger: '',//公司法人
				addr: '',//公司地址
				tel: '',//电话
				code: '123456',//验证码
				sendCode: '123456'
			}
		},
		onLoad() {
			that = this
		},
		/**
		 * 12.17日  TODO 修改注册页面为手机登录且co对象中name--商品名是必须的
		 */
		methods: {
			agree: function() {
				that.isAgree = true
			},
			getCode: function() { //获取验证码
				if(!that.tel) {
					uni.showToast({
					    title: '请输入手机号码',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(!checkPhone(that.tel)) {
					uni.showToast({
					    title: '手机号码不正确',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				that.isDis = true
				that.sendCode = random(6)
				
				sendSms({
					"mobile": that.tel,
					"msgInfo": that.sendCode, 
					"templateId": "SMS_170415493"
				}).then(res=>{
					console.log(res)
					uni.showToast({
					    title: '验证码已发送',
					    duration: 2000
					});
					that.timer = setInterval(function() {
						if (that.timerInfo == '1s') {
							clearInterval(that.timer);
							that.isDis = false
							that.timerInfo = '重新获取'
							that.count = 59
						} else {
							that.timerInfo = (that.count--) + 's'
							
						}
					}, 1000);
				})
			},
			registe: function() { //注册
				if(!that.validate()) {
					return false;
				}
				if(!that.isAgree) {
					uni.showToast({
					    title: '请先阅读服务协议并同意',
					    duration: 3000,
						icon: 'none'
					});
					return false;
				}
				newBkUser({
					ustr: JSON.stringify({
						ucode: that.ucode,
						type: 2,
						pass: crypt.encrypt(that.pass),
						name:  that.ucode,
						co: {
							name: that.name,
							charger: that.charger,
							tel: that.tel,
							addr: that.addr,
							registerCode: that.registerCode,
							regionId: 1,
						}
					})
					
				}).then(res=>{
					console.log(res)
					if(res.ret == 0) {
						uni.showToast({
						    title: '注册成功',
						    duration: 2000,
							icon: 'none',
							mask: true,
							success:()=> {
								setTimeout(()=>{
									login({
										ucode: that.ucode,
										pass: crypt.encrypt(that.pass),
										type: 2
									}).then(data=>{
										console.log(data)
										if(data.ret == 0) {
											uni.setStorageSync('token',data.info.token)
											uni.setStorageSync('uInfo',JSON.stringify(data.info.uinfo))
											that.$Router.replaceAll({name:'home'})
										} else {
											that.$Router.back(1)
										}
									})
								},2000)
							}
						});
						
					}
					if(res.ret == -1 && res.Msg == 'USR_EXIST_ERR') {
						uni.showToast({
						    title: '已存在该账号',
						    duration: 2000,
							icon: 'none'
						});
					}
				})
			},
			validate: function() {
				if(!that.ucode) {
					uni.showToast({
					    title: '请输入账号',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(!that.pass) {
					uni.showToast({
					    title: '请输入密码',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(!that.againPass) {
					uni.showToast({
					    title: '请再次输入密码',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(that.pass != that.againPass) {
					uni.showToast({
					    title: '两次密码不一致',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(!that.name) {
					uni.showToast({
					    title: '请输入公司名称',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(!that.registerCode) {
					uni.showToast({
					    title: '请输入公司执照编码',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(!that.charger) {
					uni.showToast({
					    title: '请输入公司法人',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(!that.addr) {
					uni.showToast({
					    title: '请输入公司地址',
					    duration: 2000,
						icon: 'none'
					});
					return false;
				}
				if(!that.tel) {
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
	@import url("./registe.less");
</style>
