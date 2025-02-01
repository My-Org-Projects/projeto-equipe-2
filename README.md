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

## Como executar o projeto
Para executar o projeto é necessario

### BackEnd
- rodando na porta 4000
- ajustar o .env.sample
- JWT_SECRET 
  Chave para o segredo do JWT
- MAIL_SENDER_API_KEY
  Chave gerada na API MailSender
  
### Front End
- Rodando na porta 3000
- Ajustar o arquivo .env.sample com o caminho do backend
  
### Executando o projeto através do Projeto completo baixado do GitHub
Siga os passos abaixo para executar o projeto baixado do GitHub                                                                                  
#### Instalar as dependencias

```sh
yarn install
```
#### Rodar o build o projeto

```sh
yarn build
```
#### Executar em modo de desenvolvimento
```sh
yarn run dev
```

## Executar o projeto em produção (Download do .zip)

- Descompacte a pasta _projetoequipe2.zip_ na pasta desejada
- Abra o terminal
- acesse a pasta _projetoequipe2_
  
# Instale as dependencias
- **Front End**
  Através do terminal, execute os comandos abaixo na pasta frontend através do 
  -- Para construir o projeto
  ```sh
      yarn build
  ```
  -- Executar o FrontEnd da aplicação
  ```sh
    yarn start
  ```
- **Backend**
  Através do terminal, execute os comandos abaixo acessando a pasta backend
  -- Instale a biblioteca para carregar as variáveis de ambiente do .env
   ``` sh
     yarn add dotenv
   ```
  -- Gerando os arquivos TypeScript e Java script para interação com banco de dados através do PRISMA
  ```sh
     prisma generate
  ```
  -- Executar o backend da aplicação
  ```sh
    yarn dist/main
  ```  
# Login para testar a aplicação
_**leonardo@coder.com.br Senha #1234**_ ou se cadastre na plataforma

PS: O envio de e-mail para a recuperação está funcionando mas precisa que seja informado uma chave do MAILER SEND

## TODO
Ainda faltam alguns itens para finalizar os reuisito. Mas gostaríamos principalmente que fossem avaliados em conjunto com o ue entragamos a arquitetura do projeto
- Edição do cadastro do usuário (Edição do nome)
- No projeto não foi feito a parte dos perfis e demais funcionalidades
- Permissões
- Autenticação e permissõe avançadas
- Auditoria e relatórios
- Forms
  --Tratamentos dos erros retornados pelo BackEnd
  --Obrigatoriedades no preenchimento dos campos
- Testes
- Enriquecer os Objetos de valores com as validações (Exemplo tamanho do nome do cliente, Formatação da data, etc..
- Transformar a propriedade senha (String) em Objeto de valor
- autenticação de dois fatores
- autenticação com o Google

  
