<script setup>

</script>

<template>
   
  <div class="row">
    <!-- Inicio del col-md-6 para los juegos mas populares -->
    <div class="col-md-6">
      <div class="card mt">
        <div style="background-color: #E94560;" class="card-header">
          <h1 style="color: beige; font-size: 40px; font-family: 'Open Sans', sans-serif; text-transform: uppercase; letter-spacing: 3px; text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);">  
  VIDEOJUEGOS MÁS POPULARES  
</h1>

        </div>
        <div class="card-body">
          <!-- inicio de carrusel de reproduccion automatico -->
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/imagenes/fortnite.jpg" class="d-block w-100" alt="Videojuego 1">
              </div>
              <div class="carousel-item">
                <img src="/public/imagenes/Apex.jpg" class="d-block w-100" alt="Videojuego 2">
              </div>
              <div class="carousel-item">
                <img src="/public/imagenes/pubg.jpg" class="d-block w-100" alt="Videojuego 3">
              </div>
              <div class="carousel-item">
                <img src="/public/imagenes/Gears.jpg" class="d-block w-100" alt="Videojuego 4">
              </div>
              <div class="carousel-item">
                <img src="/public/imagenes/COD.jpg" class="d-block w-100" alt="Videojuego 5">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            <!-- fin del carrusel de reproduccion automatico -->
          </div>
        </div>
      </div>

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
                  <td class="text-center"><img src="/public/imagenes/Fortnite.jpg" alt="Fortnite"
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

    </div>
    <!-- Fin del col-md-6 para los juegos mas populares -->
    <!-- Inicio del col-md-6 para la lista de Videojuegos-->
    <div class="col-md-6">
      <div class="card mt">
        <div style="background-color:#E94560;" class="card-header">
          <h2 
          style="color: beige; font-size: 40px; font-family: 'Open Sans', sans-serif; text-transform: uppercase; letter-spacing: 3px; text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);"
          >Lista de videojuegos</h2>
        </div>
        <!-- Inicio del cuerpo del card -->
        <div class="card-body">
          <!-- Inicio del primer row dentro de Body -->
          <div class="row">
            <!-- Incio del primer col-md-6 dentro de Body -->
            <div class="col-md-6">
              <div class="card mt-4">
                <img src="/public/imagenes/pubg.jpg" class="card-img-top"
                  style=" object-fit: cover; width: 100%;height: 350px; " alt="PUBG">
                <div class="card-body">
                  <h5 class="card-title" style="text-align: left;">PUBG</h5>
                  <p class="card-text" style="text-align: left;">Acción, Disparos</p>
                  <p  style="color:aliceblue;text-align: left;">4.0 ★ | 40 GB | Gratis</p>
                  <button class="btn w-100" style="background-color: #E94560;; color: white;">Obtener ahora</button>
                </div>
              </div>
            </div>
            <!-- Fin del primer col-md-6 dentro de Body -->
            <!-- Incio del segundo col-md-6 dentro de Body -->
            <div class="col-md-6">
              <div class="card mt-4">
                <img src="/public/imagenes/COD.jpg" class="card-img-top" style=" object-fit: cover; width: 100%;height: 350px; "
                  alt="PUBG">
                <div class="card-body">
                  <h5 class="card-title" style="text-align: left;">CALL OF DUTY MODERN WARFARE III</h5>
                  <p class="card-text" style="text-align: left;">Juego de disparos de acción</p>
                  <p style="text-align: left; color: aliceblue;" >4.4 ★ | 234.9 GB | MXN$1,399</p>
                  <button class="btn w-100" style="background-color: #E94560; color: white;">Comprar ahora</button>
                </div>
              </div>
            </div>
            <!-- Fin del segundo col-md-6 dentro de Body -->
          </div>
          <!-- Fin del primer row dentro de Body-->
          <!-- Inicion del segundo row dentro de Body -->
          <div class="row">
            <!-- Incio del tercer col-md-6 dentro de Body -->
            <div class="col-md-6">
              <div class="card mt-4">
                <img src="/public/imagenes/fortnite.jpg" class="card-img-top"
                  style=" object-fit: cover; width: 100%;height: 350px; " alt="PUBG">
                <div class="card-body">
                  <h5 class="card-title" style="text-align: left;">Fornite</h5>
                  <p class="card-text" style="text-align: left;">Acción, Disparos</p>
                  <p style="text-align: left; color: aliceblue;" >4.7 ★ | 99 GB | Gratis</p>
                  <button class="btn w-100" style="background-color: #E94560;; color: white;">Obtener ahora</button>
                </div>
              </div>
            </div>
            <!-- Fin del tercer col-md-6 dentro de Body -->
            <!-- Incio del cuarto col-md-6 dentro de Body -->
            <div class="col-md-6">
              <div class="card mt-4">
                <img src="/public/imagenes/Apex.jpg" class="card-img-top"
                  style=" object-fit: cover; width: 100%;height: 350px; " alt="PUBG">
                <div class="card-body">
                  <h5 class="card-title" style="text-align: left;">Apex Legends</h5>
                  <p class="card-text" style="text-align: left;">Acción</p>
                  <p style="text-align: left; color: aliceblue;" >4.2 ★ | 75 GB | Gratis</p>
                  <button class="btn w-100" style="background-color: #E94560;; color: white;">Obtener ahora</button>
                </div>
              </div>
            </div>
            <!-- Fin del cuarto col-md-6 dentro de Body -->
          </div>
          <!-- Fin del segundo row -->
          <!-- Inicion del tercer row -->
          <div class="row">
            <!-- Inicio del quinto col-md-6 dentro de Body -->
            <div class="col-md-6">
              <div class="card mt-4">
                <img src="/public/imagenes/Deltaforce.jpg" class="card-img-top"
                  style=" object-fit: cover; width: 100%;height: 350px; " alt="PUBG">
                <div class="card-body">
                  <h5 class="card-title" style="text-align: left;" >Delta Force</h5>
                  <p class="card-text" style="text-align: left;">Aventura, multijugador masivo</p>
                  <p style="text-align: left; color: aliceblue;" >3.9 ★ | 88 GB | Gratis</p>
                  <button class="btn w-100" style="background-color: #E94560;; color: white;">Obtener ahora</button>
                </div>
              </div>
            </div>
            <!-- Fin del quinto col-md-6 dentro de Body -->
            <!-- Inicio del sexto col-md-6 dentro de Body -->
            <div class="col-md-6">
              <div class="card mt-4">
                <img src="/public/imagenes/Gears.jpg" class="card-img-top"
                  style=" object-fit: cover; width: 100%;height: 350px; " alt="PUBG">
                <div class="card-body">
                  <h5 class="card-title" style="text-align: left;">Gears</h5>
                  <p class="card-text" style="text-align: left;">Disparos</p>
                  <p style="text-align: left; color: aliceblue;" >4.5 ★ | 88 GB | MXN$499 </p>
                  <button class="btn w-100" style="background-color: #E94560;; color: white;">Comprar ahora</button>
                </div>
              </div>
            </div>
            <!-- Fin del sexto col-md-6 dentro de Body -->
          </div>
          <!-- Fin del tercer row -->
        </div>
      </div>
    </div>
    <!-- Fin del col-md-6 par la Lista de Videojuegos -->
  </div>
  <!-- Fin del row principal -->
</template>
<style scoped></style>

