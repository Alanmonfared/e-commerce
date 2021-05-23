<template>
  <div class="container col-md-5 mt">
    <form class="border  mt boord p-5 shadow " @submit.prevent="onSubmit">
      <h4 class="text-center text">Sign in</h4>
   

      <div class="row">
        <div class="col ">
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

        <button class="btn btn-grad btn-block">Sign in</button>

        <div class="text-center mt-3">
           <small>Already a member? <router-link to="/userLogin" type="button">login</router-link> </small>
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
        order:'',
        email: '',
        password: '',
        
     }
    
    }  
  },

  methods: {
    ...mapActions(['register']),
    
    onSubmit() {
      if (this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !=='' && this.user.password !== ''  )
      this.register(this.user)
    }

  }

}
</script>

<style>
.mt {
  margin-top: 20rem;
  margin-bottom:20rem;
}

.text {
  font-size:3rem;
  font-weight:bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}


         .btn-grad {background-image: linear-gradient(to right, #000000 0%, #434343  51%, #000000  100%)}
         .btn-grad {
            margin: 10px;
            padding: 5px 45px;
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
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         

</style>