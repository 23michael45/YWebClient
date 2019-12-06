import https from '@/https/https.js'
import config from '@/components/config.js'

/**
 * 通过token查询当前用户信息
 */
export const searchUsr = (data) => {
	return new Promise((resolve, reject) => {
		https(config.searchUsr, data, 'GET', undefined, undefined).then(res => {
			resolve(res);
		}).catch(err => {
			uni.hideLoading();
			uni.showToast({
				title:'查询失败',
				icon:'none',
				duration:1000
			})
			return;
		})
	})
}

/**
 * 更改当前用户图片信息
 */
export const updateUsr = (data,imgFile) => {
	return new Promise((resolve, reject) => {
		https(config.updateUsr, data, 'POST', 'form', imgFile).then(res => {
			resolve(res);
		}).catch(err => {
			uni.hideLoading();
			uni.showToast({
				title:'修改失败，请稍后重试',
				icon:'none',
				duration:1000
			})
			return;
		})
	})
}

/**
 * 更改当前用户信息
 */
export const updateUsrs = (data) => {
	return new Promise((resolve, reject) => {
		https(config.updateUsr, data, 'POST', undefined, undefined).then(res => {
			resolve(res);
		}).catch(err => {
			uni.showToast({
				title:'修改失败，请稍后重试',
				icon:'none',
				duration:1000
			})
			return;
		})
	})
}