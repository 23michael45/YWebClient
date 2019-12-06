import Vue from 'vue'
import Router from '@/js_sdk/uni-simple-router';
import modules from './moduls'
Vue.use(Router);
const router = new Router({
	encodeURI:false,
	routes: [...modules]
});


export default router
