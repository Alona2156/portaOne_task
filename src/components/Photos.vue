<template>
  <div class="photos">
    <h1 class="app__main__title">Photos</h1>
    <v-container>
      <v-row dense>
        <v-col cols="3" v-for="(photo, index) in photos" align-self="start"
            :key="index">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  VContainer,
  VRow,
  VCol,
} from 'vuetify/lib';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('Photos');

export default Vue.extend({
  components: {
    VContainer,
    VRow,
    VCol,
  },
  computed: {
    ...mapState(['photos']),
  },
  methods: {
    ...mapActions(['getPhotos']),
  },
  created() {
    this.getPhotos();
  },
});
</script>

<style lang="scss" scoped>
</style>
