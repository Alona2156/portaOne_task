<template>
  <v-container class="px-0" fluid>
    <v-text-field
      :label='$t("Photos per page")'
      v-model.number="photos"
      :rules="rules.quantity"
      class="img-selector__input"
    ></v-text-field>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { VContainer, VTextField } from 'vuetify/lib';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations } = createNamespacedHelpers('Photos');

export default Vue.extend({
  components: {
    VContainer,
    VTextField,
  },
  data() {
    return {
      photos: 0,
      rules: {
        quantity: [
          (val: number) => (val && val > 0) || 'Is not valid',
          (val: number) => (typeof val === 'number') || 'Is not valid',
        ],
      },
    };
  },
  computed: {
    ...mapState(['photosPerPage']),
  },
  methods: {
    ...mapMutations(['updatePhotosPerPage']),
  },
  watch: {
    photosPerPage: {
      immediate: true,
      handler(num: number) {
        this.photos = num;
      },
    },
    photos(num: number) {
      if (typeof num === 'number' && num > 0) {
        this.updatePhotosPerPage(num);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.img-selector__input {
  max-width: 250px;
  ::v-deep .v-label {
    transform: translateY(-18px) scale(1);
    font-size: 0.85rem;
  }
}
</style>
