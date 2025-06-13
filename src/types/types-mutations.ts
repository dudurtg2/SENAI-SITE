export interface LoginMutation {
  login: string
  senha: string
}

export interface RegisterMutation {
  name: string
  email: string
  password: string
  confirmpassword: string
  birthdate: string
  role: string
  phone: string
  username: string
  typeuser: string
}

export interface CreateAlunoMutation {
  usuarios: {
    uuid: string
  }
  matricula: string
  curso: string
  telefonePessoal: string
  telefoneProfissional: string
  linkedin: string
  endereco: {
    uuid: string
  }
  status: string
  criadoEm: string
  atualizadoEm: string
}

export interface CreateEnderecoMutation {
  cep: string
  logradouro: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  estado: string
  pais: string
}

export interface CreateProfessorMutation {
  usuariosUuid: string
  especialidade: string
  departamento: string
  telefonePessoal: string
  telefoneProfissional: string
  linkedin: string
  endereco: {
    uuid: string
  }
  status: string
}

export interface CreateUnidadeCurricularMutation {
  nome: string
  descricao: string
  cargaHoraria: string
  criadoEm: string
  atualizadoEm: string
}

export interface CreateProjetoMutation {
  nome: string
  professor: {
    uuid: string
  }
  criadoEm: string
  atualizadoEm: string
}

export interface CreateDisciplinaMutation {
  nome: string
  professor: {
    uuid: string
  }
  criadoEm: string
  atualizadoEm: string
}

export interface CreateDisciplinaProjetoMutation {
  disciplina: {
    uuid: string
  }
  projeto: {
    uuid: string
  }
}

export interface CreateProjetoAlunoMutation {
  projeto: {
    uuid: string
  }
  aluno: {
    uuid: string
  }
}

export interface CreateProjetoProfessorMutation {
  projeto: {
    uuid: string
  }
  professor: {
    uuid: string
  }
}

export interface CreateEtapaProjetoMutation {
  projeto: {
    uuid: string
  }
  nomeEtapa: string
  descricao: string
  ordem: number
  status: string
  criadoEm: string
  atualizadoEm: string
}

export interface CreateAnexoEtapaMutation {
  etapa: {
    uuid: string
  }
  nomeArquivo: string
  url: string
  tipo: string
  dataUpload: string
}