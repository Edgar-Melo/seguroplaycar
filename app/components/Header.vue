<template>
  <header class="bg-neutral-0 shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-neutral-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="hidden sm:block">
              <h1 class="text-xl font-bold text-neutral-1000">Seguro Play Car</h1>
              <p class="text-xs text-neutral-600">Oiapoque/AP</p>
            </div>
          </NuxtLink>
        </div>

        <!-- Navigation Desktop -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink
            to="/"
            class="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
            :class="{ 'text-primary-600': $route.path === '/' }"
          >
            Início
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
          </NuxtLink>

          <NuxtLink
            to="/sobre"
            class="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
            :class="{ 'text-primary-600': $route.path === '/sobre' }"
          >
            Sobre Nós
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
          </NuxtLink>

          <NuxtLink
            to="/servicos"
            class="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
            :class="{ 'text-primary-600': $route.path === '/servicos' }"
          >
            Serviços
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
          </NuxtLink>

          <NuxtLink
            to="/contato"
            class="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
            :class="{ 'text-primary-600': $route.path === '/contato' }"
          >
            Contato
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-200"></span>
          </NuxtLink>
        </nav>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center space-x-4">
          <BaseButton
            text="Cotar Seguro"
            variant="primary"
            size="sm"
            class="shadow-md hover:shadow-lg"
          />
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="bg-neutral-100 inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            :aria-expanded="isMobileMenuOpen"
          >
            <span class="sr-only">Abrir menu principal</span>
            <svg
              class="block h-6 w-6"
              :class="{ 'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              class="hidden h-6 w-6"
              :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      class="md:hidden"
      :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 bg-neutral-50 border-t border-neutral-200">
        <NuxtLink
          to="/"
          class="text-neutral-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
          :class="{ 'text-primary-600 bg-primary-50': $route.path === '/' }"
          @click="closeMobileMenu"
        >
          Início
        </NuxtLink>

        <NuxtLink
          to="/sobre"
          class="text-neutral-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
          :class="{ 'text-primary-600 bg-primary-50': $route.path === '/sobre' }"
          @click="closeMobileMenu"
        >
          Sobre Nós
        </NuxtLink>

        <NuxtLink
          to="/servicos"
          class="text-neutral-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
          :class="{ 'text-primary-600 bg-primary-50': $route.path === '/servicos' }"
          @click="closeMobileMenu"
        >
          Serviços
        </NuxtLink>

        <NuxtLink
          to="/contato"
          class="text-neutral-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
          :class="{ 'text-primary-600 bg-primary-50': $route.path === '/contato' }"
          @click="closeMobileMenu"
        >
          Contato
        </NuxtLink>

        <div class="pt-4 pb-2">
          <BaseButton
            text="Cotar Seguro"
            variant="primary"
            size="sm"
            class="w-full"
            @click="closeMobileMenu"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '~/components/BaseButton.vue'

// Estado do menu mobile
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>