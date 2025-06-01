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
