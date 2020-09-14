<h1 align="center">
  <img alt="gobarber" title="GoBarber" src=".github/logo.png" width="100px" />
</h1>

<h3 align="center">
  GoBarber Back-end
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/heliton1988/gobarber?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/heliton1988/gobarber/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/heliton1988/gostack-gobarber-node?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-ferramentas-utilizadas">Ferramentas utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#dizzy-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre

Este é back-end da aplicação desenvolvido em `Nodejs`

## :wrench: Ferramentas utilizadas

- [Nodejs](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Mongodb](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/)
- [Redis](https://redis.io/)
- [JWT](https://jwt.io/)
- [YUP](https://www.npmjs.com/package/yup)
- [Nodemon](https://nodemon.io/)
- [Sucrase](https://www.npmjs.com/package/sucrase)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## :dizzy: Funcionalidades

O usuário paderá se autenticar na aplicação sendo ele um usuário comum ou um prestador de serviço(provider).<br />
Após estar logado na aplicação, o provider pode verificar todos os seus agenamentos do dia ou uma data expecífica.<br />
Sempre que um usuário(cliente) fizer um novo agendamento, o provider será notificado, tanto pela aplicaçaão web como também atravez do seus e-mail.

O usuário(não provedor) da aplicação também pode realizar auteração em seu perfil na aplicação, como nome, email e senha, também é possível cancelar agendamentos.

## :arrow_down: Como utilizar

**Obsevações:**<br />

É necessário que tenha as seguintes ferramentas instaladas em sua maquina(computador);</br />

[nodejs](https://nodejs.org/en/) na versão 12.18.3 ou superior<br />
[docker](https://www.docker.com/get-started)


**rode o projeto**

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


