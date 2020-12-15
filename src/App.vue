<template>
  <div id="app">
    <NavigationDrawer />
    <router-view />
  </div>
</template>

<script type="ts">
import Vue from 'vue';
import NavigationDrawer from '@/components/NavigationDrawer.vue';

export default Vue.extend({
  components: {
    NavigationDrawer,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
