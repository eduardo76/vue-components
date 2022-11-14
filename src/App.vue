<script setup>
    import { ref } from "vue";
    // import zCampoTexto from './components/zCampoTexto.vue';

    const texto = ref("Texto inicial")
</script>

<template>
  <div id="app">
    <h1>Trabalhando com componentes vue</h1>
    <nav>

        <zCampoTexto v-model="texto"></zCampoTexto>
        {{ texto }}

        <zCounter></zCounter>
    </nav>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
