<template >
  
<div>
    <div :v-for="product" class="  animate__animated  animate__backInDown">

        
        <img class="col-sm-7 mt-5 card mb-4" style="width: 30rem" :src="product.image" >

        
      <div class="  card text-start mx-5 px-4 pt-5 "> 
         
         <div class=" text-dark ">           
            <p class="text-center mt-2 font-weight-bold"> {{ product.name }} </p>
         </div>
         
         <div class="card-bod  mt-5 bgJacob">           
              <h2 class="text-center  font-weight-bolder">Description</h2>
            <p class=" text-center text-black "> {{ product.short }}</p>
              <p class="mt-4 text-center"> {{ product.desc }} </p>
         </div>
          
              <h3 class="text-dark "> <span class="text-danger " > {{ product.price }} </span >SEK</h3>
         <div class="mt-5 mb-4 text-end d-flex justify-content-end align-items-center">
              <button  class="btn btn-dark col-lg-4" @click="addProductToCart({ product, quantity })">Add to cart</button>
              <input type="number" class=" d-flex border-primary" min="1" v-model="quantity">
                   
 <!-- <router-link :to="{ name: 'ShoppingCart', params:{ id: product._id }}" type="button" class="btn btn-info mx-2 mt-5 mb-4">Show watch</router-link> -->

          </div> 
     
      </div>
  <!-- <div v-else>
    <h1>Loading</h1>

  </div> -->

  </div>  
   
  

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
.bgJacob {
 background: rgb(2,0,36);
background: linear-gradient(326deg, rgba(2,0,36,1) 0%, rgba(93,93,101,0.905012200192577) 35%, rgba(0,212,255,1) 100%);
}
/* body {
   background: rgb(2,0,36);
background: linear-gradient(326deg, rgba(2,0,36,1) 0%, rgba(93,93,101,0.905012200192577) 35%, rgba(0,212,255,1) 100%);
  }
template {
   background: rgb(2,0,36);
background: linear-gradient(326deg, rgba(2,0,36,1) 0%, rgba(93,93,101,0.905012200192577) 35%, rgba(0,212,255,1) 100%);
} */




</style>