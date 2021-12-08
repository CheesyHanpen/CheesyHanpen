import Vue from "vue"
import GmapVue from "gmap-vue"
import App from "./App.vue"
import "./firebase.js"
import router from "./router"

Vue.config.productionTip = false

Vue.use(GmapVue, {
  load: {
    key: process.env.VUE_APP_MAP_API_KEY,
    libraries: "places",
  },

  installComponents: true,
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app")
