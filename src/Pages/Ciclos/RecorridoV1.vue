<script>
export default{
    data(){
        return{
            //DATOS DEL ALUMNO
            alumnos:[
                {nc:12345,nombre: 'Sandy', carrera:'ISC'},
                {nc:12345,nombre: 'Marissa', carrera:'TICS'},
                {nc:12345,nombre: 'Garcia', carrera:'ISC'},
                {nc:12345,nombre: 'Garcia', carrera:'ISC'},
                {nc:12345,nombre: 'Garcia', carrera:'ISC'},
                {nc:12345,nombre: 'Garcia', carrera:'ISC'},
            ]
            //ID,NOMBRE COMPLETO,LO QUE NOS GUSTA
        }
    }
}

</script>
<template>

 <div class="container">
        <h3 class="mt-4">Lista de alumnos</h3>
        <ul>
            <li v-for="alumno in alumnos" :key="alumno.nc">
                <strong>{{ alumno.nombre }} </strong> -
                <strong>{{ alumno.carrera }} </strong>
            </li>
        </ul>
    </div>
</template>

<style>
h3{
    color:rgb(18, 17, 17);
    background-color: rgb(162, 45, 246);
    border-radius: 15px;
    padding: 10px;
    text-align: center;
}
ul{
    list-style-type: none;
    padding: 0%;
}
li{
    color:white;
    background-color: black;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    text-align: left;

}
</style>
