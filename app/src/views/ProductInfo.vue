<template >
  
<div class="mt1 shadow ">
    <div :v-for="product" >

        

        
      <div class=" text-start mx-5 px-4 pt-5 "> 
        <div class="d-flex justify-content-center align-content-center" >
        <img class="col-sm-7 mt-5 card mb-4  " style="width: 300px" :src="product.image" >

        </div>
         
         <div class=" text-dark ">           
            <p class="text-center mt-2 font-weight-bold "> {{ product.name }} </p>
         </div>
         
         <div class=" mt-5 ">           
              <h2 class="text-start  font-weight-bolder">Description</h2>
            <p class=" text-start text-black "> {{ product.short }}</p>
              <p class="mt-4 text-start"> {{ product.desc }} </p>
         </div>
          
              <h3 class="text-dark "> <span class="text-dark " > {{ product.price }} </span> SEK</h3>
         <div class="mt-5 mb-4 text-end d-flex justify-content-end align-items-center">
             
              <button  class="btn btn-grad col-lg-4" @click="addProductToCart({ product, quantity })">Add to cart</button>
              <input type="number" class=" d-flex border-none  col-1" min="1" v-model="quantity">
                   

          </div> 
     
      </div>
  

  </div>  
  
   <br>
   <br>
   <br>
   <br>
   <br>

</div>
 

    
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ProductInfo',
    props: ['id'],
    data() {
        return {
          quantity: 1
        }
    },
    methods: {
        ...mapActions(['getOneProduct', 'cleanup', 'addProductToCart'])

    }, 
    computed: {
     ...mapGetters(['product'])
    
    },
    created() {
     this.getOneProduct(this.id)  
    },
   
    destroyed() {
      this.cleanup()
    }


}
</script>

<style scoped>

.mt1{
  margin-top:10rem;
 
}



.bgg {
  background-image: linear-gradient(to right, #434343 0%, black 100%);
}











</style>