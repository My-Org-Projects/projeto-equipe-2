# Projeto de autenticação e perfis de usuário 
# Grupo CODEBUILDERS

O objetivo do projeto é de construir uma aplicação que realize controle de autenticação do usuário 
O principal objetivo do projeto foi a sua construção aplicando conceitos de clean Arq
## Download do projeto
Você pode baixar o arquivo compiliado zip [aqui](https://github.com/My-Org-Projects/projeto-equipe-2/releases/download/v1.0.0/projetoequipe2.zip).

## Tecnologias/Frameworks utilizadas
- Node JS
- React
- NextJs
- TypeScript
- Tailwind css
- Gerenciador de pacotes Yarn 
```sh
 **npm install -g yarn**
```
- MonoRepo
- Prisma ORM
- SLight (Banco de dados)

## Dependencias do projeto?

### BackEnd
-jsonWebToken
Controle token de autenticacação e sessão
- bcrypt
Criptografia de senha
- MaileSender
  Envio de e-mails
   
### FrontEnd
- tabler (Biblioteca para ícones)
- shadon (Utilizado no componente da bandeira para o campo de telefone do cadastro
###Core
- uuid

##  Como executar o projeto
Para executar o projeto é necessario

### BackEnd
- rodando na porta 4000
- ajustar o .env.sample
  JWT_SECRET 
  Chave para o segredo do JWT
  MAIL_SENDER_API_KEY
  Chave gerada na API MAilSender (COloquei a minha chave temporaria para facilitar)
  
### Front End
- Rodando na porta 3000
- Ajustar o arquivo .env.sample com o caminho do backend
  
## Executando o projeto 
Siga os passos a seguir no prompt para rodar o projeto no visual studio                                                                                     
###Instalar as dependencias

```sh
yarn install
```
## Rodar o build o projeto

```sh
yarn build
```
## Executar Yarn Run DEV
```sh
yarn build
```

## Rodar o projeto através da pasta DIST

- Descompacte a pasta _projetoequipe2.zip_ na pasta desejada
- Abra o terminal
- acesse a pasta _projetoequipe2_
# Instale as dependencias
- rode o ```shyarn build``` dentro da pasta frontend core e backend
- rode ```shyarn add dotenv ``` na pasta backend
- rode ```sh prisma generate``` na pasta backend
  
# Inicalize o backend
```sh
yarn dist/main
```  
# Inicalize o frontend
```sh
yarn start
```

# login para testar 
_**leonardo@coder.com.br Senha #1234**_ ou se cadastre na plataforma
O envio de e-mail para a recuperação está funcionando

## TODO
Ainda faltam alguns itens para finalizar os reuisito. Mas gostaríamos principalmente que fossem avaliados em conjunto com o ue entragamos a estrutura do projeto baseado na arquitetura
- No projeto não foi feito ainda a parte dos perfis e demais funcionalidades
- os tratamentos de erros e obrigatoriedades
- testes
- Enriquecer os Objetos de valores  com as validações (Exemplo tamanho do nome do cliente, Formatação da data, etc..
- Transforar a string Senha em Objeto de valor
- autenticação de dois fatores
- autenticação com o Google

  
