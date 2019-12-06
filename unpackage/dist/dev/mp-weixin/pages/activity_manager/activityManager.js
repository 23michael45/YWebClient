(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/activity_manager/activityManager"],{

/***/ 121:
/*!************************************************************************************************!*\
  !*** F:/merchant_app/yuji-admin/main.js?{"page":"pages%2Factivity_manager%2FactivityManager"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _activityManager = _interopRequireDefault(__webpack_require__(/*! ./pages/activity_manager/activityManager.vue */ 41));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_activityManager.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 41:
/*!*****************************************************************************!*\
  !*** F:/merchant_app/yuji-admin/pages/activity_manager/activityManager.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activityManager_vue_vue_type_template_id_bdd86a3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activityManager.vue?vue&type=template&id=bdd86a3e&scoped=true& */ 42);
/* harmony import */ var _activityManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activityManager.vue?vue&type=script&lang=js& */ 44);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _activityManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _activityManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _activityManager_vue_vue_type_style_index_0_id_bdd86a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activityManager.vue?vue&type=style&index=0&id=bdd86a3e&scoped=true&lang=css& */ 51);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _activityManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _activityManager_vue_vue_type_template_id_bdd86a3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _activityManager_vue_vue_type_template_id_bdd86a3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bdd86a3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/merchant_app/yuji-admin/pages/activity_manager/activityManager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 42:
/*!************************************************************************************************************************!*\
  !*** F:/merchant_app/yuji-admin/pages/activity_manager/activityManager.vue?vue&type=template&id=bdd86a3e&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_template_id_bdd86a3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./activityManager.vue?vue&type=template&id=bdd86a3e&scoped=true& */ 43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_template_id_bdd86a3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_template_id_bdd86a3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 43:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/merchant_app/yuji-admin/pages/activity_manager/activityManager.vue?vue&type=template&id=bdd86a3e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 44:
/*!******************************************************************************************************!*\
  !*** F:/merchant_app/yuji-admin/pages/activity_manager/activityManager.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./activityManager.vue?vue&type=script&lang=js& */ 45);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 45:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/merchant_app/yuji-admin/pages/activity_manager/activityManager.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 17));



























































































































