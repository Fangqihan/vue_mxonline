// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store'


Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App/>'
});





// 2/3：使用localStorage 暂时行不通，不能动态显示=================

// router.beforeEach(function (to, from, next) {
//   if(to.meta.requireAuth){
//     console.log('beforeEach');
//     if (localStorage.getItem('token')) {
//       next()
//     } else {
//       next({name: 'login',query: {backUrl: to.fullPath}})
//     }
//   }else{
//     next()
//   }
// });



router.beforeEach(function (to, from, next) {
  if(to.meta.requireAuth){
    // 要去的url只有登陆成功后才能访问
    if (store.state.token) {
      next()
    } else {
      next({name: 'login',query: {backUrl: to.fullPath}})
    }
  }else{
    next()
  }
});


