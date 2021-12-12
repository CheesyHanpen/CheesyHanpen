<template>
  <div class="signin">
    <h2>Sign In Page</h2>
    <h3>Email</h3>
    <input type="text" placeholder="Email" v-model="email" />
    <h3>Password</h3>
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signIn">Sign in</button>
    <p>
      <router-link to="/signup">アカウントをお持ちでない方はこちら</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "Signin",
  data: function () {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    signIn: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert("Success!")
            this.$router.push("/")
          },
          (err) => {
            alert(err.message)
          }
        )
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

h2 {
  margin: 0 auto;
  margin-bottom: 100px;
  font-family: "Roboto Mono", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 14px;
}
h3 {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 14px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.signin {
  position: absolute;
  width: 348px;
  height: 64px;
  left: 500px;
  top: 273px;
  margin-top: 20px;
  padding: 50px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

input {
  width: 400px;
  margin: 10px 0;
  padding: 10px;
}

button {
  margin-top: 30px;
  width: 90px;
  background: #ffffff;
  border: 3px solid rgba(43, 192, 40, 0.51);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

p {
  margin-top: 40px;
}
a {
  color: #000000;
}
</style>
