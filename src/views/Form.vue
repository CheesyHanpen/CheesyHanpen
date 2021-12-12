<template>
  <div class="post-form">
    <p>Title</p>
    <input v-model="title" placeholder="Title..." />
    <p>Review</p>
    <textarea v-model="review" placeholder="Comment..."></textarea>
    <p>Location</p>
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
    <button v-on:click="post">POST</button>
    <Signout class="signoutbutton" />
  </div>
</template>

<script>
import firebase from "firebase"
import Signout from "../components/Signout.vue"

export default {
  components: {
    Signout,
  },
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
input,
textarea {
  width: 500px;
}

button {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  color: #67c5ff;
  border: double 4px #67c5ff;
  border-radius: 3px;
  transition: 0.4s;
}
button:hover {
  background: #fffbef;
}

textarea {
  height: 200px;
}

.map {
  margin: 0 auto;
}
.post-form {
  width: 100%;
  text-align: center;
  padding: 50px;
}
.signoutbutton {
  display: flex;
  justify-content: center;
}
</style>
