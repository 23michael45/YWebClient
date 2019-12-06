
export default {
	searchGoodsClass:'/fac/goods/searchGoodsClass',//查询你店铺商品分类
	nuGoodClass:'/fac/goods/nuGoodClass',//创建商品分类
	searchGoodsName:'/fac/goods/searchGoodsName',//查询商品大类 返回店铺商品列表
	nuGoodName:'/fac/goods/nuGoodName',//创建,更新商品大类(创建单个商品),
	delGoodsName:'/fac/goods/delGoodsName',//删除商品大类，此接口已改动，调用当前接口删除整个商品数据
	addGoodsClsMap:'/fac/goods/addGoodsClsMap',//往商品分类中添加商品大类
	searchGoodsSpName:'/fac/goods/searchGoodsSpName',//查询商铺规格名
	nuGoodsSpecName:'/fac/goods/nuGoodsSpecName',//3.12 给商铺增加、更新商品规格名（属性）
	delGoodsSpName:'/fac/goods/delGoodsSpName',//删除商铺规格名
	nuGoodsSpVal:'/fac/goods/nuGoodsSpVal',//给某规格名添加规格值，比如规格名是“颜色”，规格值可以有“红色”，“蓝色”等
	searchGoodsSpVal:'/fac/goods/searchGoodsSpVal',//查询某规格名下的规格值
	delGoodsSpVal:'/fac/goods/delGoodsSpVal',//删除某规格名下的规格值
	searchGoods:'/fac/goods/searchGoods',//查询商品小类 类似商品详细数据 不过查询商品大类的时候有数据了 可能用不到
	nuGoods:'/fac/goods/nuGoods',//添加、更新商品小类，商品小类是指带有一个或多个商品规格（属性）的商品，它属于某商品大类：
	delGoods:'/fac/goods/delGoods',//删除商品小类
	upGoodsImg:'/fac/goods/upGoodsImg',//上传商品图片
	delGoodsImg:'/fac/goods/delGoodsImg',//删除商品图片,
	upCommImg:'/fac/com/upCommImg',//上传商户执照，身份证等图片,
	delCommImg:'/fac/com/delCommImg',//删除商户执照，身份证等图片,
	searchCommImg :'/fac/com/searchCommImg',//获取商户营业执照,身份证等图片,
	idCardCheck :'/fac/usr/idCardCheck',//商户负责人实名认证,只上传带姓名的正面
}
