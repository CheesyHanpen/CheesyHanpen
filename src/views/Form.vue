<template>
  <div class="Postform">
    <h2>投稿フォーム</h2>

    <p>タイトル</p>
    <input v-model="title" placeholder="Title..." />
    <p>レビュー</p>
    <textarea v-model="review" placeholder="Comment..."></textarea>
    <p>ロケーション</p>
    <GmapMap
      class="map"
      @click="place($event)"
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
        :draggable="false"
        @click="center = m.position"
      />
    </GmapMap>
    <p>{{ this.markers[0].position }}</p>
    <p>投稿</p>
    <button v-on:click="post">投稿</button>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "postForm",
  data() {
    return {
      title: "",
      review: "",
      markers: [
        {
          position: {
            lat: 35.717,
            lng: 139.731,
          },
        },
      ],
    }
  },

  methods: {
    post() {
      firebase.firestore().collection("posts").add({
        title: this.title,
        review: this.review,
        // position: new firebase.firestore.GeoPoint(
        //   Number(this.markers[0].position["lat"]),
        //   Number(this.markers[0].position["lng"])
        // ),
        position: this.markers[0].position,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      this.title = ""
      this.review = ""
      this.markers[0].position["lat"] = 0
      this.markers[0].position["lng"] = 0
    },
    place(event) {
      if (event) {
        let lat = event.latLng.lat()
        let lng = event.latLng.lng()
        console.log(lat + ", " + lng)
        this.markers[0].position = { lat: lat, lng: lng }
      }
    },
  },
}
</script>

<style scoped>
.map {
  margin: 0 auto;
}
.postform {
  text-align: center;
  padding: 50px;
}
</style>
