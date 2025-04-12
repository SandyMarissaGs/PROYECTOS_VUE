<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div id="app">

        <div class="container">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Calculadora
                            </a>
                            <ul class="dropdown-menu">
                                <a class="dropdown-item" href="#"> <router-link
                                        to="/Calculadorav1">Calculadorav1</router-link> </a>
                                <a class="dropdown-item" href="#"> <router-link
                                        to="/Calculadorav2">Calculadorav2</router-link> </a>
                            </ul>
                        </div>

                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Horario
                            </a>
                            <ul class="dropdown-menu">
                                <a class="dropdown-item" href="#"> <router-link to="/Horariov1">Horariov1</router-link>
                                </a>
                                <a class="dropdown-item" href="#"> <router-link to="/Horariov2">Horariov2</router-link>
                                </a>
                            </ul>
                        </div>

                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Ciclos
                            </a>
                            <ul class="dropdown-menu">
                                <a class="dropdown-item" href="#"> <router-link
                                        to="/Recorridov1">Recorridov1</router-link> </a>
                                <a class="dropdown-item" href="#"> <router-link
                                        to="/Recorridov2">Recorridov2</router-link> </a>
                            </ul>
                        </div>

                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Eventos
                            </a>
                            <ul class="dropdown-menu">
                                <a class="dropdown-item" href="#"> <router-link to="/Eventosv1">Eventosv1</router-link>
                                </a>
                            </ul>
                        </div>

                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Props
                            </a>
                            <ul class="dropdown-menu">
                                <a class="dropdown-item" href="#"> <router-link to="/Padre">Padre</router-link>
                                </a>
                            </ul>
                        </div>

                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Card
                            </a>
                            <ul class="dropdown-menu">
                                <a class="dropdown-item" href="#"> <router-link to="/Cardv1">Cardv1</router-link> </a>
                            </ul>
                        </div>

                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Página Videojuegos
                            </a>
                            <ul class="dropdown-menu">
                                <a class="dropdown-item" href="#"> <router-link to="/Replica">Replica</router-link>
                                </a>
                            </ul>
                        </div>Z

                    </div>
                </div>
            </nav>

            <!--<nav>
          
           
        </nav>-->
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
/* Estilo general del navbar*/
.navbar {
    background-color: #090909; /* Color de fondo del navbar */
    padding: 1rem; /* Espaciado interno */
    border-radius: 10px; /* Bordes redondeados */

}

/* Marca (logo) y enlaces del navbar*/
.navbar .navbar-brand,
.navbar .nav-link {
    color: #0c0c0c; /* Color del texto del logo y los enlaces */
    font-weight: bold; /* Texto en negrita */
    transition: color 0.3s ease; /* Transición suave al cambiar el color */
}

/* Efecto hover (cuando el cursor pasa encima) en enlaces del navbar */
.navbar .nav-link:hover {
    color: #df6819; /* Cambia a color amarillo cuando se pasa el cursor */
}

/* Estilo del menú flotante (dropdown)*/
.dropdown-menu {
    background-color: #9e9c9c; /* Fondo oscuro del menú */
    border: none; /* Sin borde */
    border-radius: 0.5rem; /* Bordes redondeados */
    padding: 0.5rem 0; /* Espaciado interno vertical */
    margin-top: 0.5rem; /* Separación del botón que lo activa */
}

/* Estilo individual de cada ítem dentro del menú flotante */
.dropdown-item {
    color: #dc9f9f; /* Color del texto */
    padding: 0.5rem 1rem; /* Espaciado interno horizontal y vertical */
    transition: background-color 0.3s ease, color 0.3s ease; /* Transiciones suaves */
}

.navbar {
    background: linear-gradient(90deg, #b4cdb3, #8f94fb); /* Degradado de izquierda a derecha */
    padding: 1rem;
    border-radius: 10px;
    color: white;
}
/* Añadir separación entre los menús flotantes */
.dropdown {
    margin-bottom: 20px; /* Ajusta el valor según lo necesites */
}
.nav-item {
    margin-right: 15px; /* Ajusta el valor para más o menos espacio */
}
/* Fondo general de la aplicación */
#app {
    background-color: #e9ecef; /* Cambia este color según tu preferencia */
    min-height: 100vh; /* Asegura que ocupe toda la altura de la pantalla */
    padding: 2rem; /* Espaciado interno */
}


</style>