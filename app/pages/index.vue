<template>
  <div class="min-h-screen bg-background-primary flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-text-primary mb-4">
        Seguro Play Car
      </h1>
      <p class="text-xl text-neutral-700 mb-8">
        Sistema em desenvolvimento...
      </p>
      <div class="space-y-4">
        <div class="bg-accent-primary text-neutral-0 px-6 py-3 rounded-lg inline-block">
          Página Inicial
        </div>

        <div class="block">
          <NuxtLink
            to="/teste-componentes"
            class="inline-flex items-center px-6 py-3 bg-neutral-0 border-2 border-accent-primary text-accent-primary rounded-lg hover:bg-accent-primary hover:text-neutral-0 transition-colors duration-200"
          >
            🧪 Testar Componentes
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Configurações da página
useHead({
  title: 'Seguro Play Car - Início',
  meta: [
    { name: 'description', content: 'Sistema Seguro Play Car - Página Inicial' }
  ]
})
</script>