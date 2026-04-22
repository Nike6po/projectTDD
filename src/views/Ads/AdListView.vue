<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="ad in myAds" :key="ad.id">
        <v-card class="elevation-10 mb-5">
          <v-img :src="ad.src" height="200px"></v-img>
          <v-card-title>
            <h3>{{ ad.title }}</h3>
          </v-card-title>
          <v-card-text>
            <p>{{ ad.desc }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text :to="'/ad/' + ad.id">Open</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds() {
      return this.$store.getters.myAds
    }
  }
}
</script>