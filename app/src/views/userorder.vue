<template>
  <div>
      <UserOrder   />
    
      
    <div >
      <button @click="addToOrders(shoppingCart)" class="btn btn-primary mt5">Buy</button>
    </div>

  </div>
</template>

<script>

import UserOrder from '../components/order/userOrder'
import { mapActions, mapGetters } from 'vuex'


export default {
    props:['item','product', 'id' ],
   
   components: {
    UserOrder
    },
    computed: {
      ...mapGetters(['shoppingCart'])
    },
    methods: {

      addToOrders() {
        console.log(this.cart)
      },
      ...mapActions(['addToOrders','totalCounter'])
    }

}
</script>

<style>

</style>