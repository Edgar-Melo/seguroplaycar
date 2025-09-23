import { toast } from 'vue3-toastify'

export const useToast = () => {
  const defaultOptions = {
    autoClose: 4000,
    position: 'top-right' as const,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored' as const,
    style: {
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }
  }

  const showSuccess = (message: string, options = {}) => {
    toast.success(message, { ...defaultOptions, ...options })
  }

  const showError = (message: string, options = {}) => {
    toast.error(message, { ...defaultOptions, ...options })
  }

  const showWarning = (message: string, options = {}) => {
    toast.warning(message, { ...defaultOptions, ...options })
  }

  const showInfo = (message: string, options = {}) => {
    toast.info(message, { ...defaultOptions, ...options })
  }

  const showLoading = (message?: string, options = {}) => {
    return toast.loading(message || 'Carregando...', { ...defaultOptions, ...options })
  }

  const updateToast = (toastId: string | number, options: any) => {
    toast.update(toastId, options)
  }

  const dismissToast = (toastId?: string | number) => {
    // Nota: dismiss pode não estar disponível na versão atual do vue3-toastify
    // toast.dismiss(toastId)
    console.warn('dismissToast não implementado - funcionalidade limitada do vue3-toastify')
  }

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showLoading,
    updateToast,
    dismissToast
  }
}