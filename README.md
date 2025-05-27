# Plataforma Acadêmica - Frontend Web

Este repositório contém a **interface web** do sistema de cadastro e compartilhamento de projetos acadêmicos, desenvolvida em **React** seguindo o padrão **MVC**.

---

## Tecnologias

- **React** (v18+)
- **React Router** para navegação
- **Context API** para gerenciamento de estado global
- **Axios** para chamadas HTTP à API
- **Tailwind CSS** para estilos
- **Formik** + **Yup** para formulários e validação

---

## Visão Geral da Arquitetura (MVC)

- **Model**: Representações dos dados (e.g., `Project`, `User`), gerenciados no state ou context.
- **View**: Componentes React que exibem a interface do usuário (JSX + Tailwind CSS).
- **Controller**: Funções/hooks que orquestram fluxos—chamadas à API, tratamento de formulários e navegação.

Exemplo de fluxo:
1. Usuário acessa `/projects` (View)
2. Controller usa Axios para buscar lista de projetos da API
3. Model (state) é atualizado via Context API
4. View re-renderiza com os dados atualizados

---

## Estrutura de Pastas

```bash
src/
├─ assets/                  # Imagens, logos e ícones
├─ components/              # Componentes reutilizáveis (botões, cards, inputs)
├─ controllers/             # Hooks e funções que fazem chamadas à API
├─ context/                 # Providers e contexts para estado global
├─ pages/                   # Páginas principais (Home, Login, Dashboard)
├─ routes/                  # Configuração de rotas com React Router
├─ services/                # Camada de comunicação com a API (Axios instances)
├─ styles/                  # Configurações de Tailwind e estilos globais
├─ utils/                   # Funções utilitárias e helpers
└─ index.js                 # Ponto de entrada da aplicação
```

---

## Funcionalidades Principais

- Autenticação de usuário (login, logout)
- Registro de novos projetos (formulário com campos: título, descrição, links, integrantes, visibilidade)
- Listagem de projetos públicos e privados
- Edição e exclusão de projetos
- Visualização de projetos de colegas
- Integração com backend para persistência e autenticação JWT
- Responsividade (mobile-first)

---

## Instalação e Execução

1. Clone o repositório:
   ```bash
git clone https://github.com/seu-usuario/plataforma-academica-frontend.git
```
2. Instale dependências:
   ```bash
cd plataforma-academica-frontend
npm install
```
3. Defina variáveis de ambiente (exemplo `.env`):
   ```ini
REACT_APP_API_URL=https://api.seusite.com
```
4. Inicie em modo de desenvolvimento:
   ```bash
npm start
```
5. Acesse `http://localhost:3000`

---

## Produção

Para gerar o build de produção:
```bash
npm run build
```
O resultado ficará em `build/`, pronto para ser servido por um servidor estático.

---

## Contribuições

> **Este projeto é privado e não aceita contribuições externas.**

---

## Licença

© SENAI
