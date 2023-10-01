<script setup>
import { RouterView } from 'vue-router'
import BlogHeader from './views/BlogHeader.vue';

</script>

<template>
   <!----<RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
  <div class="container">
    <BlogHeader></BlogHeader>
    <div class="main">
      <RouterView />
    </div>
    <div class="footer"></div>
  </div>
</template>

<style scoped></style>
