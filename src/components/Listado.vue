<template>
  <div class="list-devices"> 
    <table class="table table-light table-hover m-3">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">State</th>
            <th scope="col">Temperature (º)</th>
            <th scope="col">Location</th>
            <th scope="col">Client</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) of list" :key="index">
            <th scope="row">{{index}}</th>
            <td v-for="element of item" :key="element.id" class="cell-devices">{{element}}</td>
            <button v-if="item.estado!=='Activo'" class="btn btn-sm" @click="updateDevice(index)">Activate device</button>
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

<style scoped>
  .cell-devices {
    padding: 4px 12px;
    font-size: 15px;
    text-align: center;
  }
</style>