import React, { useEffect, useState } from "react"
import { Current, Previous } from "../style"
import axios from "axios"

export const HistoryData = () => {
  const [calcs, setCalcs] = useState([])

  useEffect(() => {
    const fetchCalcs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getCalcs")
        setCalcs(response.data)
      } catch (error) {
        console.error("Erro ao buscar os cálculos:", error)
      }
    }

    fetchCalcs()
  }, [])
  return (
    <>
      {calcs.map((calc) => (
        <div key={calc.id}>
          <Previous>{calc.operation} = </Previous>
          <Current>{calc.result}</Current>
        </div>
      ))}
    </>
  )
}
