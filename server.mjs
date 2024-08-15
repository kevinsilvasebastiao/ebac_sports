import jsonServer from 'json-server'
import delayMiddleware from './delay-middleware.mjs'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Apply default middlewares and the custom delay middleware
server.use(middlewares)
server.use(delayMiddleware) // Use the delay middleware
server.use(router)

const port = 4000
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`)
})
