@echo off
REM Setup automático para GitHub Pages
REM Este script faz todo o processo inicial

setlocal enabledelayedexpansion

cls
color 0A
echo.
echo ════════════════════════════════════════════════════════════════════════════════
echo.
echo   🚀 SETUP AUTOMÁTICO - GitHub Pages
echo.
echo ════════════════════════════════════════════════════════════════════════════════
echo.

REM Verificar Node.js
echo Step 1/4: Verificando Node.js...
node --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ✗ Node.js não encontrado!
    echo   Baixe em: https://nodejs.org/
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODEVERSION=%%i
echo ✓ Node.js %NODEVERSION% encontrado
echo.

REM Verificar Git
echo Step 2/4: Verificando Git...
git --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ✗ Git não encontrado!
    echo   Baixe em: https://git-scm.com/
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('git --version') do set GITVERSION=%%i
echo ✓ %GITVERSION% encontrado
echo.

REM Instalar dependências
echo Step 3/4: Instalando dependências...
echo.
call npm install
echo.
if %ERRORLEVEL% NEQ 0 (
    echo ✗ Erro ao instalar dependências!
    pause
    exit /b 1
)
echo ✓ Dependências instaladas com sucesso!
echo.

REM Build
echo Step 4/4: Testando build...
echo.
call npm run build
echo.
if %ERRORLEVEL% NEQ 0 (
    echo ✗ Erro ao fazer build!
    pause
    exit /b 1
)
echo ✓ Build concluído com sucesso!
echo.

echo ════════════════════════════════════════════════════════════════════════════════
echo.
echo ✅ SETUP CONCLUÍDO!
echo.
echo ════════════════════════════════════════════════════════════════════════════════
echo.
echo 📚 PRÓXIMOS PASSOS:
echo.
echo   1. Criar repositório no GitHub:
echo      https://github.com/new
echo      Nome: Trabalho-SED-Limites-Computacionais
echo.
echo   2. Conectar ao GitHub:
echo      git remote add origin https://github.com/[seu-usuario]/Trabalho-SED-Limites-Computacionais.git
echo      git add .
echo      git commit -m "Initial commit"
echo      git branch -M main
echo      git push -u origin main
echo.
echo   3. Configurar GitHub Pages:
echo      Settings → Pages → Deploy from a branch
echo      Branch: gh-pages, Pasta: /root
echo.
echo   4. Fazer deploy:
echo      npm run deploy
echo.
echo 📖 Para detalhes completos, leia: GITHUB-PAGES-SETUP.md
echo.
echo ════════════════════════════════════════════════════════════════════════════════
echo.
pause
