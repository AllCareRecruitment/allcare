import { NextRequest, NextResponse } from 'next/server'
import { authMiddleware } from '@/app/api/middleware/auth.middleware'
import { loggingMiddleware } from '@/app/api/middleware/logging.middleware'

export type Middleware = (request: NextRequest) => NextResponse | void | Promise<NextResponse | void>;

function composeMiddleware(middlewares: Middleware[]) {
    return async (request: NextRequest) => {
        for (const middleware of middlewares) {
            const result = await middleware(request)
            if (result instanceof NextResponse) {
                return result
            }
        }

        return NextResponse.next()
    }
}

export const middleware = composeMiddleware([authMiddleware, loggingMiddleware])

export const config = {
    matcher: ['/api/user/:path*', '/api/users/:path*'],
}
