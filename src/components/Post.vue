<template>
  <v-container class="post">
    <h1 class="post__header">{{ $t("Detailed post") }}</h1>
    <v-row dense>
      <v-col align-self="center">
        <v-card class="post__card">
          <v-card-title class="headline post__card-title">
            {{ selectedPost.title }}
          </v-card-title>
          <v-card-text class="post__card-body">
            {{ selectedPost.body }}</v-card-text
          >
        </v-card>
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
  VCard,
  VCardTitle,
  VCardText,
} from 'vuetify/lib';
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('Posts');

export default Vue.extend({
  components: {
    VContainer,
    VRow,
    VCol,
    VCard,
    VCardTitle,
    VCardText,
  },
  computed: {
    ...mapState(['selectedPost']),
  },
});
</script>

<style lang="scss" scoped>
.post__header {
  margin-bottom: 12px;
}
.post__card {
  cursor: default;
}
.post__card-title {
  padding-bottom: 5px;
}
.post__card-body.v-card__text {
  text-align: left;
  font-size: 1rem;
}
</style>
