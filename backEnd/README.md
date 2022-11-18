## Detalhamento projeto back end Nodejs.

A ideia deste serviço e consumir uma api externa de usuários , tratar este dados e fornecer e um end point as informações tratadas e necessárias pra o cliente consumir. 

Neste projeto utilizo o express pra me auxiliar na criação do servidor;

Utilizo o axios pra realizar minha requisição externa.

Uso o nodemon e sucrase como dependência de desenvolvimento , para facilitar a reinicialização automática do servidor apos qualquer alteração .

Na minha estrutura de pasta bem simples , busco separar a responsabilidade de cada função e deixar disponível pra qualquer lugar da minha aplicação , utilizando o principio de responsabilidade única pra cada função e ao mesmo tempo funções reutilizáveis.

Na pasta controller e onde pego os valores da requisição e passo as devidas funções realizar sua tarefas ,e apos a logica retorno a resposta para o cliente , os seja lidar com request e response e chamar o service.

Na pasta service , a ideia e onde posso fazer minhas logica necessaria pra tratar os dados e retornar pra controller.

Na pasta utils , disponibiliza as funções necessarias pra minha aplicação e deixar cada função com responsabilidade única e reutilizável .

Na pasta router crio os end points da aplicação e chamo a controller de acordo com o método HTTP utilizado.

E no arquivo index.js e onde inicio minha api e posso realizar algumas configurações de disponibilizar as rotas disponível da pasta router.

## Estrutura INSPIRADA em alguns princípios SOLID, KISS , DRY . 

## ROTA disponivel 
# GET --> http://localhost:3002/users

## Api Externa traz no mínimo 10 usuários .
