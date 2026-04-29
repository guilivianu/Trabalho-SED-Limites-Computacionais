#!/bin/bash

echo "╔════════════════════════════════════════════════════════════════════════════════╗"
echo "║                          CHECKLIST - GITHUB PAGES                             ║"
echo "╚════════════════════════════════════════════════════════════════════════════════╝"
echo ""

# Array com os itens do checklist
declare -a items=(
    "Node.js instalado (verificar: node --version)"
    "Projeto Vite pronto (index.html + package.json)"
    "npm install executado"
    "Conta GitHub criada"
    "Git configurado (git config --global user.name/email)"
    "npm run build funciona sem erros"
    "Repositório criado no GitHub"
    "Git remote configurado (git remote -v)"
    "Primeiro commit feito (git log)"
    "Primeiro push feito (git push -u origin main)"
    "GitHub Pages configurado (Settings > Pages)"
    "Branch gh-pages criada (npm run deploy)"
    "Aplicação acessível no navegador"
    "Domínio correto em vite.config.js"
)

echo "👇 Execute cada passo:"
echo ""

for i in "${!items[@]}"; do
    num=$((i + 1))
    printf "[ ] $num. ${items[$i]}\n"
done

echo ""
echo "╔════════════════════════════════════════════════════════════════════════════════╗"
echo ""
echo "Depois de marcar tudo como concluído, sua aplicação estará online! 🚀"
echo ""
