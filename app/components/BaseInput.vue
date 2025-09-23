<template>
  <div class="w-full">
    <!-- Label -->
    <label
      v-if="label"
      :for="inputId"
      class="block text-sm font-medium text-text-primary mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-error ml-1">*</span>
    </label>

    <!-- Input Container -->
    <div class="relative">
      <!-- Ícone à esquerda -->
      <div
        v-if="leftIcon"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <component :is="leftIcon" class="h-5 w-5 text-neutral-400" />
      </div>

      <!-- Campo de Input -->
      <input
        :id="inputId"
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :class="inputClasses"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
      />

      <!-- Ícone à direita -->
      <div
        v-if="rightIcon || hasError"
        class="absolute inset-y-0 right-0 pr-3 flex items-center"
      >
        <!-- Ícone de erro -->
        <svg
          v-if="hasError"
          class="h-5 w-5 text-error"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>

        <!-- Ícone personalizado -->
        <component
          v-else-if="rightIcon"
          :is="rightIcon"
          class="h-5 w-5 text-neutral-400"
        />
      </div>
    </div>

    <!-- Mensagem de erro ou ajuda -->
    <div class="mt-1 min-h-[1.25rem]">
      <p v-if="errorMessage" class="text-sm text-error">
        {{ errorMessage }}
      </p>
      <p v-else-if="helpText" class="text-sm text-neutral-500">
        {{ helpText }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number
  type?: 'text' | 'email' | 'password' | 'tel' | 'number' | 'url'
  label?: string
  placeholder?: string
  helpText?: string
  errorMessage?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  size?: 'sm' | 'md' | 'lg'
  leftIcon?: any
  rightIcon?: any
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  readonly: false,
  required: false,
  size: 'md'
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()

// ID único para o input
const inputId = `input-${Math.random().toString(36).substr(2, 9)}`

// Valor reativo
const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})

// Estado de erro
const hasError = computed(() => !!props.errorMessage)

// Classes do input
const inputClasses = computed(() => {
  const baseClasses = [
    'block w-full rounded-lg border transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-1',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'placeholder-neutral-400'
  ]

  // Tamanhos
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-4 py-3 text-base'
  }

  // Padding para ícones
  const iconPadding = []
  if (props.leftIcon) {
    iconPadding.push('pl-10')
  }
  if (props.rightIcon || hasError.value) {
    iconPadding.push('pr-10')
  }

  // Estados de cor
  let stateClasses = []
  if (hasError.value) {
    stateClasses = [
      'border-error text-error',
      'focus:ring-red-500 focus:border-error'
    ]
  } else {
    stateClasses = [
      'border-neutral-300 text-text-primary bg-neutral-0',
      'focus:ring-primary-500 focus:border-accent-primary',
      'hover:border-neutral-400'
    ]
  }

  return [
    ...baseClasses,
    sizeClasses[props.size],
    ...iconPadding,
    ...stateClasses
  ].join(' ')
})

// Event handlers
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}
</script>