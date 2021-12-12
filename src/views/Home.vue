<template>
  <div class="home">
    <vav>
      <h1>About</h1>
      <h3>1,あなたの旅の記録を投稿しよう</h3>
      <p>
        Postであなたの言った場所のレビューができます。あなたの旅の記録を残そう！
      </p>
      <h3>2,皆の旅の記録を見てみよう</h3>
      <p>下のMAPから、皆のレビューを見てみよう！旅の参考になるかも？</p>
    </vav>
    <GmapMap
      class="map"
      :center="{ lat: 35.717, lng: 139.731 }"
      :zoom="10"
      map-type-id="terrain"
      style="width: 90%; height: 700px"
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
h1,
h3,
p {
  text-align: center;
}

.home {
  width: 100%;
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

.map {
  margin: 100px auto;
}

.signoutbutton {
  display: flex;
  justify-content: center;
}
</style>
