import React, { createContext, useState } from "react"

export const CalcContext = createContext()

export const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    calc: "",
    number: "",
    response: "",
    previous: "",
    lastOperation: "",
  })

  const providerValue = {
    calc,
    setCalc,
  }

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  )
}
