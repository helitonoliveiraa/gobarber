<h1 align="center">
  <img alt="gobarber" title="GoBarber" src=".github/logo.png" width="100px" />
</h1>

<h3 align="center">
  GoBarber Back-end
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/heliton1988/gostack-gobarber-node?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/heliton1988/gostack-gobarber-node/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/heliton1988/gostack-gobarber-node?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre

Aplicação para agendamento de serviços de beleza!

## **Ferramentas utilizadas**

- Express
- Sucrase
- Nodemon
- ESLint
- Prettier
- EditorConfig
- Sequelize + PostgreSQL
- Mongodb
- mongoose
- Redis
- JWT
- YUP

## **Funcionalidades**

O usuário paderá se autenticar na aplicação sendo ele um usuário comum ou um prestador de serviço(provider)
O usuário da aplicação também pode realizar auteração em seu cadastro na aplicação, como nome, email e senha

## Como utilizar

clone o projeto

suba um container `Postgres` para criar a base de dados
```bash
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

para lidar com o envio de e-mails, suba um container rodando `Redis`
```bash
$ docker run --name redisbarber -p 6379:6379 -d -t  redis:alpine
```

também é necessário subir um container rodando `mangoDB`
```bash
$ docker run --name mongobarber -p 27017:27017 -d -t mongo
```


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.


