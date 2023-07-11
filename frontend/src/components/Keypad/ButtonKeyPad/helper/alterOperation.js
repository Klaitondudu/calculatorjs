//@ts-check
/**
 * @param {calc} calc - O objeto contendo o estado atual da calculadora.
 * @param {function} setCalc - Função para atualizar o estado da calculadora.
 * @typedef {Object} calc - O objeto que contém o estado da calculadora.
 * @property {string} number - O número atual.
 * @property {string} previous - O valor anterior.
 * @property {string} calc - O cálculo atual.
 */
export const alterOperation = (calc, setCalc) => {
  if (!calc.number) return
  setCalc({
    number: calc.number.includes("-")
      ? calc.number.replace("-", "")
      : "-" + calc.number,
    previous: calc.previous,
  })
}
