import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default defineNuxtPlugin(() => {
  // O toast já está configurado globalmente pela importação
  // Adicionar função global para toasts
  return {
    provide: {
      toast
    }
  }
})