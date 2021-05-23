<template>
  <div >
    
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
         
        
<div
  
  id="carouselDarkVariant"
  class="carousel slide carousel-fade carousel-dark b"
  data-mdb-ride="carousel"
>

  <!-- Indicators -->
  <div class="carousel-indicators">
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  <!-- Inner -->
  <div class="carousel-inner">
    
    <!-- Single item -->
    <div class="carousel-item active ">
      <img
      width="450px"
      height="450px"
        src="http://www.audemarspiguetreview.com/images/201706/Jacob-Co-Billionaire-diamonds-watch-18.jpg"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block ">
        <h5>THE BILLIONAIRE</h5>
        <p>HANDS: Skeleton; Gun Blue.Warranty: 2 Years.</p>
      </div>
    </div>

    <!-- Single item -->
    
    
    <div class="carousel-item">
      <img
      width="450px"
      height="450px"
        src="https://cdn.catawiki.net/assets/marketing/marketing/upload_images-files/36439-0e3efb01f1ba1890551c1f49d9c3a67daba5914c-original.jpg"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>THE BILLIONAIRE</h5>
        <p>acob & Co. is one of the few brands that has the legitimacy to create high and fine jewelry, as well as high-end watches.</p>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item">
      <img
      width="450px"
      height="450px"
        src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2019/09/27/1dbf3d38-e032-11e9-94c8-f27aa1da2f45_image_hires_174408.JPG?itok=FccLQLHO&v=1569577458"
        class="d-block w-100"
        alt="..."
      />
      <div class="carousel-caption d-none d-md-block">
        <h5>THE BILLIONAIRE</h5>
        <p>The Billionaire II features no dial in the traditional sense: its skeletonized movement structure serves as the spectacular backdrop of its hands, whereas the hour markers are 12 baguette-cut white diamonds, set into the periphery of the flange frame. </p>
      </div>
    </div>
  </div>
  <!-- Inner -->

  <!-- Controls -->
  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselDarkVariant"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselDarkVariant"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



                <br>
                <br>
     
      <div class=" text-center  text-white   mt-5">
              <h1 class=" fw-light  bgtext ">About</h1>
              <p class="mt-5 text-start text-dark ">For more than a quarter of a century, TimePiece has created revolutionary timepieces and exquisite jewelry that have captivated celebrities and notables from the watchmaking world and dazzled fashion’s red carpets and cover shoots.</p>
              <router-link to="/About" type="button" class=" btn btn-light mt-5 ">Read more</router-link>
      </div>
    
    <br>
    <br>
    <br>
      <div class=" d-flex justify-content-between align-items-center mt-5 ">
         <div >

            <img class="card img-fluid " src="../assets/jacobandcocom_163534307.jpg" alt="">
            <img class=" card mt-5" src="../assets/jacobandcocom_325755821.jpg" alt="">
            
        </div>
            <div >

                <img class="mx-5 card img-fluid " src="https://blogs-images.forbes.com/robertanaas/files/2018/02/DSC05844-copie.jpg" alt="">
            </div>
      </div>



      
  </div>
</template>

<script>


export default {
  props: ["products"],  
  components: {
    
  }
}
</script>

<style scoped>

.bg{
  background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);

}

.b{
  width: 100%;
}
.bgtext {
  color:rgb(65, 65, 138);
}


    .btn-grad {background-image: linear-gradient(to right, #000000 0%, #434343  51%, #000000  100%)}
    .btn-grad {
      
      padding: 10px 45px;
      text-transform: capitalize;
      transition: 0.5s;
      background-size: 200% auto;
      color: rgb(255, 255, 255);            
      box-shadow: 0 0 20px rgb(238, 238, 238);
      border-radius: 10px;
      
    
    }

    .btn-grad:hover {
      background-position: right center; 
      color: #fff;
      text-decoration: none;
    }



</style>