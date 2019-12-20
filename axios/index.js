import axios from '@/js_sdk/luch-request';
import url from './url.js'

// export const login = () => {
// 	return new Promise((resolve, reject) => {

// 		uni.login({
// 			provider: 'weixin',
// 			success(ret) {
// 				axios.post(url.login, {}, {
// 					params: {
// 						coid: 1,
// 						code: ret.code
// 					}
// 				}).then((res) => {
// 					if (res.ret == 0) {
// 						uni.setStorageSync('token', res.info.token)
// 						uni.setStorageSync('userInfo', res.info.uinfo)
// 						resolve(res.info)
// 					}
// 				})
// 			}
// 		})

// 	})
// }

export const upGoodsImg = (filePath,formData) => { //上传商品图片
	return new Promise((resolve, reject) => {

		axios.upload(url.upGoodsImg,{
			filePath: filePath,
			name: 'file',
			formData: formData
		}).then((res) => {
			resolve(res)
		}).catch((err)=>{
			reject(err)
		})

	})
}

export const nuGoodName = (params) => { //创建商品
	return new Promise((resolve, reject) => {

		axios.post(url.nuGoodName, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}

export const searchGoods = (params) => { //查询商品
	return new Promise((resolve, reject) => {

		axios.post(url.searchGoods, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}

export const delGoodsName = (params) => { //删除商品
	return new Promise((resolve, reject) => {

		axios.post(url.delGoodsName, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}


export const delGoodsImg = (params) => { //删除商品
	return new Promise((resolve, reject) => {

		axios.post(url.delGoodsImg, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}

export const sendSms = (params) => { //发送验证码
	return new Promise((resolve, reject) => {

		axios.post(url.sendSms, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}

export const newBkUser = (params) => { //注册用户
	return new Promise((resolve, reject) => {

		axios.post(url.newBkUser, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}

export const login = (params) => { //用户登录
	return new Promise((resolve, reject) => {

		axios.post(url.login, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}

export const updateCo = (filePath,formData) => { //更改店铺信息
	return new Promise((resolve, reject) => {
		if(filePath) {
			axios.upload(url.updateCo,{
				filePath: filePath,
				name: 'file',
				formData: formData
			}).then((res) => {
				resolve(res)
			}).catch((err)=>{
				reject(err)
			})
		} else {
			axios.post(url.updateCo, {}, {
				params: formData
			}).then((res) => {
				resolve(res)
			})
		}

	})
}

export const searchCompany = (params={}) => { //查询店铺信息
	return new Promise((resolve, reject) => {

		axios.post(url.searchCompany, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}

export const updateUsr = (params={}) => { //更新用户信息
	return new Promise((resolve, reject) => {

		axios.post(url.updateUsr, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}
export const upCommImg = (filePath,formData) => { //添加客服
	return new Promise((resolve, reject) => {
		if(filePath) {
			axios.upload(url.upCommImg,{
				filePath: filePath,
				name: 'file',
				formData: formData
			}).then((res) => {
				resolve(res)
			}).catch((err)=>{
				reject(err)
			})
		} else {
			axios.post(url.upCommImg, {}, {
				params: formData
			}).then((res) => {
				resolve(res)
			})
		}
	})
}

export const searchCommImg  = (params={}) => { //查询客服
	return new Promise((resolve, reject) => {

		axios.post(url.searchCommImg, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}

export const delCommImg  = (params={}) => { //删除客服
	return new Promise((resolve, reject) => {

		axios.post(url.delCommImg, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}


export const Activity_Create  = (params={}) => { //创建活动
	return new Promise((resolve, reject) => {
		axios.post(url.Activity_Create, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})
	})
}

export const searchGoodsClass  = (params={}) => { //查询活动
	return new Promise((resolve, reject) => {
		axios.post(url.searchGoodsClass, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}

export const setSts  = (params={}) => { //查询访问
	return new Promise((resolve, reject) => {
		axios.post(url.setSts, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}
export const searchGcImg  = (params={}) => { //查询图片
	return new Promise((resolve, reject) => {
		axios.post(url.searchGcImg, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}
export const searchUsr  = (params={}) => { //查询用户信息
	return new Promise((resolve, reject) => {
		axios.post(url.searchUsr, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}
export const delGcImg  = (params={}) => { //删除图片
	return new Promise((resolve, reject) => {
		axios.post(url.delGcImg, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}
export const upGcImg = (filePath,formData) => { //上传活动图片
	return new Promise((resolve, reject) => {
		if(filePath) {
			axios.upload(url.upGcImg,{
				filePath: filePath,
				name: 'file',
				formData: formData
			}).then((res) => {
				resolve(res)
			}).catch((err)=>{
				reject(err)
			})
		} else {
			axios.post(url.upGcImg, {}, {
				params: formData
			}).then((res) => {
				resolve(res)
			})
		}
	})
}
export const updateGcImgInfo  = (params={}) => { //更新图片信息
	return new Promise((resolve, reject) => {
		axios.post(url.updateGcImgInfo, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}
export const idCardCheck = (filePath,formData) => { //商户负责人实名认证,只上传带姓名的正面
	return new Promise((resolve, reject) => {
		if(filePath) {
			axios.upload(url.idCardCheck,{
				filePath: filePath,
				name: 'file',
				formData: formData
			}).then((res) => {
				resolve(res)
			}).catch((err)=>{
				reject(err)
			})
		} else {
			axios.post(url.idCardCheck, {}, {
				params: formData
			}).then((res) => {
				resolve(res)
			})
		}
	})
}

export const upHelpMsg = (filePath,formData) => { //功能反馈
	return new Promise((resolve, reject) => {
		if(filePath) {
			axios.upload(url.upHelpMsg,{
				filePath: filePath,
				name: 'file',
				formData: formData
			}).then((res) => {
				resolve(res)
			}).catch((err)=>{
				reject(err)
			})
		} else {
			axios.post(url.upHelpMsg, {}, {
				params: formData
			}).then((res) => {
				resolve(res)
			})
		}
	})
}

export const mpEncData  = (params={}) => { //解密商户小程序前端微信加密数据
	return new Promise((resolve, reject) => {
		axios.post(url.getMpEncData, {}, {
			params: params
		}).then((res) => {
			resolve(res)
		})

	})
}