import Vue from 'vue'
import Router from 'vue-router'

import App from './app.vue'
import Codepad from './components/codepad.vue'
import Whiteboard from './components/whiteboard.vue'
import TeachingMaterials from './components/teaching-materials.vue'

Vue.use(Router);
var router = new Router();

router.map({
    '/': {
        component: Codepad
    },
    '/whiteboard': {
        component: Whiteboard
    },
    '/teaching-materials': {
    	component: TeachingMaterials
    }
});

router.start(App, '#app');
