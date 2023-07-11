const { getResults } = require("../sequelize/operations/getResults");
const { formattedDataMap } = require("./helper/formattedDataMap");
async function getCalcs(req, res) {
  const data = await getResults();
  res.json(formattedDataMap(data));
}

module.exports = getCalcs;
