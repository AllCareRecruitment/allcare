import { NextRequest, NextResponse } from 'next/server'
import { login } from '@/app/api/services/login.service'

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        return await login(body.email)
    } catch (errors) {
        return NextResponse.json(
            { error: 'Failed to fetch users', errors },
            { status: 500 }
        )
    }
}
