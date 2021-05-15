<template>
  <div  class="row row-cols-1 row-cols-md-2 row-cols-lg-10  g-1 ">
      <ProductEpic  v-for="product in products" :key="product._id" :product="product" />
           

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductEpic from './ProductEpic'
export default {
    name:'ProductCard',
    props:['_id'],
    components: {
        ProductEpic
    },
    computed: {

        ...mapGetters(['products'])
    }

}
</script>

<style>

</style>