<template>
  <!-- <h1>hejhej</h1> -->
  
  <ProductCard class="mt-5" />
  
  

  
</template>

<script>
import ProductCard from '../components/products/ProductCard'
import { mapActions } from 'vuex'
export default {

  components: {
   ProductCard 
  },
  methods: {
   ...mapActions([ 'getProducts']) 
  },
  created() {
    this.getProducts()
  },


}
</script>

<style>



</style>