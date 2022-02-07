<template>
  <div class="fotos">
    <h1>Galería de fotos</h1>
    <router-link :to="{ name: 'Fotos', params: {id : item} }" 
    v-for="(item, index) of fotos" :key="index">
      <button>foto {{item}} </button>
      
    </router-link>
    <Fotografia />
  </div>
</template>
<script>
import Fotografia from "@/components/Fotografia.vue"
export default {
  name: 'Foto',
  components : {
    Fotografia
  },
  data() {
    return {
      fotos: [1, 2, 3],
    }
  },
}
</script>