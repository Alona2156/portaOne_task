<template>
  <div id="app">
    <NavigationDrawer />
    <router-view class="app__main"/>
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
html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  cursor: default;
}

.app__main {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.app__main__title {
  margin: 10px auto 0;
}
</style>
