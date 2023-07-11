/**
 * @param {function} setCalc - Função para atualizar o estado da calculadora.
 */
export const resetScreen = (setCalc) => {
  setCalc({ calc: "", number: "", res: 0 })
}
