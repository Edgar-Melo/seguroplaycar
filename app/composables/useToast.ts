export const useToast = () => {
  const { $toast } = useNuxtApp()

  const showSuccess = (message: string, options = {}) => {
    $toast.success(message, options)
  }

  const showError = (message: string, options = {}) => {
    $toast.error(message, options)
  }

  const showWarning = (message: string, options = {}) => {
    $toast.warning(message, options)
  }

  const showInfo = (message: string, options = {}) => {
    $toast.info(message, options)
  }

  const showLoading = (message?: string, options = {}) => {
    return $toast.loading(message || 'Carregando...', options)
  }

  const updateToast = (toastId: string | number, options: any) => {
    $toast.update(toastId, options)
  }

  const dismissToast = (toastId?: string | number) => {
    if (toastId) {
      $toast.dismiss(toastId)
    } else {
      $toast.dismiss()
    }
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