import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Post from "../views/Post.vue"
import Form from "../views/Form.vue"
import Signin from "../views/Signin"
import Signup from "../views/Signup"
import firebase from "firebase"

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect: "signin",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
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
  let requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  let currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    if (!currentUser) {
      next({
        path: "/signin",
        query: { redirect: to.fullPath },
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
