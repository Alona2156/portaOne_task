<template>
  <div class="photos">
    <div
      class="photos__inner"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="5"
    >
      <h1 class="app__main__title">{{ $t('Photos') }}</h1>
      <v-container>
        <v-row dense>
          <v-col
            cols="2"
            v-for="(photo, index) in photos"
            align-self="start"
            :key="index"
          >
            <router-link
              :to="{
                name: 'Photo',
                params: {
                  id: photo.id,
                },
              }"
            >
              <v-img
                max-height="300"
                max-width="300"
                :src="photo.thumbnailUrl"
              />
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  VContainer, VRow, VCol, VImg,
} from 'vuetify/lib';
import infiniteScroll from 'vue-infinite-scroll';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations, mapActions } = createNamespacedHelpers('Photos');

export default Vue.extend({
  components: {
    VContainer,
    VRow,
    VCol,
    VImg,
  },
  data() {
    return {
      busy: true,
    };
  },
  computed: {
    ...mapState(['photos', 'currentPage']),
  },
  methods: {
    ...mapMutations(['updateCurrentPage']),
    ...mapActions(['getPhotos']),
    loadMore() {
      this.busy = true;
      this.updateCurrentPage();
    },
  },
  mounted() {
    this.getPhotos().then(() => {
      window.setTimeout(() => {
        this.busy = false;
      }, 1000);
    });
  },
  directives: { infiniteScroll },
  watch: {
    currentPage() {
      this.getPhotos().then(() => {
        this.$el.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        window.setTimeout(() => {
          this.busy = false;
        }, 1000);
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.photos {
  max-height: 100%;
  overflow: auto;
}

.photos__inner {
  min-height: 100%;
}
</style>
