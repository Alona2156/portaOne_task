<template>
  <v-container class="pa-5" fluid>
    <v-sheet>
      <v-switch
        color="primary"
        v-model="drawerType"
        inset
        :label="$t('Mini navigation drawer')"
      ></v-switch>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { VContainer, VSheet, VSwitch } from 'vuetify/lib';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations } = createNamespacedHelpers('Settings');

export default Vue.extend({
  components: {
    VContainer,
    VSheet,
    VSwitch,
  },
  data() {
    return {
      drawerType: false,
    };
  },
  computed: {
    ...mapState(['navDrawerType']),
  },
  methods: {
    ...mapMutations(['changeNavDrawerType']),
  },
  created() {
    this.drawerType = this.navDrawerType === 'mini';
  },
  watch: {
    drawerType(val: boolean) {
      this.changeNavDrawerType(val);
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
