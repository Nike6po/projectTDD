<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mt-5">
          <v-img
            height="400px"
            :src="ad.src"
            cover
          ></v-img>
          <v-card-text>
            <h1 class="text--primary mb-3">{{ ad.title }}</h1>
            <p>{{ ad.desc }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <EditAdModal :ad="ad" v-if="isOwner" />
            <buy-ad-modal :ad="ad"></buy-ad-modal>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal.vue'

export default {
  props: ['id'],
  components: {
    EditAdModal
  },
  computed: {
    ad() {
      return this.$store.getters.adById(this.id)
    },
    isOwner() {
      const user = this.$store.getters.user
      return user && this.ad.userId == user.id
    }
  }
}
</script>
