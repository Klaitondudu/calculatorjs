const sequelize = require("./db");
const config = require("../config.json")
async function syncDatabase() {
  try {
    await sequelize.sync({ alter: config.DB.SYNC });
    console.log("Estrutura do banco de dados sincronizada com sucesso!");
  } catch (error) {
    console.error("Erro ao sincronizar a estrutura do banco de dados:", error);
  }
}

async function start() {
  try {
    await syncDatabase();
  } catch (error) {
    console.error("Erro:", error);
  }
}

start();
