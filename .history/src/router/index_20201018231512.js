import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import()

//1.安装插件
Vue.use(VueRouter)
const routes =[]
//2.创建路由对象
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router