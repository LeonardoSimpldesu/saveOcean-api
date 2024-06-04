### SETUP ENVIROMENT
- Utilize 'npm i' no terminal do projeto para baixar as dependencias.
- Crie um arquivo '.env' na raiz do projeto e copie para dentro dele as variaveis que estão dentro de .env.examples
- Inicie o docker no seu computador e então coloque o seguinte código no terminal do projeto: 'docker compose up -d'. Isso irá criar um container do docker e rodar o banco localmente.
- Basta iniciar o projeto agora com: 'npm run dev'. Caso a mensagem 'HTTP Server Running!' apareça, muito provavelmente tudo está funcionando.


### Funcionalidades

## Pontuação
- [] Deve ser possível consultar a própria pontuação 
- [] Deve ser possível adquirir pontos apartir de atividades

## Ranking
- [] Deve ser possível consultar a própria posição no ranking
- [] Deve ser possível consultar os 3 melhores no ranking

## Loja
- [] Deve ser possível gastar pontos na loja para comprar peixes
- [] Deve ser possível gastar pontos na loja para ajudar ONGs

## Aquario
- [] Deve ser possível consultar seus peixes no aquario

## Conteúdo
- [] Deve ser possível consultar a lista de conteudos
- [] Deve ser possível consultar apenas o conteudo desbloqueado
- [] Deve ser possível adquirir o certificado após a conclusão do conteudo
- [] Deve ser possível adquirir os conteudos salvos no perfil
- [] Deve ser possível consultar sua porcentagem de conteudos vistos diariamente nos 3 meses

## Atividades
- [] Deve ser possível criar nova atividade (Requisitos: Prazo de entrega, tutor responsavel, descricao, titulo, solicitar certificado do aluno e pontuação recebida como recompensa)
- [] Deve ser possível consultar atividades
- [] Deve ser possível realizar atividades ao entregar o certificado solicitado pela atividade
- [] Deve ser possível adquirir pontos pelas atividades entregues
