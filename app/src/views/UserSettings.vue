<template>
  <div>
     <span v-if="loggedIn">  <button @click="logout">Logout</button></span>
     <h1>st</h1>
  </div>
  
</template>

<script>

import { mapActions,mapGetters } from 'vuex'
export default {


methods: {
 ...mapActions(['login'])
} ,
computed:{
...mapGetters(['loggedIn'])
}


}
</script>

<style>

</style>