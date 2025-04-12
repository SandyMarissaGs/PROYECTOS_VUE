<script setup></script>
<template>
<!-- Inicio de la tabla principal -->
      <br>
      <div class="col-md-12">
        <div class="card mt">
          <div style="background-color:#E94560;" class="card-header">
            <h2 style="color: beige; font-size: 40px; font-family: 'Open Sans', sans-serif; text-transform: uppercase; letter-spacing: 3px; text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);">
              Lista de compras</h2>
          </div>
          <div class="card-body">
            <table   style="font-size: 1.2rem;  ">
              <thead class="table-dark">
                <tr>
                  <th class="text-center">Imagen</th>
                  <th class="text-center">Producto</th>
                  <th class="text-center">Precio</th>
                </tr>
              </thead>
              <tbody >
                <tr >
                  <td  class="text-center"><img src="/public/imagenes/COD.jpg" alt="COD" style="width: 350px; height: auto;">
                  </td>
                  <td>Call of Duty Modern Warfare III</td>
                  <td>MXN$1,399</td>
                </tr>
                <tr>
                  <td class="text-center"><img src="/public/imagenes/Gears.jpg" alt="Gears" style="width: 350px; height: auto;">
                  </td>
                  <td>Gears</td>
                  <td>MXN$499</td>
                </tr>
                <tr>
                  <td class="text-center"><img src="/public/imagenes/fortnite.jpg" alt="Fortnite"
                      style="width: 350px; height: auto;"></td>
                  <td>Fortnite</td>
                  <td>Gratis</td>
                </tr>
                <tr>
                  <td class="text-center"><img src="/public/imagenes/Apex.jpg" alt="Apex" style="width: 350px; height: auto;">
                  </td>
                  <td>Apex Legends</td>
                  <td>Gratis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

   
    <!-- Fin del col-md-6 para los juegos mas populares -->


</template>
<style scoped></style>