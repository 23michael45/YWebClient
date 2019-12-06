import https from '@/https/https.js'
import productApi from '@/components/productApi.js'

/**
 * 查询店铺商品分类,转到活动就是查询活动数据 添加商品的时候会用到此接口的ID
 */
export const SearchGoodsClass = (data) => {
	return new Promise((resolve, reject) => {
		https(productApi.searchGoodsClass, data, 'GET', undefined, undefined).then(res => {
			resolve(res);
		}).catch(err => {
			uni.hideLoading();
			uni.showToast({
				title:'查询失败,请稍后重试'
			});
			return;
		})
	})
}

/**
 * 添加,更新商品分类信息
 */
export const nuGoodClass = (data) => {
	return new Promise((resolve, reject) => {
		https(productApi.nuGoodClass, data, 'POST', undefined, undefined).then(res => {
			resolve(res);
		}).catch(err => {
			resolve(err);
		})
	})
}


/**
 * 查询店铺商品大类(商品列表)
 */
export const SearchGoodsName = (data) => {
	return new Promise((resolve, reject) => {
		https(productApi.searchGoodsName, data, 'GET', undefined, undefined).then(res => {
			resolve(res);
		}).catch(err => {
			console.log('查询店铺商品大类异常:' + err);
		})
	})
}
/**
 * 创建,更新商品大类(商品信息)
 */
export const nuGoodName = (data) => {
	return new Promise((resolve, reject) => {
		https(productApi.nuGoodName, data, 'POST', undefined, undefined).then(res => {

			resolve(res);
		}).catch(err => {
			uni.hideLoading()
			if (err.retMsg == '记录已存在') {
				
				uni.showToast({
					title: '商品货号重复',
					icon: 'none',
					duration: 2000
				});
				return;
			}else{
				uni.showToast({
					title: 'err.retMsg',
					icon: 'none',
					duration: 2000
				});
				return;
			}
		})
	})
}

/**
 * 往商品分类中添加新创建的商品大类
 * goodClassId 商品分类Id
 * goodNameId  商品大类Id
 */
export const addGoodsClsMap = (data) => {
	return new Promise((resolve, reject) => {
		https(productApi.addGoodsClsMap, data, 'POST', undefined, undefined).then(res => {
			uni.setStorageSync('addGoodsClsMapId',res.data.info);//删除商品时需要用到
			resolve(res);
		}).catch(err => {
			uni.hideLoading()
			if (err.retMsg == '记录已存在') {
				
				uni.showToast({
					title: '商品已添加到分类中，请勿重新添加',
					icon: 'none',
					duration: 2000
				});
				return;
			}else{
				uni.showToast({
					title: 'err.retMsg',
					icon: 'none',
					duration: 2000
				});
				return;
			}
		})
	})
}
/**
 * 商铺创建，更新商品规格名
 * id - 新增的时候，不需要传此参数，系统会创建该id; 更新的时候，需要传
 * name - 规格名
 * type - 0-非必须属性，1-必须属性
 */
export const nuGoodsSpecName = (data) => {
	return new Promise((resolve, reject) => {
		https(productApi.nuGoodsSpecName, data, 'POST', undefined, undefined).then(res => {
			uni.setStorageSync('SpecNameId', res.data.info); //商铺规格名ID
			resolve(res);
		}).catch(err => {
			uni.hideLoading()
			if (err.retMsg == '记录已存在') {
				uni.showToast({
					title: '商品',
					icon: 'none',
					duration: 2000
				});
				return;
			}else{
				uni.showToast({
					title: 'err.retMsg',
					icon: 'none',
					duration: 2000
				});
				return;
			}
		})
	})
}

/**
 * 查询商铺规格名
 * specNameId - 规格名ID
 */
export const searchGoodsSpName = (data) => {
	return new Promise((resolve, reject) => {
		https(productApi.searchGoodsSpName, data, 'POST', undefined, undefined).then(res => {
			if (res.data.info.list.length > 0) {
				uni.setStorageSync('SpecNameId', res.data.info.list[0].id); //商铺规格名ID
			} else {
				nuGoodsSpecName({//创建商铺规格名 
					name:'item'
				})
			}
			resolve(res);
		}).catch(err => {
			uni.hideLoading();
			uni.showToast({
				title: err.retMsg,
				icon: 'none',
				duration: 2000
			});
		})
	})
}
/**
 * 给规格名赋值
 * specNameId - 规格名ID 
 * val - 字符串 这边写的是给一整个字符串
 */
export const nuGoodsSpVal = (data) => {
	return new Promise((resolve, reject) => {
		https(productApi.nuGoodsSpVal, data, 'POST', undefined, undefined).then(res => {
			uni.setStorageSync('specValId',res.data.info);
			resolve(res);
		}).catch(err => {
			uni.hideLoading()
			if (err.retMsg == '记录已存在') {
				uni.showToast({
					title: '商品简介重复,请重新输入',
					icon: 'none',
					duration: 2000
				});
				return;
			}else{
				uni.showToast({
					title: 'err.retMsg',
					icon: 'none',
					duration: 2000
				});
				return;
			}
		})
	})
}

