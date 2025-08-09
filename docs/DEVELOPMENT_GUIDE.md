# Guia de Desenvolvimento - SENAI Site

## Como Contribuir

### Executando o Projeto

1. **Instalação das Dependências:**
   ```bash
   npm install
   ```

2. **Executar em Desenvolvimento:**
   ```bash
   npm run dev
   ```
   O projeto será executado em `http://localhost:3000`

3. **Build para Produção:**
   ```bash
   npm run build
   ```

### Estrutura de Desenvolvimento por Tipo de Usuário

#### 🏠 Desenvolvendo para Visitantes
**Localização:** `src/features/visitor/`

- Páginas públicas que não requerem autenticação
- Focadas em apresentação e informações institucionais
- Exemplos: Landing page, sobre o projeto

#### 🔐 Desenvolvendo Autenticação
**Localização:** `src/features/auth/`

- Sistema de login, registro e callbacks
- Integração com Google OAuth
- Gerenciamento de sessões

#### 🎓 Desenvolvendo para Estudantes
**Localização:** `src/features/student/`

- Dashboard pessoal do estudante
- Gerenciamento de projetos
- Funcionalidades acadêmicas
- Comunidade e interações

#### 👨‍🏫 Desenvolvendo para Professores
**Localização:** `src/features/teacher/`

- Painel administrativo
- Gerenciamento de alunos
- Sistema de avaliações
- Relatórios acadêmicos

#### 🔗 Funcionalidades Compartilhadas
**Localização:** `src/features/shared/`

- Componentes e funcionalidades utilizadas por múltiplos tipos de usuário
- Sistema de notificações
- Utilitários comuns

### Convenções de Código

#### Importações
**✅ Recomendado:** Use o alias `@/` para importações absolutas
```typescript
import { AuthContext } from '@/contexts/auth-context'
import { api } from '@/services/axios-instance'
```

**❌ Evitar:** Importações relativas longas
```typescript
import { AuthContext } from '../../../contexts/auth-context'
```

#### Estrutura de Componentes
Cada funcionalidade deve seguir a estrutura:
```
feature-name/
├── page.tsx              # Componente principal da página
├── components/           # Componentes específicos da funcionalidade
├── hooks/               # Custom hooks (quando necessário)
└── types/              # Tipos TypeScript específicos (quando necessário)
```

### Adicionando Novas Funcionalidades

#### Para Estudantes
1. Crie a pasta em `src/features/student/nova-funcionalidade/`
2. Implemente o componente `page.tsx`
3. Adicione a rota em `src/routes/router.tsx` dentro das rotas `/app`
4. Atualize a navegação no layout de estudante

#### Para Professores
1. Crie a pasta em `src/features/teacher/nova-funcionalidade/`
2. Implemente o componente `page.tsx`
3. Adicione a rota em `src/routes/router.tsx` dentro das rotas `/teacher`
4. Atualize a navegação no layout de professor

#### Para Administradores (Futuro)
1. Implemente em `src/features/admin/`
2. Crie novas rotas base `/admin`
3. Implemente sistema de permissões específicas

### Testando Funcionalidades

#### Testando Rotas
- **Visitante:** `http://localhost:3000/`
- **Login:** `http://localhost:3000/login`
- **Registro:** `http://localhost:3000/register`
- **Estudante:** `http://localhost:3000/app/*`
- **Professor:** `http://localhost:3000/teacher/*`

#### Testando Responsividade
- Desktop: 1920px+
- Tablet: 768px - 1919px
- Mobile: 320px - 767px

### Tecnologias e Ferramentas

- **React 19+** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Bundler e dev server
- **Tailwind CSS** - Framework CSS
- **React Router** - Navegação
- **Axios** - Cliente HTTP
- **Context API** - Gerenciamento de estado

### Resolução de Problemas

#### Build Falhando
1. Limpe o cache: `npm run dev` (Ctrl+C) e restart
2. Verifique importações quebradas
3. Confirme que todos os arquivos existem nos caminhos corretos

#### Importações Quebradas
- Sempre use `@/` para importações de src
- Verifique se o arquivo existe no caminho especificado
- Confirme se a extensão está correta (.tsx, .ts)

#### Rota Não Funcionando
1. Verifique se a rota está definida em `src/routes/router.tsx`
2. Confirme se o componente está sendo importado corretamente
3. Verifique se está na área correta (visitor, auth, student, teacher)

### Padrões de Commit

- `feat: adicionar nova funcionalidade`
- `fix: correção de bug`
- `docs: atualização de documentação`
- `refactor: refatoração de código`
- `style: mudanças de estilo/formatação`
- `test: adição/correção de testes`

### Performance

- Use lazy loading para páginas pesadas
- Otimize imagens antes de adicionar aos assets
- Evite re-renderizações desnecessárias com React.memo
- Use o Context API apenas quando necessário

### Segurança

- Nunca commite credenciais no código
- Use variáveis de ambiente para configurações sensíveis
- Valide todos os inputs do usuário
- Implemente autorização adequada para cada tipo de usuário