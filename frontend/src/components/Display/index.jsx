import React, { useContext, useState } from "react"
import { CalcContext } from "../../context/CalcContext"
import { DisplayCont, Current, Previous, HeaderCalc, Screen } from "./style"
import { useTheme } from "styled-components"
import { Keypad } from "../Keypad"
import { Button } from "../Keypad/ButtonKeyPad"
import { HistoryData } from "./HistoryData/historyData"

export const Display = () => {
  const [display, setDisplay] = useState("13.12rem")
  const [showKeypad, setShowKeypad] = useState(false)

  const showHistory = () => {
    setDisplay(display === "13.12rem" ? "44.688rem" : "13.12rem")
    setShowKeypad(display === "13.12rem" ? true : false)
  }
  const closeHistoryFromBack = () => {
    if (display === "13.12rem") return
    showHistory()
  }

  const theme = useTheme()
  const { calc } = useContext(CalcContext)
  return (
    <>
      <HeaderCalc>
        <span style={{ fontWeight: "bold" }}>Calculadora</span>
        <button
          style={{
            color: "#fff",
            fontSize: `${theme.fonts.size.header}`,
            cursor: "pointer",
            paddingRight: ".5rem",
          }}
          onClick={showHistory}
        >
          Histórico
        </button>
      </HeaderCalc>
      <DisplayCont height={display}>
        <Screen>
          {showKeypad ? (
            <>
              <HistoryData />
            </>
          ) : null}
          {!showKeypad ? (
            <>
              <Previous>{calc.previous}</Previous>
              <Current>
                {calc.response ? calc.response : calc.number ? calc.number : 0}
              </Current>
            </>
          ) : null}
        </Screen>
      </DisplayCont>
      {!showKeypad && <Keypad />}
      <Button
        text="Voltar"
        style={{ width: "100%", marginTop: "1.563rem" }}
        onClick={closeHistoryFromBack}
      />
    </>
  )
}
