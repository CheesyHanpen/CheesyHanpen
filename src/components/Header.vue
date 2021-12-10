<template>
  <div id="app">
    <div id="nav">
      <router-link class="routerlink" to="/">Home</router-link> |
      <router-link class="routerlink" to="/form">Form</router-link> |
      <router-link class="routerlink" to="/signup">Sign up</router-link> |
      <router-link class="routerlink" to="/signin">Sign in</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  list-style: none;
  display: flex;
}
#nav {
  width: 100%;
  text-align: center;
  background-color: rgba(98, 157, 227, 1);
  height: 50px;
  line-height: 50px;
  margin-right: 2px;
  position: fixed;
  z-index: 10;
}
.routerlink {
  text-decoration: none;
  text-align: right;
  color: white;
  font-weight: bold;
  padding: 20px;
}
</style>
