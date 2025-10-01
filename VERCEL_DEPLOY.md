# Deploy na Vercel - Guia Rápido

## ✅ Alterações Realizadas

### 1. Configurações de Build
- ✅ Adicionado `.nvmrc` especificando Node.js 20
- ✅ Atualizado `vercel.json` com configurações otimizadas
- ✅ Criado `.vercelignore` para excluir arquivos desnecessários
- ✅ Otimizado `vite.config.ts` para produção

### 2. Problemas Corrigidos
- ✅ Corrigido case-sensitivity dos imports (Services vs services)
- ✅ Excluída pasta `archived` do build via tsconfig
- ✅ Desabilitado sourcemap para reduzir tamanho do build
- ✅ Adicionado code-splitting manual para melhor performance

## 🚀 Como Fazer o Deploy

### Opção 1: Via GitHub (Recomendado)
1. Faça commit das alterações:
   ```bash
   git add .
   git commit -m "fix: configurações para deploy na Vercel"
   git push origin main
   ```

2. A Vercel vai detectar automaticamente e fazer o redeploy

### Opção 2: Via CLI da Vercel
1. Instale a CLI da Vercel (se ainda não tiver):
   ```bash
   npm i -g vercel
   ```

2. Faça o deploy:
   ```bash
   vercel --prod
   ```

## 📋 Configurações da Vercel (Dashboard)

Certifique-se de que as seguintes configurações estão corretas no painel da Vercel:

### Build & Development Settings
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node.js Version**: `20.x`

### Environment Variables
Configure as variáveis de ambiente necessárias no painel da Vercel.

## 🔍 Verificar Logs

Se o deploy falhar:
1. Acesse o painel da Vercel
2. Vá em "Deployments"
3. Clique no deploy que falhou
4. Veja os logs detalhados

## 📦 Arquivos Criados/Modificados

- `.nvmrc` - Especifica versão do Node.js
- `.vercelignore` - Arquivos a ignorar no deploy
- `vercel.json` - Configurações da Vercel
- `vite.config.ts` - Otimizações de build
- `tsconfig.json` - Excluída pasta archived

## ⚡ Otimizações Aplicadas

1. **Code Splitting**: Separados vendor, query e app chunks
2. **Source Maps**: Desabilitados em produção
3. **Exclusões**: Pasta SENAI-API e docs não são deployadas
4. **Node.js 20**: Versão mais recente e estável

## 🐛 Troubleshooting

### Erro: "Build failed"
- Verifique os logs no painel da Vercel
- Certifique-se de que todas as dependências estão instaladas
- Verifique se não há erros de TypeScript

### Erro: "404 ao navegar"
- O arquivo `vercel.json` já está configurado com rewrites
- Isso garante que todas as rotas do React Router funcionem

### Erro: "Out of memory"
- A Vercel tem limite de memória no plano gratuito
- As otimizações de code-splitting devem resolver isso
