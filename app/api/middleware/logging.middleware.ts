import { Middleware } from '@/middleware'
import { NextResponse } from 'next/server'

export const loggingMiddleware: Middleware = () => {
    return NextResponse.next()
}
