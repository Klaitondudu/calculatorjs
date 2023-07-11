const dados = require("../models/dados");
/**
 * @param {string} data
 * @returns
 */
async function sendResult(data) {
  try {
    const dataSend = {
      operation: data.operation,
      result: data.result,
    };
    return await dados.create(dataSend);
  } catch (error) {
    console.error("Erro na busca de usuários:", error);
    throw error;
  }
}

module.exports = { sendResult };
