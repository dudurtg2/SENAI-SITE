# 📝 Changelog - Componentes Arquivados

## 30 de Setembro de 2025

### ✅ Mudanças Implementadas

#### 1. 🗂️ Reorganização do Footer

**ANTES:**
```
Footer
├── Atalhos
│   ├── Repositório
│   ├── Biblioteca Maker
│   └── Lab Maker
├── Team
│   ├── Desenvolvedores
│   ├── Auxiliares
│   └── Pensadores
└── Redes Sociais
```

**DEPOIS:**
```
Footer
├── Atalhos
│   ├── SENAI Bahia ↗️
│   ├── SENAI CIMATEC ↗️
│   ├── FIEB ↗️
│   ├── Portal Educacional ↗️
│   └── Portal do Professor ↗️
└── Redes Sociais
    ├── Instagram
    ├── WhatsApp
    └── Facebook
```

#### 2. 🗑️ Seção "Outros Links" Removida

A seção completa "OUTROS LINKS" foi removida da landing page.

**Conteúdo movido para:** Footer → Atalhos

**Links migrados:**
- ✅ SENAI Bahia
- ✅ SENAI CIMATEC  
- ✅ FIEB
- ✅ Portal Educacional
- ✅ Portal do Professor

#### 3. 📦 Componentes Arquivados

**Arquivos movidos para `archived/components/`:**
- `LinksSection.tsx` - Seção completa de links
- `LinkCard.tsx` - Componente de card de link individual

---

## Arquivamentos Anteriores

### Seção de Equipe

**Componentes arquivados:**
- `sections/Equipe.tsx`
- `components/InfoSection.tsx`
- `modals/team-member-modal.tsx`

**Motivo:** Aguardando definição dos integrantes oficiais

---

## 🔄 Impacto nas Rotas

### Rotas Removidas:
- ❌ `/equipe` (Seção de Equipe)

### Seções Removidas da Landing Page:
- ❌ `<section id="equipe">` (InfoSection)
- ❌ `<section id="outros-links">` (LinksSection)

---

## 📊 Estatísticas

**Total de arquivos arquivados:** 6
- 📄 Sections: 1
- 🧩 Components: 3
- 🔲 Modals: 1
- 🎴 Cards: 1

**Espaço na aplicação:** Otimizado ✨
**Performance:** Melhorada 🚀
**UX:** Simplificada 👍

---

**Vitrine de Projetos SENAI** - Histórico de Mudanças
