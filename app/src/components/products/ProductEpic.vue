<template>

    <div class=" row row-cols-1 row-cols-md-7 g-4  " style="width: 25rem">
        <!-- <Products /> -->
  <div class="col   ">
    <div class="card ">
     
     <img :src="product.image" alt="..." >
      <div class="card-body  ">
        <h5 class="card-title"> {{ product.name }} </h5>
        <!-- <p class="card-text"> {{ product.short }} </p> -->
        <p class="text-info"> {{ product.desc | shorten }} </p>
        <!-- <span class="text-danger " > {{ product.price }} SEK</span> -->
        <!-- <span> {{ product._id }} </span> -->
                 


        

      <router-link :to="{ name: 'ProductInfo', params:{ id: product._id }}" type="button" class="btn btn-info mx-2 mt-5 mb-4">Show watch</router-link>
      <!-- // ? hita lösning till denna varför kan man inte gå skriva to="/Products/info/:id" -->
          
        
      </div>
    </div>
  </div>

</div>
</template>

<script>
// import Products from '../../store/modules/products'
// import {mapActions} from 'vuex'
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

template {
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  }

</style>