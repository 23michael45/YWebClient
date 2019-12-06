(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/activity_manager/edit-activity"],{

/***/ 130:
/*!**********************************************************************************************!*\
  !*** F:/merchant_app/yuji-admin/main.js?{"page":"pages%2Factivity_manager%2Fedit-activity"} ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _editActivity = _interopRequireDefault(__webpack_require__(/*! ./pages/activity_manager/edit-activity.vue */ 131));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_editActivity.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 131:
/*!***************************************************************************!*\
  !*** F:/merchant_app/yuji-admin/pages/activity_manager/edit-activity.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_activity_vue_vue_type_template_id_cd4d2516___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-activity.vue?vue&type=template&id=cd4d2516& */ 132);
/* harmony import */ var _edit_activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-activity.vue?vue&type=script&lang=js& */ 134);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _edit_activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _edit_activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _edit_activity_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-activity.vue?vue&type=style&index=0&lang=css& */ 136);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_activity_vue_vue_type_template_id_cd4d2516___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_activity_vue_vue_type_template_id_cd4d2516___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/merchant_app/yuji-admin/pages/activity_manager/edit-activity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 132:
/*!**********************************************************************************************************!*\
  !*** F:/merchant_app/yuji-admin/pages/activity_manager/edit-activity.vue?vue&type=template&id=cd4d2516& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_template_id_cd4d2516___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./edit-activity.vue?vue&type=template&id=cd4d2516& */ 133);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_template_id_cd4d2516___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_template_id_cd4d2516___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 133:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/merchant_app/yuji-admin/pages/activity_manager/edit-activity.vue?vue&type=template&id=cd4d2516& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 134:
/*!****************************************************************************************************!*\
  !*** F:/merchant_app/yuji-admin/pages/activity_manager/edit-activity.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./edit-activity.vue?vue&type=script&lang=js& */ 135);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 135:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/merchant_app/yuji-admin/pages/activity_manager/edit-activity.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 17));





























































var _index = __webpack_require__(/*! @/axios/index.js */ 47);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var cut = function cut() {return __webpack_require__.e(/*! import() | colorui/components/cu-custom */ "colorui/components/cu-custom").then(__webpack_require__.bind(null, /*! @/colorui/components/cu-custom.vue */ 209));};







