import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id : 'productList',
  idCounter : 'counter',
  state: () => ({
    counter : 1,
    productsList : [
      { id : 1,
        Name : 'ASRV เสื้อกันหนาวมีฮู้ด Unisex Top Coat',
        Price : '฿273.00',
        PriceCal : 273.00, 
        img : "https://github.com/ThanyaK45/Lab8/blob/main/src/assets/ASRV.png?raw=true"},
      { id : 2,
        Name : 'FARUILINE STORE กางเกงคาร์โก้ลําลอง',
        Price : '฿363.00',
        PriceCal : 363.00, 
        img : 'https://github.com/ThanyaK45/Lab8/blob/main/src/assets/Cargo.png?raw=true'},
      { id : 3,
        Name : 'Converse Run Star Hike Lugged',
        Price : '฿3,600.00',
        PriceCal : 3600.00, 
        img : 'https://github.com/ThanyaK45/Lab8/blob/main/src/assets/Converse.png?raw=true'},
      { id : 4,
        Name : 'หมวกเบสแฟชั่น ปักลายดาว',
        Price : '฿120.00', 
        PriceCal : 120.00,
        img : 'https://github.com/ThanyaK45/Lab8/blob/main/src/assets/Caps.jpg?raw=true'},
      { id : 5,
        Name : 'Feiyana Backpack',
        Price : '฿350.00',
        PriceCal : 350.00, 
        img : 'https://github.com/ThanyaK45/Lab8/blob/main/src/assets/Backpacks.jpg?raw=true'},
      { id : 6,
        Name : 'Apple AirPods 3',
        Price : '฿5,890.00',
        PriceCal : 5890.00, 
        img : 'https://github.com/ThanyaK45/Lab8/blob/main/src/assets/Airpods.jpg?raw=true'},
      { id : 7,
        Name : 'Adidas Samba OG Unisex',
        Price : '฿3,800.00', 
        PriceCal : 3800.00,
        img : 'https://github.com/ThanyaK45/Lab8/blob/main/src/assets/Adidas.jpg?raw=true'},
      { id : 8,
        Name : 'Adidas Essentials Training Duffel Bag',
        Price : '฿1,000.00', 
        PriceCal : 1000.00,
        img : 'https://github.com/ThanyaK45/Lab8/blob/main/src/assets/Adidasbag.jpg?raw=true'},
      { id : 9,
        Name : 'Oversized parka',
        Price : '฿2,699.00', 
        PriceCal : 2699.00, 
        img : 'https://github.com/ThanyaK45/Lab8/blob/main/src/assets/hmcoat.jpg?raw=true'},
      { id : 10,
        Name : 'Regular Fit Corduroy shirt',
        Price : '฿799.00',
        PriceCal : 799.00, 
        img : 'https://github.com/ThanyaK45/Lab8/blob/main/src/assets/hmshirt.jpg?raw=true'},
        ],
        CartList : [],
        OrderList : [],
        totalOverallPrice: 0
  }),
  getters: {
    totalOverallPrice() {
      return this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },

  },
  actions: {
    incrementQuantity(product) {
      product.quatity++;
    },
    decrementQuantity(product) {
      if (product.quatity > 0) {
        product.quatity--;
      }
    },
    addToCart(productData) {
      const existingProduct = this.CartList.find((product) => product.id === productData.id);
      if (existingProduct) {
        if (productData.quatity > 0) {
          existingProduct.quatity += productData.quatity;
          existingProduct.totalProductPrice = existingProduct.quatity * existingProduct.PriceCal;
          alert(`เพิ่ม ${productData.Name} เข้าตะกร้าแล้ว! \ud83d\ude01 `);

        }
      } else {
        if (productData.quatity > 0) {
          const newProduct = { ...productData };
          newProduct.totalProductPrice = newProduct.quatity * newProduct.PriceCal;
          this.CartList.push(newProduct);
          alert(`เพิ่ม ${productData.Name} เข้าตะกร้าแล้ว! \ud83d\ude01`);

        }
      }

      const productIndex = this.productsList.findIndex((product) => product.id === productData.id);
      if (productIndex !== -1) {
        this.productsList[productIndex].quatity = 0;
      }
  
      
      this.updateTotalOverallPrice();
      
    },

    updateTotalOverallPrice() {
      this.totalOverallPrice = this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },
    removeFromCart(productId) {
      const productIndex = this.CartList.findIndex((product) => product.id === productId);
      if (productIndex !== -1) {
        this.CartList.splice(productIndex, 1); 
        this.updateTotalOverallPrice();
      }
    },
    addOrder(orderData) {
      this.OrderList.push(orderData);
      this.CartList = [];
      this.totalOverallPrice = 0;
    },
  },  
      
})

