<template>
  <div>
    <!-- Layout principal da aplicação -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Configurações globais da aplicação
useHead({
  titleTemplate: '%s - Seguro Play Car',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>

<style>
/* Estilos globais podem ser adicionados aqui se necessário */
</style>
