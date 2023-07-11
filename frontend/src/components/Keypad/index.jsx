import React from "react"
import { Button } from "./ButtonKeyPad"
import { KeypadCalc } from "./style"
import { btnValues } from "./Keys"

export const Keypad = () => {
  return (
    <KeypadCalc>
      {btnValues.flat().map((btn, i) => (
        <Button text={btn} key={i} />
      ))}
    </KeypadCalc>
  )
}
