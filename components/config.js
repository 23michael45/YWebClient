const BASE_URL = '/fac' //API接口域名

export default {
	upUsrCalcPic: BASE_URL + '/usr/upUsrCalcPic', //人脸计算接口
	getWappQrcode: BASE_URL + '/wx/getWappQrcode', //生成二维码接口
	Login: BASE_URL + '/usr/login', //登录接口
	Activity_Create: BASE_URL + '/goods/nuGoodClass', //创建活动接口
	SearchGoodsClass: BASE_URL + '/goods/searchGoodsClass', //查询活动接口
	upGcImg: BASE_URL + '/goods/upGcImg', //上传图片接口
	delGcImg: BASE_URL + '/goods/delGcImg', //删除图片接口
	searchGcImg: BASE_URL + '/goods/searchGcImg', //查询图片接口
	updateGcImgInfo: BASE_URL + '/goods/updateGcImgInfo', //更新图片信息
	/**
	 *查询评论，查询收藏
	 * 参数：
	 *token - login 时返回的 token
	 *type -  1-活动评论; 2-活动收藏; 3-活动点赞数量; 4-评论点赞数量；5-活动评论数量；6-个人活动点赞，记录个人的
	 *uid - 用户ID，对于 type=2 有用，用于获取用户收藏的活动
	 *seo - 模糊查询
	 *which_page - 页号
	 *pageSize - 页大小，默认20
	 **/
	searchComment: BASE_URL + '/goods/searchComment',
	setSts:BASE_URL+'/goods/setSts',
	searchUsr:'/fac/usr/searchUsr',//查询用户信息
	updateUsr:'/fac/usr/updateUsr',//更改当前用户信息,
}
