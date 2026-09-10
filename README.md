# Aula prática de Git, Diff, Tags e Changelog

**Curso:** Técnico em Desenvolvimento de Sistemas  
**Turma:** 3º DS  
**Componente:** Tagging, releases e versionamento semântico  
**Aula 3:** Geração de changelog automático  
**Código:** SISANO2C5B3S18A3  
**Duração:** ???  
**Professor:** Donald

---

## Objetivos da aula

Ao final da aula, você deverá conseguir:

- identificar alterações em arquivos com `git status`;
- comparar mudanças com `git diff`;
- entender a diferença entre `git diff` e `git diff --staged`;
- criar commits usando Conventional Commits;
- compreender versionamento semântico;
- criar tags;
- comparar duas versões;
- estruturar um `CHANGELOG.md`.

---

# 1. Pergunta inicial

Imagine que ontem o sistema estava funcionando.

Hoje três desenvolvedores alteraram o código.

Como podemos descobrir:

1. O que mudou?
2. Quem mudou?
3. Quando mudou?
4. Por que mudou?
5. Qual versão contém a alteração?

---

# 2. Preparando o projeto

Clone este repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd aula-git-versionamento
```

Veja o estado atual:

```bash
git status
```

---

# 3. Primeiro experimento

Abra:

```text
projeto/script.js
```

Você encontrará:

```javascript
console.log("Sistema iniciado");
```

Adicione uma nova linha:

```javascript
console.log("Bem-vindo ao sistema");
```

Agora execute:

```bash
git status
```

## Pergunta para a turma

O Git sabe que o arquivo mudou.

Mas como descobrir exatamente o que mudou?

---

# 4. Git Diff

Execute:

```bash
git diff
```

Observe os símbolos:

```text
- linha removida
+ linha adicionada
```

## Desafio 1

1. Modifique duas linhas do projeto.
2. Adicione uma nova linha.
3. Execute `git diff`.
4. Identifique:
   - arquivo modificado;
   - linha adicionada;
   - linha removida.

Veja também:

```bash
git diff -- projeto/script.js
```

---

# 5. Área de preparação

Adicione as mudanças:

```bash
git add .
```

Agora execute:

```bash
git status
```

Tente novamente:

```bash
git diff
```

Depois:

```bash
git diff --staged
```

## Pergunta

Qual é a diferença?

- `git diff` mostra mudanças ainda não adicionadas à área de preparação.
- `git diff --staged` mostra o que já está preparado para o próximo commit.

---

# 6. Conventional Commits

Use mensagens padronizadas.

| Prefixo | Uso |
|---|---|
| `feat` | nova funcionalidade |
| `fix` | correção |
| `docs` | documentação |
| `refactor` | melhoria interna |
| `test` | testes |
| `style` | formatação sem mudança de lógica |

Exemplo:

```bash
git commit -m "feat: adiciona mensagem de boas-vindas"
```

Veja o histórico:

```bash
git log --oneline
```

---

# 7. Jogo rápido

Classifique cada situação:

```text
Corrigi um erro no botão de login.
```

Resposta esperada:

```text
fix
```

```text
Adicionei recuperação de senha.
```

Resposta:

```text
feat
```

```text
Atualizei o README.
```

Resposta:

```text
docs
```

```text
Reorganizei o código sem mudar o funcionamento.
```

Resposta:

```text
refactor
```

---

# 8. Versionamento semântico

Formato:

```text
MAJOR.MINOR.PATCH
```

Exemplo:

```text
1.3.2
```

Significado:

```text
MAJOR = mudança incompatível
MINOR = nova funcionalidade compatível
PATCH = correção
```

Exemplos:

```text
1.3.1 -> 1.3.2
PATCH
```

```text
1.3.2 -> 1.4.0
MINOR
```

```text
1.4.0 -> 2.0.0
MAJOR
```

## Perguntas para a turma

Versão atual:

```text
1.2.0
```

Corrigimos um pequeno bug.

Resposta:

```text
1.2.1
```

Adicionamos recuperação de senha sem quebrar nada.

Resposta:

```text
1.3.0
```

Mudamos a API e programas antigos deixaram de funcionar.

Resposta:

```text
2.0.0
```

---

# 9. Tags

Crie uma tag simples:

```bash
git tag v1.3.0
```

Liste:

```bash
git tag
```

Tag anotada:

```bash
git tag -a v1.3.0 -m "Release versão 1.3.0"
```

Verifique:

```bash
git show v1.3.0
```

Envie para o GitHub:

```bash
git push origin v1.3.0
```

---

# 10. Comparando versões

Se o projeto possuir duas tags:

```text
v1.2.0
v1.3.0
```

compare:

```bash
git diff v1.2.0 v1.3.0
```

## Pergunta

O que esse comando faz?

Resposta esperada:

> Compara o estado do projeto entre as duas versões.

---

# 11. Ferramentas visuais de comparação

Além de `git diff`, existem ferramentas como:

- Meld
- KDiff3
- Vimdiff

Elas ajudam a visualizar diferenças e conflitos.

Exemplo com uma ferramenta configurada:

```bash
git difftool
```

---

# 12. Patch

Um patch é um arquivo que guarda alterações.

Gerar:

```bash
git diff > alteracoes.patch
```

Verificar:

```bash
git apply --check alteracoes.patch
```

Aplicar:

```bash
git apply alteracoes.patch
```

---

# 13. CHANGELOG

Abra:

```text
CHANGELOG.md
```

Um changelog registra alterações importantes de cada versão.

Exemplo:

```markdown
## [1.3.0]

### Features

- Adicionada recuperação de senha.

### Correções

- Corrigido erro no login.

### Melhorias internas

- Refatorado sistema de autenticação.

### Documentação

- Atualizado README.
```

---

# 14. Desafio final

Abra:

```text
exercicios/desafio-final.md
```

Resolva em grupo.

---

# 15. Fechamento

Complete o fluxo:

```text
ALTERAÇÃO NO CÓDIGO
        ↓
git status
        ↓
git diff
        ↓
git add .
        ↓
git diff --staged
        ↓
git commit
        ↓
Conventional Commits
        ↓
Semantic Versioning
        ↓
git tag
        ↓
Release
        ↓
CHANGELOG.md
```

## Pergunta final

Qual é o principal benefício de manter um changelog estruturado?

Resposta esperada:

> Comunicar claramente as mudanças entre versões.
>
> Vai Corinthians
