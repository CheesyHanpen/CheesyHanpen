import Vue from "vue"
import GmapVue from "gmap-vue"
import App from "./App.vue"
import "./firebase.js"
import router from "./router"

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")

Vue.use(GmapVue, {
  load: {
    key: "AIzaSyCDGLbnGdBRT-_DTIPlCm5I8SNbWSzgb-Q",
    libraries: "places",
  },

  installComponents: true,
})
