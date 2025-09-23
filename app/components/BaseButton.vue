<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="handleClick"
  >
    <!-- Loading spinner -->
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    <!-- Ícone (se fornecido) -->
    <component
      v-if="icon && !loading"
      :is="icon"
      class="w-4 h-4 mr-2"
    />

    <!-- Texto do botão -->
    <span>{{ loading ? loadingText : text }}</span>
  </button>
</template>

<script setup lang="ts">
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/vue/24/outline'
interface Props {
  text: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  loadingText?: string
  icon?: any
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  loadingText: 'Carregando...',
  fullWidth: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

const buttonClasses = computed(() => {
  const baseClasses = [
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  ]

  // Tamanhos
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  // Variantes
  const variantClasses = {
    primary: [
      'bg-accent-primary text-neutral-0',
      'hover:bg-accent-secondary focus:ring-primary-500',
      'shadow-lg hover:shadow-xl'
    ],
    secondary: [
      'bg-neutral-100 text-text-primary border border-neutral-300',
      'hover:bg-neutral-200 focus:ring-neutral-500'
    ],
    outline: [
      'border-2 border-accent-primary text-accent-primary bg-transparent',
      'hover:bg-accent-primary hover:text-neutral-0 focus:ring-primary-500'
    ],
    ghost: [
      'text-accent-primary bg-transparent',
      'hover:bg-accent-primary hover:bg-opacity-10 focus:ring-primary-500'
    ],
    danger: [
      'bg-error text-neutral-0',
      'hover:bg-red-700 focus:ring-red-500',
      'shadow-lg hover:shadow-xl'
    ]
  }

  const classes = [
    ...baseClasses,
    sizeClasses[props.size],
    ...variantClasses[props.variant]
  ]

  if (props.fullWidth) {
    classes.push('w-full')
  }

  return classes.join(' ')
})
</script>