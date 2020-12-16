<template>
  <v-card width="auto" class="nav-drawer">
    <v-navigation-drawer permanent :expand-on-hover="expendOnHover">
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon class="nav-drawer__icon">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="nav-drawer__title">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  VCard,
  VNavigationDrawer,
  VList,
  VListItem,
  VListItemIcon,
  VListItemContent,
  VListItemTitle,
  VIcon,
} from 'vuetify/lib';

import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('Settings');

export default Vue.extend({
  components: {
    VCard,
    VNavigationDrawer,
    VList,
    VListItem,
    VListItemIcon,
    VListItemContent,
    VListItemTitle,
    VIcon,
  },
  data() {
    return {
      right: null,
    };
  },
  computed: {
    ...mapState(['navDrawerType']),
    expendOnHover(): boolean {
      return this.navDrawerType === 'mini';
    },
    items(): {}[] {
      return [
        {
          title: this.$t('Posts'),
          icon: 'mdi-post',
          link: {
            name: 'Posts',
            params: {
              lang: `${this.$i18n.locale}`,
            },
          },
        },
        {
          title: this.$t('Photos'),
          icon: 'mdi-image',
          link: {
            name: 'Photos',
            params: {
              lang: `${this.$i18n.locale}`,
            },
          },
        },
        {
          title: this.$t('Settings'),
          icon: 'mdi-cogs',
          link: {
            name: 'Settings',
            params: {
              lang: `${this.$i18n.locale}`,
            },
          },
        },
      ];
    },
  },
});
</script>

<style lang="scss" scoped>
.nav-drawer {
  height: 100%;
}
.nav-drawer__icon.v-icon {
  margin-right: 32px;
  color: rgba(0, 0, 0, 0.54);
}
.nav-drawer__title {
  text-align: left;
}
</style>
