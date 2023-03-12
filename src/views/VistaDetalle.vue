<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Detalle Hamburguesa</div>
                <div class="card-body">

                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="fa-solid fa-burger"></i></span>
                        <input type="text" id="nombre" v-model="hamburguesa.nombre" class="form-control" maxlength="50"
                            placeholder="Nombre" required>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="fa-solid fa-list"></i></span>
                        <input type="list" id="ingredientes" v-model="hamburguesa.ingredientes" class="form-control"
                            maxlength="50" placeholder="Ingredientes" required>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="fa-solid fa-fire"></i></span>
                        <input type="integer" id="calorias" v-model="hamburguesa.calorias" class="form-control"
                            maxlength="50" placeholder="Calorias" required>
                    </div>
                    <router-link to="/">Volver</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {

    data() {
        return {
            hamburguesa: {
                nombre: '',
                ingredientes: [],
                calorias: 0,
            }
        }
    }, mounted() {
        const route = useRoute();
        this.id = route.params.id;
        this.getHamburguesa(this.id)

    }, methods: {
        getHamburguesa(id) {
            axios.get('https://hamburguesas-back.elevadev.cl/burger/'+id)
                .then(response => response.data)
                .then(data => {
                    this.hamburguesa.nombre = data.nombre,
                        this.hamburguesa.ingredientes = data.ingredientes,
                        this.hamburguesa.calorias = data.calorias
                });
        }
    }
}

</script>