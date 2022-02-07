<template>
  <div class="list-devices"> 
    <table class="table table-light table-hover m-3">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Estado</th>
            <th scope="col">Temperatura (º)</th>
            <th scope="col">Localización</th>
            <th scope="col">Cliente</th>
            <th scope="col">Fecha</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) of list" :key="index">
            <th scope="row">{{index}}</th>
            <td v-for="element of item" :key="element.id">{{element}}</td>
            <button class="btn btn-sm" @click="updateDevice(index)">Actualizar</button>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
    name: "Listado",
    data() {
      return {
        items: null,
      };
    },
    computed: {
        ...mapState('devices',['list'])
    },
    methods: {
        ...mapActions('devices',['updateDevice'])
    },
};
</script>

