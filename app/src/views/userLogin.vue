<template>

  <div class="container col-md-5  ">
   
    <form class="border mt2 boord p-5 shadow " @submit.prevent="onSubmit">
      <h4 class="text-center text">Sign in</h4>
   
      <div class=" form-outline mb-4">
        <input type="email" id="email" class="form-control border-bottom" v-model="email">
        <label for="email"  class="form-label" >Email address</label>
      </div> 
     
      <div class=" form-outline mb-4">
        <input type="password" id="password" class="form-control border-bottom" v-model="password">
        <label for="password"  class="form-label" >Password</label>
      </div> 

        <button class="btn btn-grad btn-block">sign in</button>
       

        <div class="text-center mt-3">
           <small>Not a member? <router-link to="/register" type="button">register</router-link></small>
        </div>
      
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
   return {
    email: '',
    password: '',
    
    }  
  },
  methods: {
   ...mapActions(['login','logout','userAddProduct']),
   onSubmit() {
     if(this.email !== '' && this.password !== '') {
       let user  = {
         email: this.email,
         password: this.password,
       }
       let route = this.$route.query.redirect
        this.login(user, route)
       
     
     }
     
   }, 
  
  
  },
  
  
  }


</script>

<style >
.mt2 {
  margin-top: 25rem;
  margin-bottom:21rem;
}

.text {
  font-size:3rem;
  font-weight:bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}


.btn-grad {background-image: linear-gradient(to right, #000000 0%, #434343  51%, #000000  100%)}
.btn-grad {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: capitalize;
  transition: 0.5s;
  background-size: 200% auto;
  color: rgb(255, 255, 255);            
  box-shadow: 0 0 20px rgb(238, 238, 238);
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; 
  color: #fff;
  text-decoration: none;
}



</style>