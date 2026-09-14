# Aula prática de Git, Diff, Tags e Changelog                       NOTA 10

**Curso:** Técnico em Desenvolvimento de Sistemas
**Turma:** 3º DS
**Código:** SISANO2C5B3S18A3
**Professor:** Donald

## Objetivos da aula

Ao final da aula, o aluno deverá saber utilizar:

* `git status`
* `git diff`
* `git diff --staged`
* Conventional Commits
* Semantic Versioning, SemVer
* tags
* `CHANGELOG.md`

---

# 1. Pergunta inicial

Imagine a situação:

Ontem o sistema estava funcionando. Hoje três desenvolvedores alteraram o código.

Como descobrir:

* O que mudou?
* Quem alterou?
* Quando alterou?
* Por que alterou?
* Em qual versão essa alteração está?

## Respostas

### O que mudou?

Podemos utilizar:

```bash
git diff
```

ou:

```bash
git log -p
```

O `git diff` mostra alterações ainda não commitadas.

O `git log -p` mostra as alterações existentes nos commits anteriores.

### Quem mudou?

Podemos utilizar:

```bash
git log --author="Nome"
```

ou:

```bash
git blame arquivo
```

O `git blame` mostra quem alterou cada linha de um arquivo.

### Quando mudou?

Podemos utilizar:

```bash
git log
```

ou:

```bash
git log --stat
```

O histórico mostra informações como autor, data e arquivos alterados.

### Por que mudou?

A principal referência é a mensagem do commit.

Exemplo:

```text
feat: adiciona recuperação de senha
```

Os Conventional Commits tornam essas mensagens mais organizadas e fáceis de interpretar.

### Qual versão contém a alteração?

Podemos utilizar:

```bash
git tag --contains HASH_DO_COMMIT
```

Também podemos comparar versões:

```bash
git diff v1.2.0 v1.3.0
```

---

# 2. Preparando o projeto

