<template>
<div class="bg">
 
  <Navbar  />
   
  <div class="container " >
    
    <router-view /> 

  </div>
  <Footer />


</div>


</template>
<script>
import Navbar from './components/nav/Navbar'
import Footer from './components/nav/footer'

export default {
  components: {
    Navbar,
    Footer
    
    
  },
}
</script>
<style scoped>

.stic {
	position: -webkit-sticky;
  width:100%;
	position: fixed;
	top: 10;
}
#parent4 {
  position: fixed;
  
  width: 300px;
  height: 100px;
  bottom: 100;
  left: 0;
  right: 0;
}

#child4 {
  position: absolute;
  bottom:10px;
  right: 15px;
}
.mt6{
  margin-top:10rem;
}


</style>
