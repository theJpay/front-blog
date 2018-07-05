import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import VueMarkdown from "vue-markdown";
import MavonEditor from "mavon-editor";
import 'mavon-editor/dist/css/index.css';

Vue.use(Vuetify).use(MavonEditor);
Vue.component("VueMarkdown", VueMarkdown);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
