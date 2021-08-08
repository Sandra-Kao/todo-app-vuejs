// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
// const isDebug_mode = process.env.NODE_ENV !== 'production';

// Vue.config.debug = isDebug_mode;
// Vue.config.devtools = isDebug_mode;

createApp(App).use(Vuex).use(store).use(router).mount('#app')
