# Limites Computacionais em Sistemas de Automação

Projeto sobre teoria computacional e seus limites práticos em sistemas de automação.

## Instalação

```bash
npm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O app estará disponível em `http://localhost:5173/`

## Build para Produção

```bash
npm run build
```

Isso gera os arquivos otimizados na pasta `dist/`.

## Deploy no GitHub Pages

### Pré-requisitos

1. Ter o repositório no GitHub
2. Ter o Node.js instalado (recomendado: v18+)

### Passos:

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Faça o build:**

   ```bash
   npm run build
   ```

3. **Configure o GitHub Pages:**
   - No GitHub, vá para as configurações do repositório
   - Na seção "Pages", selecione "Deploy from a branch"
   - Escolha a branch `main` e a pasta `/root`
   - Clique em "Save"

4. **Use a ferramenta gh-pages (opcional):**

   ```bash
   npm install --save-dev gh-pages
   ```

   Atualize o `package.json`:

   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "deploy": "npm run build && npx gh-pages -d dist"
   }
   ```

   Então rode:

   ```bash
   npm run deploy
   ```

5. **Ou use Git diretamente:**
   ```bash
   npm run build
   git add dist/
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

A aplicação estará disponível em: `https://seu-usuario.github.io/Trabalho-SED-Limites-Computacionais/`

## Estrutura do Projeto

```
.
├── index.html                  # Arquivo HTML principal
├── package.json                # Dependências do projeto
├── vite.config.js              # Configuração do Vite
├── .gitignore                  # Git ignore rules
│
├── src/
│   ├── js/
│   │   └── app.js             # Script principal (era main.js)
│   └── css/                   # Estilos (futuro)
│
├── public/                    # Assets públicos
├── docs/                      # Documentação
├── scripts/                   # Scripts de automação
│
└── dist/                      # Arquivos build (gerados)
```

## Tecnologias

- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS para estilo
- **Chart.js** - Biblioteca de gráficos
- **HTML5 Canvas** - Para animações e simulações

## Autores

Arthur Alvarenga, Guilherme Livianu, Breno Zanarelli, Wesley Marques
