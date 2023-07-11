//@ts-check

/**
 * @param {calc} calc - O objeto contendo o estado atual da calculadora.
 * @param {function} setCalc - Função para atualizar o estado da calculadora.
 * @param {function} text - texto recebido do Button.
 * @typedef {Object} calc - O objeto que contém o estado da calculadora.
 * @property {string} number - O número atual.
 * @property {string} previous - O valor anterior.
 * @property {string} calc - O cálculo atual.
 */
export const decimalNumber = (calc, setCalc, text) => {
  if (!calc.number) return
  setCalc({
    ...calc,
    number: !calc.number.includes(",") ? calc.number + text : calc.number,
  })
}
