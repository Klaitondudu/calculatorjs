const { calculatorManager } = require("../src/operation/CalculatorManager");
const { sendResult } = require("../sequelize/operations/sendResult");

async function calculatorRoute(req, res) {
  try {
    console.log(`Received ${req.body?.calc}`);
    const calc = calculatorManager(req?.body);
    const formattedResult = calc.result.toString().replace(".", ",");
    await sendResult({ operation: req.body?.calc, result: calc.result });
    res.json({ result: formattedResult });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = calculatorRoute;
