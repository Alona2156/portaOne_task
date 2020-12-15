<template>
  <div class="posts">
    <h1 class="app__main__title">Posts</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('Posts');

export default Vue.extend({
  computed: {
    ...mapState(['posts']),
  },
  methods: {
    ...mapActions(['getPosts']),
  },
  created() {
    this.getPosts();
  },
});
</script>
