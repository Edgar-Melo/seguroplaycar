<template>
  <section class="relative min-h-screen bg-gradient-to-br from-neutral-0 via-neutral-50 to-primary-50">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(220, 38, 38, 0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          Nossa História
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-1000 leading-tight mb-6">
          20 Anos de
          <span class="text-primary-600">Excelência</span>
        </h1>
        <p class="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
          Construindo confiança e qualidade no mercado de seguros e reparação automotiva
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Left Content -->
        <div class="space-y-8">
          <!-- Story Card -->
          <div class="bg-neutral-0 rounded-2xl p-8 shadow-xl border border-neutral-100">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-neutral-900 mb-4">Nossa Jornada</h3>
                <p class="text-neutral-700 leading-relaxed mb-4">
                  Há <strong class="text-primary-600">20 anos</strong> atuamos no mercado do Pará e Amapá, oferecendo serviços especializados em lanternagem, pinturas, fibras e polimentos. Nossa expertise se estende por Oiapoque e Guiana Francesa, sempre priorizando a qualidade e satisfação dos nossos clientes.
                </p>
                <p class="text-neutral-700 leading-relaxed">
                  Nosso foco é <strong class="text-primary-600">crescer junto com o Estado do Amapá</strong>, contribuindo para o desenvolvimento regional através de serviços automotivos de excelência e seguros confiáveis.
                </p>
              </div>
            </div>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-6">
            <div class="bg-primary-600 rounded-xl p-6 text-center text-neutral-0">
              <div class="text-3xl font-bold mb-2">20+</div>
              <div class="text-primary-100">Anos de Experiência</div>
            </div>
            <div class="bg-neutral-800 rounded-xl p-6 text-center text-neutral-0">
              <div class="text-3xl font-bold mb-2">500+</div>
              <div class="text-neutral-400">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Services Showcase -->
        <div class="space-y-6">
          <!-- Service Cards -->
          <div class="bg-neutral-0 rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-neutral-900">Lanternagem Especializada</h4>
                <p class="text-sm text-neutral-600">Reparos estruturais com precisão e qualidade</p>
              </div>
            </div>
          </div>

          <div class="bg-neutral-0 rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-neutral-900">Pinturas Automotivas</h4>
                <p class="text-sm text-neutral-600">Acabamento perfeito com tintas premium</p>
              </div>
            </div>
          </div>

          <div class="bg-neutral-0 rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-neutral-900">Fibras e Polimentos</h4>
                <p class="text-sm text-neutral-600">Especialistas em reparos e acabamentos</p>
              </div>
            </div>
          </div>

          <div class="bg-neutral-0 rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-neutral-900">Seguros Completos</h4>
                <p class="text-sm text-neutral-600">Proteção total para seu veículo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mission & Vision Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Mission -->
        <div class="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-neutral-0">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-neutral-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold">Nossa Missão</h3>
          </div>
          <p class="text-primary-100 leading-relaxed">
            Oferecer serviços automotivos e seguros de excelência, contribuindo para a segurança e satisfação dos nossos clientes na região Norte do Brasil.
          </p>
        </div>

        <!-- Vision -->
        <div class="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 text-neutral-0">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-neutral-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold">Nossa Visão</h3>
          </div>
          <p class="text-neutral-300 leading-relaxed">
            Ser a referência em serviços automotivos e seguros no Amapá, crescendo junto com o estado e expandindo nossa atuação regional.
          </p>
        </div>
      </div>

      <!-- Coverage Area -->
      <div class="bg-neutral-0 rounded-2xl p-8 shadow-xl border border-neutral-100">
        <div class="text-center mb-8">
          <h3 class="text-3xl font-bold text-neutral-900 mb-4">Nossa Área de Atuação</h3>
          <p class="text-neutral-600 max-w-2xl mx-auto">
            Atendemos Oiapoque e Guiana Francesa, além de toda a região Norte do Brasil
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Oiapoque -->
          <div class="text-center p-6 bg-primary-50 rounded-xl border border-primary-100">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 class="font-semibold text-neutral-900 mb-2">Oiapoque/AP</h4>
            <p class="text-sm text-neutral-600">Nossa sede e principal área de atuação</p>
          </div>

          <!-- Guiana Francesa -->
          <div class="text-center p-6 bg-primary-50 rounded-xl border border-primary-100">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h4 class="font-semibold text-neutral-900 mb-2">Guiana Francesa</h4>
            <p class="text-sm text-neutral-600">Atendimento internacional</p>
          </div>

          <!-- Regional -->
          <div class="text-center p-6 bg-primary-50 rounded-xl border border-primary-100">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 class="font-semibold text-neutral-900 mb-2">Região Norte</h4>
            <p class="text-sm text-neutral-600">Pará e Amapá completos</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-neutral-0">
          <h3 class="text-3xl font-bold mb-4">Pronto para nos conhecer melhor?</h3>
          <p class="text-primary-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar a proteger e cuidar do seu veículo.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <BaseButton
              text="Falar com Consultor"
              variant="secondary"
              size="lg"
              class="bg-neutral-0 text-primary-600 hover:bg-neutral-100"
            />
            <BaseButton
              text="Ver Serviços"
              variant="outline"
              size="lg"
              class="border-neutral-300 text-neutral-0 hover:bg-neutral-100 hover:text-primary-600"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
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