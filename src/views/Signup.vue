<template>
  <div class="signup">
    <h2>Sign Up Page</h2>
    <h3>Email</h3>
    <input type="text" placeholder="Email" v-model="email" />
    <h3>Nickname</h3>
    <input type="text" placeholder="Nickname" v-model="username" />
    <h3>Password</h3>
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signUp">Sign up</button>
    <p>
      <router-link to="/signin">アカウントをお持ちの方はこちら</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "Signup",
  data() {
    return {
      email: "",
      username: "",
      password: "",
    }
  },
  methods: {
    signUp: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          alert("Create account: ", user.username)
        })
        .catch((error) => {
          alert(error.message)
        })
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

.signup {
  position: absolute;
  width: 348px;
  height: 64px;
  left: 500px;
  top: 330px;
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
  width: 70px;
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
