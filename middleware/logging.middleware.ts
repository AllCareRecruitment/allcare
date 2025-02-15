import { Middleware } from '@/middleware'

export const loggingMiddleware: Middleware = (request) => {
    console.log(`Request made to: ${request.nextUrl.pathname}`)
}
