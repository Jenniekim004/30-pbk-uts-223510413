<template>
  <div class="main-app">
    <router-view />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style>
.main-app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #34495e;
  margin: 20px;
}
</style>


