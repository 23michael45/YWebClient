import Request from './request'
import {
	login
} from '@/axios'
const http = new Request()
// import app from '@/main.js'

http.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = 'https://m.yujishishi.com/fac' /* 根域名不同 */
	return config
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
http.validateStatus = (statusCode) => {
	return statusCode === 200
}

http.interceptor.request((config, cancel) => {
	var token = uni.getStorageSync('token')
	//var token = 'AWMNyAiwJBT_jjOiEVIDKM3SxGRfCgQZK9SzkDlm_I2rNCmJ17iSdYeLSEO3ifUEzd9FAaB5eFKT26d4QPqXKvKeKlA3OoTDhCFr_ia6rZnvWq-MCcWs66A9BD7lrRAszwU1rSKgM478EWtk46mTPZ6RB2Dtiq2uvgVxUG5Z-qw'
	uni.setStorageSync('token',token);
	if(config.method == 'UPLOAD') {
		config.formData.token = token
	}else {
		config.params.token = token
	}
	if(config.url == '/usr/newBkUser' || config.url == '/usr/login') {
		delete config.params.token
	}
	if (config.url != '/fac/wx/wappLogin') {
		http.oldConfig = config
	}
	return config
})

http.interceptor.response((response) => {
	// if (response.data.ret == -6) {
	// 	return new Promise((resolve,reject)=>{
	// 		login().then(() => {
	// 			http.request(http.oldConfig).then((res)=>{
	// 				resolve(res);
	// 			})
	// 		})			
	// 	})
	// } else {
	// 	return response.data
	// }
	if(response.data.ret == -6 && !uni.getStorageSync('againLogin')) {
		uni.setStorageSync('token','')
		uni.setStorageSync('againLogin',true)
		uni.showToast({
		    title: '登录已失效,重新登录',
		    duration: 2000,
			mask: true,
			icon: 'none',
			success() {
				setTimeout(()=>{
					// app.$Router.push({name:'login',params:{isBack:true}})
					uni.navigateTo({
						url: '/pages/login/login'
					})
				},2000)
			}
		});
	}
	return response.data
}, (response) => { // 请求错误做点什么
	return response
})

export default http
