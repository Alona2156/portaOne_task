<template>
  <div class="posts">
    <h1 class="app__main__title">Posts</h1>
    <v-container>
      <v-row dense>
        <v-col cols="3" v-for="(post, index) in posts" align-self="center"
            :key="index">
          <v-card
            class="posts__card"
            :to="{
              name: 'Post',
              params: {
                id: post.id
              }
            }"
            hover
          >
            <v-card-title class="headline posts__card-title"> {{ post.title }} </v-card-title>
            <v-card-text class="posts__card-body"> {{ post.body }}</v-card-text>
          </v-card>
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
  VCard,
  VCardTitle,
  VCardText,
} from 'vuetify/lib';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('Posts');

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
    ...mapState(['posts']),
  },
  methods: {
    ...mapActions(['getPosts']),
  },
  created() {
    this.getPosts();
  },
});
</script>

<style lang="scss" scoped>
@mixin text-overflow($wclamp: 1) {
  display: -webkit-box !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $wclamp;
  -moz-line-clamp: $wclamp;
  -ms-line-clamp: $wclamp;
  -o-line-clamp: $wclamp;
}

.posts__card {
  max-width: 300px;
  ~ .posts__card {
    margin-top: 12px;
  }
}

.posts__card-title {
  $fz:1.1rem;
  $lh: 1.4rem;
  $rows: 2;
  $p: 16px;
  @include text-overflow($rows);
  font-size: $fz;
  line-height: $lh;
  max-height: calc((#{$fz} + #{$lh}) * #{$rows} - #{$p});
  padding-bottom: 0;
  border-bottom: 4px solid white;
}

.posts__card-body {
  $fz:0.875rem;
  $lh: 1.1rem;
  $rows: 3;
  $p: 16px;
  @include text-overflow($rows);
  font-size: $fz;
  line-height: $lh;
  height: calc((#{$fz} + #{$lh}) * #{$rows} - #{$p}*2);
  padding-bottom: 0;
  border-bottom: 10px solid white;
}
</style>
