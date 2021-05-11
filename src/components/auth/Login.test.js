import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import { AuthProvider } from './AuthProvider'
import Login from './Login'
import { ProtectedRoute } from '../../Routes'

it('should enter username', () => {
  render(<Login />)

  fireEvent.change(screen.getByTestId('username'), { target: { value: 'demo' } })

  expect(screen.getByTestId('username').getAttribute('value')).toBe('demo')
})

it('should redirect to protected page when username and password is correct', async () => {
  render(
    <AuthProvider>
      <MemoryRouter initialEntries={[{ pathname: '/login' }]} initialIndex={0}>
        <ProtectedRoute path="/protected" component={() => <div>Protected Page</div>} />
        <Route path="/login" component={Login} />
      </MemoryRouter>
    </AuthProvider>,
  )

  fireEvent.change(screen.getByTestId('username'), { target: { value: 'demo' } })
  expect(screen.getByTestId('username').getAttribute('value')).toBe('demo')

  fireEvent.change(screen.getByTestId('password'), { target: { value: 'demo' } })
  expect(screen.getByTestId('password').getAttribute('value')).toBe('demo')

  fireEvent.click(screen.getByTestId('login-btn'))
  await waitForElementToBeRemoved(() => screen.getByTestId('login-form'), { timeout: 2000 })
  expect(await screen.findByText('Protected Page')).toBeInTheDocument()
})

it('should not redirect to protected page when username and password is not correct', async () => {
  render(
    <AuthProvider>
      <MemoryRouter initialEntries={[{ pathname: '/login' }]} initialIndex={0}>
        <ProtectedRoute path="/protected" component={() => <div>Protected Page</div>} />
        <Route path="/login" component={Login} />
      </MemoryRouter>
    </AuthProvider>,
  )

  fireEvent.change(screen.getByTestId('username'), { target: { value: 'wrong-user' } })
  expect(screen.getByTestId('username').getAttribute('value')).toBe('wrong-user')

  fireEvent.change(screen.getByTestId('password'), { target: { value: 'wrong-user' } })
  expect(screen.getByTestId('password').getAttribute('value')).toBe('wrong-user')

  fireEvent.click(screen.getByTestId('login-btn'))
  await expect(screen.findByText('Protected Page')).rejects.toThrow()
})
