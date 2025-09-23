<template>
  <footer class="bg-neutral-900 text-neutral-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Empresa -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-neutral-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold">Seguro Play Car</h3>
              <p class="text-sm text-neutral-400">Oiapoque/AP</p>
            </div>
          </div>
          <p class="text-neutral-300 text-sm leading-relaxed">
            O melhor seguro de carros do município de Oiapoque. Proteção completa,
            atendimento personalizado e preços acessíveis para seu veículo.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C8.396 0 7.609.043 6.298.099c-1.31.057-2.205.27-2.99.577C2.536.983 1.856 1.35 1.244 2.077.632 2.804.4 3.598.4 4.907v14.186c0 1.31.232 2.104.844 2.83.612.728 1.292 1.095 1.954 1.402.785.307 1.68.52 2.99.577 1.311.057 2.098.099 5.719.099s4.408-.042 5.719-.099c1.31-.057 2.205-.27 2.99-.577.662-.307 1.342-.674 1.954-1.402.612-.726.844-1.52.844-2.83V4.907c0-1.31-.232-2.104-.844-2.83-.612-.728-1.292-1.095-1.954-1.402C18.709.37 17.814.157 16.504.099 15.193.043 14.406 0 10.785 0zM9.595 2.068c.406 0 .825.014 1.19.042.36.028.67.083.958.174.424.134.81.313 1.166.587.356.274.64.64.914.996.274.356.45.742.584 1.166.091.288.146.598.174.958.028.365.042.784.042 1.19v10.61c0 .406-.014.825-.042 1.19-.028.36-.083.67-.174.958-.134.424-.31.81-.584 1.166-.274.356-.64.64-.996.914-.356.274-.742.45-1.166.584-.288.091-.598.146-.958.174-.365.028-.784.042-1.19.042H4.21c-.406 0-.825-.014-1.19-.042-.36-.028-.67-.083-.958-.174-.424-.134-.81-.31-1.166-.584-.356-.274-.64-.64-.914-.996-.274-.356-.45-.742-.584-1.166-.091-.288-.146-.598-.174-.958-.028-.365-.042-.784-.042-1.19V4.21c0-.406.014-.825.042-1.19.028-.36.083-.67.174-.958.134-.424.31-.81.584-1.166.274-.356.64-.64.996-.914.356-.274.742-.45 1.166-.584.288-.091.598-.146.958-.174.365-.028.784-.042 1.19-.042h5.385zM12 6.868c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 7.762c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM18.406 6.624c0 .64-.52 1.16-1.16 1.16s-1.16-.52-1.16-1.16.52-1.16 1.16-1.16 1.16.52 1.16 1.16z"/>
              </svg>
            </a>
            <a href="#" class="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
              <span class="sr-only">WhatsApp</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Serviços -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-neutral-0">Serviços</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/servicos" class="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                Seguro de Carros
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/servicos" class="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                Assistência 24h
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/servicos" class="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                Guincho
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/servicos" class="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                Proteção Veicular
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/servicos" class="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                Consultoria
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Links Úteis -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-neutral-0">Links Úteis</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/sobre" class="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                Sobre Nós
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contato" class="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                Contato
              </NuxtLink>
            </li>
            <li>
              <a href="#" class="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" class="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="#" class="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <!-- Contato -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-neutral-0">Contato</h3>
          <div class="space-y-3 text-sm">
            <div class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div class="text-neutral-300">
                <p>Oiapoque/AP</p>
                <p>Brasil</p>
              </div>
            </div>

            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+5596999999999" class="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                (96) 99999-9999
              </a>
            </div>

            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contato@seguroplaycar.com" class="text-neutral-300 hover:text-primary-400 transition-colors duration-200">
                contato@seguroplaycar.com
              </a>
            </div>

            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div class="text-neutral-300">
                <p>Seg - Sex: 8h às 18h</p>
                <p>Sáb: 8h às 12h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-neutral-700 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-neutral-400 text-sm">
            © {{ new Date().getFullYear() }} Seguro Play Car. Todos os direitos reservados.
          </div>
          <div class="flex space-x-6 text-sm">
            <a href="#" class="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
              Política de Privacidade
            </a>
            <a href="#" class="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
              Termos de Uso
            </a>
            <a href="#" class="text-neutral-400 hover:text-primary-400 transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Componente Footer - não precisa de lógica específica
</script>