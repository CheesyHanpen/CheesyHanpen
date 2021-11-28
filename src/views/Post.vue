<template>
  <div class="post">
    <h1>投稿一覧</h1>

    <p v-for="post in posts" :key="post.title">
      {{ post.title }} | {{ post.review }}
    </p>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  data() {
    return {
      posts: [],
    }
  },

  created() {
    firebase
      .firestore()
      .collection("posts")
      .get()
      .then((snapshot) => {
        const array = []
        snapshot.forEach((doc) => {
          array.push(doc.data())
        })
        this.posts = array
      })
  },
}
</script>
