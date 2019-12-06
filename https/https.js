const Api_url = 'https://m.yujishishi.com'
import config from '@/components/config.js'

export default function fetch(url, datasss, method_type, data_type, img_file) {
	let headers = {
		'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
	}
	uni.setStorageSync('token',
		'Lo6oEIcqKNNOvgZq7THg2yeVVa2GwuTwCsRxgi1T0C5roP6urqK05bCM97cDvmtKpO5XWjuHdAeSBzEWy8rSJrU_e63j2nrcTQjHYy-eIRslKtngvuBmogYxTC5u5xs8w--vHZLtxZO6PasSHI1cZkQKdneGMr5P8Wms22BAtiw'
	); //店铺用户
	//uni.setStorageSync('token','jYgnhAR0g633L1vra28esl-eZvGxGfp6KvlXDpeYAKA9Z2PHT0atpYb-o0k_kKLK0kRYuJqfXAw26fcOKSo4sl9y4htF1y8wnvuQ5dvlenrdmhfbgPxobzxSCiiXbZVlUMyACEe7FaQ3F6YuKlFcxTndVc5I7k1cza9LKlS9NYc');//管理员用户
	datasss.token = uni.getStorageSync('token');
	switch (method_type.toLowerCase()) {
		case 'post':
			if (data_type == "form") {
				headers = {
					'content-type': 'multipart/form-data'
				}
				return new Promise((resolve, reject) => {
					uni.uploadFile({
						url: Api_url + url,
						filePath: img_file,
						name: 'file',
						formData: datasss,
						success: (res) => {
							// console.log(res);
							let ress = JSON.parse(res.data);
							if (ress.ret == -6) {
								uni.hideLoading();
								uni.showToast({
									title: '您的账号已过期',
									icon: 'none',
									duration: 2000,
									position: 'top'
								});
								return;
							} else if (ress.ret == 0 && ress.retMsg == '操作成功') {
								resolve(ress);
							} else if (ress.ret == -1 || ress.ret == '-1') {
								uni.showToast({
									title: ress.retMsg,
									icon: 'none',
									duration: 2000
								});
								reject(res);
							}
						},
						fail: (err) => {
							let ress = JSON.parse(res);
							uni.showToast({
								title: ress.data.retMsg,
								icon: 'none',
								duration: 2000
							});
							return;
						}
					})
				})
			} else {
				return new Promise((resolve, reject) => {
					uni.request({
						url: Api_url + url,
						data: datasss,
						header: headers,
						method: method_type,
						dataType: 'json',
						success: (res) => {
							if (res.data.ret == -6) {
								uni.hideLoading();
								uni.showToast({
									title: '您的账号已过期',
									icon: 'none',
									duration: 2000,
									position: 'top'
								});
								return;
							}
							if (res.data.ret == 0 && res.data.retMsg == '操作成功') {
								uni.hideLoading();
								resolve(res);
							} else if (res.data.ret == -1 || res.data.ret == '-1') {
								uni.hideLoading();
								reject(res.data);
							}
						},
						fail: (err) => {
							uni.hideLoading();
							uni.getNetworkType({
								success(networkType) {
									let title = '';
									if (networkType == '2g' || networkType == '3g' || networkType == 'none') {
										title = '您的网络有点差,请切换稍微好一点的网络进行重试';
										uni.showToast({
											title: title,
											icon: 'none',
											duration: 2000,
											position: 'top'
										});
										return;
									}
								}
							})
							uni.showToast({
								title: '服务出现了点问题，请重试',
								icon: 'none',
								duration: 2000
							});
							return;
						}
					});
				})
			}
			break;
		case 'get':
			return new Promise((resolve, reject) => {
				uni.request({
					url: Api_url + url,
					data: datasss,
					header: headers,
					method: method_type,
					dataType: 'json',
					success: (res) => {
						if (res.data.ret == -6) {
							uni.hideLoading();
							uni.showToast({
								title: '您的账号已过期',
								icon: 'none',
								duration: 2000,
								position: 'top'
							});
							return;
						}
						if (res.data.ret == 0 && res.data.retMsg == '操作成功') {
							uni.hideLoading();
							resolve(res);
						} else if (res.data.ret == -1 || res.data.ret == '-1') {
							uni.hideLoading();
							reject(res.data);
						}
					},
					fail: (err) => {
						uni.hideLoading();
						uni.getNetworkType({
							success(networkType) {
								let title = '';
								if (networkType == '2g' || networkType == '3g' || networkType == 'none') {
									title = '您的网络有点差,请切换稍微好一点的网络进行重试';
									uni.showToast({
										title: title,
										icon: 'none',
										duration: 2000,
										position: 'top'
									});
									return;
								}
							}
						})
						uni.showToast({
							title: '服务出现了点问题，请重试',
							icon: 'none',
							duration: 2000,
							position: 'top'
						});
						return;
					}
				});
			});
			break;
	}

}

/**
 * 查询活动列表 || 查询指定活动1
 */
export const SearchGoodsClass = (data) => {
	return new Promise((resolve, reject) => {
		fetch(config.SearchGoodsClass, data, 'GET', undefined, undefined).then(res => {
			resolve(res);
		});
	})
}

/**
 * 更新图片信息 
 */
export const updateGcImgInfo = (data) => {
	return new Promise((resolve, reject) => {
		fetch(config.updateGcImgInfo, data, 'GET', undefined, undefined).then(res => {
			resolve(res);
		});
	})
}
/**
 * 更新活动
 */
export const nuGoodClass = (data) => {
	return new Promise((resolve, reject) => {
		fetch(config.Activity_Create, data, 'GET', undefined, undefined).then(res => {
			resolve(res);
		});
	})
}
