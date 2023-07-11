//@ts-check
import axios from "axios"
/**
 * @param {calc} calc - O objeto contendo o estado atual da calculadora.
 * @param {function} setCalc - Função para atualizar o estado da calculadora.
 * @param {function} text - texto recebido do Button.
 * @returns {Promise<void>}
 * @typedef {Object} calc - O objeto que contém o estado da calculadora.
 * @property {string} number - O número atual.
 * @property {string} previous - O valor anterior.
 * @property {string} calc - O cálculo atual.
 */
export const percentOperation = async (calc, setCalc, text) => {
  if (!calc.number) return
  const val = parseFloat(calc.number)
  const result = val === 0 ? val : val / 100

  if (calc.previous) {
    console.log(calc)
    await axios
      .post(`http://localhost:5000/calculator`, {
        calc: calc.previous + calc.number + text,
        previous: calc.previous,
        current: calc.number,
      })
      .then((res) => {
        setCalc({
          number: res.data?.result,
        })
      })
      .catch((err) => console.error(err.message))
  }
  if (!calc.previous) {
    setCalc({
      previous: calc.previous,
      number: result.toString().replace(".", ","),
    })
  }
}
