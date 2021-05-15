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
                 <span ><h5 class="text-">Totalsumma (inkl. moms):
                  </h5> {{ totalCounter }} Kr </span>               
            </div>
                <!-- <small class="text-muted">inkl.moms</small> -->
        </div>  
        <button class="btn btn-dark ">Gå till kassan</button>
      </div>          <!-- <router-link :to="{ name: 'ShoppingCart', params:{ id: product._id }}" type="button" class="btn btn-info mx-2 mt-5 mb-4">Show watch</router-link> -->

  
      
          
  
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
  // methods: {
  //   ...mapActions('addProductToCart')
  // }  

}
</script>

<style>



</style>