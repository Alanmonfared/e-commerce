<template>
  <div class="cart-item jacobcart ">
      <div class="p-2 d-flex justify-content-between align-items-center ">

          <div class="d-flex align-items-center align-items-center rounded-circle ">

            <img :src="item.product.image" alt="" class="img-fluid image-width">
          </div>

          <div>
            <div>
                <div><strong>{{ item.product.name }}</strong></div>
                <div><small>{{ item.quantity }}  x  {{ item.product.price }} Kr  </small></div>
            </div>
          </div>


      <div >
          <div class="   btn-group-sm   d-flex justify-content-end mt-4 "  role="group">
                <button class=" btn btn-light mx-2 " @click.stop="removeProduct({product, quantity})"   ><i class="fas fa-minus fa-1x bg " >  </i></button>
                
                <button class="btn btn-light "  @click.stop="addProductToCart({ product,  quantity})" ><i class="fas fa-plus fa-1x " >  </i> </button>  
                
          </div>
        <div class="d-flex justify-content-end mt-2">
          <button class=" border border-white btn-light hover-none mt-5 "   @click.stop="removeProduct({ item, product, quantity}) "><i class="far fa-trash-alt fa-1x text-danger " ></i></button>
          <!-- <i class="fas fa-plus" type="button"></i> -->
          <!-- <input type="number" class=" d-flex border-primary" min="10" v-model="quantity"> -->
          </div>
          
      </div>
     
     
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
    name: 'ShoppingCartProduct',
    props:['item','_id'],
     data() {
        return {
          quantity: 1,
          // quantityRemover: -1
        }
    },
    // methods: {
    //     ...mapActions(['innerCounterAdder'])

    // },
    // computed: {
    //     ...mapGetters(['addToInnerCart' ]) 
    // },

   methods: {
        ...mapActions(['getOneProduct', 'cleanup', 'addProductToCart','removeProduct','addProduct'])

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
  /* background-color:rgba(0, 0, 255, 0.431); */
  box-shadow: black;
  height: 180px;
}

.jacobcart:hover {
  background-color:rgba(200, 200, 214, 0.048);
  /* box-shadow: 0px 4px 2px gray; */
  
}

.hover-none:hover {
  background-color:transparent;


}

/* .border-none {
  border
} */

/* 
   .card1{
     border-bottom: 2px solid rgb(71, 71, 71);
         width: 100%;
         max-width: 100%;
         margin-top: 2rem!important;
       
      
   } */
 
   /* .card1:hover {
      
       
   }
  */

</style>