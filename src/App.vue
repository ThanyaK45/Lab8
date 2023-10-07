<script setup>
import { RouterView } from 'vue-router'
import BlogHeader from './views/BlogHeader.vue';
import MainPage from './views/MainPage.vue';

</script>

<template>
  <div class="container">
    <BlogHeader></BlogHeader>
  </div>
  <div class="main">
      <MainPage></MainPage>
  </div>
  <div class="footer"></div>
  
</template>

<style scoped></style>
