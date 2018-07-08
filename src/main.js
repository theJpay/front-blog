import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//Vuetify
import Vuetify from "vuetify";
import "./plugins/vuetify";
//Markdown
import VueMarkdown from "vue-markdown";
import MavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

Vue.use(Vuetify).use(MavonEditor);
Vue.component("VueMarkdown", VueMarkdown);

Vue.config.productionTip = false;
console.log(Vue.config)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
