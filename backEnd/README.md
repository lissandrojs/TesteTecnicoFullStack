## Detalhamento projeto back end Nodejs.

A ideia deste serviço e consumir uma api externa de usuarios , tratar este dados e fornecer e um end point as informções tratadas e necessarias pra o cliente consumir. 

Neste projeto utilizo o express pra me auxilar na criação do servidor;

Ultilizo o axios pra realizar minha requisição externa.

Uso o nodemon e sucrase como dependencia de desenvolvimento , para facilitar a reinicialização automatica do servidor apos qualquer alteração .

Na minha estrutura de pasta bem simples , busco separar a responsabilidade de cada função e deixar disponivel pra qualquer lugar da minha aplicaçao , utiliando o principio de responsabilidade unica pra cada função e ao mesmo tempo funções reutilizaveis.

Na pasta controller e onde pego os valores da requisição e passo as devidas funções realizar sua tarefas  ,e apos a logica retorno a resposta para o cliente  , os seja lidar com request e response e chamar o service.

Na pasta service , a ideia e onde posso fazer minhas logica necessaria pra tratar os dados e retornar pra controller.

Na pasta utils , disponibiliza as funções necessarias pra minha aplicação e deixar cada função com responsabilidade unica e reutilizavel .

Na pasta router crio os end points da aplicação e chamo a controller de acordo com o metodo HTTP utilizado.

E no arquivo index.js e onde inicio minha api e posso realizar algumas configurações de disponibilizar as rotas disponivel da pasta router.

## Estrutura insperada em alguns principios SOLID, KISS , DRY . 

## ROTA disponivel 
# GET  -->  http://localhost:3002/users

