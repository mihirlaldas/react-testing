import { rest } from 'msw'
import { users } from './data'
export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(ctx.delay('real'), ctx.json(users[0]))
  }),
]
