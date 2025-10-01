# 📦 Componentes Arquivados - Seções Removidas

## 📋 Sobre esta pasta

Esta pasta contém os componentes que foram **temporariamente removidos** da aplicação:

1. **Seção de Equipe** - Removida até que sejam definidos os integrantes oficiais
2. **Seção de Outros Links** - Os links foram movidos para o Footer
3. **Página de Contato** - Removida (informações mantidas no Footer)

## 📂 Estrutura

```
archived/
├── sections/
│   ├── Equipe.tsx              # Página completa da seção "Nossa Equipe"
│   └── Contato.tsx             # Página de contato
├── components/
│   ├── InfoSection.tsx         # Carrossel de equipe da landing page
│   ├── LinksSection.tsx        # Seção "Outros Links" (movida para Footer)
│   └── LinkCard.tsx            # Card de link individual
├── modals/
│   └── team-member-modal.tsx   # Modal com detalhes de cada membro
└── README.md                   # Este arquivo
```

## 🔄 Como Restaurar

Quando os integrantes da equipe forem definidos, siga os passos abaixo para restaurar a funcionalidade:

### 1. Mover os arquivos de volta

```powershell
# Mover a página Equipe
Move-Item "src\features\visitor\archived\sections\Equipe.tsx" "src\features\visitor\sections\Equipe.tsx"

# Mover o componente InfoSection
Move-Item "src\features\visitor\archived\components\InfoSection.tsx" "src\features\visitor\landing-page\components\Info\InfoSection.tsx"

# Mover o modal
Move-Item "src\features\visitor\archived\modals\team-member-modal.tsx" "src\components\modals\team-member-modal.tsx"
```

### 2. Restaurar as exportações

**`src/features/visitor/sections/index.ts`**
```typescript
export { default as Equipe } from './Equipe'
```

### 3. Restaurar a rota

**`src/routes/router.tsx`**
```typescript
import { 
  // ... outros imports
  Equipe,
} from '../features/visitor/sections'

// ...

<Route path="/equipe" element={<Equipe />} />
```

### 4. Restaurar na landing page

**`src/features/visitor/landing-page/page.tsx`**
```typescript
import InfoSection from './components/Info/InfoSection'

// ...

<section id="equipe">
  <InfoSection />
</section>
```

### 5. Restaurar no breadcrumb

**`src/features/visitor/layout/SectionLayout.tsx`**
```typescript
const sectionPages = {
  // ... outros
  '/equipe': { name: 'Nossa Equipe', description: 'Profissionais dedicados à excelência' },
}
```

## ✏️ Atualizando os dados da equipe

### Atualizar membros no InfoSection

Edite o array `teamMembers` em `InfoSection.tsx`:

```typescript
const teamMembers: TeamMember[] = [
  {
    id: 1,
    imageUrl: '/caminho/para/foto.jpg',
    name: 'Nome do Membro',
    details: 'Cargo/Função',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    summary: 'Descrição do membro...',
    github: 'https://github.com/usuario',
    linkedin: 'https://linkedin.com/in/usuario',
    whatsapp: '5511999999999'
  },
  // ... mais membros
]
```

### Atualizar membros na página Equipe

Edite o array `equipeData` em `Equipe.tsx`:

```typescript
const equipeData = [
  {
    nome: "Nome Completo",
    cargo: "Cargo",
    area: "Área de Atuação",
    foto: "URL da foto",
    bio: "Biografia...",
    contato: "email@senai.br"
  },
  // ... mais membros
]
```

## 🖼️ Imagens da Equipe

As imagens dos membros da equipe estão localizadas em:
```
src/assets/Equipe/
```

Certifique-se de ter as fotos dos novos membros nesta pasta antes de restaurar os componentes.

## 📝 Notas Importantes

- ⚠️ **Não delete esta pasta!** Os componentes aqui são funcionais e estão prontos para uso.
- 🔄 Todos os componentes foram testados e estavam funcionando corretamente antes de serem arquivados.
- 📸 **Equipe:** Lembre-se de adicionar as fotos dos membros em `src/assets/Equipe/` antes de restaurar.
- 🔗 **Links:** A seção "Outros Links" foi movida para o Footer com melhor usabilidade.
- 🎨 Os componentes seguem o mesmo padrão de design do resto da aplicação.

## 📅 Histórico de Arquivamento

### Seção de Equipe
**Data:** 30 de setembro de 2025  
**Motivo:** Aguardando definição dos integrantes oficiais da equipe  

### Seção de Outros Links
**Data:** 30 de setembro de 2025  
**Motivo:** Links movidos para o Footer para melhor organização e acessibilidade  
**Nota:** Os links (SENAI Bahia, CIMATEC, FIEB, Portal Educacional, Portal do Professor) agora estão na seção "Atalhos" do rodapé.

### Página de Contato
**Data:** 30 de setembro de 2025  
**Motivo:** Simplificação da navegação - informações de contato já disponíveis no Footer  
**Nota:** Mapa, endereço e telefones permanecem visíveis na seção de contato do rodapé.

---

**Vitrine de Projetos SENAI** - Componentes Arquivados
