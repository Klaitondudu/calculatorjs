//@ts-check

/**
 * @param {calc} calc - O objeto contendo o estado atual da calculadora.
 * @param {function} setCalc - Função para atualizar o estado da calculadora.
 * @returns {void}
 * @typedef {Object} calc - O objeto que contém o estado da calculadora.
 * @property {string} number - O número atual.
 * @property {string} previous - O valor anterior.
 * @property {string} calc - O cálculo atual.
 */
export const pressNumber = (calc, setCalc, text) => {
  if (text === "Voltar") return
  const numberString = text.toString()
  let numberValue
  if (numberString === "0" && calc.number === "0") {
    numberValue = "0"
  } else {
    numberValue =
      calc.number === "0" ? numberString : calc.number + numberString
  }
  setCalc({
    ...calc,
    number: numberValue,
  })
}
