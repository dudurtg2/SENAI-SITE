export interface LoginMutation {
  email: string
  password: string
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

export interface Project {
  id: string
  name: string
  description: string
  status: string
  date: string
  creator: string
  creatorRole: string
}

export interface Notification {
  id: string
  project: Project
  createdAt: string
  read: boolean
}

export interface CalendarEvent {
  id: string
  title: string
  description: string
  type: 'palestra' | 'feira' | 'workshop' | 'aula' | 'prova' | 'projeto'
  date: string
  time: string
  location?: string
  instructor?: string
  duration?: string
  status: 'agendado' | 'em-andamento' | 'concluido' | 'cancelado'
  isRegistered?: boolean
  maxParticipants?: number
  currentParticipants?: number
}

export interface CalendarDay {
  date: Date
  events: CalendarEvent[]
  isCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
}

export interface CommunityData {
  featuredProjects: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  recentDiscussions: Array<{
    id: string;
    title: string;
    content: string;
  }>;
  activeMembers: Array<{
    id: string;
    name: string;
    role: string;
  }>;
}

// Novos tipos baseados na API
export interface Aluno {
  uuid: string
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

export interface Endereco {
  uuid: string
  cep: string
  logradouro: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  estado: string
  pais: string
}

export interface Professor {
  uuid: string
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

export interface UnidadeCurricular {
  uuid: string
  nome: string
  descricao: string
  cargaHoraria: string
  criadoEm: string
  atualizadoEm: string
}

export interface Projeto {
  uuid: string
  nome: string
  professor: {
    uuid: string
  }
  criadoEm: string
  atualizadoEm: string
}

export interface Disciplina {
  uuid: string
  nome: string
  professor: {
    uuid: string
  }
  criadoEm: string
  atualizadoEm: string
}

export interface DisciplinaProjeto {
  uuid: string
  disciplina: {
    uuid: string
  }
  projeto: {
    uuid: string
  }
}

export interface ProjetoAluno {
  uuid: string
  projeto: {
    uuid: string
  }
  aluno: {
    uuid: string
  }
}

export interface ProjetoProfessor {
  uuid: string
  projeto: {
    uuid: string
  }
  professor: {
    uuid: string
  }
}

export interface EtapaProjeto {
  uuid: string
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

export interface AnexoEtapa {
  uuid: string
  etapa: {
    uuid: string
  }
  nomeArquivo: string
  url: string
  tipo: string
  dataUpload: string
}