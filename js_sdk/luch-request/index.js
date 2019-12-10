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
<<<<<<< HEAD
=======
	// var token = 'PhKNuMx07vfpCztMT2rlPGRlvro9H57xQy9iwjY7KAOsbt-fqLyCYwLIN-hL_MTHns0NugeXQEOUEIfwvSRkZrZduXAkcFcF1_IbOkE12cnBV0uWgKmZHgWfwGrGbuWyZsuenQeqH6O_tdN8evimxfYBMYCGwf1NwHZFr-GxjrY'
	// uni.setStorageSync('token',token);
>>>>>>> 9d403b10a88b4ec620fa945867468f948db3c857
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
