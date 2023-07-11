const dados = require("../models/dados");

async function getResults() {
  try {
    const results = await dados.findAll({
      limit: 15,
      order: [["id", "DESC"]],
    });
    return results.reverse();
  } catch (error) {
    console.error("Erro na busca de usuários:", error);
    throw error;
  }
}

module.exports = { getResults };
