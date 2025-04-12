<template>
    <div class="container mt-5">
      <div class="car shadow p-4">
        <h3 class="text-center">Calculadora V1</h3>
        <h2 class="text-center mt-4">Resultado: {{ resultado }} </h2>
        
        <div class="mb-3">
          <label for="">Numero 1</label>
          <input type="number" class="form-control" v-model="numero1">
        </div>
  
        <div class="mb-3">
          <label for="">Numero 2</label>
          <input type="number" class="form-control" v-model="numero2">
        </div>
  
        <div class="d-flex justify-content-center gap-2">
          <button @click="sumar" class="btn btn-danger custom-btn">Sumar</button>
          <button @click="resta" class="btn btn-warning custom-btn">Resta</button>
          <button @click="multiplacion" class="btn btn-info custom-btn">Multiplicación</button>
          <button @click="division" class="btn btn-success custom-btn">División</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        numero1: 0,
        numero2: 0,
        resultado: 0,
      };
    },
    methods: {
      sumar() {
        this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
      },
      resta() {
        this.resultado = parseFloat(this.numero1) - parseFloat(this.numero2);
      },
      multiplacion() {
        this.resultado = parseFloat(this.numero1) * parseFloat(this.numero2);
      },
      division() {
        this.resultado = parseFloat(this.numero1) / parseFloat(this.numero2);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Aumentar tamaño de los botones */
  .custom-btn {
    padding: 15px 30px; /* Aumenta el tamaño del padding para hacerlo más grande */
    font-size: 18px; /* Ajusta el tamaño de la fuente */
    min-width: 120px; /* Establece un ancho mínimo para los botones */
    text-align: center; /* Asegura que el texto se alinee correctamente */
    display: flex; /* Usamos flexbox para asegurar que el texto esté centrado */
    justify-content: center; /* Centra el contenido horizontalmente */
    align-items: center; /* Centra el contenido verticalmente */
    white-space: nowrap; /* Impide que el texto se divida en varias líneas */
    overflow: hidden; /* Evita que el texto se desborde fuera del botón */
    text-overflow: ellipsis; /* Agrega "..." si el texto es muy largo */
  }
  
  /* Asegurarse de que los botones no se desborden */
  .btn {
    white-space: nowrap; /* Impide que el texto se divida en múltiples líneas */
    overflow: hidden; /* Evita que el texto se desborde fuera del botón */
  }
  </style>
  