import React from 'react'

const NumberIncrement = ({ increment }) => {
  return (
    <div>
      <button data-testid="increment-btn" onClick={increment}>
        Increment
      </button>
    </div>
  )
}

export default NumberIncrement
