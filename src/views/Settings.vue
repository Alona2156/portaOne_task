<template>
  <div class="settings">
    <h1 class="app__main__title">{{ $t("Settings") }}</h1>
    <LanguageSelector />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LanguageSelector from '@/components/LanguageSelector.vue';

export default Vue.extend({
  components: {
    LanguageSelector,
  },
});
</script>
