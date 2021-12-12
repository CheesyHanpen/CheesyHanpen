<template>
  <div>
    <button @click="signOut">Sign Out</button>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  methods: {
    signOut() {
      firebase.auth().onAuthStateChanged(() => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            console.log("ログアウトしました")
          })
          .catch((error) => {
            console.log(`ログアウト時にエラーが発生しました (${error})`)
          })
      })
    },
  },
}
</script>

<style scoped>
button {
  margin-top: 30px;
  width: 90px;
  background: #ffffff;
  border: 3px solid rgba(43, 192, 40, 0.51);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
</style>
