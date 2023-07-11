//@ts-check
const Sequelize = require("sequelize");
const config = require("./config").development;

console.log("Tentando conectar ao:", config.host);
const sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão estabelecida com sucesso em", config.host);
  })
  .catch((error) => {
    console.error("Erro na conexão:", error);
  });

module.exports = sequelize;
