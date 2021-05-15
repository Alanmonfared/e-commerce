<template>
  <div class="container mt-5">
    <form class="border  p-5" @submit.prevent="onSub">
      <h4 class="text-center">Sign in</h4>
   

      <div class="row">
        <div class="col">
         <div class="form-outline mb-4">
           <input type="text" id="firstName" class="form-control border-bottom" v-model="user.firstName">
           <label for="firstName" class="form-label">First Name</label> 
        </div>           
        </div> 
      </div>
      
      <div class="row">
        <div class="col">
         <div class="form-outline mb-4">
           <input type="text" id="lastName" class="form-control border-bottom" v-model="user.lastName">
           <label for="lastName" class="form-label">Last Name</label> 
        </div>           
        </div> 
      </div>


      <div class=" form-outline mb-4">
        <input type="email" id="email" class="form-control border-bottom" v-model="user.email">
        <label for="email"  class="form-label" >Email address</label>
      </div> 
     
      <div class=" form-outline mb-4">
        <input type="password" id="password" class="form-control border-bottom" v-model="user.password">
        <label for="password"  class="form-label" >Password</label>
      </div> 

        <button class="btn btn-primary btn-block">Sign in</button>

        <div class="text-center mt-3">
           <small>Not a member? <router-link to="/register" type="button">register</router-link> </small>
        </div>
      
    </form>
  </div>
</template>

<script>
import { mapActions} from 'vuex'
export default {
  data () {
   return {
     user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
     }
    
    }  
  },

  methods: {
    ...mapActions(['register']),
    onSub() {
      if (this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !=='' && this.user.password !== ''  )
      this.register(this.user)
    }

  }

}
</script>

<style>

</style>