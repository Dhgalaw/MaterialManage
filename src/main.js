import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,Layout,Menu,Input,Icon,Tooltip,Table,Popconfirm,Dropdown,Form,Carousel,Avatar,message,Spin,Modal } from 'ant-design-vue'

Vue.prototype.$message = message


Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Tooltip)
Vue.use(Table)
Vue.use(Popconfirm)
Vue.use(Dropdown)
Vue.use(Carousel)
Vue.use(Form)
Vue.use(Avatar)
Vue.use(Spin)
Vue.use(Modal)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
