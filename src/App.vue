<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Inicio</router-link> | -->
    </div>
    <router-view/>
    <div class="text-right">
      <span class="version" @click="goToVersions()"><strong>Version</strong> {{ version }}</span>
    </div>
  </div>
</template>
<script>
import { APP_VERSION } from '@/js/constants';

export default {
  name: 'App',
  data() {
    return {
      version: APP_VERSION,
    }
  }, 
  methods: {
    goToVersions() {
      this.$router.push('/versions'); 
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.version {
  font-size: 12px;
  padding: 5px;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.4;
}
</style>
