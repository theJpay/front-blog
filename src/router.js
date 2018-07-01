import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Blogs from './views/Blogs.vue'
import MdEditor from './views/MdEditor.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/mdeditor',
    name: 'mdeditor',
    component: MdEditor
  }
];

if (process.env.NODE_ENV === "development") {
  routes.push({
    path: '/admin',
    name: 'admin',
    component: Admin
  })
}

export default new Router({
  routes: routes
})
