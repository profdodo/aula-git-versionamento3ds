# Aula prática de Git, Diff, Tags e Changelog                     NOTA 9

**Aluno(a):** Cristina Gabriely Pinto Campos
**Curso:** Técnico em Desenvolvimento de Sistemas
**Turma:** 2º DS
**Componente:** Tagging, releases e versionamento semântico
**Aula 3:** Geração de changelog automático

## Desafio 1 - Investigando alterações

### 1. Qual arquivo foi modificado?

O arquivo modificado foi:

```bash
projeto/script.js
```

### 2. Quantas linhas foram adicionadas?

Foram identificadas linhas adicionadas ou alteradas no arquivo `projeto/script.js`.

Exemplos:

```javascript
console.log("Laboratório iniciado");
```

```javascript
mensagem.textContent = "Ação realizada com sucesso";
```

```javascript
console.log("Sistema pronto para uso");
```

É importante observar que, no `git diff`, uma linha modificada normalmente aparece como uma linha removida, indicada por `-`, seguida de uma nova linha adicionada, indicada por `+`.

Por isso, nem toda linha marcada com `+` representa necessariamente uma linha totalmente nova no código. Algumas podem ser substituições de linhas anteriores.

### 3. Houve alguma linha removida?

Sim.

Duas linhas antigas foram substituídas por novas versões.

No `git diff`, as linhas removidas são identificadas pelo sinal:

```text
-
```

E as linhas adicionadas são identificadas por:

```text
+
```

Quando uma linha é alterada, o Git normalmente mostra a versão antiga como removida e a nova versão como adicionada.

### 4. Por que o `git diff` é útil antes do commit?

O comando `git diff` permite visualizar exatamente quais alterações foram realizadas no projeto antes de criar um commit.

Ele ajuda o desenvolvedor a:

* revisar o código;
* identificar alterações acidentais;
* encontrar possíveis erros;
* verificar se somente as modificações desejadas serão registradas;
* entender o que mudou entre duas versões do código.

Exemplo:

```bash
git diff
```

Para visualizar alterações que já foram adicionadas à área de staging:

```bash
git diff --staged
```

---

# Desafio 2 - Conventional Commits

| Alteração                     | Tipo       | Commit                                |
| ----------------------------- | ---------- | ------------------------------------- |
| Adiciona recuperação de senha | `feat`     | `feat: adiciona recuperação de senha` |
| Corrige erro no login         | `fix`      | `fix: corrige erro no login`          |
| Atualiza README               | `docs`     | `docs: atualiza README`               |
| Reorganiza autenticação       | `refactor` | `refactor: reorganiza autenticação`   |
| Adiciona foto de perfil       | `feat`     | `feat: adiciona foto de perfil`       |
| Corrige validação de e-mail   | `fix`      | `fix: corrige validação de e-mail`    |

## Explicação

### `feat`

Utilizado quando uma nova funcionalidade é adicionada ao sistema.

Exemplo:

```bash
git commit -m "feat: adiciona recuperação de senha"
```

### `fix`

Utilizado para corrigir erros ou problemas existentes no sistema.

Exemplo:

```bash
git commit -m "fix: corrige validação de e-mail"
```

### `docs`

Utilizado quando são feitas alterações somente na documentação.

Exemplo:

```bash
git commit -m "docs: atualiza README"
```

### `refactor`

Utilizado quando o código é reorganizado ou melhorado sem alterar sua funcionalidade principal.

Exemplo:

```bash
git commit -m "refactor: reorganiza autenticação"
```

---

# Desafio Final - Release

## 1. Classificação dos commits

### Features

```text
feat: adiciona recuperação de senha
feat: adiciona foto de perfil
```

### Correções

```text
fix: corrige validação de e-mail
fix: corrige botão de login
```

### Melhorias internas

```text
refactor: reorganiza autenticação
```

### Documentação

```text
docs: adiciona instruções de instalação
```

---

## 2. Determine a próxima versão

Considerando que a versão atual é:

```text
v1.2.0
```

e que foram adicionadas novas funcionalidades compatíveis com a versão anterior, a próxima versão deve ser:

```text
v1.3.0
```

---

## 3. Explique por que ela é PATCH, MINOR ou MAJOR

O versionamento semântico utiliza o formato:

```text
MAJOR.MINOR.PATCH
```

Exemplo:

```text
1.2.0
```

Cada número possui uma função.

### MAJOR

É alterado quando existem mudanças incompatíveis com versões anteriores.

Exemplo:

```text
1.3.0 → 2.0.0
```

### MINOR

É alterado quando novas funcionalidades são adicionadas sem quebrar a compatibilidade com a versão anterior.

Exemplo:

```text
1.2.0 → 1.3.0
```

