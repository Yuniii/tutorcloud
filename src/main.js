import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import Main from './main.vue'
import App from './views/app.vue'
import Homepage from './views/homepage.vue'
import Codepad from './components/codepad.vue'
import Whiteboard from './components/whiteboard.vue'
import TeachingMaterials from './components/teaching-materials.vue'
import Logs from './components/logs.vue'
import Empty from './components/empty.vue'

import {escapeHTML, nl2br} from './lib/util.js'

Vue.config.debug = true;
Vue.use(Router);
Vue.use(Resource);

Vue.filter('escapeHTML', escapeHTML);
Vue.filter('nl2br', nl2br);

var router = new Router();

router.map({
	'/': {
		component: Homepage
	},
	'/:room': {
		component: App,
		subRoutes: {
			'/editor/:codepad': {
				component: Codepad
			},
			'/whiteboard': {
				component: Empty
			},
			'/teaching-materials': {
				component: TeachingMaterials
			},
			'/logs': {
				component: Logs
			}
		}
	}
});

router.redirect({
	'/:room': '/:room/editor/Default',
	'/:room/editor': '/:room/editor/Default'
});

router.start(Main, '#app');
