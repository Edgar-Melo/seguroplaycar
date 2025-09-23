<template>
  <section class="relative min-h-screen bg-gradient-to-br from-neutral-0 via-neutral-50 to-primary-50 flex items-center">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(220, 38, 38, 0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Conteúdo Esquerdo -->
        <div class="space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Seguro de Veículos - Oiapoque/AP
          </div>

          <!-- Título Principal -->
          <div class="space-y-4">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-1000 leading-tight">
              Proteção Completa para seu
              <span class="text-primary-600">Veículo</span>
            </h1>
            <p class="text-xl md:text-2xl text-neutral-700 leading-relaxed">
              O melhor seguro de carros do município de Oiapoque.
              Cobertura completa, atendimento personalizado e preços acessíveis.
            </p>
          </div>

          <!-- Destaques -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span class="text-neutral-800 font-medium">Cobertura 24/7</span>
            </div>

            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span class="text-neutral-800 font-medium">Atendimento Rápido</span>
            </div>

            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <span class="text-neutral-800 font-medium">Preços Acessíveis</span>
            </div>

            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span class="text-neutral-800 font-medium">Equipe Especializada</span>
            </div>
          </div>

          <!-- Call to Action -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <BaseButton
              text="Cotar Seguro Agora"
              variant="primary"
              size="lg"
              class="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            />
            <BaseButton
              text="Falar com Consultor"
              variant="outline"
              size="lg"
              class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-neutral-0"
            />
          </div>

          <!-- Estatísticas -->
          <div class="flex flex-wrap gap-8 pt-8 border-t border-neutral-200">
            <div class="text-center">
              <div class="text-2xl font-bold text-primary-600">500+</div>
              <div class="text-sm text-neutral-600">Clientes Protegidos</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-primary-600">24/7</div>
              <div class="text-sm text-neutral-600">Atendimento</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-primary-600">5★</div>
              <div class="text-sm text-neutral-600">Avaliação Média</div>
            </div>
          </div>
        </div>

        <!-- Conteúdo Direito - Espaço para Imagem -->
        <div class="relative">
          <div class="relative bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-2xl">
            <!-- Placeholder para imagem do caminhão guincho -->
            <div class="aspect-square bg-neutral-100 rounded-xl flex items-center justify-center border-4 border-dashed border-primary-300">
              <div class="text-center space-y-4">
                <svg class="w-24 h-24 text-primary-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div class="space-y-2">
                  <h3 class="text-lg font-semibold text-primary-800">Imagem do Guincho</h3>
                  <p class="text-sm text-primary-600">Caminhão guincho será inserido aqui</p>
                </div>
              </div>
            </div>

            <!-- Elementos decorativos -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20"></div>
            <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-400 rounded-full opacity-10"></div>
          </div>

          <!-- Card flutuante com informações -->
          <div class="absolute -bottom-6 -left-6 bg-neutral-0 rounded-xl shadow-xl p-6 max-w-xs">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-neutral-900">Cobertura Completa</h4>
                <p class="text-sm text-neutral-600">Proteção total para seu veículo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/BaseButton.vue'
</script>

<style scoped>
/* Animações personalizadas */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>