### PATCH

É alterado quando são feitas apenas correções de erros compatíveis com a versão existente.

Exemplo:

```text
1.2.0 → 1.2.1
```

Neste exercício foram adicionadas novas funcionalidades:

* recuperação de senha;
* foto de perfil.

Portanto, a mudança deve ser classificada como **MINOR**.

Assim:

```text
1.2.0 → 1.3.0
```

---

# 4. Atualização do CHANGELOG.md

O arquivo `CHANGELOG.md` deve registrar as mudanças da nova versão.

Exemplo:

```markdown
## [1.3.0]

### Features

- Adicionada recuperação de senha.
- Adicionada foto de perfil.

### Correções

- Corrigida validação de e-mail.
- Corrigido botão de login.

### Melhorias internas

- Reorganizada autenticação.

### Documentação

- Adicionadas instruções de instalação.
```

O `CHANGELOG.md` permite que desenvolvedores e usuários entendam rapidamente o que mudou em cada versão do projeto.

---

# 5. Criação da tag correspondente

Para criar uma tag anotada correspondente à versão determinada pelo exercício:

```bash
git tag -a v1.3.0 -m "Release versão 1.3.0"
```

Para enviar a tag ao GitHub:

```bash
git push origin v1.3.0
```

Entretanto, no repositório utilizado durante a aula, a tag `v1.3.0` já havia sido criada anteriormente pelo professor.

Por esse motivo, ela não foi apagada nem sobrescrita.

Para permitir a execução prática do exercício, foi criada uma nova tag:

```text
v1.4.0
```

utilizando:

```bash
git tag -a v1.4.0 -m "Release versão 1.4.0"
```

Depois:

```bash
git push origin v1.4.0
```

É importante destacar que, de acordo com o versionamento semântico do exercício, a versão correta calculada pelas alterações é **v1.3.0**.

A utilização de `v1.4.0` ocorreu apenas porque a tag `v1.3.0` já estava ocupada no repositório utilizado durante a prática.

---

# 6. Mostrar as diferenças entre versões

Para comparar duas tags:

```bash
git diff v1.3.0 v1.4.0
```

Esse comando mostra as diferenças existentes entre os estados do projeto registrados pelas duas tags.

Também pode ser utilizado:

```bash
git show v1.4.0
```

Esse comando mostra informações relacionadas à tag e ao commit associado a ela.

Para visualizar as tags existentes:

```bash
git tag
```

Ou:

```bash
git tag --list
```

---

# Perguntas finais

## Por que a nova versão não deve ser 1.2.1?

A versão:

```text
1.2.1
```

representaria uma atualização do tipo **PATCH**.

PATCH é utilizado principalmente quando existem correções de erros sem a inclusão de novas funcionalidades.

Neste exercício foram adicionadas funcionalidades, como:

* recuperação de senha;
* foto de perfil.

Portanto, a atualização correta deve ser do tipo **MINOR**.

Assim:

```text
1.2.0 → 1.3.0
```

---

## Por que também não deve ser 2.0.0?

A versão:

```text
2.0.0
```

representaria uma alteração do tipo **MAJOR**.

Uma versão MAJOR normalmente é utilizada quando existem mudanças que quebram a compatibilidade com versões anteriores.

Neste exercício não foi apresentada nenhuma mudança incompatível.

As novas funcionalidades podem ser adicionadas mantendo o funcionamento existente.

Por isso, não existe necessidade de alterar o número MAJOR.

---

# Conclusão

O uso conjunto de Git, `git diff`, Conventional Commits, versionamento semântico, tags e `CHANGELOG.md` permite acompanhar a evolução de um projeto de maneira organizada.

O `git diff` permite verificar as alterações realizadas no código.

Os Conventional Commits ajudam a identificar o objetivo de cada commit.

O versionamento semântico permite classificar corretamente as versões utilizando:

```text
MAJOR.MINOR.PATCH
```

As tags permitem marcar pontos específicos do histórico do projeto, principalmente releases.

O `CHANGELOG.md` registra de forma organizada as principais alterações realizadas em cada versão.

Dessa maneira, o histórico do projeto fica mais fácil de compreender, revisar e comparar.

## Observação sobre a execução prática

No exercício, a versão calculada corretamente pelo versionamento semântico é:

```text
v1.3.0
```

Entretanto, essa tag já existia no repositório utilizado durante a aula.

Por isso, ela foi preservada e, apenas para permitir a execução prática dos comandos sem sobrescrever uma tag existente, foi utilizada a tag:

```text
v1.4.0
```

Essa diferença deve ser entendida como uma necessidade prática do repositório utilizado na aula e não como uma mudança na classificação semântica das alterações propostas pelo exercício.
