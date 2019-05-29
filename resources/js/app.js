require('./bootstrap');

import * as Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex'
import Routes from './routes.js';
import App from './layout/App';

window.Vue = require('vue');
Vue.use(Vuetify);
Vue.use(Vuetify, {iconfont: 'fa',});
Vue.use(Vuex);

const app = new Vue({
    el: '#app',
    routes: Routes,
    render: h => h(App),
});

export default app;
