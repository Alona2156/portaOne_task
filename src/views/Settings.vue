<template>
  <div class="settings">
    <h1 class="app__main__title">{{ $t("Settings") }}</h1>
    <LanguageSelector />
    <ImagesSelector />
    <NavDrawerSelector />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LanguageSelector from '@/components/Settings/LanguageSelector.vue';
import ImagesSelector from '@/components/Settings/ImagesSelector.vue';
import NavDrawerSelector from '@/components/Settings/NavDrawerSelector.vue';

export default Vue.extend({
  components: {
    LanguageSelector,
    ImagesSelector,
    NavDrawerSelector,
  },
});
</script>
