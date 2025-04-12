<template>
    <!-- Inicio de la barra de navegación -->
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#" style="font-size: 3rem;">GAMES</a> -->
      <a class="navbar-brand" href="#" style="font-size: 3rem; font-family: 
      'Arial', sans-serif; font-weight: bold; color: red; text-shadow: 2px 2px 5px black;">GAMES</a>

      

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <!-- Inicio de los elementos del menú -->
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" style="font-size: 2rem;">INICIO</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false" style="font-size: 1.75rem;">
              Nuevo y destacable
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#" style="font-size: 1.5rem;">Lo más vendido</a></li>
              <li><a class="dropdown-item" href="#" style="font-size: 1.5rem;">Lo más jugado</a></li>
              <li><a class="dropdown-item" href="#" style="font-size: 1.5rem;">Novedades</a></li>
              <li><a class="dropdown-item" href="#" style="font-size: 1.5rem;">Próximos lanzamientos</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#" style="font-size: 1.5rem;">Noticias y actualizaciones</a></li>
              <li><a class="dropdown-item" href="#" style="font-size: 1.5rem;">Proximos eventos</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false" style="font-size: 1.75rem;">
              Categorías
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#" style="font-size: 1.5rem;">Acción</a></li>
              <li><a class="dropdown-item" href="#" style="font-size: 1.5rem;">Arcade</a></li>
              <li><a class="dropdown-item" href="#" style="font-size: 1.5rem;">Aventura</a></li>
              <li><a class="dropdown-item" href="#" style="font-size: 1.5rem;">Estrategía</a></li>
              <li><a class="dropdown-item" href="#" style="font-size: 1.5rem;">Rol</a></li>
              <li><a class="dropdown-item" href="#" style="font-size: 1.5rem;">Simulación</a></li>
            </ul>
          </li>
          <!-- Fin de los elementos del menú -->
        </ul>
        <!-- Inicio del buscador -->
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"
            style="font-size: 1.1rem;">
          <button class="btn btn-outline-light" type="submit" style="font-size: 1.1rem;">Buscar</button>
        </form>
        <!-- Fin del buscador -->
      </div>
    </div>
  </nav>
  <!-- Fin de la barra de navegación -->
</template>

