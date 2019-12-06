import Vue from 'vue'
import App from './App'
import router from '@/router'
import util from '@/utils/utils.js'
// import { JSEncrypt } from '@/js_sdk/jsencrypt'

// var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDj6PZda698SzzOFEx1ElWe+byydAXoLGlfLR9G" +
// 			    "79aJ1p/Tb/rHNvhe2MIq9UwBuipFO0M41LQ0Hb/JRNCHucWD2ta3hEIymc+NuEzCGl2gMpG/M4PK" +
// 			    "PQoVtXzFUeV47d2WqPMap2BhUUr82K/NPuVkzHWF7zxjRFL4mLXPGi6KzQIDAQAB";
// 		var	crypt = new JSEncrypt();
// 			crypt.setPublicKey(publicKey);
// Vue.prototype.$JSEncrypt = crypt
Vue.prototype.$utils=util
Vue.config.productionTip = false
import cuCustom from '@/colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
App.mpType = 'app'
App.router = router
const app = new Vue({
    ...App
})
app.$mount()

export default app
