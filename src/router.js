import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Blogs from "./views/Blogs.vue";
import BlogArticle from "./views/BlogArticle.vue";
import MdEditor from "./views/MdEditor.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Blogs
  },
  {
    path: "/blogs/:id",
    name: "article",
    component: BlogArticle
  },
  {
    path: "/mdeditor",
    name: "mdeditor",
    component: MdEditor
  },
  {
    path: "*",
    redirect: "/home"
  }
];

export default new Router({
  routes: routes
});
