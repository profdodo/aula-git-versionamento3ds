Aula prática de Git, Diff, Tags e Changelog
Curso: Técnico em DS - Turma: 3º DS - Código: SISANO2C5B3S18A3 - Prof. Donald
Objetivos da aula - Respostas
Ao final, o aluno deve saber usar git status, git diff, git diff --staged, commits convencionais, SemVer, tags e CHANGELOG.
1. Pergunta inicial
Imagine que ontem o sistema estava funcionando. Hoje três devs alteraram o código. Como dizer O que, Quem, Quando, Por que, e Qual versão contém?
Resposta:
O que mudou? git diff e git log -p
Quem mudou? git log --author e git blame
Quando mudou? git log --stat mostra data/hora
Por que mudou? Mensagem do commit com Conventional Commits
Qual versão contém? git tag --contains <commit> e git diff v1.2.0 v1.3.0
2. Preparando o projetobashgit clone URL_DO_REPOSITORIO
cd aula-git-versionamento
git statusgit status mostra: branch atual, arquivos modificados, arquivos staged e untracked.
3. Primeiro experimento
Arquivo projeto/script.js:jsconsole.log("Sistema iniciado");
console.log("Bem-vindo ao sistema"); // nova linhaAo executar git status vai aparecer:
modified: projeto/script.js
4. Git Diffbashgit diffSímbolos:
- em vermelho = linha removida
+ em verde = linha adicionada
@@ = trecho onde houve alteração
Desafio 1 - Respondido:
Modifiquei duas linhas:diff- console.log("Sistema iniciado");
+ console.log("Sistema iniciado - v2");
+ console.log("Log adicional");Com git diff -- projeto/script.js filtramos só aquele arquivo.
Identificação:
Arquivo modificado: projeto/script.js
Linhas +: linhas adicionadas
Linhas -: linhas removidas
5. Área de preparaçãobashgit add .
git statusAgora o arquivo foi de "Changes not staged" para "Changes to be committed" em verde.bashgit diffAgora não mostra nada! Porque git diff só mostra o que NÃO está staged.bashgit diff --stagedAgora sim mostra o que está preparado para commit.
Pergunta: Qual é a garota? / Qual é a diferença?
Resposta oficial:
git diff = mostra alterações na working directory que ainda não foram para a staging area.
git diff --staged = mostra alterações que já estão na staging area, prontas para git commit.
6. Compromissos Convencionaisbashgit commit -m "feat: adiciona mensagem de boas-vindas"
git log --onelineSaída esperada:
a1b2c3d feat: adiciona mensagem de boas-vindas
Tabela completa:
feat = nova funcionalidade -> gera MINOR
fix = correção -> gera PATCH
docs = documentação -> não gera versão
refactor = melhoria interna sem mudar API
test = testes
style = formatação
BREAKING CHANGE: ou feat!: = quebra compatibilidade -> gera MAJOR
7. Jogo rápido - RESPOSTAS
Corrigi um erro no botão de login.
Resposta: fix: corrige erro no botão de login
Impacto: PATCH -> 1.2.0 -> 1.2.1
Adicionei recuperação de senha.
Resposta: feat: adiciona recuperação de senha
Impacto: MINOR -> 1.2.0 -> 1.3.0
Atualizei o README.
Resposta: docs: atualiza README com instruções de instalação
Impacto: não gera versão pública
Reorganizei o código sem mudar o funcionamento.
Resposta: refactor: reorganiza autenticação
Impacto: não gera versão se não quebrar API
8. Versionamento semântico
Formato: MAJOR.MINOR.PATCH
1.3.1 -> 1.3.2 = PATCH - trocou lâmpada
1.3.2 -> 1.4.0 = MINOR - construiu um quarto novo
1.4.0 -> 2.0.0 = MAJOR - derrubou paredes, muda entrada da casa
Perguntas para a turma - Versão atual 1.2.0:
Corrigimos um pequeno bug.
Resposta: 1.2.1 - PATCH, só correção compatível.
Adicionamos recuperação de senha sem quebrar nada.
Resposta: 1.3.0 - MINOR, nova função compatível, zera PATCH.
Mudamos a API e programas antigos deixaram de funcionar.
Resposta: 2.0.0 - MAJOR, quebra incompatível, zera MINOR e PATCH.
9. Etiquetas - Tagsbashgit tag v1.3.0
git tag
git tag -a v1.3.0 -m "Release versão 1.3.0"
git show v1.3.0
git push origin v1.3.0
git push origin --tagsDiferença: tag simples é só um ponteiro. Tag anotada -a guarda autor, data, mensagem e é recomendada para releases. O git show v1.3.0 mostra quem criou, quando e qual commit ela aponta.
10. Comparando versõesbashgit diff v1.2.0 v1.3.0Pergunta: O que esse comando faz?
Resposta: Compara o estado completo do projeto entre duas tags/versões. Mostra todas as linhas adicionadas e removidas de v1.2.0 para v1.3.0. É essencial para gerar o CHANGELOG e conferir o que vai para produção.
11. Ferramentas visuais
git difftool abre Meld, KDiff3, VS Code Diff, etc. Ajuda a resolver conflitos visualmente lado a lado.
12. Patchbashgit diff > alteracoes.patch
git apply --check alteracoes.patch
git apply alteracoes.patchUm .patch é um arquivo de texto que guarda o diff para enviar por e-mail ou aplicar em outra máquina sem commit.
13. CHANGELOG.md - MODELO RESPONDIDO
Cria o arquivo CHANGELOG.md na raiz:md# Changelog

## [1.3.0] - 2026-05-11
### Features
- Adicionada recuperação de senha.

### Correções
- Corrigido erro no botão de login que não respondia.

### Melhorias internas
- Refatorado sistema de autenticação.

### Documentação
- Atualizado README com instruções de instalação.

## [1.2.0] - 2026-05-10
### Features
- Adicionado cadastro de alunos.

## [1.0.0] - 2026-05-09
### Adicionado
- Primeira versão estável.14. Desafio final
exercicios/desafio-final.md - RESOLUÇÃO EM GRUPO
Tarefas:
Fazer 3 commits convencionais: um fix:, um feat:, um docs:Gerar diff entre elesCriar tag v1.0.0Preencher CHANGELOG.mdEnviar tag pro GitHub e criar ReleaseComandos do desafio:bashgit add .
git commit -m "feat: adiciona filtro de turma"
git commit -m "fix: corrige duplicidade no cadastro"
git commit -m "docs: atualiza changelog"
git tag -a v1.0.0 -m "Primeira release estável"
git push origin main
git push origin v1.0.015. Fechamento - FLUXO COMPLETO RESPONDIDOjavascriptALTERAÇÃO NO CÓDIGO
        ↓
git status (o que mudou?)
        ↓
git diff (mostra linha a linha)
        ↓
git add . (manda pra staging)
        ↓
git diff --staged (confere o que vai commitar)
        ↓
git commit -m "feat: ..." (Conventional Commits)
        ↓
Semantic Versioning (decide se é MAJOR.MINOR.PATCH)
        ↓
git tag -a v1.0.0 -m "Release"
        ↓
git push + Release no GitHub
        ↓
CHANGELOG.md atualizado

Pergunta final: Qual é o principal benefício de manter um changelog estruturado?
Resposta: Comunicar claramente as mudanças entre versões sem precisar ler todos os commits. O cliente / outro dev sabe rápido se pode atualizar com segurança, o que quebrou, o que foi adicionado e o que foi corrigido. É a bula do software.
