<template>
  <div class="cart-item jacobcart ">
      <div class="p-2 d-flex justify-content-between align-items-center ">

          <div class="d-flex align-items-center align-items-center rounded-circle ">

            <img :src="item.product.image" alt="" class="img-fluid image-width">
          </div>

          <div>
            <div>
                <div><strong>{{ item.product.name }}</strong></div>
                <div><small>{{ item.quantity }}  x  {{ item.product.price }} SEK  </small></div>
            </div>
          </div>


      <div >
          <div class="   btn-group-sm   d-flex justify-content-end mt-4 "  role="group">
                <button class=" btn btn-light mx-2 "  @click.stop="removeProduct({ product: item.product, quantity})"   ><i class="fas fa-minus fa-1x  " >  </i></button>
                
                <button class="btn btn-light "  @click.stop="addProduct({ product: item.product, quantity})" ><i class="fas fa-plus fa-1x " >  </i> </button>  
                                                                 
                                                                 
         
          </div>
                
             <!--  delete  -->
        
        <div class="d-flex justify-content-end mt-2">
          <button class=" border border-white btn-light hover-none mt-5 "   @click.stop="removeFromCart({ product: item.product, quantity}) "><i class="far fa-trash-alt fa-1x text-danger " ></i></button>
        </div>
          
      </div>
     
     
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
    name: 'ShoppingCartProduct',
    props:['item'],
     data() {
        return {
          quantity: 1,
         
        }
    },
   

   methods: {
        ...mapActions(['getOneProduct', 'cleanup', 'addProductToCart','removeProduct','addProduct','removeFromCart'])

    }, 
    computed: {
     ...mapGetters(['product','itemRemove'])
    
    },
   


}
</script>






<style>
.image-width {
 width: 80px;
 display: flex;
 justify-content: center;
 align-items: center;
}

.jacobcart {

  box-shadow: black;
  height: 180px;
}

.jacobcart:hover {
  background-color:rgba(200, 200, 214, 0.048);
 
  
}

.hover-none:hover {
  background-color:transparent;


}



</style>