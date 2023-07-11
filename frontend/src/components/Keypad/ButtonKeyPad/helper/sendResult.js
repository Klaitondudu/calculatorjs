import axios from "axios"

export const sendResult = async (calc, setCalc) => {
  if (!calc.previous) return
  await axios
    .post(`http://localhost:5000/calculator`, {
      calc: calc.previous + calc.number,
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
