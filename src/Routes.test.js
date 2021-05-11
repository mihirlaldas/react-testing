import { render, screen } from '@testing-library/react'
import Routes from './Routes'
import { MemoryRouter } from 'react-router-dom'

it('should render home page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes />
    </MemoryRouter>,
  )

  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

it('should render number page', () => {
  render(
    <MemoryRouter initialEntries={['/number']}>
      <Routes />
    </MemoryRouter>,
  )

  const incrementBtn = screen.getByText(/increment/i)
  expect(incrementBtn).toBeInTheDocument()
})