var _config = _interopRequireDefault(__webpack_require__(/*! @/components/config.js */ 46));
var _index = __webpack_require__(/*! @/axios/index.js */ 47);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var that;var _default = { props: { footHeight: { type: Number } }, data: function data() {return { CustomBar: this.CustomBar, scrollHeight: '', topHeight: '', array: ['平面活动', '视频活动'], list: ['运营中', '审核中', '可发布', '编辑中'], index: 0, activity_one: [], activity_two: [], activity_three: [], activity_four: [], //默认状态
      status: 1, //子分类状态  1.图片活动 2视频活动
      subType: 1, query_status: true, search_box: false, //模糊查询字段
      seos: '', seo: '', swiperCurrentIndex: 0, Onepage_end: 0, //页码
      Onewhich_page: 1, //数量,
      Twopage_end: 0, //页码
      Twowhich_page: 1, //数量,
      Threepage_end: 0, //页码
      Threewhich_page: 1, //数量,
      Fourpage_end: 0, //页码
      Fourwhich_page: 1, //数量,
      loadOne: false, loadTwo: false, loadThree: false, loadFour: false };}, onLoad: function onLoad() {console.log('sss');}, mounted: function mounted() {that = this;var query = uni.createSelectorQuery().in(that);query.select('.top').boundingClientRect(function (r) {that.topHeight = r.height;that.scrollHeight = that.footHeight - r.height - 10;}).exec();that.init(1, 10, 1, 'activity_one');that.init(1, 10, 2, 'activity_two');that.init(1, 10, 3, 'activity_three');that.init(1, 10, 4, 'activity_four');}, watch: { seos: function seos(a) {that.search_box = a ? true : false;} }, methods: { scrollChoiceOne: function scrollChoiceOne() {//底部查询
      if (that.loadOne) {return;}if (this.Onewhich_page < this.Onepage_end) {//判断是否大于当前页码
        this.Onewhich_page = this.Onewhich_page + 1;this.init(this.Onewhich_page, 10, 1, 'activity_one');} else {uni.showToast({ title: '已经是最后一个活动', mask: true, duration: 1500, icon: 'none' });this.loadOne = true;}}, scrollChoiceTwo: function scrollChoiceTwo() {//底部查询
      if (that.loadTwo) {return;}if (this.Twowhich_page < this.Twopage_end) {//判断是否大于当前页码
        this.Twowhich_page = this.Twowhich_page + 1;this.init(this.Twowhich_page, 10, 2, 'activity_two');} else {uni.showToast({ title: '已经是最后一个活动', mask: true, duration: 1500, icon: 'none' });this.loadTwo = true;}}, scrollChoiceThree: function scrollChoiceThree() {//底部查询
      if (that.loadThree) {return;}if (this.Threewhich_page < this.Threepage_end) {//判断是否大于当前页码
        this.Threewhich_page = this.Threewhich_page + 1;this.init(this.Threewhich_page, 10, 3, 'activity_three');} else {uni.showToast({ title: '已经是最后一个活动', mask: true, duration: 1500, icon: 'none' });this.loadThree = true;}}, scrollChoiceFour: function scrollChoiceFour() {//底部查询
      if (that.loadFour) {return;}if (this.Fourwhich_page < this.Fourpage_end) {//判断是否大于当前页码
        this.Fourwhich_page = this.Fourwhich_page + 1;this.init(this.Fourwhich_page, 10, 4, 'activity_four');} else {uni.showToast({ title: '已经是最后一个活动', mask: true, duration: 1500, icon: 'none' });this.loadFour = true;}}, update: function update(id, dataName, index) {//编辑活动  活动ID 参数名  活动在数组下的下标
      console.log(dataName);that.$Router.push({ name: 'edit-activity', params: { activityId: id, dataName: dataName,
          index: index } });


    },
    /**
        * @param {Object} e
        * TODO 12.5日完成监听回调修改
        * 根据type找到对应数组修改数据
        * 然后将其从对应数组删除并且查询一遍
        */
    OnshowInit: function OnshowInit(e) {//修改属性值
      that[e.dataName].splice(e.index, 1);
      (0, _index.searchGoodsClass)({
        getDetail: true,
        id: e.id }).
      then(function (res) {
        if (res.info.list[0].status == 1) {
          that.activity_one.unshift(res.info.list[0]);
        } else if (res.info.list[0].status == 2) {
          that.activity_two.unshift(res.info.list[0]);
        } else if (res.info.list[0].status == 3) {
          that.activity_three.unshift(res.info.list[0]);
        } else if (res.info.list[0].status == 4) {
          that.activity_four.unshift(res.info.list[0]);
        }

      });
    },
    /**
        * 活动内容初始化查询 
        * @param {Object} which_page  第几页
        * @param {Object} page_size   每页数量
        */
    init: function init(which_page, page_size, status, status_name) {
      (0, _index.searchGoodsClass)({
        getDetail: true,
        type: 2,
        subType: that.subType,
        which_page: which_page,
        pageSize: page_size,
        status: status,
        seo: that.seo }).
      then( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                  if (status == 1) {
                    that.Onepage_end = res.info.pageInfo.page_end;
                    that.Onewhich_page = res.info.pageInfo.which_page;
                  } else if (status == 2) {
                    that.Twopage_end = res.info.pageInfo.page_end;
                    that.Twowhich_page = res.info.pageInfo.which_page;
                  } else if (status == 3) {
                    that.Threepage_end = res.info.pageInfo.page_end;
                    that.Threewhich_page = res.info.pageInfo.which_page;
                  } else if (status == 4) {
                    that.Fourpage_end = res.info.pageInfo.page_end;
                    that.Fourwhich_page = res.info.pageInfo.which_page;
                  }_context.next = 3;return (
                    that.sortList(res.info.list, status_name));case 3:
                  // that.querySts(status_name);
                  console.log(that[status_name]);case 4:case "end":return _context.stop();}}}, _callee, this);}));return function (_x) {return _ref.apply(this, arguments);};}());


    },
    sortList: function sortList(list, status_name) {//图片数据分组
      return new Promise(function (resolve, reject) {
        console.log('添加1' + status_name);
        for (var i = 0; i < list.length; i++) {
          that[status_name].push(list[i]);
        }
        resolve();
      });
    },
    /**
        * @param {Object} status_name
        * TODO 让后台修改 直接返回相应数量
        */
    //查询活动点击量、商铺点击量
    querySts: function querySts(status_name) {
      /* let list = that[status_name].gcImgList;
                                              return new Promise((resolve, reject) => {
                                              	list.forEach((item, index) => {
                                              		console.log(status_name);
                                              	})
                                              	resolve();
                                              });
                                              for (let b = 0; b < list.length; b++) {
                                              	let par = {};
                                              	par.rid = list[b].id; //活动id
                                              	par.mask = 0;
                                              	// for (let i = 1; i <= 2; i++) {
                                              	// 	par.type = i;
                                              	// 	setSts(par).then(res => {
                                              	// 		if (i == 1) {
                                              	// 			res.info > 0 ? that[status_name].gcImgList[b].activity_upCnt = res.info : that[
                                              	// 				status_name].gcImgList[b].activity_upCnt = 0
                                              	// 		} else {
                                              	// 			//活动点击量
                                              	// 			res.info > 0 ? that[status_name].gcImgList[b].shop_upCnt = res.info : that[
                                              	// 				status_name].gcImgList[b].shop_upCnt = 0
                                              	// 		}
                                              	// 	});
                                              	// }
                                              } */
    },
    create: function create() {//创建活动按钮
      that.$Router.push({
        name: 'create-activity' });

    },
    bindPickerChange: function bindPickerChange(e) {//右上角下拉选择标签切换
      that.activityInit().then(function (res) {
        that.index = e.target.value;
        that.subType = parseInt(e.target.value) + 1;
        that.init(1, 10, 1, 'activity_one');
        that.init(1, 10, 2, 'activity_two');
        that.init(1, 10, 3, 'activity_three');
        that.init(1, 10, 4, 'activity_four');
      });
    },
    tabSelect: function tabSelect(index) {//标签栏选择切换
      that.swiperCurrentIndex = index;
    },
    swiperChoice: function swiperChoice(e) {//滑块切换
      that.swiperCurrentIndex = e.detail.current;
    },
    query_seo: function query_seo() {//搜索框模糊查询
      //跳转查询列表页面 带上模糊查询的值
      if (that.seos) {
        console.log('存在值');
        that.$Router.push({
          name: 'activityQuery',
          params: {
            seo: that.seos } });


      } else {
        uni.showToast({
          title: '请输入需要搜索的值',
          icon: 'none',
          position: 'top' });

      }


    },
    activityInit: function activityInit() {//初始化参数
      return new Promise(function (resolve, reject) {
        that.status = 1;
        that.swiperCurrentIndex = 0;
        that.seo = '';
        that.activity_one = [];
        that.activity_two = [];
        that.activity_three = [];
        that.activity_four = [];
        that.swiperCurrentIndex = 0;
        that.Onepage_end = 0; //页码
        that.Onewhich_page = 1; //数量 
        that.Twopage_end = 0; //页码
        that.Twowhich_page = 1; //数量 
        that.Threepage_end = 0; //页码
        that.Threewhich_page = 1; //数量 
        that.Fourpage_end = 0; //页码
        that.Fourwhich_page = 1; //数量 
        that.loadOne = false;
        that.loadTwo = false;
        that.loadThree = false;
        that.loadFour = false;
        resolve();
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 51:
/*!**************************************************************************************************************************************!*\
  !*** F:/merchant_app/yuji-admin/pages/activity_manager/activityManager.vue?vue&type=style&index=0&id=bdd86a3e&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_style_index_0_id_bdd86a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./activityManager.vue?vue&type=style&index=0&id=bdd86a3e&scoped=true&lang=css& */ 52);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_style_index_0_id_bdd86a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_style_index_0_id_bdd86a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_style_index_0_id_bdd86a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_style_index_0_id_bdd86a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_activityManager_vue_vue_type_style_index_0_id_bdd86a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 52:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/merchant_app/yuji-admin/pages/activity_manager/activityManager.vue?vue&type=style&index=0&id=bdd86a3e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[121,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/activity_manager/activityManager.js.map