/**
 * 添加商品小类
 * GoodJson 字符串 包含以下内容
 * goodsNameId - 商品大类ID
              subCode - 小类编码
              showOrgPrice - 显示的原价，以厘为单位，比如 12.99，应该填 12.99*1000=12990
              price - 销售价格，以厘为单位，比如 12.99，应该填 12.99*1000=12990
              mark - 描述
              isShowOut - 是否上架， 1-上架；0-下架
              specList - 规格及规格值的列表)
                列表元素包含：
                   specNameId - 规格名ID，接口 nuGoodsSpecName 产生的ID 
                   specValId - 规格值ID，接口 nuGoodsSpVal 产生的ID （小写L大写I）
 */
export const nuGoods = (data) => {
	return new Promise((resolve, reject) => {
		https(productApi.nuGoods, data, 'POST', undefined, undefined).then(res => {
			resolve(res);
		}).catch(err => {
			uni.hideLoading();
			if (err.retMsg == '记录已存在') {
				uni.showToast({
					title: '商品简介重复,请重新输入',
					icon: 'none',
					duration: 2000
				});
				return;
			}else{
				uni.showToast({
					title: 'err.retMsg',
					icon: 'none',
					duration: 2000
				});
				return;
			}
		})
	})
}
/**
 * 上传商品图片
 * goodsNameId 商品大类Id
 * file 图片 视频文件对象
 * seqno 序号
 * type 1 商品轮播图
 */
export const upGoodsImg = (data) => {
	return new Promise((resolve, reject) => {
		var li={};
		li.goodsNameId=data.goodsNameId;
		li.seqno=data.seqno;
		li.type=data.type;
		var imgFile=data.url;
		https(productApi.upGoodsImg, li, 'POST', 'form', imgFile).then(res => {
			resolve(res);
		}).catch(err => {
				uni.showToast({
					title: err.retMsg,
					icon: 'none',
					duration: 2000
				});
				resolve(false);
		})
	})
}

/**START    删除店铺商品流程     START**/

/**
 * 删除商品大类
 * 此接口已改，直接删除所有相关联数据
 */
export const delGoodsName = (data) => {
	return new Promise((resolve, reject) => {
		https(productApi.delGoodsName, data, 'GET', undefined, undefined).then(res => {
			resolve(res);
		}).catch(err => {
				uni.showToast({
					title: '商品删除失败',
					icon: 'none',
					duration: 2000
				});
				return;
			
		})
	})
}
/**
 * 删除商品图片（图片存在大类下)
 * upGoodsImg 接口返回的ID
 */
export const delGoodsImg = (data) => {
	return new Promise((resolve, reject) => {
		https(productApi.delGoodsImg, data, 'GET', undefined, undefined).then(res => {
			resolve(res);
		}).catch(err => {
			
				uni.showToast({
					title: '删除失败',
					icon: 'none',
					duration: 2000
				});
				return;
		})
	})
}
/**END    删除店铺商品流程     END**/


/*START 上传店铺商户相关资料 START*/
/**
 * START 上传商户执照，身份证等图片 START
 * token - login 时返回的 token
 * type - 5-店铺执照图；6-店铺身份证；7-单纯图片
 * rid - 商户ID type=7的时候此值自定义 自由编写 但需要为整型数据
 * seqno - 可选，自定义图片顺序     
 * param1 - 图片描述
 */
export const upCommImg = (data) => {
	return new Promise((resolve, reject) => {
		var li={};
		li.type=data.type;
		li.seqno=data.seqno;
		li.rid=data.rid;
		li.seqno=data.seqno?data.seqno:0;
		li.param1=data.param1?data.param1:'';
		var imgFile=data.url;
		https(productApi.upCommImg, li, 'POST', 'form', imgFile).then(res => {
			resolve(res);
		}).catch(err => {
				reject(err);
		})
	})
}

/**
 * 删除商户营业执照,身份证正反面照片
 * token - login 时返回的 token
 * type - 5-店铺执照图；6-店铺身份证；7-单纯图片
 * rid - 商户ID type=7的时候此值自定义 自由编写 但需要为整型数据
 * seqno - 可选，自定义图片顺序     
 * param1 - 图片描述
 */
export const delCommImg = (data) => {
	return new Promise((resolve, reject) => {
		https(productApi.delCommImg, data, 'GET', undefined, undefined).then(res => {
			resolve(res);
		}).catch(err => {
				uni.showToast({
					title: '删除失败',
					icon: 'none',
					duration: 2000
				});
				return;
		})
	})
}

/**
 * 查询商户营业执照,身份证正反面图片
 * type =5 商户营业执照 =6身份证正反面 =7 自定义类型图片
 */
export const searchCommImg = (data) => {
	return new Promise((resolve, reject) => {
		https(productApi.searchCommImg, data, 'GET', undefined, undefined).then(res => {
			resolve(res);
		}).catch(err => {
				uni.showToast({
					title: '图片查询失败,请稍后重试',
					icon: 'none',
					duration: 2000
				});
				return;
		})
	})
}
/**
 * 商户负责人实名认证,上传身份证正面带名字那张
 * token
 * url   
 * 注意:上传得身份证必须和注册得公司法人名称相同 否则失败
 */
export const idCardCheck = (data) => {
	return new Promise((resolve, reject) => {
		
		https(productApi.idCardCheck, {}, 'POST', 'form', data.url).then(res => {
			resolve(res);
		}).catch(err => {
				reject(err);
		})
	})
}
/*END	 上传店铺商户相关资料 	END*/