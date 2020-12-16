<template>
  <v-container class="pa-5" fluid>
    <v-sheet>
      <v-switch
        color="primary"
        v-model="navDrawerType"
        inset
        label="Mini navigation drawer"
      ></v-switch>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { VContainer, VSheet, VSwitch } from 'vuetify/lib';

export default Vue.extend({
  components: {
    VContainer,
    VSheet,
    VSwitch,
  },
  data() {
    return {
      navDrawerType: false,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
