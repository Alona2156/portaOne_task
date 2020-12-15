<template>
  <v-container class="photo">
    <h1 class="photo__header">{{ selectedPhoto.title }}</h1>
    <v-row dense>
      <v-col align="center">
        <v-img max-width="600" max-height="600" :src="selectedPhoto.url" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  VContainer,
  VRow,
  VCol,
  VImg,
} from 'vuetify/lib';
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('Photos');

export default Vue.extend({
  components: {
    VContainer,
    VRow,
    VCol,
    VImg,
  },
  computed: {
    ...mapState(['selectedPhoto']),
  },
});
</script>

<style lang="scss" scoped>
.photo__header {
  margin-bottom: 12px;
}
</style>
