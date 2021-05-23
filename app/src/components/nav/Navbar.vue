<template>

  

<nav  class="navbar navbar-expand-lg  bgnav fixed-top shadow ">
  
  
     
  <div class="container mt-3">
    <router-link class="navbar-brand  text-white " to="/" href="#"><h4>TimePiece</h4></router-link>


    <button
      class="navbar-toggler text-white"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <router-link class="nav-link active text-white" aria-current="page" to="/" href="#">Home </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" href="#" to="/Products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" href="#" to="/About">About</router-link>
        </li>
            
      </ul>
   
        <ul class="navbar-nav ms-auto "  >
        <li class="nav-item dropdown ">
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
         
          <ShoppingCarts  />
          
          
         </ul>
      </li>

      <li class="nav-item dropdown" v-if="loggedIn">
              <a
                class="nav-link dropdown text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-user"></i>
              </a>
              
              <!-- Dropdown menu -->
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li class="nav-item">
                  <router-link class="nav-link text-dark" aria-current="page" to="/user">Settings</router-link>
                </li>
              </ul>
            
            </li>
          <li v-if="loggedIn">
            <button @click="logout" class="mx-4 btn-sm border-0 btn-danger cursor " to="/"> Logout</button>

          </li>
               
            <li v-if="!loggedIn">
              <router-link class="nav-link text-white" to="/userLogin">Login</router-link>
            </li>
        </ul>
        
    </div>

    
         
  </div>
  
</nav>



</template>

<script>
import ShoppingCarts from '../cart/ShoppingCarts'
import { mapGetters,mapActions } from 'vuex'

export default {
  components: {
   ShoppingCarts,
  
  },
  computed: {
    ...mapGetters(['itemCunter','loggedIn','profile'])
  },
  methods: {
    ...mapActions(['logout'])
  }

}
</script>

<style >
.shopping-cart{
  min-width:500px;

  
}
.bgnav {

  background-color:#000f1d ;

}



</style>