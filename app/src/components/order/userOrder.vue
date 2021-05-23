<template>
  <div class="mt4 ">
          <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product.id" :item="item" />
           <div class="p-2 d-flex justify-content-between align-items-center bg-light border-top">
        <div>
            <div class="total-price  ">
                 <span ><h5 class="text-">Total sum:  </h5> {{ totalCounter }} SEK </span>    
                            
            </div>
               
        </div>  
     
      </div>         
  
      

  </div>
</template>

<script>
import ShoppingCartProduct from '../cart/ShoppingCartProduct'
import { mapGetters } from 'vuex'

export default {
        
    props:['item'],
       components: {
        ShoppingCartProduct
    },

       computed: {
     ...mapGetters(['shoppingCart','totalCounter'])
    
    },
   
}


</script>

<style>

.mt4 {
 margin-top:10rem;


}



</style>