var that;var _default =
{
  components: {
    cut: cut },

  data: function data() {
    return {
      urls: ["", ""],
      activity: [{
        url: '',
        id: '' },
      {
        url: '',
        id: '' }],

      activitys: {
        name: '',
        id: '',
        status: null },

      names: '',
      activity_bols: false,
      goodClassId: '',
      dataName: '',
      index: 0 };

  },
  onLoad: function onLoad(options) {
    console.log('活动id为:' + options.activityId);
    that = this;
    that.goodClassId = options.activityId;
    that.dataName = options.dataName;
    that.index = options.index;
    uni.$on('LG', that.LG);
    // uni.$on('updateModuleInformation',that.updateModuleInformation);//更新组件活动信息

  },
  beforeDestroy: function beforeDestroy() {
    console.log('销毁');
    uni.$off('LG');
    uni.$off('updateModuleInformation');
  },
  mounted: function mounted() {
    uni.showLoading({
      title: '查询中.........' });

    if (that.goodClassId) {
      var par = {};
      par.type = 3;
      par.goodClassId = that.goodClassId;
      par.orderDescCol = '';
      par.prderInCol = '';
      par.which_page = '';
      par.pageSize = '';
      par.seqno = 0;
      //查询封面图
      (0, _index.searchGcImg)(par).then(function (res) {
        if (res.info.list.length > 0) {
          that.activity.splice(0, 1, res.info.list[0]);
          console.log(that.activity);
        }
      }).catch(function (err) {
        uni.hideLoading();
      });
      (0, _index.searchUsr)({}).then(function (res) {
        that.activity[1].url = res.info.list[0].imgurl;
      }).catch(function (err) {
        uni.hideLoading();
      });
      var parm = {};
      parm.token = uni.getStorageSync('token');
      parm.id = that.goodClassId;
      (0, _index.searchGoodsClass)(parm).then(function (res) {
        that.activitys = res.info.list[0];
        that.names = that.activitys.name;
        uni.hideLoading();
      }).catch(function (err) {
        uni.hideLoading();
      });
    }
  },
  methods: {
    //更新活动组件信息
    // updateModuleInformation:function(e){
    // 	console.log('调用emit事件:'+e);
    // 	e.img=that.activity[0].url;
    // 	console.log('赋值返回的数据对象:'+e);
    // 	uni.$emit('updateActivity',e);
    // },
    toEditContent: function () {var _toEditContent = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(validation) {var bol, par;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                bol = true;if (!(
                that.activitys.status == 3)) {_context.next = 4;break;}_context.next = 4;return (
                  that.$utils.show_modal('活动审核已通过,如果编辑内容将需要重新提交审核，请问是否继续?').then(function (res) {
                    bol = res;
                    if (!res) {
                      console.log('进入');
                      return;
                    }
                  }));case 4:if (!

                bol) {_context.next = 12;break;}
                par = {};
                par.id = that.goodClassId;
                par.status = 4; //编辑状态
                _context.next = 10;return (0, _index.Activity_Create)(par).then(function (res) {
                  console.log(res);
                  var title = '';
                  if (res.ret == -1) {
                    title = '修改失败，请稍后重试';
                  } else {
                    title = '修改成功';
                    that.activitys.status = 4;
                    uni.$emit('updateActivity', { id: that.goodClassId, dataName: that.dataName, index: that.index }); //调用父级方法修改值
                  }
                  uni.showToast({
                    title: title,
                    icon: 'none',
                    complete: function complete() {
                      setTimeout(function () {
                        uni.hideToast();
                      }, 1500);
                    } });

                });case 10:_context.next = 14;break;case 12:if (
                bol) {_context.next = 14;break;}return _context.abrupt("return");case 14:if (!(


                validation == 1)) {_context.next = 19;break;} //为1则是status值更改为4进行编辑跳转
                that.clk();return _context.abrupt("return");case 19:

                if (this.activitys.subType == 1) {//图片活动
                  that.$Router.push({
                    name: 'surfaceActivity',
                    params: {
                      activityId: that.activitys.id } });


                } else {//否则就是视频活动
                  that.$Router.push({
                    name: 'edit-content',
                    params: {
                      activityId: that.activitys.id } });


                }case 20:case "end":return _context.stop();}}}, _callee, this);}));function toEditContent(_x) {return _toEditContent.apply(this, arguments);}return toEditContent;}(),

    myUpload: function () {var _myUpload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(rsp) {var par, pars;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                par = rsp.index == 1 ?
                that.$utils.form_data(8, 0, undefined, undefined, undefined) :
                that.$utils.form_data(3, 0, undefined, undefined, undefined); //上传活动封面图
                pars = {};if (!(
                that.activity[rsp.index] != undefined)) {_context2.next = 7;break;}if (!
                that.activity[rsp.index].id) {_context2.next = 7;break;}
                pars.id = that.activity[rsp.index].id;_context2.next = 7;return (
                  (0, _index.delGcImg)(pars).then(function (res) {}));case 7:


                console.log(par);
                par.goodClassId = that.goodClassId;_context2.next = 11;return (
                  (0, _index.upGcImg)(rsp.path, par).then(function (res) {
                    var title = '';
                    var re = JSON.parse(res);
                    console.log(re);
                    if (re.ret == -1) {
                      title = '图片上传失败';
                    } else if (re.ret == 0) {
                      title = '图片上传成功';
                      that.activity[rsp.index].url = rsp.path;
                      that.activity[rsp.index].id = re.info;
                      uni.$emit('updateActivity', { id: that.goodClassId, dataName: that.dataName, index: that.index }); //调用父级方法修改值
                    }
                    uni.showToast({
                      title: title,
                      icon: 'none',
                      success: function success() {
                        setTimeout(function () {
                          uni.hideToast();
                        }, 1500);
                      },
                      fail: function fail() {
                        setTimeout(function () {
                          uni.hideToast();
                        }, 1500);
                      } });

                  }));case 11:case "end":return _context2.stop();}}}, _callee2, this);}));function myUpload(_x2) {return _myUpload.apply(this, arguments);}return myUpload;}(),

    /**
                                                                                                                                                                                 * TODO 12.3日修改封面图裁剪框代码
                                                                                                                                                                                 * @param {Object} index
                                                                                                                                                                                 */
    clk: function clk(index) {//上传活动封面图
      if (!that.verify()) return;
      /**
                                   * 封面图上传宽高为 728*356
                                   * width 宽
                                   * height 高
                                   * pixelRatio 设备像素比 用于宽高相成得到的就是实际的上传图片大小 
                                   * type 回调的上传方法
                                   * fileType 上传的图片文件类型
                                   */
      that.$Router.push({
        name: 'cut',
        params: {
          width: 364,
          height: 178,
          pixelRatio: 2,
          type: 'LG',
          fileType: 'jpg' } });




    },
    clks: function clks(index) {//上传活动LOGO图 此方法已抛弃 改为查询用户头像
      if (!that.verify()) return;
      //裁剪是默认返回PNG图片并监听事件回调当前的LG方法
      that.$Router.push({
        name: 'cut',
        params: {
          width: 200,
          height: 200,
          pixelRatio: 0.4,
          type: 'LG' } });


    },
    verify: function verify() {//验证LOGO 封面图修改时是否是下线状态
      var title = '';
      if (that.activitys.status == 1) {//已发布
        title = '请点击右下角下线按钮将活动下线即可编辑';
      } else if (that.activitys.status == 2) {//待审核
        title = '请点击右下角取消审核按钮即可进行编辑';
      } else if (that.activitys.status == 3) {//审核通过
        that.toEditContent(1);
        return;
      } else {
        return true;
      }
      uni.showToast({
        title: title,
        duration: 1000,
        icon: 'none',
        mask: true,
        success: function success() {
          setTimeout(function () {
            uni.hideToast();
          }, 1000);
          return false;
        },
        fail: function fail() {
          setTimeout(function () {
            uni.hideToast();
          }, 1000);
          return false;
        } });


    },
    LG: function LG(item) {
      var rsp = {};
      uni.getImageInfo({
        src: item[0].src,
        success: function success(res) {
          if (res.type == 'png') {
            rsp.index = 1;
            rsp.path = item[0].src;
          } else {
            rsp.index = 0;
            rsp.path = item[0].src;
          }
          that.myUpload(rsp); //调用上传方法
        },
        fail: function fail(e) {
          uni.showToast({
            title: '裁剪失败,请稍后重试',
            icon: 'none',
            mask: true });

          return;
        } });

    },
    /**
        * 更新活动名称
        */
    update_activity: function update_activity() {var _this = this;
      if (that.activitys.status == 1) {
        that.names = that.activitys.name;
        uni.showToast({
          title: '活动已发布，如需要修改请点击右下角下线按钮将活动进行下线即可修改',
          icon: 'none' });

        return;
      }
      if (that.activitys.status == 2) {
        that.names = that.activitys.name;
        uni.showToast({
          title: '活动正在审核中,如需修改请点击右下角的取消审核按钮取消审核即可修改',
          icon: 'none' });

        return;
      }
      if (that.activitys.status == 3) {
        that.names = that.activitys.name;
        uni.showToast({
          title: '活动审核已通过',
          icon: 'none' });

        return;
      }
      that.$utils.show_modal('是否修改活动名称,修改后活动需要重新提交审核').then(function (res) {
        if (res) {
          var par = {};
          par.name = _this.names;
          par.id = that.goodClassId;
          uni.showLoading({
            title: '修改中....' });

          (0, _index.Activity_Create)(par).then(function (res) {
            console.log(res);
            var title = '';
            if (res.ret == -1) {
              title = '修改失败，请稍后重试';
            } else if (res.retMsg == '记录已存在') {
              title = '此活动名称已重复，请重新输入';
            } else if (res.ret == 0) {
              title = '更改活动名称成功';
              uni.$emit('updateActivity', { id: that.goodClassId, dataName: that.dataName, index: that.index }); //调用父级方法修改值
            }
            uni.showToast({
              title: title,
              icon: 'none',
              complete: function complete() {
                setTimeout(function () {
                  uni.hideToast();
                }, 1500);
              } });

          });
        }
      });

    },
    /**
        * 更新活动状态 
        * @param {Object} stauts
        * @param {Object} title
        */
    update_status: function update_status(stauts, title) {
      var statu;
      that.$utils.show_modal(title).then(function (res) {
        console.log(res);
        if (res) {
          //如果下线 状态为4 如果取消审核 状态为4 如果发布 状态为1 如果提交审核 状态为2
          statu = stauts == 1 ? 4 : stauts == 2 ? 4 : stauts == 3 ? 1 : stauts == 4 ? 2 : 4;
          var par = {};
          par.id = that.goodClassId;
          par.status = statu; //发布状态
          (0, _index.Activity_Create)(par).then(function (res) {
            console.log(res);
            var title = '';
            if (res.ret == -1) {
              title = '修改失败，请稍后重试';
            } else if (res.ret == 0) {
              title = statu == 2 ? '活动提交审核成功' : statu == 4 ? '活动下线成功' : '活动状态修改成功';
              that.activitys.status = statu;
              uni.$emit('updateActivity', { id: that.goodClassId, dataName: that.dataName, index: that.index }); //调用父级方法修改值
            }
            uni.showToast({
              title: title,
              icon: 'none',
              complete: function complete() {
                setTimeout(function () {
                  uni.hideToast();
                }, 1500);
              } });

          });
        }
      });
    },
    preview: function preview() {
      var count = 0;
      var mp4Count = 0;
      var bannerCount = 0;
      var activity = '';

      (0, _index.searchGoodsClass)({
        id: that.activitys.id,
        getDetail: 1 }).
      then(function (res) {
        console.log(res);
        var List = res.info.list[0].gcImgList; //获得所有图片数据
        activity = res.info.list[0];
        if (List.length > 0) {
          List.forEach(function (item) {
            if (item.type == 6 && item.seqno == 0 && res.info.list[0].subType == 1) {
              ++count;
            } else if (item.type == 6 && item.seqno == 1 && res.info.list[0].subType == 1) {
              ++count;
            } else if (item.type == 6 && item.seqno == 2 && res.info.list[0].subType == 1) {
              ++count;
            } else if (item.type == 7 && item.seqno == 3 && res.info.list[0].subType == 1) {
              ++count;
            } else if (item.type == 4 && res.info.list[0].subType == 2) {//视频活动的视频
              if (mp4Count == 0) {
                ++count;
                ++mp4Count;
              }
            } else if (item.type == 6 && res.info.list[0].subType == 2) {//视频活动的视频
              ++count;
            } else if (item.type == 3 && res.info.list[0].subType == 2) {//视频活动的视频
              ++count;
            } else if (item.type == 17 && res.info.list[0].subType == 2) {//视频活动的视频
              if (bannerCount == 0) {
                ++count;
                ++bannerCount;
              }
            }
          });
          if (count != 4) {
            uni.showToast({
              title: activity.subType == 1 ? '活动封面图数量不够,请点击进入内容编辑查看页面内容4张图片是否已全部上传' : '视频活动数据不够完整，请点击内容编辑完善活动数据',
              icon: 'none',
              complete: function complete() {
                setTimeout(function () {
                  uni.hideToast();
                }, 2000);
              } });

          } else {
            if (that.activitys.subType == 1) {//图片活动
              that.$Router.push({
                name: 'imgPreview',
                params: {
                  activityId: that.activitys.id } });


            } else {//否则就是视频活动
              that.$Router.push({
                name: 'videoPreview',
                params: {
                  activityId: that.activitys.id } });


              // that.$Router.back(1);//回退到上一个页面
            }
          }


        } else {
          uni.showToast({
            title: '活动封面图片还未上传,请点击上方上传活动封面图片!',
            icon: 'none',
            success: function success() {
              setTimeout(function () {
                uni.hideToast();
              }, 1500);
            },
            fail: function fail() {
              setTimeout(function () {
                uni.hideToast();
              }, 1500);
            } });

        }
      }).catch(function (err) {
        console.log(err);
        uni.showToast({
          title: '预览失败，请稍后重试',
          icon: 'none',
          success: function success() {
            setTimeout(function () {
              uni.hideToast();
            }, 1500);
          },
          fail: function fail() {
            setTimeout(function () {
              uni.hideToast();
            }, 1500);
          } });

      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 136:
/*!************************************************************************************************************!*\
  !*** F:/merchant_app/yuji-admin/pages/activity_manager/edit-activity.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./edit-activity.vue?vue&type=style&index=0&lang=css& */ 137);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_activity_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 137:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/merchant_app/yuji-admin/pages/activity_manager/edit-activity.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[130,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/activity_manager/edit-activity.js.map