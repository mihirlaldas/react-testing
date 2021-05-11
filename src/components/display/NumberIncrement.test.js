import { fireEvent, render, screen } from '@testing-library/react'
import NumberIncrement from './NumberIncrement'
it('should increment number on button click', () => {
  const incrementFn = jest.fn()
  render(<NumberIncrement increment={incrementFn} />)

  const incrementBtn = screen.getByTestId('increment-btn')
  fireEvent.click(incrementBtn)

  expect(incrementFn).toBeCalledTimes(1)
})
