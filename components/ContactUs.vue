<template>
  <div id="contactus">
    <v-responsive max-width="1300px" class="margined mx-auto">
      <div class="pb-14">
        <h1 class="contact-title px-6 px-sm-10 px-md-16 pt-10">Contact Us</h1>
        <v-row no-gutters class="justify-center">
          <v-col cols="5">
            <googlemaps-map
              class="map"
              :options="map_options"
              :center.sync="thecreamind_loc"
              :zoom.sync="zoom"
            >
              <googlemaps-marker
                :icon="markerIcon"
                :position="thecreamind_loc"
              /> </googlemaps-map
          ></v-col>
          <v-col class="address mx-10" cols="3"
            ><div class="address-title mb-5">ADDRESS</div>
            <div>The Crea Mind</div>
            <div>Thaazhe Angadi Road</div>
            <div>Near Jyothi Hospital</div>
            <div>Mananathawady</div>
            <div>Wayanad district</div>
            <div>Kerala, India</div>
            <div>Pin: 670645</div>
            <div class="mob my-6">Call us at: +91 90744 17193</div></v-col
          ><v-col
            ><v-row
              ><img
                class="social-media-links mx-3"
                width="50"
                :src="require('~/assets/whatsapp.svg')" /><img
                class="social-media-links mx-3"
                width="50"
                :src="require('~/assets/fb.svg')" /><img
                class="social-media-links mx-3"
                width="50"
                :src="require('~/assets/insta.svg')" /><img
                class="social-media-links mx-3"
                width="50"
                :src="require('~/assets/youtube.svg')"
            /></v-row>
          </v-col>
        </v-row>
      </div>
    </v-responsive>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  // Styling: https://mapstyle.withgoogle.com/
  // Marker: "http://www.googlemapsmarkers.com/v1/33C1AF/"
  data() {
    return {
      thecreamind_loc: {
        lat: 11.733344,
        lng: 75.937353,
      },
      zoom: 12,
      markerIcon: require('~/assets/google-map-marker.png'),
      map_options: {
        disableDefaultUI: true,
        styles: [
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5',
              },
            ],
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161',
              },
            ],
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#f5f5f5',
              },
            ],
          },
          {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#bdbdbd',
              },
            ],
          },
          {
            featureType: 'administrative.neighborhood',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'poi',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                color: '#ffffff',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#dadada',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161',
              },
            ],
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e',
              },
            ],
          },
          {
            featureType: 'transit',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5',
              },
            ],
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#c9c9c9',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e',
              },
            ],
          },
        ],
      },
    }
  },
})
</script>

<style scoped lang="scss">
.map {
  height: 35vh;
  // min-width: 30vw;
}
.contact-title {
  font-size: 30px;
  font-family: 'Nexa-Bold';
  color: black;
}
.address-title {
  font-size: 20px;
  font-family: 'Nexa-Bold';
  color: black;
  letter-spacing: 3px;
}
.address {
  font-size: 14px;
  font-family: 'Nexa-Regular';
  color: black;
  letter-spacing: 2px;
}
.mob {
  font-size: 20px;
  font-family: 'Nexa-Bold';
  color: black;
  letter-spacing: 2px;
}
.social-media-links {
  box-sizing: border-box;
}
.social-media-links:hover {
  transform: scale(1.3);
  border: 2px solid black;
  border-radius: 50px;
}
</style>
