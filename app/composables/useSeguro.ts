export const useSeguro = () => {
  // Estado reativo para dados do seguro
  const seguroData = ref({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    cep: '',
    veiculo: {
      marca: '',
      modelo: '',
      ano: '',
      valor: 0
    }
  })

  // Função para calcular cotação
  const calcularCotacao = async () => {
    // Simular cálculo de cotação
    const baseValue = seguroData.value.veiculo.valor
    const anoVeiculo = parseInt(seguroData.value.veiculo.ano)
    const anoAtual = new Date().getFullYear()

    // Cálculo básico baseado no valor e idade do veículo
    let percentual = 0.05 // 5% base

    if (anoAtual - anoVeiculo > 10) {
      percentual += 0.02 // +2% para carros mais antigos
    }

    return {
      valorAnual: baseValue * percentual,
      valorMensal: (baseValue * percentual) / 12,
      cobertura: 'Cobertura Completa'
    }
  }

  // Função para validar CPF (simplificada)
  const validarCPF = (cpf: string): boolean => {
    const cleanCPF = cpf.replace(/\D/g, '')
    return cleanCPF.length === 11
  }

  // Função para formatar telefone
  const formatarTelefone = (telefone: string): string => {
    const clean = telefone.replace(/\D/g, '')
    if (clean.length === 11) {
      return `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7)}`
    }
    return telefone
  }

  // Função para limpar formulário
  const limparFormulario = () => {
    seguroData.value = {
      nome: '',
      email: '',
      telefone: '',
      cpf: '',
      cep: '',
      veiculo: {
        marca: '',
        modelo: '',
        ano: '',
        valor: 0
      }
    }
  }

  return {
    seguroData: readonly(seguroData),
    calcularCotacao,
    validarCPF,
    formatarTelefone,
    limparFormulario
  }
}