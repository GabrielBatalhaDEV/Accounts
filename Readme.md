<h1 align="center">Accounts Service API</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 
    Uma API Rest feita com express para armazenar contas do cliente
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 Sobre <a name = "Sobre"></a>

Já teve algum momento que você percebeu que havias muitas contas em diferentes sites, Essa API é feita para resolver isso, Ao invés de escrever em um caderno que pode ser perdido ou fazer algum bloco de notas que qualquer pessoa pode abrir, com esta api suas contas ficam em um banco de dados, com senhas encriptadas que só você tem acesso.


## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites

Para usar essa API vc precisará destes pacotes:

```json
  "bcryptjs": "^2.4.3",
  "class-transformer": "^0.4.0",
  "express": "^4.17.1",
  "express-async-errors": "^3.1.1",
  "express-handlebars": "^5.3.2", 
  "jsonwebtoken": "^8.5.1",
  "nodemailer": "^6.6.3",
  "nodemailer-express-handlebars": "^4.0.0",
  "pg": "^8.6.0",
  "reflect-metadata": "^0.1.10",
  "sqlite3": "^5.0.2",
  "typeorm": "0.2.34",
  "uuid": "^8.3.2"
```

### Instalação

Para instala-los podemos usar o NPM ou YARN, o npm vem junto com o node, mas se quiser usar o YARN:

```
npm install -g yarn
```

**-g** ele instalará o yarn globalmente, assim poderá usar em todos os seus projetos

Instalação dos pacotes abaixo:


```bash
yarn add express
yarn add express-async-errors
yarn add jsonwebtoken
yarn add bcryptjs
yarn add class-transformer
yarn add express-handlebars
yarn add nodemailer
yarn add nodemailer-express-handlebars
yarn add pg
yarn add reflect-metadata
yarn add typeorm
yarn add uuid
```

```bash

yarn add @types/bcryptjs -D
yarn add @types/express -D 
yarn add @types/jsonwebtoken -D 
yarn add @types/node -D 
yarn add @types/nodemailer -D 
yarn add @types/nodemailer-express-handlebars -D 
yarn add @types/uuid -D 
yarn add ts-node-dev -D 
yarn add typescript -D 

```

Crie esse script no **package.json**

```json
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
```

## 🔧 Running the tests <a name = "tests"></a>

Para Iniciar use o script:

``` -D
yarn dev
```

## ⛏️ Built Using <a name = "built_using"></a>

- [PostgresSQL](https://www.postgresql.org) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environmentt.