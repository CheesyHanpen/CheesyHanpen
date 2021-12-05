<template>
  <div class="Postform">
    <h2>投稿フォーム</h2>

    <p>タイトル</p>
    <input v-model="title" placeholder="Title..." />
    <p>レビュー</p>
    <textarea v-model="review" placeholder="Comment..."></textarea>
    <p>ロケーション</p>
    <GmapMap
      :center="{ lat: 35.717, lng: 139.731 }"
      :zoom="10"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
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
