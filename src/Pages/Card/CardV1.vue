<template>
    <!-- TÍTULO -->
    <h1 class="text-center">La Biodiversidad</h1>
  
    <!-- INICIO DEL PRIMER ROW -->
    <div class="row mt-4">
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-header text-center">Diversidad de Especies</div>
          <div class="card-body">
            <p class="card-text">
              <img src="https://www.imer.mx/ciudadana/wp-content/uploads/sites/16/BIODIVERSIDAD-1.jpg"
                class="card-img-top" alt="340px" style="height: 340px;">
              La biodiversidad de especies se refiere a la variedad de organismos que coexisten en un ecosistema,
              compartiendo características y adaptaciones. Su clasificación permite estudiar sus relaciones biológicas y
              su impacto en el equilibrio ecológico.
              Resultado de procesos evolutivos, esta diversidad es esencial para la estabilidad ambiental.
            </p>
          </div>
        </div>
      </div>
  
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-header text-center">Diversidad de Ecosistemas</div>
          <div class="card-body">
            <p class="card-text">
              <img src="https://i.pinimg.com/736x/b5/d7/d9/b5d7d9ba1c952374e563a233532e5ad7.jpg" class="card-img-top"
                alt="340px" style="height: 340px;">
              Este nivel abarca las áreas geográficas donde se desarrollan los biomas, cada una con condiciones que favorecen la supervivencia 
              de las especies. La diversidad de ecosistemas es clave para el equilibrio biológico, ya que cada uno alberga diferentes formas de
              vida y sus interacciones.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- CIERRE DEL PRIMER ROW -->
  
    <!-- INICIO DEL SEGUNDO ROW -->
    <div class="row mt-4">
      <div class="col-md-3">
        <div class="card h-100">
          <img src="https://thefoodtech.com/wp-content/uploads/2023/05/biosdiversidad-828x548.jpg" 
          class="card-img-top" alt="200px">
          <div class="card-body d-flex flex-column text-center">
            <p class="card-text flex-grow-1">
              La diversidad Alfa se refiere a la biodiversidad dentro de una zona específica, se define por la misma
              comunidad o ecosistema y el número de
              especies o grupos de especies, según la familia.
            </p>
            <div class="text-center">
              <button class="btn btn-warning mt-auto custom-btn">Más Información</button>
            </div>
          </div>
        </div>
      </div>
  
      <div class="col-md-3">
        <div class="card h-100">
          <img src="https://www.ambientum.com/wp-content/uploads/2018/09/ecosistema-animales-696x486.jpg"
          class="card-img-top" alt="200px">
          <div class="card-body d-flex flex-column text-center">
            <p class="card-text flex-grow-1">
              La diversidad Beta se refiere a las interacciones ecológicas entre las especies de diferentes ecosistemas,
              así como entre las especies dentro
              de un mismo ecosistema a distintos niveles ambientales.
            </p>
            <div class="text-center">
              <button class="btn btn-warning mt-auto custom-btn">Más Información</button>
            </div>
          </div>
        </div>
      </div>
  
      <div class="col-md-3">
        <div class="card h-100">
          <img
            src="https://www.lineaverdeguadalajara.com/lv/consejos-ambientales/biodiversidad/img/diferentes-ecosistemas.jpg" 
            class="card-img-top" alt="200px">
          <div class="card-body d-flex flex-column text-center">
            <p class="card-text flex-grow-1">
              La diversidad Gamma se centra en la riqueza de los ecosistemas, describiendo las especies, grupos de
              especies y recursos dentro de un
              conjunto de ecosistemas de un mismo bioma. Los ecosistemas ofrecen beneficios de disfrutar de sus recursos
              naturales y paisajes.
            </p>
            <div class="text-center">
              <button class="btn btn-warning mt-auto custom-btn">Más Información</button>
            </div>
          </div>
        </div>
      </div>
  
      <div class="col-md-3">
        <div class="card h-100">
          <img src="https://aprendeencasa.sep.gob.mx/multimedia/B64images/202206/B64-IMG-0qly4Oarf7-RQ4nzpPxoE.png"
          class="card-img-top" alt="200px">
          <div class="card-body d-flex flex-column text-center">
            <p class="card-text flex-grow-1">
              La diversidad Genética es la variabilidad de genes dentro de una especie, crucial para su adaptación y
              supervivencia.
              A mayor diversidad, menor riesgo de extinción, siendo el nivel más básico de la biodiversidad.
            </p>
            <div class="text-center">
              <button class="btn btn-warning mt-auto custom-btn">Más Información</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- CIERRE DEL SEGUNDO ROW -->
  
    <div class="mt-5"></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Aquí va la lógica de tu componente si necesitas
      }
    },
    methods: {
      // Métodos si los necesitas
    }
  }
  </script>
  
  <style>
  /* Estilos para las tarjetas */
  .card-body {
    padding: 10px;
  }
  
  /* Estilos para los botones */
  .custom-btn {
    font-size: 12px;
    padding: 8px 12px;
    min-width: 150px;
    max-width: 90%;
    text-align: center;
    white-space: normal; /* Permite que el texto se divida en varias líneas */
  }
  
  /* Ajustes generales */
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .card-img-top {
    object-fit: cover;
    height: 200px;
  }
  
  /* Estilos generales de las tarjetas */
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  </style>
  