Primeiro, faça o clone do repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd aula-git-versionamento
```

Verifique o estado do projeto:

```bash
git status
```

O comando `git status` pode mostrar:

* branch atual;
* arquivos modificados;
* arquivos na staging area;
* arquivos ainda não rastreados, chamados de `untracked`.

---

# 3. Primeiro experimento

Abra o arquivo:

```text
projeto/script.js
```

Exemplo inicial:

```javascript
console.log("Sistema iniciado");
console.log("Bem-vindo ao sistema");
```

Adicione uma nova linha:

```javascript
console.log("Sistema iniciado");
console.log("Bem-vindo ao sistema");
console.log("Sistema pronto para uso");
```

Execute:

```bash
git status
```

O Git deverá indicar:

```text
modified: projeto/script.js
```

Isso significa que o arquivo foi alterado, mas ainda não está preparado para commit.

---

# 4. Git Diff

Execute:

```bash
git diff
```

Esse comando mostra as diferenças entre o arquivo atual e a última versão registrada.

## Símbolos importantes

Linha removida:

```diff
- console.log("Sistema iniciado");
```

Linha adicionada:

```diff
+ console.log("Sistema iniciado - v2");
```

O Git também utiliza:

```text
@@
```

Esse símbolo indica a região do arquivo onde ocorreu a alteração.

## Desafio 1

Faça estas alterações:

```diff
- console.log("Sistema iniciado");
+ console.log("Sistema iniciado - v2");
+ console.log("Log adicional");
```

Depois execute:

```bash
git diff
```

Para visualizar apenas um arquivo:

```bash
git diff -- projeto/script.js
```

## Identificação no diff

Arquivo modificado:

```text
projeto/script.js
```

Linhas iniciadas com:

```text
+
```

representam linhas adicionadas.

Linhas iniciadas com:

```text
-
```

representam linhas removidas.

Importante: quando uma linha é modificada, normalmente o Git mostra a linha antiga como removida e a nova como adicionada.

---

# 5. Área de preparação, Staging Area

Execute:

```bash
git add .
```

Depois:

```bash
git status
```

Agora o arquivo passa de:

```text
Changes not staged for commit
```

para:

```text
Changes to be committed
```

Execute novamente:

```bash
git diff
```

Pode acontecer de não aparecer nenhuma alteração.

Isso ocorre porque `git diff` mostra, por padrão, alterações que ainda não foram enviadas para a staging area.

Agora execute:

```bash
git diff --staged
```

Esse comando mostra as alterações que já foram preparadas para o próximo commit.

## Pergunta

Qual é a diferença entre `git diff` e `git diff --staged`?

### Resposta

```bash
git diff
```

Mostra alterações da working directory que ainda não foram adicionadas à staging area.

Já:

```bash
git diff --staged
```

mostra as alterações que já estão na staging area e estão prontas para serem registradas por um commit.

---

# 6. Conventional Commits

Depois de revisar as alterações:

```bash
git commit -m "feat: adiciona mensagem de boas-vindas"
```

Visualize o histórico:

```bash
git log --oneline
```

Exemplo:

```text
a1b2c3d feat: adiciona mensagem de boas-vindas
```

## Principais tipos

| Tipo       | Significado                          |
| ---------- | ------------------------------------ |
| `feat`     | Nova funcionalidade                  |
| `fix`      | Correção de erro                     |
| `docs`     | Alteração na documentação            |
| `refactor` | Reorganização interna do código      |
| `test`     | Alterações em testes                 |
| `style`    | Formatação sem alterar comportamento |

Exemplo:

```text
feat: adiciona recuperação de senha
```

Normalmente representa uma alteração MINOR.

Exemplo:

```text
fix: corrige erro no login
```

Normalmente representa uma alteração PATCH.

Uma alteração incompatível pode ser indicada por:

```text
feat!: altera sistema de autenticação
```

ou utilizando:

```text
BREAKING CHANGE:
```

Isso normalmente representa uma alteração MAJOR.

Observação: Conventional Commits ajudam a automatizar o versionamento, mas `docs`, `refactor`, `style` ou `test` não significam obrigatoriamente que nunca haverá nova versão. Isso depende da política de releases adotada pelo projeto.

---

# 7. Jogo rápido

## Situação 1

Corrigi um erro no botão de login.

Resposta:

```text
fix: corrige erro no botão de login
```

Impacto:

```text
1.2.0 → 1.2.1
```

Tipo:

**PATCH**

---

## Situação 2

Adicionei recuperação de senha.

Resposta:

```text
feat: adiciona recuperação de senha
```

Impacto:

```text
1.2.0 → 1.3.0
```

Tipo:

**MINOR**

---

## Situação 3

Atualizei o README.

Resposta:

```text
docs: atualiza README com instruções de instalação
```

Geralmente não altera diretamente MAJOR, MINOR ou PATCH quando o projeto utiliza versionamento automático baseado em Conventional Commits.

---

## Situação 4

Reorganizei o código sem alterar seu funcionamento.

Resposta:

```text
refactor: reorganiza autenticação
```

Normalmente não exige mudança MAJOR ou MINOR se não houver mudança de comportamento ou quebra de compatibilidade.

---

# 8. Versionamento semântico

O Semantic Versioning utiliza:

```text
MAJOR.MINOR.PATCH
```

Exemplo:

```text
1.3.1
```

## PATCH

```text
1.3.1 → 1.3.2
```

Correção compatível.

### Analogia

É como trocar uma lâmpada que queimou.

A casa continua a mesma.

---

## MINOR

```text
1.3.2 → 1.4.0
```

Nova funcionalidade compatível.

### Analogia

É como construir um quarto novo.

A casa ganhou uma função nova, mas continua funcionando como antes.

---

## MAJOR

```text
1.4.0 → 2.0.0
```

Mudança incompatível.

### Analogia

É como reformar completamente a entrada da casa e mudar sua estrutura.

Quem utilizava a entrada antiga talvez precise se adaptar.

---

# Perguntas para a turma

Versão atual:

```text
1.2.0
```

## Corrigimos um pequeno bug

Resposta:

```text
1.2.1
```

Tipo:

**PATCH**

Motivo: foi realizada apenas uma correção compatível.

---

## Adicionamos recuperação de senha sem quebrar nada

Resposta:

```text
1.3.0
```

Tipo:

**MINOR**

Motivo: foi adicionada uma nova funcionalidade compatível.

O PATCH volta para zero.

---

## Mudamos a API e programas antigos deixaram de funcionar

Resposta:

```text
2.0.0
```

Tipo:

**MAJOR**

Motivo: ocorreu quebra de compatibilidade.

MINOR e PATCH voltam para zero.

---

# 9. Tags

Uma tag permite marcar um ponto específico do histórico do projeto.

## Tag simples

```bash
git tag v1.3.0
```

Visualizar tags:

```bash
git tag
```

## Tag anotada

Para releases, normalmente é preferível utilizar uma tag anotada:

```bash
git tag -a v1.3.0 -m "Release versão 1.3.0"
```

Importante: escolha uma das formas. Não execute primeiro `git tag v1.3.0` e depois tente criar uma tag anotada com o mesmo nome, porque o Git informará que a tag já existe.

## Visualizar a tag

```bash
git show v1.3.0
```

## Enviar uma tag específica

```bash
git push origin v1.3.0
```

## Enviar todas as tags locais

```bash
git push origin --tags
```

### Diferença

A tag simples funciona principalmente como uma referência para um commit.

A tag anotada guarda informações adicionais, como:

* autor da tag;
* data;
* mensagem;
* objeto referenciado.

Por isso, tags anotadas são bastante utilizadas em releases.

---

# 10. Comparando versões

Execute:

```bash
git diff v1.2.0 v1.3.0
```

## Pergunta

O que esse comando faz?

## Resposta

Ele compara o estado do projeto representado pelas duas tags.

Mostra alterações como:

* linhas adicionadas;
* linhas removidas;
* arquivos alterados;
* diferenças existentes entre as versões.

Isso pode ajudar na conferência de alterações antes de uma release.

Observação: o `git diff` pode ajudar na preparação do CHANGELOG, mas um changelog não deve ser criado apenas copiando automaticamente todas as linhas do diff. Ele deve resumir mudanças relevantes para desenvolvedores e usuários.

---

# 11. Ferramentas visuais

O Git também pode utilizar ferramentas gráficas.

Exemplo:

```bash
git difftool
```

Dependendo da configuração do computador, ele pode abrir ferramentas como:

* Meld;
* KDiff3;
* Visual Studio Code;
* outras ferramentas de comparação.

Essas ferramentas permitem visualizar diferenças lado a lado e também podem ajudar durante a resolução de conflitos.

---

# 12. Patch

É possível salvar alterações em um arquivo `.patch`.

Execute:

```bash
git diff > alteracoes.patch
```

Antes de aplicar:

```bash
git apply --check alteracoes.patch
```

Esse comando verifica se o patch pode ser aplicado.

Para aplicar:

```bash
git apply alteracoes.patch
```

Um arquivo `.patch` armazena alterações em formato de diff.

Ele pode ser enviado para outra pessoa ou aplicado em outro ambiente sem necessariamente compartilhar um commit.

---

# 13. CHANGELOG.md

Crie um arquivo chamado:

```text
CHANGELOG.md
```

na raiz do projeto.

## Exemplo

```markdown
# Changelog

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

