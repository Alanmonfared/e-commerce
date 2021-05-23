<template>
  <footer class="bgfot text-center bgfot mt-5 ">
    <div class="text-white p-1 d-flex  justify-content-center justify-content-between">
      &copy; {{ new Date().getFullYear() }} Copyright
      <router-link to="/" href="#" class="text-white">TimePiece.se</router-link>
     
      <span class="small ms-4">
        

      <div class=" d-flex justify-content-end align-items-end">
              <a style="color: #3b5998;" href="#!" role="button"
          ><i class="fab fa-facebook-f fa-lg mx-3"></i
        ></a>

        <!-- Twitter -->
        <a style="color: #55acee;" href="#!" role="button"
          ><i class="fab fa-twitter fa-lg mx-3"></i
        ></a>

        <!-- Google -->
        <a style="color: #dd4b39;" href="#!" role="button"
          ><i class="fab fa-google fa-lg mx-3"></i
        ></a>

        <!-- Instagram -->
        <a style="color: #ac2bac;" href="https://sv-se.facebook.com/" role="button"
          ><i class="fab fa-instagram fa-lg mx-3"></i
        ></a>
    </div>
                    <!-- Facebook -->
      
      
      </span>
   </div> 
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.bgfot {
  background-color:#000f1d ;
}



</style>