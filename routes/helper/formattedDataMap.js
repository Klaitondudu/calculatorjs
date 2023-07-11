function formattedDataMap(data) {
  return data.map((item) => {
    return {
      ...item,
      operation: item.operation.replace(".", ","),
      result: item.result.replace(".", ","),
    };
  });
}
module.exports = { formattedDataMap };
