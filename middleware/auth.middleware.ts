import { NextResponse } from 'next/server'
import { Middleware } from '@/middleware'

export const authMiddleware: Middleware = (request) => {
    if (!request.headers.get('authorization')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
}
