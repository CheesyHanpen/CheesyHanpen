<template>
  <div class="home">
    <p>
      {{ this.markers }}
      {{ this.markers[0].position }}
    </p>
    <GmapMap
      :center="{ lat: 35.717, lng: 139.731 }"
      :zoom="10"
      map-type-id="terrain"
      style="width: 1500px; height: 700px"
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
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: "home",
  data() {
    return {
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
        this.markers = array
      })
    // console.log(this.markers)
  },
}
</script>

<style>
.home{
  padding: 50px;
}
</style>
