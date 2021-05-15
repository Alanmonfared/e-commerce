<template>
  <div class="container mt-5">
    <form class="border  p-5" @submit.prevent="onSubmit">
      <h4 class="text-center">Sign in</h4>
   
      <div class=" form-outline mb-4">
        <input type="email" id="email" class="form-control border-bottom" v-model="email">
        <label for="email"  class="form-label" >Email address</label>
      </div> 
     
      <div class=" form-outline mb-4">
        <input type="password" id="password" class="form-control border-bottom" v-model="password">
        <label for="password"  class="form-label" >Password</label>
      </div> 

        <button class="btn btn-primary btn-block">Sign in</button>

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
   ...mapActions(['login']),
   onSubmit() {
     if(this.email !== '' && this.password !== '') {
       let user  = {
         email: this.email,
         password: this.password
       }
       let route = this.$route.query.redirect
        this.login(user, route)
        // this.$router.push(this.$route.query.redirect)
     
     }
   } 
  }

}
</script>

<style>

</style>