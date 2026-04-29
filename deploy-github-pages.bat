@echo off
REM Script para preparar e fazer deploy no GitHub Pages

cls
echo.
echo ════════════════════════════════════════════════════════════════
echo          GitHub Pages - Setup e Deploy
echo ════════════════════════════════════════════════════════════════
echo.

echo Step 1: Instalando dependências...
echo.
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo ✗ Erro ao instalar dependências!
    pause
    exit /b 1
)

echo.
echo ✓ Dependências instaladas com sucesso!
echo.
echo ════════════════════════════════════════════════════════════════
echo.

echo Step 2: Fazendo build do projeto...
echo.
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo ✗ Erro ao fazer build!
    pause
    exit /b 1
)

echo.
echo ✓ Build concluído com sucesso!
echo.
echo ════════════════════════════════════════════════════════════════
echo.

echo Step 3: Publicando no GitHub Pages...
echo.
echo Aguarde enquanto o gh-pages publica seus arquivos...
echo.

REM Fazer deploy
call npx gh-pages -d dist

if %ERRORLEVEL% NEQ 0 (
    echo ✗ Erro ao fazer deploy!
    echo.
    echo Verifique se você tem configurado:
    echo   1. Git inicializado
    echo   2. Remote origin configurado
    echo.
    pause
    exit /b 1
)

echo.
echo ════════════════════════════════════════════════════════════════
echo ✓ Deploy concluído com sucesso!
echo ════════════════════════════════════════════════════════════════
echo.

echo Sua aplicação está publicada em:
echo.
echo   https://[seu-usuario].github.io/Trabalho-SED-Limites-Computacionais/
echo.

echo Próximos passos:
echo   1. Acesse Settings no seu repositório GitHub
echo   2. Vá para Pages
echo   3. Verifique se Branch está como "gh-pages" e pasta "/root"
echo   4. Aguarde 1-2 minutos para processar
echo.

pause
