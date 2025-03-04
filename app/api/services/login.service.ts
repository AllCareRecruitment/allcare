import { NextResponse } from 'next/server'
import { getUserByEmail } from '@/app/api/services/user.service'

export async function login(email: string) {
    if (!email) {
        return NextResponse.json(
            { error: 'Email is required' },
            { status: 400 }
        )
    }

    const user = await getUserByEmail(email)
    if (!user) {
        return NextResponse.json(
            { error: 'User not found' },
            { status: 404 }
        )
    }

    return NextResponse.json({ user }, { status: 200 })
}
