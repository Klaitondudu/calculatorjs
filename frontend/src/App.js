import React from "react"
import { ThemeProvider } from "styled-components"
import { Calculator } from "./components/Calculator"
import light from "./styles/themes/light"
import { CalcProvider } from "./context/CalcContext"

export const App = () => {
  return (
    <>
      <ThemeProvider theme={light}>
        <CalcProvider>
          <Calculator />
        </CalcProvider>
      </ThemeProvider>
    </>
  )
}
