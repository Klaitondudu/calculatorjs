const getButtonBackground = (text, theme) => {
  switch (text) {
    case "0":
      return { gridColumn: "1/3" }
    case "=":
      return { background: theme.colors.green }
    case "Voltar":
      return {
        fontSize: theme.fonts.size.backButton,
        fontWeight: theme.fonts.weight.normal,
        fontFamily: theme.fonts.secondary,
        height: "2.813rem",
      }
    case "X":
    case "÷":
    case "-":
    case "+":
      return { background: theme.colors.red }
    case "AC":
    case "+/-":
    case "%":
      return { background: theme.colors.secundary }
    default:
      return {
        background: theme.colors.blueForce,
      }
  }
}

export default getButtonBackground
