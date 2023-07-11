function calculatorManager(operation) {
  const operators = {
    X: (x, y) => x * y,
    "÷": (x, y) => x / y,
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
  };

  let operatorFound;
  for (const operator in operators) {
    if (operation.previous.includes(operator)) {
      operatorFound = operator;
      break;
    }
  }

  if (!operatorFound) {
    throw new Error("Invalid operator");
  }

  let number1 = parseFloat(operation.previous.replace(",", "."));
  let number2 = parseFloat(operation.current.replace(",", "."));

  if (isNaN(number1) || isNaN(number2)) {
    throw new Error("Invalid numbers");
  }

  let previousOperation = operation.previous.trim();

  if (previousOperation.endsWith("-")) {
    previousOperation = previousOperation.slice(0, -1);
  }

  let expression = operation.calc;

  if (expression.endsWith("%")) {
    number2 = (operation.current * operation.current) / 100;
  }

  let result;
  switch (operatorFound) {
    case "÷":
      result = number1 / number2;
      break;
    case "X":
      result = number1 * number2;
      break;
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    default:
      return;
  }

  console.log("response", result);

  return {
    calc: operation.calc,
    previous: previousOperation,
    number: operation.number,
    result: result.toString(),
  };
}

module.exports = { calculatorManager };
