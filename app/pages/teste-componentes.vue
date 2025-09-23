<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Teste de Componentes - Seguro de Carros
        </h1>
        <p class="text-lg text-gray-600">
          Página para testar os componentes reutilizáveis e funcionalidades do sistema
        </p>
      </div>

      <!-- Teste de Botões -->
      <section class="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Teste de Botões</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Botões Primários -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-700">Primários</h3>
            <BaseButton text="Pequeno" variant="primary" size="sm" />
            <BaseButton text="Padrão" variant="primary" />
            <BaseButton text="Grande" variant="primary" size="lg" />
            <BaseButton text="Carregando" variant="primary" :loading="true" />
          </div>

          <!-- Botões Secundários -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-700">Secundários</h3>
            <BaseButton text="Pequeno" variant="secondary" size="sm" />
            <BaseButton text="Padrão" variant="secondary" />
            <BaseButton text="Grande" variant="secondary" size="lg" />
            <BaseButton text="Desabilitado" variant="secondary" :disabled="true" />
          </div>

          <!-- Botões de Contorno -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-700">Contorno</h3>
            <BaseButton text="Pequeno" variant="outline" size="sm" />
            <BaseButton text="Padrão" variant="outline" />
            <BaseButton text="Grande" variant="outline" size="lg" />
            <BaseButton text="Carregando" variant="outline" :loading="true" />
          </div>

          <!-- Botões de Perigo -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-700">Perigo</h3>
            <BaseButton text="Pequeno" variant="danger" size="sm" />
            <BaseButton text="Padrão" variant="danger" />
            <BaseButton text="Grande" variant="danger" size="lg" />
          </div>

          <!-- Botões com Ícones -->
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-700">Com Ícones</h3>
            <BaseButton text="Adicionar" variant="primary" :icon="PlusIcon" />
            <BaseButton text="Remover" variant="secondary" :icon="TrashIcon" />
            <BaseButton text="Editar" variant="outline" :icon="PencilIcon" />
          </div>
        </div>
      </section>

      <!-- Teste de Inputs -->
      <section class="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Teste de Inputs</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Inputs Básicos -->
          <div class="space-y-6">
            <h3 class="text-lg font-medium text-gray-700">Inputs Básicos</h3>

            <BaseInput
              v-model="formData.nome"
              label="Nome Completo"
              placeholder="Digite seu nome completo"
              help-text="Campo obrigatório"
            />

            <BaseInput
              v-model="formData.email"
              label="E-mail"
              type="email"
              placeholder="seu@email.com"
              help-text="Digite um e-mail válido"
            />

            <BaseInput
              v-model="formData.telefone"
              label="Telefone"
              type="tel"
              placeholder="(11) 99999-9999"
            />

            <BaseInput
              v-model="formData.cpf"
              label="CPF"
              placeholder="000.000.000-00"
              mask="999.999.999-99"
            />
          </div>

          <!-- Inputs com Estados -->
          <div class="space-y-6">
            <h3 class="text-lg font-medium text-gray-700">Estados dos Inputs</h3>

            <BaseInput
              v-model="formData.senha"
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              :error="!!formData.senha && formData.senha.length < 6"
              error-message="A senha deve ter pelo menos 6 caracteres"
            />

            <BaseInput
              v-model="formData.confirmarSenha"
              label="Confirmar Senha"
              type="password"
              placeholder="Confirme sua senha"
              :error="!!formData.confirmarSenha && formData.senha !== formData.confirmarSenha"
              error-message="As senhas não coincidem"
            />

            <BaseInput
              label="Input Desabilitado"
              placeholder="Este campo está desabilitado"
              :disabled="true"
              model-value="Valor fixo"
            />

            <BaseInput
              v-model="formData.busca"
              label="Busca"
              placeholder="Digite para buscar..."
            >
              <template #icon>
                <MagnifyingGlassIcon class="w-5 h-5 text-gray-400" />
              </template>
            </BaseInput>
          </div>
        </div>
      </section>

      <!-- Teste de Toasts -->
      <section class="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Teste de Toasts</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <BaseButton text="Sucesso" variant="primary" @click="showSuccessToast" :icon="CheckCircleIcon" />
          <BaseButton text="Erro" variant="danger" @click="showErrorToast" :icon="ExclamationTriangleIcon" />
          <BaseButton text="Aviso" variant="secondary" @click="showWarningToast" :icon="ExclamationTriangleIcon" />
          <BaseButton text="Info" variant="outline" @click="showInfoToast" :icon="InformationCircleIcon" />
        </div>

        <div class="mt-6 p-4 bg-gray-100 rounded-lg">
          <p class="text-sm text-gray-600">
            Clique nos botões acima para testar os diferentes tipos de toast notifications.
          </p>
        </div>
      </section>

      <!-- Formulário de Teste -->
      <section class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Formulário de Teste</h2>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BaseInput
              v-model="formData.nome"
              label="Nome"
              placeholder="Seu nome"
              required
            />

            <BaseInput
              v-model="formData.email"
              label="E-mail"
              type="email"
              placeholder="seu@email.com"
              required
            />

            <BaseInput
              v-model="formData.telefone"
              label="Telefone"
              placeholder="(11) 99999-9999"
            />

            <BaseInput
              v-model="formData.placa"
              label="Placa do Veículo"
              placeholder="ABC-1234"
              help-text="Formato: AAA-9999"
            />
          </div>

          <div class="flex gap-4">
            <BaseButton type="submit" text="Enviar Formulário" variant="primary" :loading="submitting" :icon="!submitting ? PaperAirplaneIcon : undefined" />
            <BaseButton type="button" text="Limpar" variant="outline" @click="resetForm" :icon="ArrowPathIcon" />
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '~/components/BaseButton.vue'
import BaseInput from '~/components/BaseInput.vue'
import { useToast } from '~/composables/useToast'

// Ícones do Heroicons
import {
  PlusIcon,
  TrashIcon,
  PencilIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  PaperAirplaneIcon,
  ArrowPathIcon
} from '@heroicons/vue/24/outline'

// Dados reativos do formulário
const formData = ref({
  nome: '',
  email: '',
  telefone: '',
  cpf: '',
  senha: '',
  confirmarSenha: '',
  busca: '',
  placa: ''
})

const submitting = ref(false)

// Funções de toast
const { showSuccess, showError, showWarning, showInfo } = useToast()

const showSuccessToast = () => {
  showSuccess('Operação realizada com sucesso!')
}

const showErrorToast = () => {
  showError('Ocorreu um erro na operação.')
}

const showWarningToast = () => {
  showWarning('Atenção: Verifique os dados informados.')
}

const showInfoToast = () => {
  showInfo('Esta é uma mensagem informativa.')
}

// Funções do formulário
const handleSubmit = async () => {
  submitting.value = true

  try {
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000))

    showSuccess('Formulário enviado com sucesso!')

    // Reset form
    resetForm()
  } catch (err) {
    showError('Erro ao enviar formulário. Tente novamente.')
  } finally {
    submitting.value = false
  }
}

const resetForm = () => {
  formData.value = {
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    senha: '',
    confirmarSenha: '',
    busca: '',
    placa: ''
  }
}
</script>