<script setup>
import  { useProductStore } from '@/stores/products'
import { computed, watchEffect } from 'vue'
import { RouterLink } from 'vue-router';
const storeProduct = useProductStore()


function formatNumberWithCommas(number) {
    const formattedNumber = Number(number).toFixed(2);
    return formattedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");   
}

const totalOverallPrice = computed(() => {
  return storeProduct.CartList.reduce((total, product) => total + product.totalProductPrice, 0)
})

watchEffect(() => {
  for (const product of storeProduct.CartList) {
    product.totalProductPrice = product.quatity * product.PriceCal
  }
})

const removeFromCart = (productId) => {
  storeProduct.removeFromCart(productId);
};


const placeOrder = () => {
    const hasInvalidQuantity = storeProduct.CartList.some(product => product.quatity <= 0);

    if (hasInvalidQuantity) {
        alert("จำนวนสินค้าต้องมากกว่า 0");
    } else {
        const orderData = {
            orderNumber: storeProduct.OrderList.length + 1,
            CartList: storeProduct.CartList,
            Total: storeProduct.totalOverallPrice,
            name: name.value,
            address: address.value,
            phoneNumber: phoneNumber.value,
        };
        alert("สั่งซื้อสำเร็จ! ตรวจสอบรายละเอียดการสั่งซื้อได้ที่ รายการสั่งซื้อ \uD83D\uDE0E \uD83D\uDE0E");
        storeProduct.addOrder(orderData);
    }
}
</script>

<template>
    <div v-if="storeProduct.CartList.length === 0" class="incompletecart mb-3">
        <div class="outcon" >
            <div class="maincontainer mt-3">
                <div class="carthead">
                    <h2>ตะกร้าสินค้า</h2>
                </div>

                <div class="bd-example">
                    <h4 style="color: rgb(255, 255, 255); padding-top: 35vh; padding-bottom: 35vh; text-align: center; background-color: rgb(18, 56, 95); border-radius: 20px;">
                        ไม่มีสินค้าในตะกร้า
                    </h4>
                    <RouterLink to="/" style="text-decoration: none;">
                        <div class="panelbuttcon">
                                <button type="button" class="btn btn-secondary" style="margin: auto; margin-bottom: 1%; width: 100%;">เลือกสินค้าเลย ! กดที่นี่</button>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        
    </div>


    <div v-else class="completecart">
        <div class="outcon" >
            <div class="maincontainer mt-3">
                <div class="carthead">
                    <h2>ตะกร้าสินค้า</h2>
                </div>

                <div class="bd-example">
                <table class="table custom-table"  style="text-align: center; vertical-align: middle;">
                    <thead>
                    <tr>
                    <th scope="col" style="width:40%;">สินค้า</th>
                    <th scope="col" style="width:10%;">ราคาต่อชิ้น</th>
                    <th scope="col" style="width:20%;">จำนวน</th>
                    <th scope="col" style="width:10%;">ราคารวม</th>
                    <th scope="col" style="width:20%;">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(productData, index) in storeProduct.CartList" :key="index">
                    <td class="product-grid">
                        <div class="product-image">
                        <img :src="productData.img" alt="" style="border-radius: 10px; width: 100%;">
                        </div>
                        <div class="product-name">
                        <span>{{ productData.Name }}</span>
                        </div>
                    </td>
                    <td>{{ productData.Price }}</td>
                    <td>
                        <div class="panelbuttcon">
                            <div class="buttcon">
                                <div class="butsemicon">
                                <div class="input-group mb-2">
                                    <span class="input-group-text quatitybuttbgminus">
                                    <button class="quatitybutt" @click="storeProduct.decrementQuantity(productData)">
                                        <img class="imgbutt" src="@/assets/minus.png" alt="minus">
                                    </button>
                                    </span>
                                    <input class="form-control no-spinners" type="number" min="0" v-model="productData.quatity" style="text-align: center; font-weight: bold; " >
                                    <span class="input-group-text quatitybuttbgplus">
                                    <button class="quatitybutt" @click="storeProduct.incrementQuantity(productData)">
                                        <img class="imgbutt" src="@/assets/plus.png" alt="minus">
                                    </button>
                                    </span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>{{ formatNumberWithCommas(productData.totalProductPrice) }} บาท</td>
                    <td>
                        <button class="binbutt" @click="removeFromCart(productData.id)">
                            <img src="@/assets/bin.png" alt="bin" style="width: 20%;">
                            ลบออกจากตะกร้า
                        </button>
                    </td>
                    </tr>
                    
                </tbody>

                </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>