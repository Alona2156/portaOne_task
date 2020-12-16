<template>
  <v-card width="256" class="mx-auto nav-drawer">
    <v-navigation-drawer permanent>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon class="nav-drawer__icon">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="nav-drawer__title">{{ item.title }}</v-list-item-title>
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
      items: [
        { title: this.$t('Posts'), icon: 'mdi-post', link: '/posts' },
        { title: this.$t('Photos'), icon: 'mdi-image', link: '/photos' },
        { title: this.$t('Settings'), icon: 'mdi-cogs', link: '/settings' },
      ],
      right: null,
    };
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
