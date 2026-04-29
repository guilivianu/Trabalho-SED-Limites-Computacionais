import os
import sys

# Lista de arquivos para deletar
files_to_delete = [
    "00-LEIA-ME-PRIMEIRO.md",
    "ARQUIVOS-CRIADOS.txt",
    "COMECE-AQUI.txt",
    "ESTRUTURA-NOVA.md",
    "ESTRUTURA-REORGANIZADA.md",
    "ESTRUTURA-VISUAL.txt",
    "ESTRUTURA.md",
    "GUIA_COMPLETO.md",
    "MIGRACAO_CONCLUIDA.md",
    "QUICK_START.md",
    "RESUMO-FINAL.md",
    "RESUMO-REORGANIZACAO.md",
    "SETUP_VITE.md",
    "install.bat",
    "deploy.bat",
    "validate-setup.sh",
    "setup.js",
    "organize-structure.js",
    "organize.js",
    "organize.py",
    "reorganize-interactive.sh",
    "reorganize.bat",
    "reorganize.sh",
    "main.js",
    "main.html",
    "README-LIMPO.md",
    "cleanup.sh",
    "cleanup.bat",
    "cleanup.js"
]

os.chdir("d:/develop/Trabalho-SED-Limites-Computacionais")

print("\n" + "="*60)
print("        LIMPEZA DE ARQUIVOS DESNECESSÁRIOS")
print("="*60 + "\n")

print("📋 Arquivos que serão deletados:\n")

existing = []
for f in files_to_delete:
    if os.path.exists(f):
        existing.append(f)
        print(f"   ✓ {f}")

print(f"\n{'='*60}\n")

if not existing:
    print("✅ Nenhum arquivo desnecessário encontrado!\n")
    sys.exit(0)

print(f"⚠️  Total: {len(existing)} arquivo(s) para deletar\n")

# Deletar
print("🗑️  Deletando arquivos...\n")

deleted = 0
for f in existing:
    try:
        os.remove(f)
        print(f"   ✓ Deletado: {f}")
        deleted += 1
    except Exception as e:
        print(f"   ✗ Erro ao deletar {f}: {e}")

print(f"\n✅ Limpeza concluída! {deleted} arquivo(s) removido(s)\n")

# Listar essenciais
print("📁 Arquivos essenciais mantidos:\n")

essentials = [
    "index.html",
    "package.json",
    "package-lock.json",
    "vite.config.js",
    ".gitignore",
    "README.md"
]

for f in essentials:
    if os.path.exists(f):
        print(f"   ✓ {f}")

print("\n📁 Diretórios mantidos:\n")

dirs = ["src", "node_modules", ".git"]
for d in dirs:
    if os.path.isdir(d):
        print(f"   ✓ {d}/")

print("\n" + "="*60)
print("🎉 Projeto limpo e pronto para usar!")
print("="*60 + "\n")

print("📝 Próximos passos:\n")
print("   npm install       # Instalar dependências")
print("   npm run dev       # Servidor de desenvolvimento")
print("   npm run build     # Build para produção\n")
