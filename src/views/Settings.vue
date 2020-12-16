<template>
  <div class="settings">
    <h1 class="app__main__title">{{ $t("Settings") }}</h1>
    <LanguageSelector />
    <ImagesSelector />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LanguageSelector from '@/components/LanguageSelector.vue';
import ImagesSelector from '@/components/ImagesSelector.vue';

export default Vue.extend({
  components: {
    LanguageSelector,
    ImagesSelector,
  },
});
</script>
