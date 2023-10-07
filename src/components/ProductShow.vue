<script setup>
import { RouterLink } from 'vue-router';
import  { useProductStore } from '@/stores/products'

const storeProduct = useProductStore()

const addToCart = (productData) => {
  storeProduct.addToCart({
    id: productData.id,
    Name: productData.Name,
    Price: productData.Price,
    PriceCal: productData.PriceCal,
    img: productData.img,
    quatity: productData.quatity,
  });
};
</script>

<template>
    <div class="row mb-2">
        <div class="col-md-6" v-for="(productData, index) in storeProduct.productsList" :key="index">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static" >
            <h3 class="mb-0">{{ productData.Name }}</h3>
            <p>{{ productData.Price }}</p>
            <p class="card-text mb-auto"></p>
            <RouterLink :to="{name: 'productDetail', params: {id: productData.id}}" class="btn btn-dark rounded-pill px-3">
                About Product
            </RouterLink>
            </div>
            <RouterLink :to="{name: 'productDetail', params: {id: productData.id}}" class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg">
                <title>{{ productData.Name }}</title>
                <rect width="100%" height="100%" fill="#fff"/>
                <img :src="productData.img" x="0" y="0" width="200" height="250" alt="productImg">
                </svg>
            </RouterLink>
        </div>
        </div>
    </div>
</template>