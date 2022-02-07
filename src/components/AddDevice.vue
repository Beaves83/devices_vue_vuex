<template>
  <div>
    <form action class="form">
      <label class="form-label" for="#temperature">Temperature</label>
      <input
        v-model="temperature"
        class="form-input m-2"
        type="number"
        id="temperature"
        placeholder=""
      >
      <label class="form-label" for="#location">Location</label>
      <select
        v-model="location"
        class="form-input m-2"
        id="location"
        placeholder=""
      >
        <option v-for="item of locations" v-bind:value="item" :key="item.id"> {{item}} </option>
      </select>
      <label class="form-label" for="#client">Client</label>
      <select
        v-model="client"
        class="form-input m-2"
        id="client"
        placeholder=""
      >
       <option v-for="item of clients" v-bind:value="item" :key="item.id"> {{item}} </option>
      </select>
      <button class="btn btn-primary" type="submit" @click="createNewDevice()">Add</button>
    </form>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
    name: "Listado",
    data() {
      return {
        newDevice: '',
        showModal: false,
        temperature: 0,
        client: '',
        location: '',

        locations: ['Almería', 'Barcelona', 'Granada', 'Madrid', 'Valencia', 'Valladolid', 'Zaragoza'],
        clients: ['Frutas Rojas', 'Horta-Murcia', 'Sandias Sanchez', 'Frutales del Levante'],
      };
    },
    computed: {
        ...mapState('devices',['list'])
    },
    methods: {
      createNewDevice()
      {
        const newDevie = {
          estado: 'Activando', 
          temperatura: this.temperature, 
          localizacion: this.location, 
          cliente: this.client, 
          fecha: new Date().toUTCString()     
        }
      console.log('newDevie', newDevie);
        this.addNewDevice(newDevie)
      },
        ...mapActions('devices', ['addNewDevice'])
    },
};
</script>
<style scoped>
  #temperature {
    line-height: initial;
  }
</style>