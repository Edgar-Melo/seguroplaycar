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
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          Atendimento Especializado
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-1000 leading-tight mb-6">
          Falar com um
          <span class="text-primary-600">Consultor</span>
        </h1>
        <p class="text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
          Nossa equipe está pronta para tirar todas as suas dúvidas sobre seguros e serviços automotivos.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Welcome Message -->
          <div class="bg-neutral-0 rounded-2xl p-8 shadow-xl border border-neutral-100">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-neutral-900 mb-4">Olá! Como podemos ajudar?</h3>
                <p class="text-neutral-700 leading-relaxed mb-4">
                  Somos especialistas em seguros de veículos e serviços automotivos há mais de 20 anos.
                  Entre em contato conosco e receba atendimento personalizado para proteger seu veículo.
                </p>
                <div class="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-600">
                  <p class="text-primary-800 font-medium">
                    💬 <strong>Primeiro contato:</strong> "Olá! Gostaria de informações sobre seguros de veículos para meu carro."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Methods -->
          <div class="space-y-6">
            <!-- Phone -->
            <div class="bg-neutral-0 rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-neutral-900">Telefone</h4>
                  <a href="tel:+559681012614" class="text-neutral-600 hover:text-primary-600 transition-colors duration-200 text-lg font-medium">
                    +55 96 8101 2614
                  </a>
                  <p class="text-sm text-neutral-500 mt-1">Atendimento imediato</p>
                </div>
                <a href="tel:+559681012614" class="bg-primary-600 text-neutral-0 p-3 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="bg-neutral-0 rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-neutral-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-neutral-900">WhatsApp</h4>
                  <a href="https://wa.me/559681012614?text=Olá!%20Gostaria%20de%20informações%20sobre%20seguros%20de%20veículos%20para%20meu%20carro." target="_blank" class="text-neutral-600 hover:text-primary-600 transition-colors duration-200 text-lg font-medium">
                    +55 96 8101 2614
                  </a>
                  <p class="text-sm text-neutral-500 mt-1">Mensagem rápida com texto pré-definido</p>
                </div>
                <a href="https://wa.me/559681012614?text=Olá!%20Gostaria%20de%20informações%20sobre%20seguros%20de%20veículos%20para%20meu%20carro." target="_blank" class="bg-green-500 text-neutral-0 p-3 rounded-lg hover:bg-green-600 transition-colors duration-200">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-neutral-0">
            <div class="flex items-center mb-4">
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 class="text-lg font-semibold">Horário de Atendimento</h4>
            </div>
            <div class="space-y-2 text-primary-100">
              <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
              <p><strong>Sábado:</strong> 8h às 12h</p>
              <p><strong>Domingo:</strong> Emergências 24h</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="space-y-8">
          <!-- Quick Contact Form -->
          <div class="bg-neutral-0 rounded-2xl p-8 shadow-xl border border-neutral-100">
            <h3 class="text-2xl font-bold text-neutral-900 mb-6">Envie sua Mensagem</h3>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-neutral-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Seu nome completo"
                />
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block text-sm font-medium text-neutral-700 mb-2">
                  Telefone *
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="+55 96 99999-9999"
                />
              </div>

              <!-- Service Interest -->
              <div>
                <label for="service" class="block text-sm font-medium text-neutral-700 mb-2">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="seguro">Seguro de Veículos</option>
                  <option value="lanternagem">Lanternagem</option>
                  <option value="pintura">Pintura Automotiva</option>
                  <option value="fibra">Reparo em Fibras</option>
                  <option value="polimento">Polimento</option>
                  <option value="guincho">Guincho 24h</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-neutral-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                  placeholder="Conte-nos como podemos ajudar..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <BaseButton
                text="Enviar Mensagem"
                variant="primary"
                size="lg"
                class="w-full shadow-lg hover:shadow-xl"
                :disabled="isSubmitting"
                @click="handleSubmit"
              />
            </form>
          </div>

          <!-- Address -->
          <div class="bg-neutral-0 rounded-2xl p-6 shadow-lg border border-neutral-100">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-neutral-900 mb-2">Localização</h4>
                <p class="text-neutral-600 leading-relaxed">
                  <strong>Oiapoque/AP</strong><br>
                  Atendemos toda a região Norte do Brasil<br>
                  Consultas presenciais e remotas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Emergency Contact -->
      <div class="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-neutral-0">
        <div class="flex items-center justify-center mb-4">
          <svg class="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <h3 class="text-2xl font-bold">Emergência 24 Horas</h3>
        </div>
        <p class="text-red-100 mb-6 max-w-2xl mx-auto">
          Em caso de acidente ou emergência, ligue imediatamente para nosso atendimento 24 horas.
        </p>
        <a href="tel:+559681012614" class="inline-flex items-center bg-neutral-0 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-200">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          +55 96 8101 2614
        </a>
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

// Form state
const form = reactive({
  name: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)

// Handle form submission
const handleSubmit = async () => {
  if (!form.name || !form.phone) {
    showError('Por favor, preencha nome e telefone.')
    return
  }

  isSubmitting.value = true

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Reset form
    form.name = ''
    form.phone = ''
    form.service = ''
    form.message = ''

    showSuccess('Mensagem enviada com sucesso! Entraremos em contato em breve.')
  } catch (error) {
    showError('Erro ao enviar mensagem. Tente novamente.')
  } finally {
    isSubmitting.value = false
  }
}

// Toast functions (simplified for this component)
const showSuccess = (message: string) => {
  alert(`✅ ${message}`)
}

const showError = (message: string) => {
  alert(`❌ ${message}`)
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