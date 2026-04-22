<template>
  <div>
    <!-- Карусель -->
    <v-carousel>
      <v-carousel-item
        v-for="ad in ads"
        :key="ad.id"
        :src="ad.src"
      >
        <div class="ad-link">
          <v-btn class="error" :to="'/ad/' + ad.id">
            {{ ad.title }}
          </v-btn>
        </div>
      </v-carousel-item>
    </v-carousel>

    <!-- Grid с карточками -->
    <v-container>
      <v-row>
        <v-col
          v-for="ad in ads"
          :key="ad.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card>
            <v-img
              :src="ad.src"
              height="200px"
              cover
            ></v-img>
            <v-card-title>
              {{ ad.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ ad.desc }}
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :to="'/ad/' + ad.id" text>Open</v-btn>
              <buy-ad-modal :ad="ad"></buy-ad-modal>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    ads() {
      return this.$store.getters.ads || []
    }
  }
}
</script>

<style scoped>
.ad-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba(0, 0, 0, 0.6);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-radius: 5px;
}
</style>