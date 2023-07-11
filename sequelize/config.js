const conf = require("../config.json");

/**
 * @typedef {Object} Config
 * @property {Object} development - Configurações para ambiente de desenvolvimento.
 * @property {boolean} development.logging - Ativa ou desativa o log.
 * @property {string} development.host - Endereço do servidor do banco de dados.
 * @property {string} development.username - Nome de usuário para autenticação no banco de dados.
 * @property {string} development.password - Senha para autenticação no banco de dados.
 * @property {string} development.database - Nome do banco de dados.
 * @property {string} development.dialect - Dialeto do banco de dados.
 * @property {number} development.operatorAliases - Define se operadores de string devem ser tratados como operadores de sequência.
 * @property {Object} development.define - Opções para definição de modelos.
 * @property {boolean} development.define.timestamps - Define se devem ser adicionadas colunas `createdAt` e `updatedAt` automaticamente aos modelos.
 * @property {boolean} development.define.underscored - Define se os nomes de coluna do banco de dados devem ser escritos em snake_case.
 * @property {boolean} development.define.underscoredAll - Define se os nomes de atributos de modelo devem ser escritos em snake_case.
 * @property {string} development.define.charset - Define o conjunto de caracteres usado para o banco de dados.
 * @property {number} listPerPage - Número de itens por página.
 */

/** @type {Config} */
const config = {
  development: {
    logging: false,
    host: conf.DB.IP.value || "localhost\\SQLEXPRESS",
    port: conf.DB.PORT.value || "1433",
    username: conf.DB.USER.value || "sa",
    password: conf.DB.PASSWORD.value || "admin",
    database: conf.DB.DATABASE.value || "calculadora",
    dialect: "mssql",
    operatorAliases: 0,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      charset: "utf8mb4",
    },
  },
  listPerPage: 10,
};

module.exports = config;
