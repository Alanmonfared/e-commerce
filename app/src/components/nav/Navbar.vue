<template>
    <nav  class="navbar navbar-expand-lg navbar-light bgnav ">
  <div class="container">
    <a class="navbar-brand  text-white" href="#"><h4>TimePiece</h4></a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active text-white" aria-current="page" to="/" href="#">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" href="#" to="/Products">Products</router-link>
        </li>
            
      </ul>
   
        <ul class="navbar-nav ms-auto ">
        <li class="nav-item dropdown">
            <a
            class="nav-link dropdown"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
            >
          <i class="fas fa-shopping-cart  text-white"></i>
          <span v-show="itemCunter" class="badge rounded-pill badge-notification bg-danger">{{ itemCunter }} </span>
        </a>
    <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
          <!-- <ShoppingCart /> -->
          <!-- <h3>ShoppingCart funkar</h3> -->
          <ShoppingCarts  />
          
           <!-- <router-link :to="{name: 'ShoppingCart', params: { id: product._id}}" type="button">ShoppingCart</router-link > -->
          
         </ul>
      </li>

      <li class="nav-item dropdown ">
            <a
            class="nav-link dropdown"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
            >
          <i class="fas fa-user text-white"></i>
        </a>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
          USER Settings
    </ul>
      </li>
    </ul>
    
    
    </div>
     
    
  </div>
</nav>
</template>

<script>
import ShoppingCarts from '../cart/ShoppingCarts'
import { mapGetters } from 'vuex'
export default {
  components: {
   ShoppingCarts 
  },
  computed: {
    ...mapGetters(['itemCunter'])
  }

}
</script>

<style>
.shopping-cart{
  min-width:500px;
  /* height:300px; */
  
}
.bgnav {
 background-image: linear-gradient(to top, #09203f 0%, #537895 100%);

}

</style>