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
            <div class="panelbuttcon">
              <div class="panelbuttcon">
                <div class="buttcon">
                  <div class="input-group mb-2">
                    <span class="input-group-text quatitybuttbgminus">
                      <button class="quatitybutt" @click="storeProduct.decrementQuantity(productData)">
                        <img class="imgbutt" src="@/assets/minus.png" alt="">
                      </button>
                    </span>
                    <input class="form-control no-spinners" type="number" v-model="productData.quatity" style="font-weight: bold; text-align: center; font-size: smaller; color: rgb(11, 34, 57);" min="0">
                    <span class="input-group-text quatitybuttbgplus">
                      <button class="quatitybutt" @click="storeProduct.incrementQuantity(productData)">
                        <img class="imgbutt" src="@/assets/plus.png" alt="">
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="panelbuttcon">
              <button type="button" class="btn btn-success" style="margin: auto; margin-bottom: 1%;"  @click="addToCart(productData)">เพิ่มลงในตะกร้า</button>
            </div>
            <RouterLink :to="{name: 'productDetail', params: {id: productData.id}}" class="btn btn-dark rounded-pill px-3">
                About Product
            </RouterLink>
            </div>
            <RouterLink :to="{name: 'productDetail', params: {id: productData.id}}" class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" >
                <title>{{ productData.Name }}</title>
                </svg>
                <div class="card cardframe" >
                <img :src="productData.img" class="card-img-top" alt="productImg" width="200" height="250">
                </div>
            </RouterLink>
            
        </div>
        </div>
    </div>
</template>

<style scoped>
.panelbuttcon{
  display: flex;
}

.buttcon{
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  
}

.quatitybuttbgminus:hover{
background-color: rgb(248, 79, 49);
}

.quatitybuttbgplus:hover{
background-color: rgb(35, 197, 82);
}


.quatitybutt{
  border: hidden;   
  background-color: transparent;
}

.no-spinners::-webkit-inner-spin-button,
.no-spinners::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0; /* Optional: Adjust margin to control spacing */
}


.imgbutt{
  width: 1vw;
}
</style>