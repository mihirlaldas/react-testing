import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const setupMSW = () => {
  if (process.env.NODE_ENV === 'development') {
    navigator.serviceWorker.register('./mockServiceWorker.js')
    const worker = setupWorker(...handlers)
    worker.start()
  }
}
