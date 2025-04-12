<template>
    <div class="container mt-4">
      <div class="card">
        <h2 class="props text-center">PROPS DE LOS SIMPSON</h2>
        <div class="row mt-4">
  
          <!-- Padre -->
          <div class="col-md-4 mb-4">
            <div class="card" style="width: 100%;">
              <h4 class="text-center">Soy el padre de Bart y Lisa</h4>
              <img src="https://pngimg.com/uploads/simpsons/small/simpsons_PNG44.png" alt="" class="img-fluid">
            </div>
          </div>
  
          <!-- Hijo 1 - Lisa -->
          <div class="col-md-4 mb-4">
            <div class="card" style="width: 100%;">
              <h4 class="text-center">Me llamo Lisa Simpson</h4>
              <img src="https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png" alt="" class="img-fluid">
              <Hijo1 class="mt-4" edad="8 años" />
            </div>
          </div>
  
          <!-- Hijo 2 - Bart -->
          <div class="col-md-4 mb-4">
            <div class="card" style="width: 100%;">
              <h4 class="text-center">Me llamo Bart Simpson</h4>
              <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" alt="" class="img-fluid">
              <Hijo2 class="mt-4" edad="10 años" />
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Hijo1 from './Hijo1.vue';
  import Hijo2 from './Hijo2.vue';
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  </style>
  