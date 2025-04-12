<script>
export default {
    data() {
        return {
            //DATOS DEL ALUMNO
            alumnos: [
                { ID: 19125, nombre_completo: 'Sandy Marissa Garcia Santiago', hobbie: 'Jugar básquetbol' },
                { ID: 10345, nombre_completo: 'Juan Pérez Gómez', hobbie: 'Leer libros' },
                { ID: 10782, nombre_completo: 'María López Hernández', hobbie: 'Escuchar música' },
                { ID: 11234, nombre_completo: 'Carlos Sánchez Ramírez', hobbie: 'Jugar fútbol' },
                { ID: 11987, nombre_completo: 'Ana Rodríguez Torres', hobbie: 'Pintar' },
                { ID: 12563, nombre_completo: 'Luis Gómez Castillo', hobbie: 'Cocinar' },
                { ID: 13247, nombre_completo: 'Sofía Martínez Fernández', hobbie: 'Bailar' },
                { ID: 14092, nombre_completo: 'Pedro Ramírez Ortega', hobbie: 'Ver películas' },
                { ID: 14856, nombre_completo: 'Laura Torres Escobar', hobbie: 'Viajar' },
                { ID: 15378, nombre_completo: 'Miguel Fernández Jiménez', hobbie: '	Tocar la guitarra' },
                { ID: 16234, nombre_completo: 'Daniela Castro Méndez', hobbie: 'Hacer senderismo' },
            ]
            //ID,NOMBRE COMPLETO,LO QUE NOS GUSTA
        }
    }
}
</script>

<template>
    <div class="container">
        <h3 class="mt-4">Lista De Alumnos</h3>
        <ul>
            <li v-for="alumno in alumnos" :key="alumno.ID">
                <strong>{{ alumno.ID }} </strong> -----
                <strong>{{ alumno.nombre_completo }} </strong> -----
                <strong>{{ alumno.carrera }} </strong>
                <strong>{{ alumno.hobbie }} </strong>
            </li>
        </ul>
    </div>
</template>

<style>
h3 {
    color: white;
    background-color: rgb(19, 150, 227);
    border-radius: 15px;
    padding: 15px;
    text-align: center;
    font-size: 1.8em;
    font-weight: bold;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
}
ul {
    list-style-type: none;
    padding: 0%;
}
li {
    background: linear-gradient(to right, #2c3e50, #4ca1af);
    color: rgb(248, 245, 245);
    background-color: rgb(12, 12, 12);
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    text-align: justify;
}
</style>