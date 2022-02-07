<template>
  <div class="home">
    <h1 class="pb-4">Listado de dispositivos</h1>
    <AddDevice />
    <Listado />
  </div>
</template>

<script>
import Listado from '@/components/Listado.vue'
import AddDevice from '@/components/AddDevice.vue'

export default {
  name: 'Home',
  components: {
    Listado,
    AddDevice
  }
}
</script>
