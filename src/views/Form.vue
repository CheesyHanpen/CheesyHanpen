<template>
  <div class="Postform">
    <h2>投稿フォーム</h2>

    <p>タイトル</p>
    <input v-model="title" placeholder="Title..." />
    <p>レビュー</p>
    <textarea v-model="review" placeholder="Comment..."></textarea>
    <p>投稿</p>
    <button v-on:click="post">投稿</button>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "form",
  data() {
    return {
      title: "",
      review: "",
    }
  },

  methods: {
    post() {
      firebase.firestore().collection("posts").add({
        title: this.title,
        review: this.review,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      this.title = ""
      this.review = ""
    },
  },
}
</script>
