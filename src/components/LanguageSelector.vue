<template>
  <v-container class="px-0" fluid>
    <v-radio-group v-model="selectedLang" mandatory>
      <v-radio
        v-for="(lang, index) in languages"
        :key="index"
        :label="lang.name"
        :value="lang.locale"
        off-icon="mdi-radiobox-blank"
        on-icon="mdi-radiobox-marked"
        class="language__radio"
      ></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { VContainer, VRadioGroup, VRadio } from 'vuetify/lib';

export default Vue.extend({
  components: {
    VContainer,
    VRadioGroup,
    VRadio,
  },
  data() {
    return {
      selectedLang: this.$i18n.locale,
    };
  },
  computed: {
    languages() {
      return [
        { name: `${this.$t('English')}`, locale: 'en' },
        { name: `${this.$t('Russian')}`, locale: 'ru' },
        { name: `${this.$t('Ukrainian')}`, locale: 'ua' },
      ];
    },
  },
  watch: {
    selectedLang(lang: string) {
      this.$router.push({
        name: 'Settings',
        params: {
          lang,
        },
      });
      document.documentElement.setAttribute('lang', lang);
      this.$root.$i18n.locale = lang;
    },
  },
});
</script>

<style lang="scss" scoped>
.language__radio {
  ::v-deep .v-label {
    margin-left: 10px;
  }
}
</style>
