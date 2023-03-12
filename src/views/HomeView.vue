<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <div id="mensaje"></div>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <!-- hacemos un v-for para mostrar cada hamburguesa de la lista -->
            <tr v-for="hamburguesa, i in hamburguesas" :key="hamburguesa.id">
              <td>{{ i + 1 }}</td>
              <td>{{ hamburguesa.nombre }}</td>
              <td>
                <router-link :to="{ path: 'detalle/' + hamburguesa.id }" class="btn btn-primary m-1">
                  <i class="fa-solid fa-eye"></i> Detalle
                </router-link>
                <button class="btn btn-danger m-1" @click="eliminar(hamburguesa.id, hamburguesa.nombre)">
                  <i class="fa-solid fa-trash"></i> Eliminar
                </button>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>



<script>

// importacion de la libreria axios para hacer peticion a la api

import axios from "axios";

// importamos las funciones de js

import { confirmar } from '../funciones'

export default {


  data() {
    return {
      hamburguesas: []
    }
  }, mounted() {
    // una vez cargue la pagina llamamos las funcion siguiente
    this.getBurgers();
  },
  methods: {
    getBurgers() {
      const url = "https://hamburguesas-back.elevadev.cl/burger/"
      axios.get(url).then(response => (this.hamburguesas = response.data)

      );
    },
    eliminar(id, nombre) {
      confirmar(id, nombre)
    }
  }
}


</script>

