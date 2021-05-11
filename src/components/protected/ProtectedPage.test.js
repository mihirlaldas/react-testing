import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ProtectedPage from './ProtectedPage'

it('should render protected page', () => {
  render(<ProtectedPage />)

  expect(screen.getByTestId('protected-page')).toBeInTheDocument()
})

it('mock API', async () => {
  render(<ProtectedPage />)

  const dataBtn = screen.getByText('get data')
  expect(dataBtn).toBeInTheDocument()
  fireEvent.click(dataBtn)
  await waitFor(() => screen.getByText(/user/i))
  expect(screen.getByText(/user/i)).toBeInTheDocument()
})
