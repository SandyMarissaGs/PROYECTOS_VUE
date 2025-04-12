<template>
  <div class="container">
    <div class="row mt-4">
      <!-- Evento Click -->
      <div class="col-12 text-center">
        <h4>Evento Click</h4>
        <div class="d-flex justify-content-center gap-2">
          <button @click="mostrarAlerta('Gracias por darle clic')" class="btn btn-danger custom-btn" type="button">Dale
            clic</button>
          <button @click="mostrarAlerta('Soy un botón')" class="btn btn-warning custom-btn" type="button">Dale clic
            2</button>
        </div>
      </div>

      <!-- Evento Change -->
      <div>
        <h4>Evento Change - Nombre</h4>
        <label class="form-control">Ingresa tu nombre</label>
        <input class="form-control mt-2" type="text" @change="actualizarNombre">
        <p>El nombre ingresado es: <strong>{{ nombre }}</strong></p>
      </div>

      <!-- Evento Change - Nacionalidad -->
      <div>
        <h4>Evento Change - Nacionalidad</h4>
        <label class="form-control">Selecciona tu nacionalidad</label>
        <select class="form-control mt-2" @change="actualizarNacionalidad">
          <option value="">Seleccione...</option>
          <option value="Mexicana">Mexicana</option>
          <option value="Estadounidense">Estadounidense</option>
          <option value="Canadiense">Canadiense</option>
        </select>
        <p>Tu nacionalidad es: <strong>{{ nacionalidad }}</strong></p>
      </div>

      <!-- Evento Change - Municipio o Ciudad -->
      <div>
        <h4>Evento Change - Municipio o Ciudad</h4>
        <label class="form-control">Ingresa tu municipio o ciudad</label>
        <input class="form-control mt-2" type="text" @change="actualizarCiudad">
        <p>Vives en: <strong>{{ ciudad }}</strong></p>
      </div>

      <!-- Evento de mouseenter y mouseleave -->
      <div class="col-12 mt-4 text-center">
        <h3>Evento de mouseenter y mouseleave</h3>
        <div class="d-inline-block text-center"
          style="color: white; width: 300px;height: 200px; background-color: black; text-align: center; padding: 15px; border-radius: 14px;"
          @mouseenter="mostrarMensajeMouse" @mouseleave="ocultarMensajeMouse">
          <p>Pase el mouse</p>
          <p>{{ mensaje }}</p>
        </div>
      </div>

      <!-- Evento Input -->
      <div>
        <h4>Evento Input</h4>
        <label class="form-control">Actualizar texto</label>
        <input class="form-control mt-2" type="text" @input="actualizarTexto">
        <p>El texto ingresado es: <strong>{{ texto }}</strong></p>
      </div>

      <!-- Evento Input con Enter -->
      <div>
        <h4>Evento Input con Enter</h4>
        <input type="text" class="form-control" @keyup.enter="actualizarTexto"
          placeholder="Escribe algo y presiona Enter...">
        <p>Texto ingresado: <strong>{{ texto }}</strong></p>
      </div>

      <!-- Evento Focus y Blur -->
      <div>
        <h4>Evento Focus y Blur</h4>
        <input type="text" class="form-control" @focus="mostrarMensaje" @blur="validarTexto"
          placeholder="Escribe algo...">
        <p>{{ mensajeFocus }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      nacionalidad: '',
      ciudad: '',
      texto: '',
      mensajeFocus: '',
      mensaje: ''
    }
  },
  methods: {
    mostrarAlerta(mensaje) {
      alert(mensaje);
    },
    actualizarNombre(event) {
      this.nombre = event.target.value;
    },
    actualizarNacionalidad(event) {
      this.nacionalidad = event.target.value;
    },
    actualizarCiudad(event) {
      this.ciudad = event.target.value;
    },
    actualizarTexto(event) {
      this.texto = event.target.value;
    },
    mostrarMensaje() {
      this.mensajeFocus = "Estás escribiendo...";
    },
    validarTexto(event) {
      this.mensajeFocus = event.target.value.trim() === ""
        ? "No puedes dejar el campo vacío."
        : "Texto validado correctamente.";
    },
    mostrarMensajeMouse() {
      this.mensaje = "El mouse está dentro del rectángulo";
    },
    ocultarMensajeMouse() {
      this.mensaje = "El mouse está fuera del rectángulo";
    }
  }
}
</script>

<style scoped>
/* Estilos generales */
.container {
  max-width: 800px;
  margin: auto;
}

/* Estilos para los títulos */
h2,
h3 {
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

/* Estilos para los botones */
.btn {
  font-size: 12px;
  /* Se ha reducido aún más el tamaño de fuente */
  padding: 6px 8px;
  /* Se ha reducido el padding */
  border-radius: 6px;
  /* Se ha reducido el border-radius */
  min-width: 80px;
  /* Se ha ajustado el ancho mínimo */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: normal;
  /* Permite que el texto se divida en varias líneas */
  overflow: hidden;
  /* Evita que el texto se desborde fuera del botón */
  word-wrap: break-word;
  /* Permite que el texto se ajuste a múltiples líneas dentro del botón */
}

/* Botones personalizados más pequeños */
.custom-btn {
  font-size: 12px;
  padding: 3px 8px;
  min-width: 80px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>