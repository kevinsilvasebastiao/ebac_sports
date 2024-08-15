// delay-middleware.mjs
export default function delayMiddleware(req, res, next) {
  setTimeout(() => {
    next()
  }, 1000) // 1000ms = 1 segundo
}
