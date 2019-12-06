export default {
	Img_upload(sourceType) {
		return new Promise((resolve, reject) => {
			uni.chooseImage({
				count: 1,
				sizeType: ['original'],
				sourceType: sourceType,
				success: function(res) {
					console.log("工具类调用成功");
					resolve(res.tempFilePaths[0]);
				},
				fail: function() {
					reject('错误');
				}
			})
		})
	},
	/**查询活动data参数 
	 * @param {Object} getDetail   是否查询图片信息
	 * @param {Object} which_page  第几页
	 * @param {Object} pageSize\   每页几条
	 * @param {Object} subType\   子分类 1.图片活动 2.视频活动
	 * * @param {Object} seo\   通过名称模糊查询活动
	 */
	activity_data(getDetail, which_page, pageSize, status, subType, seo) {
		let par = {};
		par.type = 2; //活动
		par.subType = subType ? subType : 1;
		par.seo = seo ? seo : ''
		getDetail == true ? par.getDetail = getDetail : '';
		par.which_page = which_page; //第一页开始一页
		par.pageSize = pageSize; //查询数量为1 最后一个就是现在正在添加的数据内容
		status > 0 ? par.status = status : "";
		return par;
	},
	activity_preview(id,type,subType,getDetail){
		let par={};
		par.id=id;
		// par.type=type;
		// par.subType=subType;
		if(getDetail){
			par.getDetail=getDetail;
		}
		return par;
	},
	/**
	 * @param {Object} type  图片类型
	 * @param {Object} seqno 图片序号
	 * @param {Object} param 图片类型=5时，此处存放图片type=4的角色图id
	 */
	form_data(type, seqno, param, param1, rid) {
		let par = {};
		par.token = uni.getStorageSync('token');
		par.goodClassId = uni.getStorageSync('goodClassId'); //活动id
		par.type = type;
		par.seqno = seqno;
		if (param) {
			par.param = param;
		}
		if (param1) {
			par.param1 = param1;
		}
		if (rid) {
			par.rid = rid;
		}
		return par;
	},
	//提示语
	show_modal(warn) {
		return new Promise((reslove, reject) => {
			uni.showModal({
				title: '提示',
				content: warn,
				success: function(res) {
					if (res.confirm) {
						reslove(true)
					} else if (res.cancel) {
						reslove(false);
					}
				}
			})
		})
	},
	compare(pro) {
		return function(obj1, obj2) {
			var val1 = obj1[pro];
			var val2 = obj2[pro];
			if (val1 > val2) { //正序
				return 1;
			} else if (val1 < val2) {
				return -1;
			} else {
				return 0;
			}
		}
	},
	//使用compare排序号再次分组排序
	list_sort(gcImgList) {
		var b = Array.from(new Set(gcImgList));
		var c = [],
			d = [];
		var count = 0;
		b.map((item) => {
			gcImgList.map(itemC => {
				if (itemC.seqno == item.seqno) {
					d.push(itemC)
				}
			});
			c.push(d);
			d = [];
		});
		var list = [];
		for (var i = 0; i < c.length; i++) {
			if (i == c.length - 1) {
				list.push(c[i]);
			} else if (c[i][0].id == c[i + 1][0].id) {
				continue;
			} else {
				list.push(c[i]);
			}
		}
		return list;
	},
	compareUp(data, propertyName) { // 升序排序
		if ((typeof data[0][propertyName]) != "number") { // 属性值为非数字
			return function(object1, object2) {
				var value1 = object1[propertyName];
				var value2 = object2[propertyName];
				return value1.localeCompare(value2);
			}
		} else {
			return function(object1, object2) { // 属性值为数字
				var value1 = object1[propertyName];
				var value2 = object2[propertyName];
				return value1 - value2;
			}
		}
	},
	compareDown(data, propertyName) { // 降序排序
		if ((typeof data[0][propertyName]) != "number") { // 属性值为非数字
			return function(object1, object2) {
				var value1 = object1[propertyName];
				var value2 = object2[propertyName];
				return value2.localeCompare(value1);
			}
		} else {
			return function(object1, object2) { // 属性值为数字
				var value1 = object1[propertyName];
				var value2 = object2[propertyName];
				return value2 - value1;
			}
		}
	}
}
