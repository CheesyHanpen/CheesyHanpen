import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Form from "../views/Form.vue"
import Signin from "../views/Signin"
import Signup from "../views/Signup"
import firebase from "firebase"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
    meta: { requiresAuth: true },
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({ name: "Signin" })
      }
    })
  } else {
    next()
  }
})

export default router
