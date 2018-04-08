// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/diaspora.css'
import {markdown,captest} from './filters/index'
import moment from 'moment'
import './assets/highlight.min.css'
import './assets/syntax.css'

Vue.config.productionTip = false

moment.locale('zh-cn');
Vue.prototype.moment = moment
Vue.prototype.markdown= markdown;
/* eslint-disable no-new */
$('body').removeClass('loading');
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
