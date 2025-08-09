# Estrutura do Projeto SENAI Site

## Visão Geral
Este projeto foi reorganizado para separar claramente as funcionalidades por tipo de usuário, facilitando a manutenção e desenvolvimento.

## Nova Estrutura por Tipo de Usuário

### 🏠 Visitor (Visitantes)
**Localização:** `src/features/visitor/`

Páginas públicas acessíveis sem autenticação:
- `landing-page/` - Página inicial do site
- `about-project/` - Página sobre o projeto

**Rotas:**
- `/` - Landing page
- `/sobre-projeto` - Sobre o projeto

### 🔐 Auth (Autenticação)
**Localização:** `src/features/auth/`

Sistema de autenticação e registro:
- `login/` - Página e componentes de login
- `register/` - Página e componentes de registro
- `google-callback.tsx` - Callback para autenticação Google

**Rotas:**
- `/login` - Página de login
- `/register` - Página de registro
- `/auth/google/callback` - Callback Google OAuth

### 🎓 Student (Estudantes)
**Localização:** `src/features/student/`

Funcionalidades específicas para estudantes:
- `dashboard/` - Dashboard principal do estudante
- `projects/` - Visualização e gerenciamento de projetos
- `account/` - Configurações de conta
- `create-project/` - Criação de novos projetos
- `calendar/` - Calendário de atividades
- `community/` - Comunidade e interações
- `project-detail/` - Detalhes específicos de projetos

**Rotas base:** `/app`
- `/app/dashboard` - Dashboard
- `/app/projects` - Lista de projetos
- `/app/projects/:projectId` - Detalhes do projeto
- `/app/create-project` - Criar projeto
- `/app/account` - Conta do usuário
- `/app/calendar` - Calendário
- `/app/community` - Comunidade

### 👨‍🏫 Teacher (Professores)
**Localização:** `src/features/teacher/`

Funcionalidades específicas para professores:
- `dashboard/` - Dashboard do professor
- `projects/` - Gerenciamento de projetos dos alunos
- `students/` - Gerenciamento de estudantes
- `calendar/` - Calendário acadêmico
- `evaluations/` - Sistema de avaliações
- `reports/` - Relatórios e analytics
- `certificates/` - Gerenciamento de certificados
- `messages/` - Sistema de mensagens
- `resources/` - Recursos educacionais
- `settings/` - Configurações do professor
- `layout/` - Layout específico para professores
- `components/` - Componentes compartilhados entre as funcionalidades de professor

**Rotas base:** `/teacher`
- `/teacher/dashboard` - Dashboard
- `/teacher/projects` - Projetos dos alunos
- `/teacher/students` - Estudantes
- `/teacher/calendar` - Calendário
- `/teacher/evaluations` - Avaliações
- `/teacher/reports` - Relatórios
- `/teacher/certificates` - Certificados
- `/teacher/messages` - Mensagens
- `/teacher/resources` - Recursos
- `/teacher/settings` - Configurações

### 🔗 Shared (Compartilhado)
**Localização:** `src/features/shared/`

Funcionalidades compartilhadas entre diferentes tipos de usuário:
- `notifications/` - Sistema de notificações
- `component-variations-demo.tsx` - Demonstração de componentes (desenvolvimento)

### 👨‍💼 Admin (Administrador)
**Localização:** `src/features/admin/`

**Status:** Placeholder para funcionalidades futuras de administração
- Sistema de controle total do aplicativo
- Gerenciamento de usuários
- Configurações globais

## Estrutura Geral do Projeto

```
src/
├── features/              # Funcionalidades organizadas por tipo de usuário
│   ├── visitor/          # Páginas públicas
│   ├── auth/             # Sistema de autenticação
│   ├── student/          # Funcionalidades de estudante
│   ├── teacher/          # Funcionalidades de professor
│   ├── shared/           # Funcionalidades compartilhadas
│   └── admin/            # Futuras funcionalidades de admin
├── components/           # Componentes globais reutilizáveis
├── contexts/             # Contexts do React (auth, user, notifications, etc.)
├── hooks/                # Custom hooks
├── layout/               # Layouts base
├── routes/               # Configuração de rotas
├── services/             # Serviços de API
├── types/                # Definições de tipos TypeScript
├── utils/                # Utilitários e helpers
├── styles/               # Estilos globais
├── assets/               # Imagens, ícones e outros recursos
└── api/                  # Configuração de API e mutations
```

## Padrões de Organização

### Por Feature
Cada funcionalidade principal tem sua própria pasta com:
- `page.tsx` - Componente principal da página
- `components/` - Componentes específicos da funcionalidade
- `hooks/` - Hooks específicos (quando necessário)
- `types/` - Tipos específicos (quando necessário)

### Por Tipo de Usuário
As funcionalidades são agrupadas por tipo de usuário para:
- Facilitar a navegação no código
- Melhorar a manutenção
- Permitir controle de acesso granular
- Facilitar a adição de novas funcionalidades

## Benefícios da Nova Estrutura

1. **Clareza:** Cada desenvolvedor sabe exatamente onde encontrar funcionalidades específicas
2. **Manutenibilidade:** Mudanças em um tipo de usuário não afetam outros
3. **Escalabilidade:** Fácil adicionar novas funcionalidades para cada tipo de usuário
4. **Controle de Acesso:** Rotas organizadas por permissão de usuário
5. **Colaboração:** Diferentes desenvolvedores podem trabalhar em diferentes partes sem conflitos

## Próximos Passos

1. Implementar funcionalidades de administrador em `src/features/admin/`
2. Adicionar testes específicos para cada tipo de usuário
3. Implementar lazy loading para otimizar performance
4. Adicionar documentação específica para cada funcionalidade

## Migração de Funcionalidades Antigas

- ✅ Removida pasta `src/paginas` (duplicada e em português)
- ✅ Reorganizadas todas as funcionalidades por tipo de usuário  
- ✅ Atualizadas todas as importações no sistema de roteamento
- ✅ Mantida compatibilidade com todas as rotas existentes