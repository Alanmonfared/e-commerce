<template>

<div class=" row row-cols-10 row-cols-md-1  g-4 " style="width: 350px" >
        <!-- <Products /> -->
  <div class="col   ">
    <div class="card height  ">
     <div class="bg-image hover-zoom  row-cols-md-1 ">

     <img class="mt-4 border-bottom " :src="product.image" alt="..." >
     </div>
    
      <div class="card-body  ">
        <h5 class="card-title"> {{ product.name }} </h5>
        <p class="text-info"> {{ product.desc | shorten }} </p>
   
      <router-link :to="{ name: 'ProductInfo', params:{ id: product._id }}" type="button" class="btn btn- mx-2 mt-5 mb-4 text-white">Show watch</router-link>
               
        
      </div>
    </div>
  </div>

</div>
</template>

<script>

export default {
  name: 'ProductEpic',
  props: ['product'],
  components: {
   


  },
  filters: {
    shorten(val) {
      return val.slice(0,50 ) + '...'
    }
  }
  

}
</script>

<style scoped>
.grid {
padding:1rem;
display:grid;
grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
gap:5rem;
}

.height {
 height: 100%;

}

.bga {
    background-color:blue;
}

.btn- {
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
}

</style>