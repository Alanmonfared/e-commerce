<template>
  <div class="colorjacob ">
    <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product.id" :item="item" />
      
     <div v-if="shoppingCart.length < 1">
        <div class="p-2 d-flex justify-content-center align-items-center ">
           
            <!-- Shooping items -->


        </div>
        <div class="dropdown-divider "></div>
     </div>
     
     
      

     
     
     
      <div class="p-2 d-flex justify-content-between align-items-center bg-light border-top">
        <div>
            <div class="total-price">
                 <span ><h5 class="text-">Total sum:
                  </h5> {{ totalCounter }} SEK </span>               
            </div>
               
        </div>  
        <router-link type="button" to="/Userorder" class="btn btn-dark ">Go to checkout</router-link>
      </div>         
  
      
          
  
  </div>
</template>

<script>
import { mapGetters} from 'vuex'
import ShoppingCartProduct from './ShoppingCartProduct'


export default {
name: 'ShoppingCarts',
 props:['_id'],
  components: {
    ShoppingCartProduct
  },
  computed: {
  ...mapGetters(['shoppingCart', 'totalCounter'])
  },
   

}
</script>

<style>



</style>