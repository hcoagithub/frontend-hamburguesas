<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Crear Hamburguesa</div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-burger"></i></span>
                            <input type="text" id="nombre" v-model="nombre" class="form-control" maxlength="50" placeholder="Nombre" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-list"></i></span>
                            <input type="list" id="ingredientes" v-model="ingredientes" class="form-control" maxlength="50" placeholder="Ingredientes" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-fire"></i></span>
                            <input type="integer" id="calorias" v-model="calorias" class="form-control" maxlength="50" placeholder="Calorias" required>
                        </div>
                        <div class="d-grid col-6 mx-auto">
                            <button class="btn btn-success"> Guardar</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import router from '@/router';
import { mostrar_alerta, enviarSolicitud } from '../funciones';


export default {

    data(){
        return {
            nombre:'', ingredientes:[], calorias: null, url: "https://hamburguesas-back.elevadev.cl/burger/"
        }
    }, methods: {
        guardar(){
        
            if(this.nombre.trim()===''){
                mostrar_alerta('Escribe el nombre.', 'warning','nombre')
            }else if(this.ingredientes.trim()===''){
                 mostrar_alerta('Escribe los ingredientes.', 'warning','ingredientes')
            }else if(this.calorias.trim()===''){
                mostrar_alerta('Escribe las calorias.', 'warning','ingredientes')
            }else{

                var parametros = {nombre: this.nombre, ingredientes: [this.ingredientes], calorias: this.calorias}
                enviarSolicitud('POST',parametros, this.url,'Hamburguesa guardada.')
                this.$router.push('/') 
            }
        }
    }

}
</script>