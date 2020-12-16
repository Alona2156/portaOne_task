<template>
  <v-container
    class="px-0"
    fluid
  >
    <v-radio-group v-model="selectedLang" mandatory>
      <v-radio
        v-for="(lang, index) in languages"
        :key="index"
        :label="lang.name"
        :value="lang.locale"
      ></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  VContainer,
  VRadioGroup,
  VRadio,
} from 'vuetify/lib';

export default Vue.extend({
  components: {
    VContainer,
    VRadioGroup,
    VRadio,
  },
  data() {
    return {
      selectedLang: this.$i18n.locale,
      languages: [{ name: `${this.$t('English')}`, locale: 'en' },
        { name: `${this.$t('Russian')}`, locale: 'ru' },
        { name: `${this.$t('Ukrainian')}`, locale: 'ua' }],
    };
  },
});
</script>