- Primeira versão estável.
```

O CHANGELOG deve apresentar as principais alterações de cada versão de maneira organizada.

Não é necessário colocar links internos gerados automaticamente pelo GitHub, como `[svg](...)`, dentro do conteúdo do arquivo.

---

# 14. Desafio final

Arquivo:

```text
exercicios/desafio-final.md
```

## Tarefas

O grupo deverá:

1. realizar alterações no projeto;
2. criar três commits convencionais;
3. utilizar `fix`, `feat` e `docs`;
4. verificar diferenças;
5. criar uma tag;
6. preencher o `CHANGELOG.md`;
7. enviar os commits e a tag para o GitHub;
8. criar uma Release no GitHub.

## Exemplo

Primeiro faça uma alteração relacionada a uma funcionalidade.

Depois:

```bash
git add .
git commit -m "feat: adiciona filtro de turma"
```

Faça outra alteração no projeto.

Depois:

```bash
git add .
git commit -m "fix: corrige duplicidade no cadastro"
```

Atualize a documentação:

```bash
git add README.md CHANGELOG.md
git commit -m "docs: atualiza documentação"
```

Visualize o histórico:

```bash
git log --oneline
```

Crie a primeira release:

```bash
git tag -a v1.0.0 -m "Primeira release estável"
```

Envie os commits:

```bash
git push origin main
```

Envie a tag:

```bash
git push origin v1.0.0
```

Depois, no GitHub, utilize a tag `v1.0.0` para criar uma Release.

Importante: cada commit deve ter alterações correspondentes. Não é correto executar vários `git commit` seguidos sem modificar arquivos e adicioná-los novamente à staging area.

---

# 15. Fechamento

## Fluxo completo

```text
ALTERAÇÃO NO CÓDIGO
        ↓
git status
        ↓
O que mudou?
        ↓
git diff
        ↓
Revisar alterações linha por linha
        ↓
git add .
        ↓
Enviar alterações para a staging area
        ↓
git diff --staged
        ↓
Conferir exatamente o que será commitado
        ↓
git commit -m "feat: ..."
        ↓
Conventional Commits
        ↓
Semantic Versioning
        ↓
Definir MAJOR.MINOR.PATCH
        ↓
Atualizar CHANGELOG.md
        ↓
git commit
        ↓
git tag -a v1.0.0 -m "Release v1.0.0"
        ↓
git push origin main
        ↓
git push origin v1.0.0
        ↓
Criar Release no GitHub
```

---

# Pergunta final

Qual é o principal benefício de manter um `CHANGELOG.md` estruturado?

## Resposta

O principal benefício é comunicar claramente o que mudou entre as versões sem obrigar o usuário ou outro desenvolvedor a ler todos os commits.

Um changelog bem organizado permite descobrir rapidamente:

* o que foi adicionado;
* o que foi corrigido;
* o que foi alterado;
* quais mudanças podem afetar o sistema;
* o que existe em cada versão.

Podemos comparar o `CHANGELOG.md` à bula do software.

Ele resume as principais mudanças de cada versão e facilita a compreensão da evolução do projeto.
