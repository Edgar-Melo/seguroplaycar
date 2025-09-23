<template>
  <div class="p-6">
    
    <!-- Exemplo de Botões -->
    <div class="mb-8">
      <h3 class="text-xl font-bold text-text-primary mb-4">Botões com Sistema de Cores</h3>
      <div class="flex flex-wrap gap-4">
        
        <!-- Botão Principal -->
        <button class="bg-accent-primary hover:bg-accent-secondary text-neutral-0 px-6 py-3 rounded-lg font-semibold transition-colors shadow-accent hover:shadow-accent-lg">
          Botão Principal
        </button>
        
        <!-- Botão Secundário -->
        <button class="bg-neutral-100 hover:bg-neutral-200 text-text-primary px-6 py-3 rounded-lg font-semibold transition-colors border border-border-light">
          Botão Secundário
        </button>
        
        <!-- Botão Escuro -->
        <button class="bg-neutral-1000 hover:bg-neutral-900 text-neutral-0 px-6 py-3 rounded-lg font-semibold transition-colors">
          Botão Escuro
        </button>
        
        <!-- Botão de Sucesso -->
        <button class="bg-success hover:bg-success-dark text-neutral-0 px-6 py-3 rounded-lg font-semibold transition-colors">
          Sucesso
        </button>
        
        <!-- Botão de Erro -->
        <button class="bg-error hover:bg-error-dark text-neutral-0 px-6 py-3 rounded-lg font-semibold transition-colors">
          Erro
        </button>
        
      </div>
    </div>

    <!-- Exemplo de Cards -->
    <div class="mb-8">
      <h3 class="text-xl font-bold text-text-primary mb-4">Cards Temáticos</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Card Padrão -->
        <div class="bg-background-primary border border-border-light rounded-lg p-6 shadow-lg hover:shadow-accent transition-shadow animate-fade-in">
          <div class="w-12 h-12 bg-accent-light rounded-lg mb-4 flex items-center justify-center">
            <div class="w-6 h-6 bg-accent-primary rounded-full"></div>
          </div>
          <h4 class="text-lg font-bold text-text-primary mb-2">Card Padrão</h4>
          <p class="text-text-secondary mb-4">Este é um card com o tema padrão usando as cores semânticas.</p>
          <span class="inline-block bg-accent-light text-accent-dark px-3 py-1 rounded-full text-sm font-medium">
            Tag Accent
          </span>
        </div>

        <!-- Card Escuro -->
        <div class="bg-neutral-1000 text-neutral-0 rounded-lg p-6 shadow-dark animate-slide-up">
          <div class="w-12 h-12 bg-neutral-800 rounded-lg mb-4 flex items-center justify-center border border-neutral-700">
            <div class="w-6 h-6 bg-neutral-0 rounded-full"></div>
          </div>
          <h4 class="text-lg font-bold mb-2">Card Escuro</h4>
          <p class="text-neutral-300 mb-4">Card com tema escuro usando preto profundo e contraste branco.</p>
          <span class="inline-block bg-neutral-800 text-neutral-200 px-3 py-1 rounded-full text-sm font-medium border border-neutral-700">
            Tag Dark
          </span>
        </div>

        <!-- Card Accent -->
        <div class="bg-accent-light border-2 border-accent-primary rounded-lg p-6">
          <div class="w-12 h-12 bg-accent-primary rounded-lg mb-4 flex items-center justify-center">
            <div class="w-6 h-6 bg-neutral-0 rounded-full"></div>
          </div>
          <h4 class="text-lg font-bold text-accent-dark mb-2">Card Accent</h4>
          <p class="text-accent-dark mb-4">Card destacado com a cor principal vermelho sangue.</p>
          <span class="inline-block bg-accent-primary text-neutral-0 px-3 py-1 rounded-full text-sm font-medium">
            Tag Primary
          </span>
        </div>

      </div>
    </div>

    <!-- Exemplo de Formulário -->
    <div class="mb-8">
      <h3 class="text-xl font-bold text-text-primary mb-4">Elementos de Formulário</h3>
      <div class="bg-background-secondary rounded-lg p-6 border border-border-light">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div>
            <label class="block text-text-primary font-semibold mb-2">Nome Completo</label>
            <input 
              type="text" 
              placeholder="Digite seu nome"
              class="w-full px-4 py-3 border border-border-light rounded-lg focus:border-accent-primary focus:ring-2 focus:ring-accent-light focus:outline-none transition-colors"
            >
          </div>
          
          <div>
            <label class="block text-text-primary font-semibold mb-2">E-mail</label>
            <input 
              type="email" 
              placeholder="seu@email.com"
              class="w-full px-4 py-3 border border-border-light rounded-lg focus:border-accent-primary focus:ring-2 focus:ring-accent-light focus:outline-none transition-colors"
            >
          </div>
          
        </div>

        <div class="mt-6">
          <label class="block text-text-primary font-semibold mb-2">Mensagem</label>
          <textarea 
            placeholder="Sua mensagem aqui..."
            rows="4"
            class="w-full px-4 py-3 border border-border-light rounded-lg focus:border-accent-primary focus:ring-2 focus:ring-accent-light focus:outline-none transition-colors resize-none"
          ></textarea>
        </div>

        <div class="flex justify-between items-center mt-6">
          <button class="bg-neutral-200 hover:bg-neutral-300 text-text-primary px-6 py-3 rounded-lg font-semibold transition-colors">
            Cancelar
          </button>
          <button class="bg-accent-primary hover:bg-accent-secondary text-neutral-0 px-6 py-3 rounded-lg font-semibold transition-colors shadow-accent">
            Enviar Mensagem
          </button>
        </div>

      </div>
    </div>

    <!-- Exemplo de Alertas -->
    <div class="mb-8">
      <h3 class="text-xl font-bold text-text-primary mb-4">Sistema de Alertas</h3>
      <div class="space-y-4">
        
        <!-- Alert de Sucesso -->
        <div class="bg-success-light border border-success rounded-lg p-4 flex items-start space-x-3">
          <div class="w-6 h-6 bg-success rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
            <div class="w-2 h-2 bg-neutral-0 rounded-full"></div>
          </div>
          <div>
            <p class="font-semibold text-success-dark">Operação realizada com sucesso!</p>
            <p class="text-success-dark text-sm mt-1">Seus dados foram salvos corretamente no sistema.</p>
          </div>
        </div>

        <!-- Alert de Aviso -->
        <div class="bg-warning-light border border-warning rounded-lg p-4 flex items-start space-x-3">
          <div class="w-6 h-6 bg-warning rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
            <div class="w-2 h-2 bg-neutral-0 rounded-full"></div>
          </div>
          <div>
            <p class="font-semibold text-warning-dark">Atenção necessária</p>
            <p class="text-warning-dark text-sm mt-1">Verifique os dados antes de continuar.</p>
          </div>
        </div>

        <!-- Alert de Erro -->
        <div class="bg-error-light border border-error rounded-lg p-4 flex items-start space-x-3">
          <div class="w-6 h-6 bg-error rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
            <div class="w-2 h-2 bg-neutral-0 rounded-full"></div>
          </div>
          <div>
            <p class="font-semibold text-error-dark">Erro encontrado</p>
            <p class="text-error-dark text-sm mt-1">Não foi possível processar a solicitação. Tente novamente.</p>
          </div>
        </div>

        <!-- Alert de Info -->
        <div class="bg-info-light border border-info rounded-lg p-4 flex items-start space-x-3">
          <div class="w-6 h-6 bg-info rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
            <div class="w-2 h-2 bg-neutral-0 rounded-full"></div>
          </div>
          <div>
            <p class="font-semibold text-info-dark">Informação importante</p>
            <p class="text-info-dark text-sm mt-1">Sistema de cores semânticas configurado e funcionando.</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
// Este componente demonstra o uso completo do sistema de cores semânticas
</script>