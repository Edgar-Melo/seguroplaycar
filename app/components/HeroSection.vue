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

          <!-- Aviso Site em Construção -->
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <div>
                <p class="text-sm font-medium text-yellow-800">
                  🚧 Site em Construção
                </p>
                <p class="text-sm text-yellow-700 mt-1">
                  Pedimos desculpas, mas algumas funcionalidades ainda estão sendo implementadas. Entre em contato conosco para atendimento completo.
                </p>
              </div>
            </div>
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
            <NuxtLink to="/contato">
              <BaseButton
                text="Falar com Consultor"
                variant="outline"
                size="lg"
                class="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-neutral-0"
              />
            </NuxtLink>
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
          <div class="relative">
            <!-- Imagem do caminhão guincho -->
            <div class="aspect-square bg-neutral-100 rounded-xl overflow-hidden">
              <img
                :src="guinchoImageSrc"
                alt="Oficina Play Car - Serviços Automotivos Oiapoque"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                @error="handleImageError"
              />
            </div>

            <!-- Elementos decorativos -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20"></div>
            <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-400 rounded-full opacity-10"></div>
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

// Caminho da imagem do guincho
const guinchoImageSrc = '/img/Oficina-Play-car.png'

// Função para lidar com erro de carregamento da imagem
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // Fallback para uma imagem placeholder ou deixa a div vazia
  img.style.display = 'none'
  console.warn('Imagem da oficina não encontrada. Adicione /public/img/Oficina-Play-car.png')
}
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