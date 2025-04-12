<template>
    <div class="container">
      <h3 class="mt-4">Carga Académica</h3>
  
  
      <table class="table">
        <thead>
          <tr>
            <th scope="col">N Control</th>
            <th scope="col">Nombre</th>
            <th scope="col">Grado</th>
            <th scope="col">Periodo</th>
          </tr>
        </thead>
        <tbody class="semana">
          <tr v-for="(s, index) in datos" :key="index">
            <td>{{ s.ncontrol }}</td>
            <td>{{ s.nombre }}</td>
            <td>{{ s.grado }}</td>
            <td>{{ s.periodo }}</td>
  
          </tr>
        </tbody>
      </table>
  
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Carrera</th>
            <th scope="col">Especialidad</th>
            <th scope="col">Créditos</th>
            <th scope="col">Plan de Estudio</th>
          </tr>
        </thead>
        <tbody class="semana">
          <tr v-for="(s, index) in carrera" :key="index">
            <td>{{ s.carrera }}</td>
            <td>{{ s.especialidad }}</td>
            <td>{{ s.creditos }}</td>
            <td>{{ s.estudios }}</td>
  
          </tr>
        </tbody>
      </table>
  
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Materia</th>
            <th scope="col">Rep</th>
            <th scope="col">Cr</th>
            <th scope="col">Lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miércoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
            <th scope="col">Sábado</th>
            <th scope="col">Domingo</th>
          </tr>
        </thead>
        <tbody class="semana">
          <tr v-for="(s, index) in sistemas" :key="index">
            <td>{{ s.materia }}</td>
            <td>{{ s.Rep }}</td>
            <td>{{ s.Cr }}</td>
            <td>{{ s.lunes }}</td>
            <td>{{ s.martes }}</td>
            <td>{{ s.miercoles }}</td>
            <td>{{ s.jueves }}</td>
            <td>{{ s.viernes }}</td>
            <td>{{ s.sabado }}</td>
            <td>{{ s.domingo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const datos = ref([
    { ncontrol: '22620061', nombre: 'GARCIA SANTIAGO SANDY MARISSA', grado: '6', periodo: 'ENE-JUN 25' }
  
  ])
  
  
  const carrera = ref([
    { carrera: 'INGENERIA EN SISTEMAS COMPUTACIONALES', especialidad: '', creditos: '33', estudios: 'ISIC-2010-224' }
  
  ])
  
  
  const sistemas = ref([
    { materia: 'SCD1015 /6BS/LENGUAJES Y AUTOMATAS I/SOLANO HERNANDEZ MIGUEL ANGEL', Rep: 'N', Cr: '5', lunes: '11:00-13:00/MAG5', martes: '', miercoles: '11:00-13:00/4', jueves: '', viernes: '12:00-13:00/RDS', sabado: '', domingo: '' },
    { materia: 'SCD1021 /6BS/REDES DE COMPUTADORAS/ SANCHEZ VASQUEZ LUCIA', Rep: 'N', Cr: '5', lunes: '', martes: '13:00-15:00/4', miercoles: '', jueves: '13:00-15:00/LDS', viernes: '16:00-17:00/RDS', sabado: '', domingo: '' },
    { materia: 'AEB1055 /6BS/PROGRAMACION WEB/VASQUEZ MARTINEZ JOSUE ISRAEL', Rep: 'N', Cr: '5', lunes: '', martes: '17:00-19:00/ACS', miercoles: '', jueves: '17:00-19:00/ACS', viernes: '13:00-14:00/ACS', sabado: '', domingo: '' },
    { materia: 'SCA1026 /6BS/TALLER DE SISTEMAS OPERATIVOS/CRUZ PERES JORGE', Rep: 'N', Cr: '4', lunes: '13:00-15:00/LDS', martes: '', miercoles: '13:00-15:00/LDS', jueves: '', viernes: '', sabado: '', domingo: '' },
    { materia: 'SCB1001 /6BS/ADMINISTRACION DE BASE DE DATOS/GARCIA HERNANDEZ HILARIO VIDAL', Rep: 'N', Cr: '5', lunes: '', martes: '15:00-17:00/MAG5', miercoles: '11:00-13:00/4', jueves: '', viernes: '14:00-15:00/LDS', sabado: '', domingo: '' },
    { materia: 'SCC1014 /6BS/LENGUAJES DE INTERFAZ/SANCHEZ VASQUEZ LUCIA', Rep: 'N', Cr: '4', lunes: '', martes: '11:00.13:00/MAg2', miercoles: '17:00-19:00/RDS', jueves: '', viernes: '', sabado: '', domingo: '' },
    { materia: 'SCD1011 /6BS/INGENERIA DE SOFTWARE/ROMAN CRUZ JOSE ALFREDO', Rep: 'N', Cr: '5', lunes: '15:00-17:00/LDS', martes: '', miercoles: '', jueves: '15:00-17:00/LDS', viernes: '15:00-16:00/RDS', sabado: '', domingo: '' },
  ]);
  </script>
  
  
  <style  scoped>
  table {
    border-collapse: collapse;
    border-color: rgb(158, 8, 8);
    color: rgb(10, 10, 10);
  }
  
  th,
  td {
    border: 1px solid rgb(233, 224, 224);
    padding: 10px;
  }
  
  th {
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-color: #ADD8E6;
    border-radius: 0%;
  }
  
  td {
    font-size: 1em;
  }
  
  h3 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #090909;
    background-color: #7FFFD4;
    border-radius: 15px;
    padding: 10px;
    text-align: center;
  }
  </style>