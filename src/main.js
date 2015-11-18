import Vue from 'vue'
import Router from 'vue-router'

import Main from './main.vue'
import App from './views/app.vue'
import Homepage from './views/homepage.vue'
import Codepad from './components/codepad.vue'
import Whiteboard from './components/whiteboard.vue'
import TeachingMaterials from './components/teaching-materials.vue'

Vue.use(Router);
var router = new Router();

router.map({
	'/': {
		component: Homepage
	},
	'/:room': {
		component: App,
		subRoutes: {
			'/editor': {
				component: Codepad
			},
			'/whiteboard': {
				component: Whiteboard
			},
			'/teaching-materials': {
				component: TeachingMaterials
			}
		}
	}
});

router.redirect({
	'/:room': '/:room/editor'
})

router.start(Main, '#app');
