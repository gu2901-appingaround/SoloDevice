# Prompt Mestre do Projeto

Contexto rapido:
- Nome do projeto: **meusuperproject1010101**
- Especialidade: **Projeto front-only com deploy em Vercel**
- Stack alvo: **Front: React + TypeScript | Back: nao aplicavel | Banco: sem base de dados | Auth: simple**
- Publico-alvo: **time tecnico do produto**
- Objetivo do MVP: **10 fotos de pistas de corrida scrolando na tela**
- Escopo: **front-only**
- Banco de dados: **sem banco**
- Tipo de banco: **sem banco**
- Provedor de banco: **nao aplicavel**
- Stack frontend: **React + TypeScript**
- Stack backend: **nao aplicavel**
- Deploy alvo: **Vercel**
- Nivel de autenticacao: **simple**
- Git automatico no scaffold: **sim**

Diretrizes obrigatorias:
1. TypeScript estrito, sem any.
2. Logica de negocio em src/modules/*
3. UI em src/core/ui e composicao em src/app
4. APIs com envelope { data, error }
5. Em falha de API, usar error, details e requestId
6. Evitar texto hardcoded em page; centralizar em src/core/copy
7. O projeto deve seguir o modo de arquitetura solicitado (front-only, back-only ou fullstack).
8. O deploy deve seguir o provedor definido no formulario.
9. A autenticacao deve respeitar o nivel definido no formulario.
10. O projeto deve usar Git desde o inicio, com historico claro e organizado.

Entregaveis obrigatorios:
- Estruturar o projeto com os modulos essenciais para Projeto front-only com deploy em Vercel.
- Entregar primeiro fluxo funcional do MVP: 10 fotos de pistas de corrida scrolando na tela.
- Criar README com setup local, comandos de qualidade (lint/typecheck/test) e fluxo Git.
- No caso de Git remoto configurado, realizar commits frequentes e pushes para a branch principal conforme o progresso.
- O GitHub CLI (gh) ja esta autenticado com o token [REDACTED].

Checklist Git:
- Garantir repositorio Git local criado e configurado.
- Garantir a existencia das branches main e test.
- Garantir commit inicial automatico criado.
- Criar o repositorio remoto executando: gh repo create ${blueprint.projectName} --public --source=. --description="${blueprint.objective}" --remote=origin --push.
- Configurar origin.
- Executar push da branch principal para o remoto.

Primeiro prompt para iniciar (copiar e colar):
"Voce esta iniciando este projeto do zero. Aplique o escopo front-only, objetivo "10 fotos de pistas de corrida scrolando na tela", deploy em Vercel e autenticacao simple. Stack obrigatoria: front = React + TypeScript. Nao usar base de dados neste primeiro ciclo. Diretrizes de Qualidade: TypeScript estrito, arquitetura modular em src/modules, UI em src/core/ui, copia centralizada em src/core/copy, e padrao de API { data, error } com requestId em erros. Protocolo Git: O Git local ja foi inicializado com branches main/test e commit inicial. O GitHub CLI (gh) ja esta autenticado, entao sua primeira acao deve ser criar o repositorio remoto (gh repo create SoloDevice --public --source=. --description="..." --remote=origin --push) de forma automatica. PRIMEIRO PASSO OBRIGATORIO: Antes de qualquer acao de codigo, execute no terminal 'npm install' para garantir que o 'next', 'npm', 'gh' e 'git' estejam disponiveis e configurados no ambiente. Instrucao de Contexto: Leia os arquivos em .ai/context/ e .ai/agents/ para entender as regras do projeto antes de gerar codigo. PROVA DE SUCESSO: Apos configurar o projeto e o Git, sua acao final deve ser garantir que o projeto esteja rodando em http://localhost:3000 com uma pagina Hello World funcional. Entregue primeiro um plano curto em 5 passos e em seguida crie os arquivos iniciais necessarios para o MVP."

Formato de resposta esperado:
- Descrever abordagem em 2-4 frases
- Fornecer codigo completo necessario
- Para alteracoes em arquivos existentes, mostrar trechos relevantes e caminho final
