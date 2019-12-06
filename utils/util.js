export const generateUUID = (len, radix) => {
	var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	var uuid = [],
		i;
	radix = radix || chars.length;

	if (len) {
		// Compact form
		for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
	} else {
		// rfc4122, version 4 form
		var r;

		// rfc4122 requires these characters
		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		uuid[14] = '4';

		// Fill in random data.  At i==19 set the high bits of clock sequence as
		// per rfc4122, sec. 4.1.5
		for (i = 0; i < 36; i++) {
			if (!uuid[i]) {
				r = 0 | Math.random() * 16;
				uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
		}
	}

	return uuid.join('');
}

export const dateFormat = (thisDate) => {
	var date = new Date(thisDate)
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
	var D = date.getDate() + ' ';
	return Y+M+D;
}

export const compareUp = (data,propertyName) => { // 升序排序
    if ((typeof data[0][propertyName]) != "number") { // 属性值为非数字
		return function(object1, object2) {
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			return value1.localeCompare(value2);
		}
	}
	else {
		return function(object1, object2) { // 属性值为数字
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			return value1 - value2;
		}
	}
}
export const compareDown = (data,propertyName) => { // 降序排序
    if ((typeof data[0][propertyName]) != "number") { // 属性值为非数字
		return function(object1, object2) {
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			return value2.localeCompare(value1);
		}
	}
	else {
		return function(object1, object2) { // 属性值为数字
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];
			return value2 - value1;
		}
	}
}


/**
 * 手机号验证
 */
export const checkPhone = (phone) => {
	//验证手机号是否为空
	if (phone == "" || phone == null) {
		uni.showToast({
			title: '请输入手机号',
			icon: 'none',
			duration: 2000
		})
		return false;
	}
	//格式校验
	var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(19[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if (!phone.match(myreg)) {
		uni.showToast({
			title: '手机格式不正确',
			icon: 'none',
			duration: 2000
		})
		return false;
	}
	return true;
}


 export const  random = (n) => {
	var charts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var res = '';
    for (var i = 0; i < n; i++) {
      var id = Math.ceil(Math.random() * 9);
      res += charts[id];
    }
    return res;
  }
