Desafio Final - Versão v1.3.0 - RESPOSTA COMPLETA
Versão atual: v1.2.0
Commits do time:
feat: adiciona recuperação de senha
fix: corrige validação de e-mail
docs: adiciona instruções de instalação
refactor: reorganiza autenticação
fix: corrige botão de login
feat: adiciona foto de perfil

1. Classifique em grupos:
Características (Features) - MINOR
feat: adiciona recuperação de senha
feat: adiciona foto de perfil
Correções (Fixes) - PATCH
fix: corrige validação de e-mail
fix: corrige botão de login
Melhorias internas
refactor: reorganiza autenticação
Documentação
docs: adiciona instruções de instalação

2. Determine a próxima versão:
v1.3.0

3. Por que é MINOR?
Porque foram adicionadas 2 funcionalidades novas compatíveis (recuperação de senha e foto de perfil) sem quebrar nada que já existia. Pela regra do SemVer, quando tem MINOR + PATCH juntos, prevalece o MINOR. Ao aumentar MINOR, zera o PATCH: 1.2.0 -> 1.3.0

4. Por que NÃO pode ser 1.2.1?
1.2.1 seria só PATCH, só correção. Mas nós adicionamos função nova (recuperação de senha e foto), que é mais que correção. Se colocássemos 1.2.1, o usuário que olha o número acharia que é só bugfix e não saberia que tem função nova pra usar. Estaria mentindo sobre o impacto.

5. Por que NÃO pode ser 2.0.0?
2.0.0 é MAJOR, só usa quando QUEBRA compatibilidade. Ex: remover a função buscarAluno(id) ou mudar o formato da API que faz sistema antigo parar de funcionar. Nossos commits foram todos compatíveis, nada foi removido, ninguém vai precisar reescrever código. Usar 2.0.0 causaria pânico desnecessário.
   
6. Atualizar o CHANGELOG.md - Cria esse arquivo na raiz:md# Changelog

## [1.3.0] - 2026-05-11

### Features
- Adicionada recuperação de senha.
- Adicionada foto de perfil do usuário.

### Correções
- Corrigido validação de e-mail que aceitava e-mail inválido.
- Corrigido botão de login que não respondia ao clique.

### Melhorias internas
- Refatorado sistema de autenticação sem alteração de comportamento.

### Documentação
- Adicionadas instruções de instalação no README.

## [1.2.0] - 2026-05-10
### Adicionado
- Sistema de mensagem e botão de ação.

## [1.0.0] - 2026-05-09
- Primeira versão estável.

7. Comandos para criar a tag e mostrar diferenças:bash# Confere tudo
git status
git add .
git diff --staged
git commit -m "feat: adiciona recuperação de senha e foto de perfil"

# Cria tag anotada
git tag -a v1.3.0 -m "Release versão 1.3.0: recuperação de senha e foto de perfil"

# Mostra diferenças entre versões
git diff v1.2.0 v1.3.0
git show v1.3.0
git log --oneline --graph --decorate

# Envia pro GitHub
git push origin main
git push origin v1.3.0

Pronto. Se você executar git diff v1.2.0 v1.3.0 vai ver exatamente suas 2 features e 2 fixes que entraram.
