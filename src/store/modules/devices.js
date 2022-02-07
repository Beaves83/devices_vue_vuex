export default {
    namespaced: true,
    state: {
        list: [
            {estado: 'Activo', temperatura: '5', localizacion: 'Almería', cliente: 'Arelia Management Sl.', fecha: 'Sat, 29 Jan 2022 10:48:36 GMT'},
            {estado: 'Apagado', temperatura: '2', localizacion: 'Alicante', cliente: 'Subigitur Sl.', fecha: 'Sat, 29 Jan 2022 10:48:36 GMT'},
            {estado: 'Apagado', temperatura: '3', localizacion: 'Almería', cliente: 'Gestum Cooperativas Sl.', fecha: 'Sat, 29 Jan 2022 10:48:36 GMT'},
            {estado: 'Activo', temperatura: '1', localizacion: 'Valencia', cliente: 'Arelia Management Sl.', fecha: 'Sat, 29 Jan 2022 10:48:36 GMT'},
            {estado: 'Apagado', temperatura: '10', localizacion: 'Valencia', cliente: 'Urbanz Gestion De Cooperativas Sl.', fecha: 'Sat, 29 Jan 2022 10:48:36 GMT'},
            {estado: 'Apagado', temperatura: '2', localizacion: 'Córdoba', cliente: 'Contratas Agrarias Sl', fecha: 'Sat, 29 Jan 2022 10:48:36 GMT'},
            {estado: 'Activo', temperatura: '7', localizacion: 'Sevilla', cliente: 'Gestum Cooperativas Sl.', fecha: 'Sat, 29 Jan 2022 10:48:36 GMT'},
            {estado: 'Activo', temperatura: '6', localizacion: 'Madrid', cliente: 'Subigitur Sl.', fecha: 'Sat, 29 Jan 2022 10:48:36 GMT'},
          ]
    },
    mutations: {
        addNewDevice(state, device){
            state.list.push(device);
        },
        updateDevice(state, index){
          state.list[index].estado = 'Activo';
          state.list[index].fecha = new Date().toUTCString();
          state.list[index].temperatura = ((Math.random() * 10)*(Math.round(Math.random()) ? 1 : -1)).toFixed();
        }
      },
    actions: {
        updateDevice(context, value) {
            context.commit('updateDevice', value);
        },
        addNewDevice(context, value) {
            context.commit('addNewDevice', value);
        },
    },
  };
  