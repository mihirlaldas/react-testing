import { render, screen, fireEvent } from '@testing-library/react'
import NumberDisplay from './NumberDisplay'
import NumberIncrement from './NumberIncrement'

test('calling render with the same component on the same container does not remount', () => {
  const { rerender } = render(<NumberDisplay number={1} />)
  expect(screen.getByTestId('number-display')).toHaveTextContent('1')

  // re-render the same component with different props
  rerender(<NumberDisplay number={2} />)
  expect(screen.getByTestId('number-display')).toHaveTextContent('2')

  expect(screen.getByTestId('instance-id')).toHaveTextContent('1')
})

it('should increment state number on button click', () => {
  const incrementFn = jest.fn()
  render(
    <NumberDisplay>
      <NumberIncrement increment={incrementFn} />
    </NumberDisplay>,
  )

  const incrementBtn = screen.getByTestId('increment-btn')
  fireEvent.click(incrementBtn)

  expect(screen.getByTestId('state-num')).toHaveTextContent('1')
})
