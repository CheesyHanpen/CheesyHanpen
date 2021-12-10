<template>
  <div class="home">
    <GmapMap
      :center="{ lat: 35.717, lng: 139.731 }"
      :zoom="10"
      map-type-id="terrain"
      style="width: 1500px; height: 700px"
    >
      <!-- <GmapInfoWindow
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      >
        <p>{{ this.markers }}!!</p>
      </GmapInfoWindow> -->
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        :label="m.label"
        @click="openWindow(m)"
      >
      </GmapMarker>
    </GmapMap>
    <!-- v-forで無理やり表示しました -->
    <p v-for="(info, index) in infos" :key="index" class="info">
      <!-- {{ this.markers }}
      {{ this.markers[0].position }} -->
      タイトル：{{ info["title"] }} | レビュー：{{ info["review"] }}
    </p>
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
      infos: [],
    }
  },
  methods: {
    openWindow(value) {
      this.infos.push(value)
      console.log(this.infos)
    },
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
.home {
  padding: 50px;
}

.info {
  /* width: 500px; */
  margin: 30px auto;
  /* text-align: center; */
  position: relative;
  background: #f4a006;
  -webkit-box-shadow: 0px 0px 0px 5px #f4a006;
  box-shadow: 0px 0px 0px 5px #f4a006;
  border: dashed 2px #fff;
  padding: 1em 1em;
  color: #fff;
}
</style>
