import React from "react"
import { useTheme } from "styled-components"
import { ButtonCalc } from "./style"
import { CalcContext } from "../../../context/CalcContext"
import getButtonBackground from "./helper/getButtonBackground"
import { useContext } from "react"
import {
  addOperation,
  alterOperation,
  decimalNumber,
  percentOperation,
  pressNumber,
  resetScreen,
  sendResult,
} from "./helper"

export const Button = ({ text, style, onClick }) => {
  const { calc, setCalc } = useContext(CalcContext)
  const theme = useTheme()

  const verifyOperation = () => {
    const results = {
      ",": () => decimalNumber(calc, setCalc, text),
      "+": () => addOperation(calc, setCalc, text),
      X: () => addOperation(calc, setCalc, text),
      "-": () => addOperation(calc, setCalc, text),
      "÷": () => addOperation(calc, setCalc, text),
      "%": () => percentOperation(calc, setCalc, text),
      AC: () => resetScreen(setCalc),
      "=": () => sendResult(calc, setCalc),
      "+/-": () => alterOperation(calc, setCalc),
    }
    if (results[text]) {
      return results[text]()
    }
    return pressNumber(calc, setCalc, text)
  }

  const { background, gridColumn, fontSize, fontWeight, fontFamily, height } =
    getButtonBackground(text, theme)

  return (
    <ButtonCalc
      background={background}
      gridColumn={gridColumn}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      height={height}
      style={style}
      onClick={onClick ?? verifyOperation}
    >
      {text}
    </ButtonCalc>
  )
}
