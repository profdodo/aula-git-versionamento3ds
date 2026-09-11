**Aula prática de Git, Diff, Tags e Changelog**

Aluno(a): Cristina Gabriely Pinto Campos
Curso: Técnico em Desenvolvimento de Sistemas
Turma: 2º DS
Componente: Tagging, releases e versionamento semântico
Aula 3: Geração de changelog automático

Desafio 1 — Investigando alterações
1. Qual arquivo foi modificado?

O arquivo modificado foi:

projeto/script.js
2. Quantas linhas foram adicionadas?

Foram adicionadas 2 novas linhas, além das linhas que foram modificadas.

As alterações realizadas foram:

console.log("Laboratório iniciado");

e:

mensagem.textContent = "Ação realizada com sucesso";

Também foi adicionada uma nova linha:

console.log("Sistema pronto para uso");
3. Houve alguma linha removida?

Sim. Duas linhas antigas foram substituídas por novas versões.

No git diff, as linhas removidas são identificadas com - e as linhas adicionadas com +.

4. Por que o git diff é útil antes do commit?

O git diff é útil porque permite visualizar exatamente quais alterações foram feitas no projeto antes de criar um commit. Dessa forma, é possível revisar o código, identificar erros e garantir que somente as modificações desejadas sejam registradas.

Desafio 2 — Conventional Commits
Alteração	Tipo	Commit
Adiciona recuperação de senha	feat	feat: adiciona recuperação de senha
Corrige erro no login	fix	fix: corrige erro no login
Atualiza README	docs	docs: atualiza README
Reorganiza autenticação	refactor	refactor: reorganiza autenticação
Adiciona foto de perfil	feat	feat: adiciona foto de perfil
Corrige validação de e-mail	fix	fix: corrige validação de e-mail
Explicação
feat: utilizado para adicionar uma nova funcionalidade.
fix: utilizado para corrigir um problema ou erro.
docs: utilizado para alterações na documentação.
refactor: utilizado para reorganizar ou melhorar o código sem mudar sua funcionalidade principal.
Desafio Final — Release
1. Classificação dos commits
Features
feat: adiciona recuperação de senha
feat: adiciona foto de perfil
Correções
fix: corrige validação de e-mail
fix: corrige botão de login
Melhorias internas
refactor: reorganiza autenticação
Documentação
docs: adiciona instruções de instalação
2. Determine a próxima versão

De acordo com o enunciado do exercício, a próxima versão seria:

v1.3.0
3. Explique por que ela é PATCH, MINOR ou MAJOR

A versão 1.3.0 representa uma atualização MINOR, porque foram adicionadas novas funcionalidades ao sistema, como recuperação de senha e foto de perfil.

No versionamento semântico:

MAJOR.MINOR.PATCH

Nesse caso:

1.2.0 → 1.3.0

O número MINOR aumentou de 2 para 3.

4. Atualização do CHANGELOG

O CHANGELOG.md deve registrar as alterações da nova versão da seguinte forma:

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
5. Criação da tag correspondente

O comando indicado para criar uma tag anotada é:

git tag -a v1.3.0 -m "Release versão 1.3.0"

Porém, no repositório utilizado na aula, a tag v1.3.0 já havia sido criada anteriormente pelo professor. Por isso, ela não foi sobrescrita.

Para marcar o estado posterior do meu trabalho, foi criada e publicada a tag:

v1.4.0

com os comandos:

git tag -a v1.4.0 -m "Release versão 1.4.0"
git push origin v1.4.0
6. Mostrar as diferenças entre versões

O comando utilizado foi:

git diff v1.3.0 v1.4.0

Esse comando permite comparar duas versões do projeto e visualizar as alterações realizadas entre elas.

Também foi utilizado:

git show v1.4.0

para visualizar as informações da tag criada.

Perguntas finais
Por que a nova versão não deve ser 1.2.1?

A versão 1.2.1 representaria uma atualização do tipo PATCH, normalmente utilizada para correções e ajustes compatíveis.

Neste caso, existem novas funcionalidades, como recuperação de senha e foto de perfil. Por isso, a atualização deve ser do tipo MINOR, e não PATCH.

Por que também não deve ser 2.0.0?

A versão 2.0.0 seria utilizada quando houvesse uma alteração MAJOR, ou seja, uma mudança incompatível com a versão anterior.

Como o exercício não apresenta nenhuma alteração que quebre a compatibilidade do sistema, não é necessário aumentar o número MAJOR.

Conclusão

O uso conjunto de git diff, Conventional Commits, tags, versionamento semântico e CHANGELOG.md permite acompanhar a evolução do projeto de forma organizada. O histórico fica mais fácil de entender e cada versão pode ser identificada e comparada com versões anteriores.

Observação sobre a execução prática: o repositório utilizado na aula já possuía a tag v1.3.0 criada pelo professor. Por isso, essa tag foi preservada e a versão posterior do meu trabalho foi marcada como v1.4.0.
