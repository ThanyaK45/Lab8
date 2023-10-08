<script setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/products';
import { computed } from 'vue'; 




const route = useRoute();
const storeProduct = useProductStore();

const productId = Number(route.params.id);

const product = computed(() => {
  return storeProduct.productsList.find(product => product.id === productId);
  
});


</script>

<template>
    <div class="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style="padding-bottom: 48px;">
      <div class="my-3 py-3">
        <h2 class="display-5">{{ product.Name }}</h2>
        <p class="lead"></p>
      </div>
      <div class="bg-body-tertiary shadow-sm mx-auto" style="width: 500px;height: 500px;border-radius: 21px 21px 0px 0px;">
        <img src=" " alt="" style="width: 500px;height: 500px;"></div>
      <button class="btn btn-light rounded-pill px-3" type="button" style="margin-top: 50px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>Add to cart</button>
      </div>
</template>

<style scoped>

</style>