import React, { useState, useRef } from 'react'
import NumberIncrement from './NumberIncrement'

let idCounter = 1

const NumberDisplay = ({ number }) => {
  const id = useRef(idCounter++) // to ensure we don't remount a different instance
  const [num, setNum] = useState(0)
  const increment = () => {
    setNum(num + 1)
  }

  return (
    <div>
      <div data-testid="number-display">props: {number}</div>
      <div data-testid="instance-id">ref: {id.current}</div>
      <div data-testid="state-num">state: {num}</div>
      <NumberIncrement increment={increment} />
    </div>
  )
}

export default NumberDisplay
