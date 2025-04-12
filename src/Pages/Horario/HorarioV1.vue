<template>
    <div class="container">
        <h3 class="mt-4">Horario de Clases de Sistemas</h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Lunes</th>
                    <th scope="col">Martes</th>
                    <th scope="col">Miércoles</th>
                    <th scope="col">Jueves</th>
                    <th scope="col">Viernes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(h, index) in horario" :key="index">
                    <td>{{ h.hora }}</td>
                    <td>{{ h.Lunes }}</td>
                    <td>{{ h.Martes }}</td>
                    <td>{{ h.Miercoles }}</td>
                    <td>{{ h.Jueves }}</td>
                    <td>{{ h.Viernes }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const horario = ref([
    { hora: '7:00 - 9:00', Lunes: 'IA', Martes: 'Agil', Miercoles: 'Web', Jueves: 'IA', Viernes: 'Movil' }
]);
</script>
