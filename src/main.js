import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueParticles)

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.name === 'login' || to.name === 'notFound') {
    next()
  } else {
    //  检验登录授权
    // 如果有token，通过检验，否则重定向回登录页
    if (!localStorage.getItem('token')) {
      next({ path: '/login' })
    } else {
      next()
    }
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
